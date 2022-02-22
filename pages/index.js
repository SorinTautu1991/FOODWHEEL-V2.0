import Grid from '@mui/material/Grid';
import bg from '../public/images/bg.svg';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { StyledSpan } from '../components/styled-components/styled-components';
import Stack from '@mui/material/Stack';
import Link from '../components/link/link';
import { styled } from '@mui/material/styles';
import favourites from '../public/images/favourites.svg';
import dietInfo from '../public/images/diet_info.svg';
import shoppingList from '../public/images/shopping_list.svg';
import randomRecipe from '../public/images/random.svg';
import { signIn, signOut, useSession } from 'next-auth/react';

const StyledStack = styled(Stack)({
  '&:hover': { transform: 'scaleX(1.03) scaleY(1.03)', transition: '1s ease' },
});

function Home() {
  const { data: session } = useSession();

  return (
    <Grid container mt={5} sx={{ minHeight: 500 }}>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        mb={5}
      >
        <Typography align="center" variant="h2">
          Simplify your life with our recipes<StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
        </Typography>
      </Grid>
      <Grid item container justifyContent="center" mb={5}>
        <Typography variant="h4" align="center">
          Create an account or login, in order to<StyledSpan>:</StyledSpan>
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        {session ? (
          <Grid item container justifyContent="center" gap={2} mb={5}>
            <Grid
              item
              component={Link}
              href="/recipes"
              sx={{ textDecoration: 'none' }}
            >
              <StyledStack direction="column" alignItems="center">
                <Image src={bg} alt="bg" width={200} height={200} />
                <Typography variant="h6" align="center">
                  Browse recipes<StyledSpan>...</StyledSpan>
                </Typography>
              </StyledStack>
            </Grid>
          </Grid>
        ) : (
          <Grid item container justifyContent="center" gap={2} mb={5}>
            <Grid item>
              <StyledStack direction="column" alignItems="center">
                <Image src={bg} alt="bg" width={100} height={100} />
                <Typography variant="h6" align="center">
                  Browse recipes<StyledSpan>...</StyledSpan>
                </Typography>
              </StyledStack>
            </Grid>
            <Grid item>
              <StyledStack direction="column" alignItems="center">
                <Image
                  src={favourites}
                  alt="favourites"
                  width={100}
                  height={100}
                />
                <Typography variant="h6" align="center">
                  Pick favourites<StyledSpan>...</StyledSpan>
                </Typography>
              </StyledStack>
            </Grid>
            <Grid item>
              <StyledStack direction="column" alignItems="center">
                <Image
                  src={dietInfo}
                  alt="diet info"
                  width={100}
                  height={100}
                />
                <Typography variant="h6" align="center">
                  Get nutritional values<StyledSpan>...</StyledSpan>
                </Typography>
              </StyledStack>
            </Grid>
            <Grid item>
              <StyledStack direction="column" alignItems="center">
                <Image
                  src={shoppingList}
                  alt="shopping cart"
                  width={100}
                  height={100}
                />
                <Typography variant="h6" align="center">
                  Generate shopping lists<StyledSpan>...</StyledSpan>
                </Typography>
              </StyledStack>
            </Grid>
            <Grid item>
              <StyledStack direction="column" alignItems="center">
                <Image
                  src={randomRecipe}
                  alt="random recipe"
                  width={100}
                  height={100}
                />
                <Typography variant="h6" align="center">
                  Get random recipes<StyledSpan>...</StyledSpan>
                </Typography>
              </StyledStack>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default Home;
