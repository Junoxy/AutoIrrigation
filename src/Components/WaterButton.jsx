import { Box, Button } from "@mui/material"


function WaterButton({theme, pumpOn, setPumpOn}) {
    const openWater = () => {
        setPumpOn(!pumpOn)
        console.log(pumpOn)
    }

  return (
    <Box sx={{width:'100%', height:'100%',}}>
        <Button onClick={openWater} variant="outlined" sx={{width:'100%', height:'100%', borderRadius: '10px', fontSize:'1.5rem'}} >
            { pumpOn === false ? 'Activate Pump' : 'Deactivate Pump' }

        </Button>
    </Box>
  )
}

export default WaterButton