import { Box, Typography } from '@mui/material';
import WateringChart from '../Components/WateringChart';
import SoilChart from '../Components/SoilChart';
import { useState } from 'react';
import CommandBlock from '../Components/CommandBlock';

const Home = ({ theme }) => {
    const [selectedStats, setSelectedStats] = useState('water')

    const changeStats = (event) => {
        setSelectedStats(event.target.value)
    }

	return (
		<Box sx={{display:'flex', flexDirection:'column', gap:'30px', height:'100%'}}>
			<Box sx={{width: '100%', height: '50%', bgcolor: theme.background, borderRadius: '20px', py: '25px' }}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						px: '50px',
						gap: '50px'
					}}
				>
					<Typography sx={{ fontSize: '2rem', color: theme.primary }}>Statistics</Typography>
					<select
						style={{
							width: '100px',
							height: '50px',
							borderColor: theme.primary,
							backgroundColor: theme.background,
							color: theme.text,
							borderRadius: '5px',
							padding: '10px',
							fontSize: '1rem'
						}}
                        value={selectedStats}
                        onChange={changeStats}
                        
					>
						<option value="water">Water</option>
						<option value="soil">Soil</option>
					</select>
				</Box>
				<Box
					sx={{ width: '100%', height: '100%', bgcolor: theme.background, borderRadius: '20px', py: '25px' }}
				>
				{selectedStats === 'water' && <WateringChart theme={theme} />}	
                {selectedStats === 'soil' && <SoilChart theme={theme} />}	
                    
				</Box>
			</Box>
			<Box sx={{ width: {xs:'100%', md:'50%'}, height: '30%', bgcolor: theme.background, borderRadius: '20px', py: '25px' }}>
               <CommandBlock theme={theme} /> 
            </Box>
		</Box>
	);
};

export default Home;
