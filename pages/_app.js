import '../styles/globals.css';

import Layout from '../components/shared/Layout';

import { Box } from '@mui/material';

import createEmotionCache from '../config/createEmotionCache';
import { CacheProvider } from '@emotion/react';

import { AnimatePresence } from 'framer-motion';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <AnimatePresence>
        {/* bg-[url('/pxbg.jpg')] */}
        <Box className="bg-[url('/pxbg2.png')] bg-cover h-[100vh] w-full">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Box>
      </AnimatePresence>
    </CacheProvider>
  );
}
