import { createTheme } from '@mui/material';

export const theme1 = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'NicoPups',
      fontSize: '1.5rem',
      lineHeight: '1.2',
      letterSpacing: '0.05rem',
    },
    h1: {
      fontFamily: 'NicoPaint',
      fontSize: '2.5rem',
      color: '#f9e6cf',
    },
    h2: {
      fontFamily: 'NicoPaint',
      fontSize: '2rem',
      color: '#f9e6cf',
    },
    h3: {
      fontFamily: 'NicoPaint',
      fontSize: '1.5rem',
      color: '#f9e6cf',
    },
    h4: {
      fontFamily: 'NicoPaint',
      fontSize: '1.2rem',
      color: '#f9e6cf',
    },
    h5: {
      fontFamily: 'NicoPaint',
      fontSize: '1rem',
      color: '#f9e6cf',
    },
    h6: {
      fontFamily: 'NicoPaint',
      fontSize: '0.9rem',
      color: '#f9e6cf',
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
