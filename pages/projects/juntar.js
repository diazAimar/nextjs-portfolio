import Image from 'next/image';
import Link from 'next/link';

import { Box, List, ListItem, Typography } from '@mui/material';

import juntarThumbnail from '../../public/projects-images/juntar/juntar-thumbnail.jpg';

import Meta from '../../components/shared/Meta';
import Seo from '../../components/shared/Seo';

export default function Juntar() {
  return (
    <Box>
      <Seo
        title="Diaz Aimar | Juntar"
        description="Information about an application to create and manage events related to the Universidad Nacional del Comahue."
        keywords="juntar, event manager, project"
      />
      <Link href="/">
        <Typography className="border-b-2 inline">Go Home</Typography>
      </Link>
      <Box className="my-5 flex items-baseline gap-2">
        <Link href="/projects">
          <Typography className="border-b-2 inline">Projects</Typography>
        </Link>
        <Typography> &gt; Juntar</Typography>
      </Box>
      <Box className="my-5">
        <Typography>
          Juntar is a web application developed at college together with 10 classmates. It&apos;s an
          application to create and manage events related to the Universidad Nacional del Comahue.
        </Typography>
      </Box>
      <List className="p-0">
        <ListItem className="p-0 m-1 ">
          <Meta>Project Members</Meta>
          <Typography className="text-[14px]">11</Typography>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>College Project</Meta>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>Stack</Meta>
          <Typography className="text-[14px]">PHP - Laravel - MySQL - Livewire</Typography>
        </ListItem>
      </List>
      <Box className="my-5">
        <Image src={juntarThumbnail} alt="Juntar" className="rounded-md" />
      </Box>
      <Box className="flex flex-col gap-4">
        <Typography>
          My role within this project was, almost entirely, related to the front end. Some of the
          tasks I performed were the creation components, pages, changing styles and fixing some
          bugs.
        </Typography>
        <Typography>
          Github:{' '}
          <Link className="border-b-2" href="https://github.com/re-juntar/juntar/" target="_blank">
            juntar
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
