import { Box, Button, Container, Typography } from '@mui/material';
import ChangeTheme from './ChangeTheme';

export default function Layout({ children }) {
  return (
    <Container
      maxWidth="sm"
      className="relative min-h-[100vh] py-[24px]  bg-[#2c2c2c] px-[25px] sm:px-[54px] bg-opacity-70 overflow-auto"
    >
      <Box className=" py-[24px]">
        {/* <ChangeTheme /> */}

        {children}
      </Box>
    </Container>
  );
}
