import Image from 'next/image';
import Link from 'next/link';

import { Box, List, ListItem, Typography } from '@mui/material';

import youtubeFreestyleCaptionsThumbnail from '../../public/projects-images/youtube-freestyle-captions/youtube-freestyle-captions-thumbnail.png';

import Meta from '../../components/shared/Meta';
import Seo from '../../components/shared/Seo';
import GoHomeLink from '../../components/shared/GoHomeLink';
import Breadcrumbs from '../../components/shared/Breadcrumbs';

export default function YoutubeFreestyleCaptions() {
  return (
    <Box>
      <Seo
        title="Diaz Aimar | YoutubeFreestyleCaptions"
        description="Information about a desktop application (with a web version) that creates youtube subtitles to add to beats so
        people can freestyle to them."
        keywords="freestyle, caption generator, youtube subtitles, beats"
      />
      <GoHomeLink />
      <Breadcrumbs projectName={'Youtube Freestyle Captions'} />
      <Box className="my-5">
        <Typography>
          Desktop{' '}
          <Typography variant="span" className="boldie">
            application{' '}
          </Typography>{' '}
          (with a web version){' '}
          <Typography variant="span" className="boldie">
            {' '}
            that creates youtube subtitles to add to beats{' '}
          </Typography>{' '}
          so people can freestyle to them.
        </Typography>
      </Box>
      <List className="p-0">
        <ListItem className="p-0 m-1 ">
          <Meta>Project Members</Meta>
          <Typography>1</Typography>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>Freelance Project</Meta>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>Stack</Meta>
          <Typography>Python (Desktop) - Javascript (Web)</Typography>
        </ListItem>
      </List>
      <Box className="my-5">
        <Image src={youtubeFreestyleCaptionsThumbnail} alt="App design" className="rounded-md" />
        <Typography className="text-[1.3rem]">(desktop prototype)</Typography>
      </Box>
      <Box className="flex flex-col gap-4">
        <Typography>
          This application was{' '}
          <Typography variant="span" className="boldie">
            {' '}
            developed for{' '}
            <Link
              href="https://www.youtube.com/@TantuBeats"
              target="_blank"
              className="border-b-2"
              title="Tantu Beats Youtube channel"
            >
              Tantu Beats
            </Link>
          </Typography>
          , a music producer and beatmaker from the Netherlands, Europe.
        </Typography>
        <Typography>
          Tantu approached me asking for a program where he could{' '}
          <Typography variant="span" className="boldie">
            {' '}
            easily create youtube subtitles for people to freestyle over his beats.{' '}
          </Typography>
        </Typography>
        <Typography>
          The application creates a .sbv file (type of file used by youtube videos to show
          subtitles) and writes over it, taking random words from a list of 2048 words. These words
          appear in a mathematically calculated time, depending on the beat&apos;s bpm, start, and
          its total length.
        </Typography>
        <Typography variant="h5">
          See how it works{' '}
          <Link
            href="https://www.youtube.com/watch?v=_nJ0wYBN3t4"
            target="_blank"
            className="border-b-2"
            title="Youtube video"
          >
            here
          </Link>{' '}
          (turn on the captions)
        </Typography>
      </Box>
    </Box>
  );
}
