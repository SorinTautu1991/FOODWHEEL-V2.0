import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../lib/create-emotion-cache';
import Head from 'next/head';
import Footer from '../components/Footer/footer';
import { AppWrapper } from '../context/context';
import ThemeWrapper from '../components/theme-wrapper/theme-wrapper';
import Header from '../components/header/header';
import { SWRConfig } from 'swr';
import axios from 'axios';
import { SessionProvider } from 'next-auth/react';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;
  const { session } = pageProps;

  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>FOODWHEEL</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <AppWrapper>
          <ThemeWrapper>
            <CssBaseline />
            <Header />
            <SWRConfig
              value={{
                fetcher: (url, queryParams) =>
                  axios
                    .get(`${url}?term=${queryParams}`)
                    .then((res) => res.data),
              }}
            >
              <Component {...pageProps} />
            </SWRConfig>
            <Footer />
          </ThemeWrapper>
        </AppWrapper>
      </CacheProvider>
    </SessionProvider>
  );
}

export default MyApp;
