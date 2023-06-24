import React from 'react'
import Layout from '../components/Layout'
import { Box, Container, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import logo from '../images/logo-mobile.png'

const Wrapper = styled('div')({
    width:"600px",
    maxWidth:"100%",
    backgroundColor:"#fff",
    border:"1px solid #ddd",
    boxShadow:"0 6px 10px 0 rgba(0,0,0,.1)",
    margin:"0px auto",
    padding:"30px 15px"
});

const Image = styled("img")({
    width:"130px"
})

const ButtonWrapper = styled("button")({
    width:"180px",
    padding:"4px 8px",
    border:"2px solid #222831",
    margin:"0 auto",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"4px",
    cursor:"pointer",
    backgroundColor:"#222831",
    color:"#fff",
    transition:"all 0.3s",
    ":hover":{
        opacity:0.9
    }
  })

function Login() {
  return (
    <Layout>
        <Box sx={{minHeight:"90vh" , backgroundColor:"#f1f1f1", paddingY:"50px"}}>
            <Container>
                <Wrapper>
                    <Box sx={{textAlign:"center"}}>
                        <Image src={logo} alt=""/>
                        <Typography fontWeight={"700"} color="primary" marginTop={"10px"} sx={{fontSize:{sm:"24px",xs:"18px"}}}>تسجيل الدخول</Typography>
                    </Box>
                    <Box marginTop={"50px"}>
                        <TextField id="outlined-basic" label="البريد الإلكتروني" variant="outlined" fullWidth sx={{marginBottom:"30px"}} required/>
                        <TextField id="outlined-basic" label="كلمة المرور" variant="outlined" fullWidth 
                        sx={{marginBottom:"30px"}} required inputProps={{type:"password"}}/>
                        <ButtonWrapper>
                            <Typography variant='h6' sx={{fontWeight:"600", fontSize:"16px"}}>تسجيل الدخول</Typography>
                        </ButtonWrapper>
                    </Box>
                </Wrapper>
            </Container>
        </Box>
    </Layout>
  )
}

export default Login