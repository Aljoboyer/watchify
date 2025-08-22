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

const navItems = [
    {label: 'Home', link: '/flat-finder-home'},
    {label: 'Flat / Apartment', link: '/search-property', stateValue:  'flat'},
    {label: 'Showroom', link: '/search-property', stateValue:  'showroom'},
    {label: 'Resturant', link: '/search-property', stateValue:  'restaurant'},
    {label: 'Office', link: '/search-property', stateValue:  'office'},
    {label: 'Services', link: '/services', stateValue:  ''},
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navigationHanlder = (item) => {
 
  }



  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }}>
      <Box sx={{ borderBottom: `4px solid ${COLORS.side_yellow}` }} />

      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Brand */}
       <div onClick={() => router.push('/flat-finder-home')} className='flex flex-row items-center cursor-pointer'>
         <Typography variant="h5" sx={{ fontWeight: 'bold', color: COLORS.baseColor }}>
          Flat
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: COLORS.baseColor }}>Finder</Typography>
       </div>

        {
          !isMobile &&<Box sx={{ display: 'flex', gap: 3 }}>
            {navItems.map((item) => (
              <Button onClick={() => navigationHanlder(item)} key={item?.label} sx={{ color: '#000000ff', fontWeight: '600', ":hover":{textDecoration: 'underline', color: COLORS.side_yellow} }}>{item?.label}</Button>
            ))}
          </Box>
        }

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {!isMobile && (
            <>
             
           <ProfileManu /> : 
            <Button
              variant="contained"
              sx={{
                backgroundColor: COLORS.overlay,
                color: COLORS.baseColor,
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
              <span onClick={() => router.push('/login')} className="text-link">LOGIN</span>
              <span className="divider">/</span>
              <span onClick={() => router.push('/register')} className="text-link">REGISTER</span>
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
              <ListItem  button key={item?.label}>
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
