import Image from 'next/image';
import Link from 'next/link';

import { Box, List, ListItem, Typography } from '@mui/material';

import juntarThumbnail from '../../public/projects-images/juntar/juntar-thumbnail.jpg';

import Meta from '../../components/shared/Meta';
import Seo from '../../components/shared/Seo';
import GoHomeLink from '../../components/shared/GoHomeLink';
import Breadcrumbs from '../../components/shared/Breadcrumbs';

export default function Juntar() {
  return (
    <Box>
      <Seo
        title="Diaz Aimar | Juntar"
        description="Information about an application to create and manage events related to the Universidad Nacional del Comahue."
        keywords="juntar, event manager, project"
      />
      <GoHomeLink />
      <Breadcrumbs projectName={'Juntar'} />
      <Box className="my-5">
        <Typography>
          Juntar is a web application developed at college together with 10 classmates. It&apos;s an
          application to{' '}
          <Typography variant="span" className="boldie">
            {' '}
            create and manage events{' '}
          </Typography>{' '}
          related to the Universidad Nacional del Comahue.
        </Typography>
      </Box>
      <List className="p-0">
        <ListItem className="p-0 m-1 ">
          <Meta>Project Members</Meta>
          <Typography>11</Typography>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>College Project</Meta>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>Stack</Meta>
          <Typography>PHP - Laravel - MySQL - Livewire</Typography>
        </ListItem>
      </List>
      <Box className="my-5">
        <Image src={juntarThumbnail} alt="Juntar" className="rounded-md" />
      </Box>
      <Box className="flex flex-col gap-4">
        <Typography>
          <Typography variant="span" className="boldie">
            {' '}
            My role{' '}
          </Typography>{' '}
          within this project{' '}
          <Typography variant="span" className="boldie">
            {' '}
            was, almost entirely, related to the front end.
          </Typography>{' '}
          Some of the tasks I performed were the creation components, pages, changing styles and
          fixing some bugs.
        </Typography>
        <Typography variant="h5">
          Github:{' '}
          <Link className="border-b-2" href="https://github.com/re-juntar/juntar/" target="_blank">
            juntar
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
