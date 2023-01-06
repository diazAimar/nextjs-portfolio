import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function FourOhFour() {
  return (
    <>
      <Typography>404 - Page Not Found</Typography>
      <Link href="/">Go back home</Link>
    </>
  );
}
