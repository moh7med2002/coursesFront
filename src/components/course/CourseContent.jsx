import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CourseContent() {
    const lessons=[
        {
            id:1,
            title:"الدرس رقم 1",
            duration:"00:04:02"
        },
        {
            id:2,
            title:"الدرس رقم 2",
            duration:"00:03:10"
        },
        {
            id:3,
            title:"الدرس رقم 3",
            duration:"00:02:02"
        },
        {
            id:4,
            title:"الدرس رقم 4",
            duration:"00:05:02"
        },
        {
            id:5,
            title:"الدرس رقم 5",
            duration:"00:03:19"
        },
        {
            id:6,
            title:"الدرس رقم 6",
            duration:"00:04:02"
        },
        {
            id:7,
            title:"الدرس رقم 7",
            duration:"00:08:03"
        },
        {
            id:8,
            title:"الدرس رقم 8",
            duration:"00:03:22"
        },
        {
            id:9,
            title:"الدرس رقم 9",
            duration:"00:04:02"
        },
        {
            id:10,
            title:"الدرس رقم 10",
            duration:"00:02:58"
        }
    ]
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper',border:"1px solid #ddd"}}>
      <div aria-label="main mailbox folders">
        <List sx={{padding:0}}>
            <ListItem disablePadding sx={{padding:"12px 18px",borderBottom:"1px solid #ddd"}}>
                <ListItemIcon sx={{minWidth:"30px"}}> 
                <MenuIcon color='primary'/>
                </ListItemIcon>
                <Typography color='primary' sx={{fontSize:"20px", fontWeight:"bold"}}>
                    المحتويات
                </Typography>
            </ListItem>
            {
                lessons.map(le=>{
                    return <Link to={`/lessons/${le.id}/${le.title}`}>
                    <ListItem disablePadding sx={{borderBottom:"1px solid #ddd"}}>
                        <ListItemButton sx={{alignItems:"center", columnGap:"12px"}}>
                            <ListItemIcon sx={{minWidth:"30px"}}>
                            <PlayCircleIcon color="secondary" sx={{fontSize:"32px"}}/>
                            </ListItemIcon>
                            <Box>
                                <Typography color='primary' sx={{fontSize:"18px", fontWeight:"600"}}>
                                    {le.title}
                                </Typography>
                                <Typography sx={{fontSize:"14px",color:"#777", marginTop:"3px"}}>المدة : {le.duration}</Typography>
                            </Box>
                        </ListItemButton>
                    </ListItem>
                    </Link>
                })
            }
        </List>
      </div>
    </Box>
  );
}