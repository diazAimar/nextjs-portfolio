import { Box, Typography } from '@mui/material';

export default function Loader() {
  return (
    <Box>
      <Typography
        variant="h2"
        className="h-[100vh] w-full flex items-center justify-center text-center"
      >
        Loading...
      </Typography>
    </Box>
  );
}
