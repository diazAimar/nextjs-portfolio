import { Box, Typography } from '@mui/material';

export default function Skills({ skills }) {
  return (
    <Box className="my-5">
      <Typography variant="h2" className="mb-5 text-[1.4rem] border-b-2">
        Most Developed Skills
      </Typography>
      <Box className="flex flex-col">
        {skills.map((skill, i) => {
          return <Typography key={skill.id}>{skill.name}</Typography>;
        })}
      </Box>
    </Box>
  );
}
