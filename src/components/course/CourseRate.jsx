import { Box, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function CourseRate({rate}) {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper',border:"1px solid #ddd"}}>
        <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{padding:"20px 12px",borderBottom:"1px solid #ddd"}}>
            <StarIcon color="primary"/>
            <Typography color="primary" variant='h3' fontSize={"20px"} fontWeight={"bold"}>تقييم الكورس</Typography>
        </Stack>
        <Box sx={{padding:"20px 12px", textAlign:"center"}}>
          <Typography variant='h5' fontWeight={"500"} marginBottom={"10px"}>{rate}</Typography>
          <Rating name="read-only" value={rate} precision={0.5} readOnly sx={{fontSize:"28px"}}/>
        </Box>
    </Box>
  )
}

export default CourseRate