import { Box, Divider, Typography } from '@mui/material';
import Heading from '../shared/Heading';

export default function AboutMe() {
  return (
    <Box className="my-5" style={{ overflow: 'overlay' }}>
      <Heading variant={'h3'}>Introduction</Heading>
      <Typography className="mb-5">
        Hi! My name is Federico. I&apos;m a{' '}
        <Typography variant="span" className="boldie">
          {' '}
          web developer{' '}
        </Typography>{' '}
        based in Argentina.
      </Typography>
      <Typography>
        I am a
        <Typography variant="span" className="boldie ">
          {' '}
          creative and curiousity driven{' '}
        </Typography>
        person who seeks to specialize in front-end development. Committed and responsible, I look
        forward to the opportunity to grow and expand my knowledge.
      </Typography>
    </Box>
  );
}
