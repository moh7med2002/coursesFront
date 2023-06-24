import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import SubNavCategoryTitle from '../components/reusableUi/SubNavCategoryTitle'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Container, Typography, styled } from '@mui/material';
import ReactPlayer from 'react-player'

const LinkWrapper = styled("div")({
    width:"180px",
    padding:"4px 8px",
    marginTop:"30px",
    border:"2px solid #222831",
    color:"#222831",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"4px",
    cursor:"pointer",
    transition:"all 0.3s",
    ":hover":{
      backgroundColor:"#222831",
      color:"#fff"
    }
  })


function SingleLesson() {
    const {lessonTitle} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        window.scrollTo({
            top:0, behavior:"smooth"
        })
    },[lessonTitle]);

  return (
    <Layout>
        <SubNavCategoryTitle title={lessonTitle}/>
        <Box sx={{minHeight:"78vh" , backgroundColor:"#f1f1f1", paddingY:"50px"}}>
            <Container>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={"100%"}/>
                <LinkWrapper onClick={(e)=>navigate(-1)}>
                    <Typography variant='h6' sx={{fontWeight:"600", fontSize:"16px"}}>الرجوع للخلف</Typography>
                </LinkWrapper>
            </Container>
        </Box>
    </Layout>
  )
}

export default SingleLesson