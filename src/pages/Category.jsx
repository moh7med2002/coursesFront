import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import SubNavCategoryTitle from '../components/reusableUi/SubNavCategoryTitle'
import { useParams } from 'react-router-dom'
import { categories } from '../data/categories';
import { courses } from '../data/courses';
import { Box, Container, Grid } from '@mui/material';
import CourseBox from '../components/reusableUi/CourseBox';

function Category() {
    const {categoryId} = useParams();
    const category = categories.find(ca=>ca.id == categoryId);
    const coursesSelected = courses.filter(co=> co.category.id == categoryId);

    useEffect(()=>{
        window.scrollTo({
            top:0, behavior:"smooth"
        })
    },[categoryId]);

  return (
    <Layout>
        <SubNavCategoryTitle title={category.title}/>
        <Box sx={{minHeight:"78vh" , backgroundColor:"#f1f1f1", paddingY:"50px"}}>
            <Container>
                <Grid container spacing={2}>
                    {
                        coursesSelected.map(ca=>{
                            return <Grid item xs={12} sm={6} md={4} lg={3} key={ca.id+"ekdjeswn"}>
                            <CourseBox course={ca}/>
                        </Grid>
                        })
                    }
                </Grid>
            </Container>
        </Box>
    </Layout>
  )
}

export default Category