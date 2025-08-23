"use client"
import React, { useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Badge,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {  Logout } from '@mui/icons-material';
import ProfileManu from '../../UserCom/ProfileManu';
import { Buttons } from '../Buttons/Buttons';
import { COLORS } from '../../../theme/colors';
import { FiWatch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import Cart from '../../Cart/Cart';

const navItems = [
    {label: 'Home', link: '/flat-finder-home'},
    {label: 'Find Watches', link: '/search-property', stateValue:  'all'},
    {label: 'Men Watches', link: '/search-property', stateValue:  'men'},
    {label: 'Women Watches', link: '/search-property', stateValue:  'women'},
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate()

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };


  const navigationHanlder = (item) => {
 
  }

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none', }}>
      <Box sx={{ borderBottom: `4px solid ${COLORS.maroon}` }} />

      <Toolbar sx={{ justifyContent: 'space-between' , paddingTop: '10px'}}>
        {/* Brand */}
       <div onClick={() => navigate('/')} className='flex flex-row items-center cursor-pointer'>
         <Typography variant="h5" sx={{ fontWeight: 'bold', color: COLORS.maroon }}>
          WATCH
        </Typography>
        <FiWatch size={34}/>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: COLORS.maroon }}>IFY</Typography>
       </div>

        {
          !isMobile &&<Box sx={{ display: 'flex', gap: 3 }}>
            {navItems.map((item) => (
              <Button onClick={() => navigationHanlder(item)} key={item?.label} sx={{ color: COLORS.baseColor, fontWeight: '600', ":hover":{ backgroundColor: COLORS.maroon, color: 'white'} }}>{item?.label}</Button>
            ))}
          </Box>
        }

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Badge badgeContent={4} color="info" sx={{cursor: 'pointer'}}>
              <FaCartArrowDown onClick={() => setCartDrawerOpen(true)} color={COLORS.maroon} size={35}/>
            </Badge>

          {!isMobile && (
            <>
           <ProfileManu /> 

            <Button
              variant="contained"
              sx={{
                backgroundColor: COLORS.overlay,
                color: COLORS.maroon,
                display: 'flex',
                alignItems: 'center',
                '& .text-link': {
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                },
                '& .divider': {
                  mx: 1,
                },
              }}
            >
              <span onClick={() => navigate('/login')} className="text-link">LOGIN</span>
              <span className="divider">/</span>
              <span onClick={() => navigate('/register')} className="text-link">REGISTER</span>
            </Button>
            
            </>
          )}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      
      {/* Cart Drawer */}
      <Drawer anchor="right" open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)}>
          <Cart setCartDrawerOpen={setCartDrawerOpen}/>
      </Drawer>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          // onClick={toggleDrawer(false)}
          // onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem style={{backgroundColor: 'white', marginTop: '5px', color: 'black'}} button key={item?.label}>
                <ListItemText onClick={() =>{
                   navigationHanlder(item)
                   setDrawerOpen(false)
                }} primary={item?.label} />
              </ListItem>
            ))}
          </List>
          <Divider />
        
          <List>

          <ListItem>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>

            <ListItem>
                  <Buttons onClickHandler={() => {
                    setDrawerOpen(false)
                    router.push('/login')
                  }} title='LOGIN'/>
            </ListItem>

             <ListItem>
                <Buttons onClickHandler={() => {
                  setDrawerOpen(false)
                  router.push('/register')
                }} title='REGISTER'/>
            </ListItem>

          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
