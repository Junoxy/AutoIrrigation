import { Box } from "@mui/material";
import AppHeader from "../Components/AppHeader";
import { useState } from "react";
import { themeLight,themeDark } from "../../theme";

const RootLayout = () => {
    const [theme, setTheme] = useState(themeDark)
    return (
        <Box>
            <AppHeader theme={theme} setTheme={setTheme} />
        </Box>
    )
}

export default RootLayout;