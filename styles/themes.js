import { createTheme } from '@mui/material';

export const theme1 = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Abadon',
      fontSize: '1.1rem',
      letterSpacing: '0.15rem',
    },
  },
});

export const theme2 = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto',
      fontSize: '1.1rem',
      letterSpacing: '0.05rem',
    },
  },
});
