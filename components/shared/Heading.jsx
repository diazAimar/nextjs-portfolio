import { Typography } from '@mui/material';

export default function Heading({ variant, children }) {
  return (
    <Typography variant={variant} className="mb-5 border-b-2">
      {children}
    </Typography>
  );
}
