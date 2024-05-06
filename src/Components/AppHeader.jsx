import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { themeDark, themeLight } from '../../theme';

const AppHeader = ({theme, setTheme}) => {

	function switchTheme() {
		setTheme(theme === themeDark ? themeLight : themeDark )
	}

	return (
		<Box sx={{width:'100vw', height:'60px', bgcolor:theme.secondary}}>
			<IconButton onClick={() => switchTheme() }>Theme</IconButton>
		</Box>
	);
};

export default AppHeader;
