import { Box, Typography } from '@mui/material';
import Heading from '../shared/Heading';

export default function Experience({ experience }) {
	return (
		<Box className='my-5'>
			<Heading variant={'h3'}>Experience</Heading>
			<Box className='flex flex-col gap-5'>
				{experience.map((experience, i) => {
					return (
						<Box key={experience.id}>
							<Typography className='text-[1.3rem]'>{experience.institution}</Typography>
							<Typography className='inline'>
								<Typography variant='span' className='boldie text-[1rem]'>
									{experience.date} {''}
								</Typography>
							</Typography>
							<Typography>{experience.name}</Typography>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
