import { Box, Typography } from '@mui/material';
import WateringChart from '../Components/WateringChart';
import SoilChart from '../Components/SoilChart';
import { useState } from 'react';
import CommandBlock from '../Components/CommandBlock';
import WaterButton from '../Components/WaterButton';

const Home = ({ theme }) => {
	const [selectedStats, setSelectedStats] = useState('water');
    const [pumpOn, setPumpOn] = useState(false)

	const changeStats = (event) => {
		setSelectedStats(event.target.value);
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', height: '100%' }}>
			<Box
				sx={{
					width: '100%',
					height: { xs: '40%', md: '50%' },
					bgcolor: theme.background,
					borderRadius: '20px',
					py: '25px'
				}}
			>
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
				<Box sx={{ width: '100%', height: '100%', borderRadius: '20px', p: '25px 0px 55px 0px' }}>
					{selectedStats === 'water' && <WateringChart theme={theme} />}
					{selectedStats === 'soil' && <SoilChart theme={theme} />}
				</Box>
			</Box>
			<Box
				sx={{
					width: '100%',
					height: '50%',
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					gap: '30px'
				}}
			>
				<Box
					sx={{
						width: { xs: '100%', md: '50%' },
						height: '90%',
						bgcolor: theme.background,
						borderRadius: '20px',
						p: '25px',
						overflowY: { xs: 'auto', md: 'hidden' }
					}}
				>
					<Box>
						<Typography sx={{ fontSize: '2rem', color: theme.primary, textAlign: 'center' }}>
							Settings
						</Typography>
					</Box>
					<CommandBlock theme={theme} />
				</Box>
				<Box
					sx={{
						width: { xs: '100%', md: '50%' },
						height: '20%',
						bgcolor: pumpOn === true ? '#FF3F3F' : theme.background,
                        borderRadius: '20px',
						p: '10px'
					}}
				>
					<WaterButton theme={theme} pumpOn={pumpOn} setPumpOn={setPumpOn} />
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
