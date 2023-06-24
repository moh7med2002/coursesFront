import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { Box, Container , Typography, styled} from '@mui/material'
import FAQBox from '../components/FAQBox'

const Wrapper = styled(Box)({
    backgroundColor: '#fff',
    border:"1px solid #ddd",
    boxShadow:"0 6px 10px 0 rgba(0,0,0,.1)",
    padding:"20px 0"
}) 

function FAQ() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[]);

  return (
    <Layout>
        <Box sx={{minHeight:"78vh" , backgroundColor:"#f1f1f1", paddingY:"50px"}}>
            <Container>
                <Wrapper >
                    <Typography variant='h3' fontWeight={"bold"} 
                    sx={{fontSize:{xs:"18px",md:"24px",borderBottom:"1px solid #ddd" , padding:"0 20px 20px"}}}>
                        الأسئلة الشائعة
                    </Typography>
                    <Box sx={{padding:"30px 20px 20px"}}>
                        <FAQBox/>
                    </Box>
                </Wrapper>
            </Container>
        </Box>
    </Layout>
  )
}

export default FAQ