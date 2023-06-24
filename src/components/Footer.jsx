import { Box, Stack, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'

function Footer() {
  return (
    <Box variant="footer" sx={{backgroundColor:"#11151f", padding:"40px 0",color:"#ccc"}}>
        <Stack direction={"row"} justifyContent={"center"} marginBottom={"30px"} spacing={2}>
          <Link to={'/terms'} style={{color:"#fff" , fontSize:"14px"}}>
          شروط الأستخدام
          </Link>
          <Link to={'/faq'} style={{color:"#fff" , fontSize:"14px"}}>
          الأسئلة الشائعة
          </Link>
          <Link to={'/privacy-policy'} style={{color:"#fff" , fontSize:"14px"}}>
          سياسة الخصوصية
          </Link>
        </Stack>
        <Typography sx={{textAlign:"center"}}>© 2023 كورسات ، أحد مشاريع سمات. جميع الحقوق محفوظة.</Typography>
    </Box>
  )
}

export default Footer