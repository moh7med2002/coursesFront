import { Container, Grid , Typography, styled } from '@mui/material'
import React from 'react'
import Header from '../reusableUi/Header'
import { categories } from '../../data/categories'
import CategoryBox from '../reusableUi/CategoryBox'
import { Link } from 'react-router-dom'
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';


const LinkWrapper = styled("div")({
  width:"200px",
  margin:"38px auto 0",
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

function Categorieshome() {
  return (
    <Container sx={{paddingY:"50px"}}>
        <Header title={"تصنيفات الكورسات"}/>
        <Grid container spacing={2}>
        {
            categories.slice(0,4).map(ca=>{
                return <Grid key={ca.id+"mjn"} item xs={12} sm={6} md={4} lg={3}><CategoryBox category={ca}/></Grid>
            })
        }
        </Grid>
        <Link to={"/categories"}>
        <LinkWrapper>
          <CategoryRoundedIcon fontSize='14px'/>
          <Typography variant='h6' sx={{fontWeight:"600", fontSize:"16px"}}>عرض جميع التصنيفات</Typography>
        </LinkWrapper>
        </Link>
    </Container>
  )
}

export default Categorieshome