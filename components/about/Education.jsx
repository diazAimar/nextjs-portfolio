import { Box, Typography } from '@mui/material';
import Heading from '../shared/Heading';

export default function Education({ education }) {
  return (
    <Box className="my-5">
      <Heading variant={'h3'}>Education</Heading>
      <Box className="flex flex-col gap-5">
        {education.map((education, i) => {
          return (
            <Box key={education.id}>
              <Typography className="text-[1.3rem]">{education.institution}</Typography>
              <Typography className="inline">
                <Typography variant="span" className="boldie text-[1rem]">
                  {education.date} {''}
                </Typography>
                | {education.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
