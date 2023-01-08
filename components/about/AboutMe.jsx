import { Box, Divider, Typography } from '@mui/material';

export default function AboutMe() {
  return (
    <Box className="my-5" style={{ overflow: 'overlay' }}>
      <Typography className="text-[1.2rem] mb-5 border-b-2"> Introduction</Typography>
      <Typography className="mb-5">
        Hi! My name is Federico. I&apos;m a web developer based in Argentina.
      </Typography>
      <Typography>
        I am a creative and self-taught person who seeks to specialize in front-end development.
        Committed and responsible, I look forward to the opportunity to grow and expand my
        knowledge.
      </Typography>
    </Box>
  );
}
