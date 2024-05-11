import { Box, Button, Typography } from '@mui/material';

function CommandBlock({ theme }) {

    const handlesubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target)
        const settings = {}

        formData.forEach((value,key) => {
            settings[key] = value;
        })

        console.log('Submitted settings:', settings);
    }

	return (
        <form onSubmit={handlesubmit}>
		<Box sx={{ display: 'flex', flexDirection: 'column'}}>
            
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					p: '10px'
				}}
			>
				<Typography sx={{ fontSize: '1.5rem', color: theme.primary }}>Watering Duration [s]</Typography>
				<input
					style={{
						backgroundColor: 'transparent',
						color: theme.text,
						width: '60px',
						paddingLeft: '10px',
						border: `2px solid ${theme.primary}`,
						borderRadius: '5px',
                        fontSize:'1rem',
						
					}}
					type="number"
                    name='wateringduration'
				/>
			</Box>
            <Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					p: '10px'
				}}
			>
				<Typography sx={{ fontSize: '1.5rem', color: theme.primary }}>Watering Interval [days]</Typography>
				<input
					style={{
						backgroundColor: 'transparent',
						color: theme.text,
						width: '60px',
						paddingLeft: '10px',
						border: `2px solid ${theme.primary}`,
						borderRadius: '5px',
                        fontSize:'1rem',
						
					}}
					type="number"
                    name='wateringinterval'
				/>
			</Box>
            <Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					p: '10px'
				}}
			>
				<Typography sx={{ fontSize: '1.5rem', color: theme.primary }}>Min Moisture [%] </Typography>
				<input
					style={{
						backgroundColor: 'transparent',
						color: theme.text,
						width: '60px',
						paddingLeft: '10px',
						border: `2px solid ${theme.primary}`,
						borderRadius: '5px',
                        fontSize:'1rem',
						
					}}
					type="number"
                    name='minmoisture'
				/>
			</Box>
            <Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					p: '10px'
				}}
			>
				<Typography sx={{ fontSize: '1.5rem', color: theme.primary }}>Max Moisture [%]</Typography>
				<input
					style={{
						backgroundColor: 'transparent',
						color: theme.text,
						width: '60px',
						paddingLeft: '10px',
						border: `2px solid ${theme.primary}`,
						borderRadius: '5px',
                        fontSize:'1rem',
						
					}}
					type="number"
                    name='maxmoisture'
				/>
			</Box>
		</Box>
            <Button type='submit' variant='outlined' sx={{width:'100%', my:'10px'}} >Submit</Button>
        </form>
	);
}

export default CommandBlock;
