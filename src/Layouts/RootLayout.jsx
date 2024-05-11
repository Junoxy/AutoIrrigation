import { Box, Container } from "@mui/material";
import AppHeader from "../Components/AppHeader";
import { useState } from "react";
import { themeLight,themeDark } from "../../theme";
import WateringChart from "../Components/WateringChart";
import Home from "../Pages/Home";

const RootLayout = () => {
    const [theme, setTheme] = useState(themeDark)
    return (
        <Box sx={{backgroundImage:'url("public/leavesDew.jpg")', backgroundSize:'cover', height:'100vh', width:'100%'}}>
            <Box>
            <AppHeader theme={theme} setTheme={setTheme} />
            </Box>
            <Container sx={{paddingTop:'30px', height:'calc(100vh - 80px)'}}>
                <Home theme={theme} />
            </Container>
        </Box>
    )
}

export default RootLayout;