import React, { useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useAppContext } from '../../context/context';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { blueGrey, grey } from '@mui/material/colors';

const ThemeWrapper = ({ children }) => {
  const { mode } = useAppContext();

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: { main: '#6effff' },
            divider: blueGrey[200],
            background: {
              default: '#fffff',
              paper: '#fffff',
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: { main: '#6effff' },
            divider: blueGrey[200],
            background: {
              default: '#050505',
              paper: '#050505',
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });

  // Update the theme only if the mode changes
  let theme = useMemo(
    () =>
      createTheme({
        ...getDesignTokens(mode),
        typography: {
          fontFamily: ['Roboto', 'sans-serif'].join(','),
          subtitle1: {
            color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)',
          },
          h1: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          h2: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          h3: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          h4: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          h5: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          h6: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          p: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                overflowX: 'hidden',
                margin: 0,
              },
            },
          },
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
