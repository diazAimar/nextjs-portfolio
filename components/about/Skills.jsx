import { Box, Typography } from '@mui/material';
import Heading from '../shared/Heading';

export default function Skills() {
  return (
    <Box className="my-5">
      <Heading variant={'h3'}>Most Developed Skills</Heading>
      <Box className="flex flex-col">
        <Typography> HTML - CSS </Typography>
        <Typography> BOOTSTRAP - TAILWIND CSS </Typography>
        <Typography> PHP - LARAVEL</Typography>
        <Typography>
          <Typography variant="span" className="boldie">
            JS - REACT JS - NEXT JS
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
