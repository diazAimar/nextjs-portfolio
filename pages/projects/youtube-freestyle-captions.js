import Image from 'next/image';
import Link from 'next/link';

import { Box, List, ListItem, Typography } from '@mui/material';

import youtubeFreestyleCaptionsThumbnail from '../../public/projects-images/youtube-freestyle-captions/youtube-freestyle-captions-thumbnail.png';

import Meta from '../../components/shared/Meta';

export default function YoutubeFreestyleCaptions() {
  return (
    <Box>
      <Link href="/">
        <Typography className="border-b-2 inline">Go Home</Typography>
      </Link>
      <Box className="my-5 flex items-baseline gap-2">
        <Link href="/projects">
          <Typography className="border-b-2 inline">Projects</Typography>
        </Link>
        <Typography> &gt; Youtube Freestyle Captions</Typography>
      </Box>
      <Box className="my-5">
        <Typography>
          Desktop application (with a web version) that creates youtube subtitles to add to beats so
          people can freestyle to them.
        </Typography>
      </Box>
      <List className="p-0">
        <ListItem className="p-0 m-1 ">
          <Meta>Project Members</Meta>
          <Typography className="text-[14px]">1</Typography>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>Freelance Project</Meta>
        </ListItem>
        <ListItem className="p-0 m-1 ">
          <Meta>Stack</Meta>
          <Typography className="text-[14px]">
            Python + TKinter (Desktop) - Javascript (Web)
          </Typography>
        </ListItem>
      </List>
      <Box className="my-5">
        <Image src={youtubeFreestyleCaptionsThumbnail} alt="App design" className="rounded-md" />
        <Typography className="text-[12px]">(desktop prototype)</Typography>
      </Box>
      <Box className="flex flex-col gap-4">
        <Typography>
          This application was developed for{' '}
          <Link href="https://www.youtube.com/@TantuBeats" target="_blank" className="border-b-2">
            Tantu Beats
          </Link>
          , a music producer and beatmaker from the Netherlands, Europe.
        </Typography>
        <Typography>
          Tantu approached me asking for a program where he could easily create youtube subtitles
          for people to freestyle over his beats.
        </Typography>
        <Typography>
          The application creates a .sbv file (type of file used by youtube videos to show
          subtitles) and writes over it, taking random words from a list of 2048 words. These words
          appear in a mathematically calculated time, depending on the beat&apos;s bpm, start, and
          its total length.
        </Typography>
        <Typography>
          See how it works{' '}
          <Link
            href="https://www.youtube.com/watch?v=_nJ0wYBN3t4"
            target="_blank"
            className="border-b-2"
          >
            here
          </Link>{' '}
          (turn on the captions)
        </Typography>
      </Box>
    </Box>
  );
}
