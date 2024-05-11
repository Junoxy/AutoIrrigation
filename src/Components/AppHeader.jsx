import { Box, IconButton, Typography } from '@mui/material';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { themeDark, themeLight } from '../../theme';

const AppHeader = ({theme, setTheme}) => {

	function switchTheme() {
		setTheme(theme === themeDark ? themeLight : themeDark )
	}

	return (
		<Box sx={{width:'100%', height:'80px', bgcolor:theme.background, alignItems:'center', display:'flex', justifyContent:'space-between', px:'25px'}}>
			<Typography variant='h4' sx={{ml:2, color:theme.accent}}>AutoIrrigation</Typography>
			<IconButton onClick={() => switchTheme() } sx={{color: theme.accent}}> <WbTwilightIcon sx={{width:'60px', height:'60px'}}/> </IconButton>
		</Box>
	);
};

export default AppHeader;
