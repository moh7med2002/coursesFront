import React from 'react'
import Layout from '../components/Layout'
import SubNavCategoryTitle from '../components/reusableUi/SubNavCategoryTitle'
import { Box, Container, Grid } from '@mui/material'
import { categories } from '../data/categories'
import CategoryBox from '../components/reusableUi/CategoryBox'

function Categories() {
  return (
    <Layout>
        <SubNavCategoryTitle title={"التصنيفات"}/>
        <Box  sx={{minHeight:"78vh" , backgroundColor:"#f1f1f1", paddingY:"50px"}}>
            <Container>
            <Grid container spacing={2}>
                {
                    categories.map(ca=>{
                        return <Grid key={ca.id+"mjwsmn"} item xs={12} sm={6} md={4} lg={3}><CategoryBox category={ca}/></Grid>
                    })
                }
            </Grid>
            </Container>
        </Box>
    </Layout>
  )
}

export default Categories