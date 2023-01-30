import { Box, Button, Container, Typography } from '@mui/material';
import ChangeTheme from './ChangeTheme';

export default function Layout({ children }) {
  return (
    <Container
      maxWidth="sm"
      className="relative bg-[#2c2c2c] px-[25px] sm:px-[54px] py-[24px] bg-opacity-70 h-full overflow-auto"
    >
      <ChangeTheme />
      {children}
    </Container>
  );
}
