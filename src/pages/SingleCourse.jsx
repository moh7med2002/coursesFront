import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import { courses } from '../data/courses';
import SubNavCategoryTitle from '../components/reusableUi/SubNavCategoryTitle';
import { Box, Container, Grid } from '@mui/material';
import CourseContent from '../components/course/CourseContent';
import CourseRate from '../components/course/CourseRate';

function SingleCourse() {
    const {courseId} = useParams();
    const course = courses.find(co => co.id == courseId)

    useEffect(()=>{
        window.scrollTo({
            top:0, behavior:"smooth"
        })
    },[courseId]);

  return (
    <Layout>
        <SubNavCategoryTitle title={course.title}/>
        <Box sx={{minHeight:"78vh" , backgroundColor:"#f1f1f1", paddingY:"50px"}}>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={8}>
                        <CourseContent/>
                    </Grid>
                    <Grid item xs={4}>
                        <CourseRate rate={course.rate}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </Layout>
  )
}

export default SingleCourse