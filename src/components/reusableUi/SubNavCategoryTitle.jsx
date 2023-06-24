import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function SubNavCategoryTitle({title}) {
  return (
    <Box sx={{backgroundColor:"#fff",borderBottom:"1px solid #ddd", paddingY:{sm:"30px",xs:"20px"}}}>
        <Container>
            <Typography variant='h3' fontWeight={"400"} sx={{fontSize:{sm:"28px",xs:"20px"}}}>{title}</Typography>
        </Container>
    </Box>
  )
}

export default SubNavCategoryTitle