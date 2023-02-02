import Link from 'next/link';

import Seo from '../components/shared/Seo';
import AboutMe from '../components/about/AboutMe';
import Skills from '../components/about/Skills';
import Education from '../components/about/Education';

import { Box, Typography } from '@mui/material';

import { skills, education } from '../generalInfo';
import GoHomeLink from '../components/shared/GoHomeLink';

export default function About() {
  return (
    <>
      <Seo
        title="Diaz Aimar | About"
        description="Personal information about me. Skills, education, contact, stack, etc."
        keywords="web developer, react, nextjs, javascript, portfolio, Argentina, about, stack, skills, education, contact"
      />
      <GoHomeLink />
      <Box className="mt-5" /* style={{ overflow: 'overlay' }} */>
        <AboutMe />
        <Skills skills={skills} />
        <Education education={education} />
      </Box>
    </>
  );
}
