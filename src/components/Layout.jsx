import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import logo from '../images/logo.png'
import logoMobile from '../images/logo-mobile.png'
import { Link } from 'react-router-dom';
import { Typography, styled } from '@mui/material';
import CategoriesLaptop from './navbar/Cayegories.Laptop';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DrawerList from './navbar/Drawer';
import Footer from './Footer';

const drawerWidth = 240;

const Image = styled("img")({})

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{height:"70px" , justifyContent:"center"}} elevation={0}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            to={'/'}
            style={{  display: 'block'}}
          >
            <Image src={logo} alt="logo"  sx={{ display: { xs: 'none', sm: 'block' } }}/>
            <Image src={logoMobile} alt="logo"  sx={{ display: { xs: 'block', sm: 'none' } , width:"60px"}}/>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'flex'}, alignItems:"center", justifyContent:"space-between" ,flex:1  , marginX:"50px" }}>
            <CategoriesLaptop/>
            <Box sx={{display:"flex", alignItems:"center",gap:"28px"}}>
                <Link to={'/login'} style={{display:"flex", alignItems:"center",gap:"5px"}}>
                    <LockIcon fontSize='10px'/>
                    <Typography>دخول</Typography>
                </Link>
                <Link to={'/register'} style={{display:"flex", alignItems:"center",gap:"5px"}}>
                    <PersonAddAlt1Icon fontSize='10px'/>
                    <Typography>تسجيل</Typography>
                </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <DrawerList/>
        </Drawer>
      </Box>
      <Box component="main" sx={{ width:"100%"}}>
        <Toolbar />
        {props.children}
        <Footer/>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;