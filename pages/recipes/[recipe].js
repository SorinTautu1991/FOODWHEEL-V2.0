import { getRecipes, getIdForRecipe, getSpecificRecipe } from '../../utils/api';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { StyledSpan } from '../../components/styled-components/styled-components';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import classes from '../../styles/global.module.css';
import calcium from '../../public/images/calcium.png';
import carbs from '../../public/images/carbs.png';
import cholesterol from '../../public/images/cholesterol.png';
import energy from '../../public/images/energy.png';
import saturatedFat from '../../public/images/saturated_fat.png';
import fat from '../../public/images/fat.png';
import iron from '../../public/images/iron.png';
import potassium from '../../public/images/potassium.png';
import mg from '../../public/images/mg.png';
import sodium from '../../public/images/sodium.png';
import phosphorus from '../../public/images/phosphorus.png';
import protein from '../../public/images/protein.png';
import sugar from '../../public/images/sugar.png';
import b1 from '../../public/images/vitamin_b1.png';
import vitaminE from '../../public/images/vitamin_e.png';
import vitaminA from '../../public/images/vitamin_a.png';
import vitaminB6 from '../../public/images/b6.png';
import vitaminB12 from '../../public/images/vitamin_b12.png';
import vitaminC from '../../public/images/vitamin_c.png';
import vitaminD from '../../public/images/vitamin_d.png';
import vitaminK from '../../public/images/vitamin_k.png';
import water from '../../public/images/water.png';
import zinc from '../../public/images/zinc.png';
import fiber from '../../public/images/fiber.png';

function Recipe({ recipe }) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    calories,
    cautions,
    cuisineType,
    dietLabels,
    image,
    ingredients,
    label,
    mealType,
    totalTime,
    totalWeight,
    totalNutrients: {
      CA,
      CHOCDF,
      CHOLE,
      ENERC_KCAL,
      FASAT,
      FAT,
      FE,
      FIBTG,
      K,
      MG,
      NA,
      P,
      PROCNT,
      SUGAR,
      THIA,
      TOCPHA,
      VITA_RAE,
      VITB6A,
      VITB12,
      VITC,
      VITD,
      VITK1,
      WATER,
      ZN,
    },
  } = recipe.recipe;
  return (
    <Grid container justifyContent="center">
      {/* Title */}
      <Grid item container justifyContent="center" mb={5} mt={5}>
        <Typography align="center" variant="h2">
          {label}
          <StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
        </Typography>
      </Grid>

      <Grid item container direction="row">
        <Grid item xs={12} sm={6} container justifyContent="center">
          <Image
            src={image}
            alt={label}
            width={300}
            height={300}
            className={classes.myImg}
          />
        </Grid>
        <Grid item xs={12} sm={6} justifyContent="center" mt={5}>
          <Grid item>
            <Typography variant="h6" align="center">
              Prep time <StyledSpan>:</StyledSpan>
              <StyledSpan> {totalTime} minutes</StyledSpan>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center">
              Cuisine <StyledSpan>:</StyledSpan>
              <StyledSpan> {cuisineType}</StyledSpan>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center">
              Meal type <StyledSpan>:</StyledSpan>
              <StyledSpan> {mealType}</StyledSpan>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center">
              Cautions <StyledSpan>:</StyledSpan>
              <StyledSpan> {cautions}</StyledSpan>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center">
              Weight <StyledSpan>:</StyledSpan>
              <StyledSpan> {totalWeight.toFixed(2)}g</StyledSpan>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center">
              Calories <StyledSpan>:</StyledSpan>
              <StyledSpan> {calories.toFixed(2)}</StyledSpan>
            </Typography>
          </Grid>
          <Grid item>
            {dietLabels.map((d, i) => (
              <Typography key={i} variant="h6" align="center">
                <StyledSpan>{d}</StyledSpan>
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center" mt={5}>
        <Typography variant="h4" align="center">
          Ingredients
        </Typography>
      </Grid>
      <Grid item container mt={5} justifyContent="center" p={2}>
        <List
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: matchesSM ? '100vw' : '50vw',
          }}
        >
          {ingredients.map((ing, index) => {
            return (
              <ListItem
                key={`${ing.foodId}-${index}`}
                divider
                sx={{ inset: 'auto' }}
              >
                <ListItemAvatar>
                  <Image
                    src={ing.image}
                    width={80}
                    height={80}
                    alt={`${ing.food}`}
                    className={classes.myImg}
                  />
                </ListItemAvatar>
                <Divider variant="inset" />
                <ListItemText>{ing.text}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid item container justifyContent="center" mt={5}>
        <Typography variant="h4" align="center">
          Nutritional values
        </Typography>
      </Grid>
      <Grid item container mt={5} justifyContent="center" p={2}>
        <List
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: matchesSM ? '100vw' : '50vw',
          }}
        >
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={calcium}
                alt="calcium"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {CA.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {CA.quantity.toFixed(2)}
                  {CA.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={carbs}
                alt="carbs"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {CHOCDF.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {CHOCDF.quantity.toFixed(2)}
                  {CHOCDF.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={cholesterol}
                alt="cholesterol"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {CHOLE.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {CHOLE.quantity.toFixed(2)}
                  {CHOLE.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={energy}
                alt="enrgy"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {ENERC_KCAL.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {ENERC_KCAL.quantity.toFixed(2)}
                  {ENERC_KCAL.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={saturatedFat}
                alt="saturated fat"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {FASAT.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {FASAT.quantity.toFixed(2)}
                  {FASAT.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={fat}
                alt="fat"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {FAT.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {FAT.quantity.toFixed(2)}
                  {FAT.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={iron}
                alt="iron"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {FE.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {FE.quantity.toFixed(2)}
                  {FE.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={fiber}
                alt="fiber"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {FIBTG.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {FIBTG.quantity.toFixed(2)}
                  {FIBTG.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={potassium}
                alt="potassium"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {K.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {K.quantity.toFixed(2)}
                  {K.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={mg}
                alt="magnessium"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {MG.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {MG.quantity.toFixed(2)}
                  {MG.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={sodium}
                alt="sodium"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {NA.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {NA.quantity.toFixed(2)}
                  {NA.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={phosphorus}
                alt="phosphorus"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {P.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {P.quantity.toFixed(2)}
                  {P.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={protein}
                alt="protein"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {PROCNT.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {PROCNT.quantity.toFixed(2)}
                  {PROCNT.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={sugar}
                alt="sugar"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {SUGAR.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {SUGAR.quantity.toFixed(2)}
                  {SUGAR.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={b1}
                alt="b1"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {THIA.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {THIA.quantity.toFixed(2)}
                  {THIA.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={vitaminE}
                alt="vitaminE"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {TOCPHA.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {TOCPHA.quantity.toFixed(2)}
                  {TOCPHA.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={vitaminA}
                alt="vitaminA"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {VITA_RAE.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {VITA_RAE.quantity.toFixed(2)}
                  {VITA_RAE.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={vitaminB6}
                alt="vitaminB6"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {VITB6A.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {VITB6A.quantity.toFixed(2)}
                  {VITB6A.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={vitaminB12}
                alt="vitaminB12"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {VITB12.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {VITB12.quantity.toFixed(2)}
                  {VITB12.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={vitaminC}
                alt="vitaminC"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {VITC.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {VITC.quantity.toFixed(2)}
                  {VITC.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={vitaminD}
                alt="vitaminD"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {VITD.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {VITD.quantity.toFixed(2)}
                  {VITD.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={vitaminK}
                alt="vitaminK"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {VITK1.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {VITK1.quantity.toFixed(2)}
                  {VITK1.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={water}
                alt="water"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {WATER.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {WATER.quantity.toFixed(2)}
                  {WATER.unit}
                </Typography>
              }
            />
          </ListItem>
          <ListItem divider sx={{ inset: 'auto' }}>
            <ListItemAvatar>
              <Image
                src={zinc}
                alt="zinc"
                width={50}
                height={50}
                className={classes.myImg}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" align="center">
                  {ZN.label}
                </Typography>
              }
              secondary={
                <Typography variant="h6" align="center">
                  {ZN.quantity.toFixed(2)}
                  {ZN.unit}
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps({ params }) {
  const recipeId = params.recipe;
  const recipe = await getSpecificRecipe(recipeId);
  return { props: { recipe: recipe } };
}

export default Recipe;
