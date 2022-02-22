import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import classes from '../../styles/global.module.css';

function ImageCarousel({ images }) {
  console.log(images);
  return (
    <Carousel sx={{ borderRadius: 3 }} justifyContent="center">
      {images.map((image, index) => (
        <Image
          key={`${index}-${image.recipe.label}`}
          src={image.recipe.image}
          alt={image.recipe.label}
          width={400}
          height={400}
          className={classes.myImg}
        />
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
