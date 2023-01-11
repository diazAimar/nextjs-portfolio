import Link from 'next/link';

import { Box, Typography } from '@mui/material';

export default function ProjectShort({ project }) {
  return (
    <Box className="leading-[5px]">
      <Link href={`/projects/${project.slug}`}>
        <Typography className="leading-3 border-b-2 inline-block my-2 capitalize">
          {project.name}:
        </Typography>
      </Link>
      <Typography className="text-[0.8rem] inline">&nbsp;{project.shortDescription}</Typography>
    </Box>
  );
}
