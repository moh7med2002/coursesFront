import { Box, Typography , styled, useTheme} from '@mui/material'
import React from 'react'

const Line = styled('div')({
    width:"45%",
    height:"2px",
    margin:"10px auto"
})

function Header({title}) {
    const theme = useTheme();
  return (
    <Box sx={{textAlign:"center", width:"fit-content", margin:"0px auto 50px"}}>
        <Typography variant='h4' component={"h2"} sx={{color:"#333c4a", fontSize:{sm:"32px",xs:"26px"}, fontFamily:"500"}}>{title}</Typography>
        <Line sx={{backgroundColor:theme.palette.secondary.main}}/>
    </Box>
  )
}

export default Header