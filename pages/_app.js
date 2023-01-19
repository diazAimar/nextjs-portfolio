import '../styles/globals.css';
import { theme1, theme2 } from '../styles/themes';

import Layout from '../components/shared/Layout';

import { Box, ThemeProvider, Typography } from '@mui/material';

import createEmotionCache from '../config/createEmotionCache';
import { CacheProvider } from '@emotion/react';

import { AnimatePresence } from 'framer-motion';

import { atom, useAtom } from 'jotai';
export const selectedTheme = atom(theme1);

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [selectedThemeValue, setSelectedThemeValue] = useAtom(selectedTheme);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={selectedThemeValue}>
        <AnimatePresence>
          {/* bg-[url('/pxbg.jpg')] */}
          <Box className="bg-[url('/background-2.png')] bg-cover h-[100vh] w-full">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Box>
        </AnimatePresence>
      </ThemeProvider>
    </CacheProvider>
  );
}
