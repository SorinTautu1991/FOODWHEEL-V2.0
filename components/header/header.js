import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import logo from '../../public/images/logo.svg';
import Image from 'next/image';
import Link from '../link/link';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import BackToTop from '../back-to-top/back-to-top';
import Fab from '@mui/material/Fab';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import { useAppContext } from '../../context/context';
import sun from '../../public/images/sun.svg';
import moon from '../../public/images/moon.svg';
import { useSession, signIn, signOut } from 'next-auth/react';

const Offset = styled('div')({});
const StyledButton = styled(Button)({
  backgroundColor: 'green',
  width: 70,
  height: 30,
  textTransform: 'none',
  color: 'yellow',
  fontWeight: 'bolder',
});

function Header() {
  const { data: session } = useSession();
  const { mode, toggleTheme } = useAppContext();
  return (
    <>
      <AppBar
        sx={{
          position: 'static',
          bottom: 0,
          background: 'rgba(179, 237, 242, 0.8)',
        }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Button
                component={Link}
                href="/"
                startIcon={
                  <Image src={logo} alt="logo" width={50} height={50} />
                }
              >
                <Typography
                  variant="h5"
                  fontWeight="bolder"
                  sx={{ textTransform: 'none' }}
                >
                  FoodWheel
                </Typography>
              </Button>
            </Grid>

            <Grid item>
              <Grid item container justifyContent="center" alignItems="center">
                {session ? (
                  <>
                    <p>Logged in as {session.user.name}</p>
                    <StyledButton
                      onClick={() => signOut()}
                      sx={{ background: 'red', textTransform: 'none' }}
                    >
                      Logout
                    </StyledButton>
                  </>
                ) : (
                  <Grid
                    item
                    sx={{ width: 143 }}
                    justifyContent="space-between"
                    container
                    direction="row"
                  >
                    <StyledButton onClick={() => signIn('google')}>
                      Login
                    </StyledButton>
                    <StyledButton>Register</StyledButton>
                  </Grid>
                )}
                <Grid item>
                  <IconButton onClick={toggleTheme} sx={{ height: 40 }}>
                    {mode === 'light' ? (
                      <Image src={sun} alt="sun" width={30} height={35} />
                    ) : (
                      <Image src={moon} alt="moon" width={30} height={35} />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="primary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
}

export default Header;
