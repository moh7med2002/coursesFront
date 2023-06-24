import React from 'react'
import Layout from '../Layout'
import Header from '../reusableUi/Header'
import { Box, Container, Grid } from '@mui/material'
import CourseBox from '../reusableUi/CourseBox'
import { courses } from '../../data/courses'


const getRandomCourses = (count) => {
    const selectedCourses = [];
    
    while (selectedCourses.length < count) {
      const randomIndex = Math.floor(Math.random() * courses.length);
      const randomCourse = courses[randomIndex];
      
      if (!selectedCourses.includes(randomCourse)) {
        selectedCourses.push(randomCourse);
      }
    }
    
    return selectedCourses;
  };

function SomeCourses() {

    const randomCourses = getRandomCourses(8);

  return (
    <>
        <Box sx={{backgroundColor:"#f1f1f1" ,paddingTop:"50px" , paddingBottom:"80px"}}>
        <Container>
            <Header title={"كورسات مميزة"}/>
            <Grid container spacing={2}>
                {
                    randomCourses.map(ca=>{
                        return <Grid item xs={12} sm={6} md={4} lg={3} key={ca.id+"ekdje"}>
                        <CourseBox course={ca}/>
                    </Grid>
                    })
                }
            </Grid>
        </Container>
        </Box>
    </>
  )
}

export default SomeCourses