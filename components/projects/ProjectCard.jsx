import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      className={
        'w-full sm:w-[49%] mb-2 transition-all scale-95' + (!isHovered ? '' : 'scale-100 ')
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/projects/${project.slug}`}>
        <Image
          src={`/projects-images/${project.slug}/${project.slug}-thumbnail.jpg`}
          alt={`${project.name}`}
          className="rounded-xl object-contain w-full"
          width={720}
          height={400}
        />
        <Typography className="text-xl font-medium my-2">{project.name}</Typography>
        <Typography className="text-base">{project.shortDescription}</Typography>
      </Link>
    </Box>
  );
}
