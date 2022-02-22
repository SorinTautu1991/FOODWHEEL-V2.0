import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function CustomError() {
  return (
    <Grid container justifyContent="center">
      <Typography align="center" variant="h2">
        OOPS...Something went wrong!
      </Typography>
    </Grid>
  );
}

export default CustomError;
