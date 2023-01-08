import Head from 'next/head';
import Link from 'next/link';

import AboutMe from '../components/about/AboutMe';
import Skills from '../components/about/Skills';
import Education from '../components/about/Education';

import { Box, Typography } from '@mui/material';

import { skills, education } from '../generalInfo';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/" className="border-b-2">
        Go Home
      </Link>
      <Box className="mt-5" /* style={{ overflow: 'overlay' }} */>
        <AboutMe />
        <Skills skills={skills} />
        <Education education={education} />
      </Box>
    </>
  );
}
