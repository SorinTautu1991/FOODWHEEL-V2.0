import CircularProgress from '@mui/material/CircularProgress';
import useSWR, { SWRConfig } from 'swr';
import { getRecipes } from '../utils/api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { StyledSpan } from '../components/styled-components/styled-components';
import Search from '../components/search/search';
import ImagesList from '../components/image-list/image-list';
import { useAppContext } from '../context/context';
import { getSession } from 'next-auth/react';

function Recipes({ fallback }) {
  const { queryParams } = useAppContext();
  const { data, error } = useSWR(['/api/recipes', queryParams], false);

  return (
    <SWRConfig value={{ fallback: fallback }}>
      <Grid container justifyContent="center" mt={5}>
        <Grid item container justifyContent="center">
          <Typography align="center" variant="h3">
            Recipes<StyledSpan>.</StyledSpan>
            <StyledSpan>.</StyledSpan>
            <StyledSpan>.</StyledSpan>
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" mt={5}>
          <Search />
        </Grid>
        <Grid
          item
          justifyContent="center"
          mt={5}
          sx={{ minHeight: 500 }}
          mb={10}
        >
          {data ? <ImagesList images={data} /> : <CircularProgress />}
        </Grid>
      </Grid>
    </SWRConfig>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const recipes = await getRecipes();
  return {
    props: {
      fallback: {
        ['/api/recipes']: recipes,
      },
    },
  };
}

export default Recipes;
