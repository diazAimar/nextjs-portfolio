import Image from 'next/image';
import Link from 'next/link';

import { Box, List, ListItem, Typography } from '@mui/material';

import ecommerceThumbnail from '../../public/projects-images/ecommerce/ecommerce-thumbnail.jpg';

import Meta from '../../components/shared/Meta';
import Seo from '../../components/shared/Seo';

export default function Ecommerce() {
  return (
    <Box>
      <Seo
        title="Diaz Aimar | Ecommerce"
        description="Information about a vanilla php ecommerce."
        keywords="ecommerce, vanilla php, project"
      />
      <Link href="/">
        <Typography className="border-b-2 inline">Go Home</Typography>
      </Link>
      <Box className="my-5 flex items-baseline gap-2">
        <Link href="/projects">
          <Typography className="border-b-2 inline">Projects</Typography>
        </Link>
        <Typography> &gt; PHP Ecommerce</Typography>
      </Box>
      <Box className="my-5">
        <Typography>
          A web application developed at college that simulates an online ecommerce website, with
          user registration, login, purchases and stock, etc.
        </Typography>
      </Box>
      <List className="p-0">
        <ListItem className="p-0 m-1 ">
          <Meta>Project Members</Meta>
          <Typography className="text-[14px]">3</Typography>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>College Project</Meta>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>Stack</Meta>
          <Typography className="text-[14px]">Vanilla PHP - Javascript</Typography>
        </ListItem>
      </List>
      <Box className="my-5">
        <Image src={ecommerceThumbnail} alt="Ecommerce home" className="rounded-md" />
      </Box>
      <Box className="flex flex-col gap-4">
        <Typography>
          Used vanilla PHP in it&apos;s entirety, together with vanilla javascript and css.
        </Typography>
        <Typography>
          Github:{' '}
          <Link
            className="border-b-2"
            href="https://github.com/diazAimar/TPFinalPWD/tree/master/View"
            target="_blank"
          >
            PHP Ecommerce
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
