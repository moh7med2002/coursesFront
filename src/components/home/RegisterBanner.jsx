import { Container, Typography, styled } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'

const LinkWrapper = styled("div")({
    width:"180px",
    padding:"4px 8px",
    border:"2px solid #222831",
    color:"#222831",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"4px",
    transition:"all 0.3s",
    ":hover":{
      backgroundColor:"#222831",
      color:"#fff"
    }
  })

function RegisterBanner() {
  return (
    <Container sx={{paddingY:"50px" , display:"flex" , alignItems:"center" , justifyContent:"space-between" , flexDirection:{sm:"row",xs:"column"}}}>
        <Typography component={"h2"}
        sx={{fontSize:{sm:"30px",xs:"24px"} , lineHeight:"56px",color:"#222831"}}
        >
        سجل الآن وابدأ في بناء مستقبلك المهني
        </Typography>
        <Link to={'/register'}>
          <LinkWrapper>
            <Typography variant='h6' sx={{fontWeight:"600", fontSize:"16px"}}>سجل الأن</Typography>
          </LinkWrapper>
        </Link>
    </Container>
  )
}

export default RegisterBanner