import Link from 'next/link';

import { Box, Typography } from '@mui/material';

export default function Breadcrumbs({ projectName }) {
  return (
    <Box className="my-5 flex items-baseline gap-2">
      <Link href="/projects">
        <Typography variant="h4" className="border-b-2 inline">
          Projects
        </Typography>
      </Link>
      <Typography variant="h4"> &gt; {projectName}</Typography>
    </Box>
  );
}
