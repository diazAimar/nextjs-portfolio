import ImageLink from '../shared/ImageLink';

import { Box, Grid, Typography } from '@mui/material';

export default function Menu() {
  return (
    /* bg-[url('/assets/menu-background-test.png')] bg-[length:100%_100%] */
    <Box className="pb-16  w-full h-[90vh] flex flex-col items-center justify-center">
      {/* <Presentation /> */}
      <Typography variant="h1" className="mb-16 text-[1.6rem] sm:text-[2.5rem] text-center">
        Hi! Welcome to my portfolio
      </Typography>
      <Grid className="flex flex-col gap-4">
        <ImageLink href="/about" target="about" ext={false} sqr={false} />
        <ImageLink href="/projects" target="projects" ext={false} sqr={false} />
        <Box className=" flex items-center justify-between">
          <ImageLink href="https://github.com/diazAimar" target="GitHub" ext={true} sqr={true} />
          <ImageLink
            href="https://www.linkedin.com/in/diazaimar/"
            target="LinkedIn"
            ext={true}
            sqr={true}
          />
        </Box>
      </Grid>
    </Box>
  );
}
