import { useState, useEffect } from 'react';

import '../styles/globals.css';
import { theme1, theme2 } from '../styles/themes';

import Layout from '../components/shared/Layout';

import { Box, ThemeProvider, Typography } from '@mui/material';

import createEmotionCache from '../config/createEmotionCache';
import { CacheProvider } from '@emotion/react';

import { AnimatePresence } from 'framer-motion';

import { atom, useAtom } from 'jotai';
import Loader from '../components/shared/Loader';
export const selectedTheme = atom(theme1);

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [selectedThemeValue, setSelectedThemeValue] = useAtom(selectedTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={selectedThemeValue}>
        <AnimatePresence>
          <Box className="bg-[url('/background-2.webp')] bg-cover ">
            {loading ? (
              <Loader />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </Box>
        </AnimatePresence>
      </ThemeProvider>
    </CacheProvider>
  );
}
