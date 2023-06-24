import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import Groups2Icon from '@mui/icons-material/Groups2';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Grid, Typography } from '@mui/material';

function Informations() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}
        sx={{display:"flex" , alignItems:"center", justifyContent:"center" , columnGap:"12px"}}>
            <ComputerIcon fontSize="large"/>
            <Typography variant='h5' fontWeight={"bold"}>317 كورس</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}
        sx={{display:"flex" , alignItems:"center" , justifyContent:"center" , columnGap:"12px"}}>
            <Groups2Icon fontSize="large"/>
            <Typography variant='h5' fontWeight={"bold"}> 118.4 ألف طالب</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}
        sx={{display:"flex" , alignItems:"center" , justifyContent:"center" , columnGap:"12px"}}>
            <PlayCircleOutlineIcon fontSize="large"/>
            <Typography variant='h5' fontWeight={"bold"}> 14.3 ألف درس</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}
        sx={{display:"flex" , alignItems:"center" , justifyContent:"center" ,columnGap:"12px"}}>
            <AccessTimeIcon fontSize="large"/>
            <Typography variant='h5' fontWeight={"bold"}> 3.2 ألف ساعة تعليمية</Typography>
        </Grid>
    </Grid>
  )
}

export default Informations