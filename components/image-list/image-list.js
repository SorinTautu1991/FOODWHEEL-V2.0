import Image from 'next/image';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import classes from '../../styles/global.module.css';
import Link from '../link/link';
import { getIdForRecipe, checkIfFavourite } from '../../utils/helpers';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppContext } from '../../context/context';
import { addData, removeData } from '../../utils/firebase';

function ImagesList({ images }) {
  const { favourites, setFavourites } = useAppContext();
  let myData = [];
  if (typeof images === 'object' && images !== null) {
    Object.keys(images).forEach((o) => myData.push(images[o]));
  } else if (typeof images === 'array') {
    myData = [...images];
  }
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100vw' }} justifyContent="center">
      <ImageList
        variant="masonry"
        cols={matchesSM ? 2 : 5}
        gap={1}
        component={Container}
      >
        {myData.map((image, index) => (
          <ImageListItem key={`${index}-${image.recipe.label}`}>
            <Box
              component={Link}
              href={`/recipes/${getIdForRecipe(image.recipe.uri)}`}
            >
              <Image
                src={image.recipe.image}
                alt={image.recipe.label}
                width={220}
                height={index % 3 === 0 ? 200 : 220}
                className={classes.myImg}
              />
            </Box>

            {checkIfFavourite(getIdForRecipe(image.recipe.uri), favourites) ? (
              <FavoriteIcon
                sx={{
                  position: 'absolute',
                  right: 10,
                  top: 10,
                  '&:hover': {
                    transform: 'scaleX(1.1) scaleY(1.1)',
                    transition: '1s ease',
                    cursor: 'pointer',
                  },
                  width: 30,
                  height: 30,
                  fill: 'red',
                  zIndex: 3000,
                }}
                onClick={async () => {
                  await removeData(getIdForRecipe(image.recipe.uri));
                }}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{
                  position: 'absolute',
                  right: 10,
                  top: 10,
                  '&:hover': {
                    transform: 'scaleX(1.1) scaleY(1.1)',
                    transition: '1s ease',
                    cursor: 'pointer',
                  },
                  width: 30,
                  height: 30,
                  fill: 'red',
                  zIndex: 3000,
                }}
                onClick={async () => {
                  const status = await addData(
                    getIdForRecipe(image.recipe.uri)
                  );
                  if (status) {
                    setFavourites([
                      ...favourites,
                      { id: getIdForRecipe(image.recipe.uri) },
                    ]);
                  }
                }}
              />
            )}
            <ImageListItemBar title={image.recipe.label} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ImagesList;
