import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <Container
      maxWidth="sm"
      className="relative min-h-[100vh] py-[24px]  bg-[#2c2c2c] px-[25px] sm:px-[54px] bg-opacity-70 overflow-hidden"
    >
      <motion.div
        key={router.route}
        initial={{ /* x: 40, */ opacity: 0 }}
        animate={{ /* x: 0, */ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <Box className=" py-[24px]">{children}</Box>
      </motion.div>
    </Container>
  );
}
