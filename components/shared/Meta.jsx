import { Box, Typography } from '@mui/material';

export default function Meta({ children }) {
  return (
    <Box className="bg-[#f9e6cf] inline-block rounded-md px-1 mr-2">
      <Typography className="text-[1.2rem] text-[#1c121c] font-semibold uppercase">
        {children}
      </Typography>
    </Box>
  );
}
