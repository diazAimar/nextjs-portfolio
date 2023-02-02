import Link from 'next/link';
import { Typography } from '@mui/material';

export default function GoHomeLink() {
  return (
    <Link href="/">
      <Typography variant="h2" className="border-b-2 inline">
        Go Home
      </Typography>
    </Link>
  );
}
