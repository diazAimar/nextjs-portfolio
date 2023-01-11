import Link from 'next/link';

import ProjectCard from '../../components/projects/ProjectCard';
import ProjectShort from '../../components/projects/ProjectShort';

import { Box, Typography } from '@mui/material';

import { projects, otherProjects } from '../../generalInfo';

export default function Projects() {
  return (
    <Box>
      <Link href="/" className="border-b-2">
        Go Home
      </Link>
      <Box>
        <Typography className="text-[1.4rem] mb-5 border-b-2 mt-5">Projects</Typography>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </Box>
      <Box>
        <Typography className="text-[1.4rem] mb-5 border-b-2 mt-5">Other Projects</Typography>
        {otherProjects.map((project) => {
          return <ProjectShort key={project.id} project={project} />;
        })}
      </Box>
    </Box>
  );
}
