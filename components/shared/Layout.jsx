import { Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Container
      maxWidth="sm"
      className="bg-[#2c2c2c] px-[54px] py-[24px] bg-opacity-70 h-full overflow-auto"
    >
      {children}
    </Container>
  );
}
