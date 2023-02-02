import Image from 'next/image';
import Link from 'next/link';

import { Box, List, ListItem, Typography } from '@mui/material';

import ecommerceThumbnail from '../../public/projects-images/ecommerce/ecommerce-thumbnail.jpg';

import Meta from '../../components/shared/Meta';
import Seo from '../../components/shared/Seo';
import GoHomeLink from '../../components/shared/GoHomeLink';
import Breadcrumbs from '../../components/shared/Breadcrumbs';

export default function Ecommerce() {
  return (
    <Box>
      <Seo
        title="Diaz Aimar | Ecommerce"
        description="Information about a vanilla php ecommerce."
        keywords="ecommerce, vanilla php, project"
      />
      <GoHomeLink />
      <Breadcrumbs projectName={'PHP Ecommerce'} />
      <Box className="my-5">
        <Typography>
          A web application developed at college that simulates an{' '}
          <Typography variant="span" className="boldie">
            {' '}
            online ecommerce website{' '}
          </Typography>
          , with user registration, login, purchases and stock, etc.
        </Typography>
      </Box>
      <List className="p-0">
        <ListItem className="p-0 m-1 ">
          <Meta>Project Members</Meta>
          <Typography>3</Typography>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>College Project</Meta>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>Stack</Meta>
          <Typography>Vanilla PHP - Javascript</Typography>
        </ListItem>
      </List>
      <Box className="my-5">
        <Image src={ecommerceThumbnail} alt="Ecommerce home" className="rounded-md" />
      </Box>
      <Box className="flex flex-col gap-4">
        <Typography>
          Used vanilla PHP in it&apos;s entirety, together with vanilla javascript and css.
        </Typography>
        <Typography variant="h5">
          Github:{' '}
          <Link
            className="border-b-2"
            href="https://github.com/diazAimar/TPFinalPWD/tree/master/View"
            target="_blank"
            title="PHP Ecommerce GitHub"
          >
            PHP Ecommerce
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
