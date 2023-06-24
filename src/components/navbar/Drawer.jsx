import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import { categories } from '../../data/categories';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


export default function DrawerList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick} style={{display:"flex", alignItems:"center",gap:"5px"}}>
        <CategoryRoundedIcon fontSize='10px'/>
        <ListItemText primary="التصنيفات" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            categories.map(ca=>{
              return <Link key={ca.title+"kjhb"} to={`/category/${ca.id}`}> 
              <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={ca.title} />
            </ListItemButton>
              </Link>
            })
          }
        </List>
      </Collapse>
      <ListItemButton>
      <Link to={'/login'} style={{display:"flex", alignItems:"center",gap:"5px"}}>
          <LockIcon fontSize='10px'/>
          <Typography>دخول</Typography>
      </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to={'/register'} style={{display:"flex", alignItems:"center",gap:"5px"}}>
            <PersonAddAlt1Icon fontSize='10px'/>
            <Typography>تسجيل</Typography>
        </Link>
      </ListItemButton>
    </List>
  );
}