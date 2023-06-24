import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Wrapper = styled('div')({
    backgroundColor:"#fff",
    borderRadius:"5px",
    height:"165px",
    boxShadow:"0 0 5px 2px rgba(0,0,0,.4)",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
})

const Overlay = styled('div')({
    height:"165px",
    borderRadius:"5px",
    color:"#fff",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#22283180",
    transition:"all 0.2s",
    ":hover":{
        backgroundColor:"#f7ca1866"
    }
})

function CategoryBox({category}) {
  return (
    <Link to={`/category/${category.id}`}>
      <Wrapper sx={{backgroundImage:`url(${category.image})`}}>
          <Overlay>
          {category.icon}
          <Typography sx={{fontSize:"26px" , fontWeight:"700"}}>{category.title}</Typography>
          </Overlay>
      </Wrapper>
    </Link>
  )
}

export default CategoryBox