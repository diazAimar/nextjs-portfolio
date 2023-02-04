import Link from 'next/link';

import ProjectCard from '../../components/projects/ProjectCard';
import ProjectShort from '../../components/projects/ProjectShort';

import { Box, Typography } from '@mui/material';

import { projects, otherProjects } from '../../generalInfo';
import Seo from '../../components/shared/Seo';
import GoHomeLink from '../../components/shared/GoHomeLink';
import Heading from '../../components/shared/Heading';

export default function Projects() {
  return (
    <Box>
      <Seo
        title="Diaz Aimar | Projects"
        description="Some of my best projects."
        keywords="web developer, react, nextjs, javascript, portfolio, Argentina, about, stack, skills, education, contact"
      />
      <GoHomeLink />
      <Box className="mt-5">
        <Heading variant="h3">Projects</Heading>
      </Box>
      <Box className="flex flex-wrap items-start justify-between text-left gap-2 relative">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </Box>
    </Box>
  );
}
