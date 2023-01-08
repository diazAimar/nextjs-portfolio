import { Box, Typography } from '@mui/material';

export default function Education({ education }) {
  return (
    <Box className="my-5">
      <Typography variant="h2" className="mb-5 text-[1.4rem] border-b-2">
        Education
      </Typography>
      <Box className="flex flex-col">
        {education.map((education, i) => {
          return (
            <Box key={education.id}>
              <Typography className="text-[.9rem]">{education.institution}</Typography>
              <Typography>{education.name}</Typography> <br />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
