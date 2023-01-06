import { Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Container maxWidth="sm" className="border-2 h-full ">
      {children}
    </Container>
  );
}
