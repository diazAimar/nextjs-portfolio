import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <Box className="mb-5">
      <Link href={`/projects/${project.name}`}>
        <Image
          src={`/projects-images/${project.name}/${project.name}-thumbnail.png`}
          width={512}
          height={512}
          alt={project.name}
        ></Image>
      </Link>
      <Box className="text-center">
        <Box className="flex items-center justify-center gap-2">
          <Link href={`/projects/${project.name}`}>
            <Typography className="border-b-2 inline-block my-2">{project.name}</Typography>
          </Link>
        </Box>
        <Typography className="text-[0.8rem]">{project.shortDescription}</Typography>
      </Box>
    </Box>
  );
}
