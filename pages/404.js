import Link from 'next/link';

import Seo from '../components/shared/Seo';

import { Box, Typography } from '@mui/material';

export default function FourOhFour() {
  return (
    <>
      <Seo title="Diaz Aimar | 404" description="Hi! You... shouldn't be here." keywords="404" />
      <Box className="h-full flex flex-col items-center justify-center gap-4 text-center">
        <Typography variant="h2" className="text-[2rem]">
          404 - Page Not Found
        </Typography>
        <Typography>Hi! You... shouldn&apos;t be here.</Typography>
        <Link href="/" className="border-b-2" title="Home">
          <Typography>Go Back Home</Typography>
        </Link>
      </Box>
    </>
  );
}
