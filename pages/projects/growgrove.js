import Image from 'next/image';
import Link from 'next/link';

import { Box, List, ListItem, Typography } from '@mui/material';

import growgroveThumbnail from '../../public/projects-images/growgrove/growgrove-thumbnail.jpg';

import Meta from '../../components/shared/Meta';
import Seo from '../../components/shared/Seo';

export default function Growgrove() {
  return (
    <Box>
      <Seo
        title="Diaz Aimar | growgrove"
        description="growgrove is a web application focused on improving the users' productivity, habits,
        and focus. Todo lists, calendar, and more! "
        keywords="growgrove, timer, timer block, land, grow land, to do list, calendar, productivity app"
      />
      <Link href="/">
        <Typography className="border-b-2 inline">Go Home</Typography>
      </Link>
      <Box className="my-5 flex items-baseline gap-2">
        <Link href="/projects">
          <Typography className="border-b-2 inline">Projects</Typography>
        </Link>
        <Typography> &gt; growgrove</Typography>
      </Box>
      <Box className="my-5">
        <Typography>
          growgrove is a web application focused on improving the users&apos; productivity, habits,
          and focus. Designed and developed by myself for the last subject of the career.
        </Typography>
      </Box>
      <List className="p-0">
        <ListItem className="p-0 m-1 ">
          <Meta>Project Members</Meta>
          <Typography className="text-[14px]">1</Typography>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>Personal and College Project</Meta>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>Stack</Meta>
          <Typography className="text-[14px]">NextJS - PostgreSQL - TailwindCSS</Typography>
        </ListItem>
      </List>
      <Box className="my-5">
        <Image src={growgroveThumbnail} alt="Growgrove main app" className="rounded-md" />
      </Box>
      <Box className="flex flex-col gap-4">
        <Typography>
          It has various tools, such as a to-do list, a calendar, and the main attraction: a
          &quot;game&quot; where you can set timers to work on tasks you previously created and grow
          your land to have a sense of rewards and progress.
        </Typography>
        <Typography>
          By making this project on my own, I could say that I had to fill the shoes of a full-stack
          developer. From defining the functional requirements of the application, to designing and
          creating the database, to creating each component, page, etc.
        </Typography>
        <Typography>Website and Kickstarter coming soon...</Typography>
      </Box>
    </Box>
  );
}
