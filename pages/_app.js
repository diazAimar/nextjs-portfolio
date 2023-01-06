import { CacheProvider } from '@emotion/react';
import '../styles/globals.css';
import createEmotionCache from '../config/createEmotionCache';
import { AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import Navbar from '../components/home/Navbar';
import Layout from '../components/shared/Layout';

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
