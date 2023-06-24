import { Box, Button, Rating, Stack, Tooltip, Typography, styled } from '@mui/material'
import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { Link } from 'react-router-dom';

const CourseWrapper = styled('div')({
    color:"#222831",
    backgroundColor:"#fff",
    borderRadius:"5px",
    boxShadow:"0 6px 10px 0 rgba(0,0,0,.1)",
    minHeight:"320px",
    transition:"all 0.3s",
    ":hover":{
        boxShadow:"1px 6px 10px 1px rgba(0,0,0,.2)",
        backgroundColor:"#fafafa",
    }
});

const Image = styled('img')({
    maxWidth:"100%",
    borderTopRightRadius:"5px",
    borderTopLeftRadius:"5px",
    width:"100%"
});

const Instructor = styled('div')({
    fontSize:"12px",
    fontWeight:"400",
    padding:"5px 10px",
    color:"#000",
    backgroundColor:"#ffffffb3",
    boxShadow:"0 1px 2px #888",
    position:"absolute",
    top:"10px",
    left:"10px",
    borderRadius:"20px"
});

const Category= styled('div')({
    fontSize:"12px",
    fontWeight:"400",
    padding:"5px 10px",
    color:"#000",
    backgroundColor:"#ffffffb3",
    boxShadow:"0 1px 2px #888",
    position:"absolute",
    bottom:"6.2px",
    right:"0px",
})

function CourseBox({course}) {
  return (
    <Link to={`/course/${course.id}`}>
        <CourseWrapper>
            <Box  sx={{position:"relative"}}>
                <Image alt='s'
                src={course.image}/>
                <Tooltip  title="المحاضر" placement="top">
                    <Instructor>{course.teacher}</Instructor>
                </Tooltip>
                <Tooltip  title="التصنيف" placement="top">
                    <Category>{course.category.title}</Category>
                </Tooltip>
            </Box>
            <Box sx={{textAlign:"center" , marginX:"20px" , borderBottom:"1px solid #e1e1e1"}}>
                <Typography variant='h5' fontSize={"16px"} fontWeight={"bold"} color={"primary"}>{course.title}</Typography>
                <Stack sx={{paddingTop:"45px", paddingBottom:"10px", width:"80%" , marginX:"auto"}} direction={"row"} justifyContent={"space-between"}>
                    <Tooltip  title="مدة الكورس" placement="top">
                        <Stack direction={"row"} alignItems={"center"} spacing={"4px"} sx={{color:"#888"}}>
                            <AccessTimeIcon fontSize='12px'/>
                            <Typography>{course.hours}</Typography>
                        </Stack>
                    </Tooltip>
                    <Tooltip  title="عدد الدروس" placement="top">
                        <Stack direction={"row"} alignItems={"center"} spacing={"4px"} sx={{color:"#888" }}>
                            <PlayCircleFilledWhiteIcon fontSize='12px'/>
                            <Typography>{course.lessons}</Typography>
                        </Stack>
                    </Tooltip>
                </Stack>
            </Box>
            <Box sx={{textAlign:"center" , paddingTop:"8px"}}>
                <Tooltip title="التقييم : 4" placement="top">
                    <Rating name="read-only" value={course.rate} precision={0.5} readOnly sx={{fontSize:"22px"}}/>
                </Tooltip>
            </Box>
        </CourseWrapper>
    </Link>
  )
}

export default CourseBox