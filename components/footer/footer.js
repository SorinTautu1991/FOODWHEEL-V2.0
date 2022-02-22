import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

function Footer() {
  return (
    <AppBar position="static" sx={{ background: 'rgba(179, 237, 242, 0.8)' }}>
      <Toolbar>
        <Grid container></Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
