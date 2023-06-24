import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'
import image from '../../images/intro-bg.jpg'
import SearchIcon from '@mui/icons-material/Search';
import Informations from './Informations';

const Wrapper = styled(Box)({
    backgroundImage:`url(${image})`,
    width:"100%" ,
    backgroundPosition:"center center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    borderBottom: "3px solid #f7ca18"
})

const Form = styled('form')({
    backgroundColor:"#ddddddcc", 
    borderRadius:"50px",
    border:"1px solid #888",
    width:"600px" ,
    maxWidth:"100%",
    margin:"45px auto",
    display:"flex",
    alignItems:"cneter",
    justifyContent:"space-between",
    padding:"10px 15px"
})

const Input = styled('input')({
    flex:1,
    backgroundColor:"transparent",
    outline:"none",
    border:"none",
    height:"45px",
    fontSize:"22px",
})


const Button =styled('div')({
    width:"40px",
    height:"40px",
    borderRadius:"50%",
    outline:"none",
    border:"none",
    backgroundColor:"white",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

function HeaderLand() {
  return (
    <Wrapper className=''>
        <Box 
        sx={{minHeight:"50vh" , backgroundColor:"#03030380", color:"#fff", padding:"30px", textAlign:"center"}}>
            <Container>
                <Typography variant='h3'
                sx={{fontWeight:"bold" , marginTop:"18px", fontSize:{sm:"48px", xs:"38px"}}}>
                ماذا تريد أن تتعلم ؟
                </Typography>
                <Form >
                    <Input placeholder='إبحث عن كورس ...'/>
                    <Button>
                        <SearchIcon sx={{color:"#000000"}}/>
                    </Button>
                </Form>
                <Informations/>
            </Container>
        </Box>
    </Wrapper>
  )
}

export default HeaderLand