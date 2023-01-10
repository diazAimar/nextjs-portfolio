import Link from 'next/link';

import ProjectCard from '../../components/projects/ProjectCard';

import { Box, Typography } from '@mui/material';

import { projects } from '../../generalInfo';

export default function Projects() {
  return (
    <Box>
      <Link href="/" className="border-b-2">
        Go Home
      </Link>
      <Typography className="text-[1.2rem] mb-5 border-b-2 mt-5">Projects</Typography>
      <Box>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </Box>
    </Box>
  );
}
