import { Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Container maxWidth="sm" className="bg-[#2c2c2c] bg-opacity-50 h-full ">
      {children}
    </Container>
  );
}
