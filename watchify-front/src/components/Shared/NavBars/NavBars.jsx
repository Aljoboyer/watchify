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
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import Cart from '../../Cart/Cart';
import { getLocalStorageData } from '../../../utils/getLocalStorageData';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const navItems = [
    {label: 'Home', link: '/'},
    {label: 'Find Watches', link: '/watch-shop', stateValue:  'all'},
    {label: 'Men Watches', link: '/watch-shop', stateValue:  'men'},
    {label: 'Women Watches', link: '/watch-shop', stateValue:  'women'},
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate()
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = React.useState(false);
  const userData = getLocalStorageData();
  const productCart = useSelector((state) => state.commonstore.cart);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };


  const navigationHanlder = (item) => {
        navigate(`${item.link}`, {
      state: item?.stateValue
    });
  }

  const logOutHandler = () => {
    localStorage.removeItem('watchify_user');
    navigate('/')
  }

    const { totalQty } = useMemo(() => {
    if (!Array.isArray(productCart) || productCart.length === 0) {
      return { totalQty: 0 };
    }

    return productCart.reduce(
      (totals, item) => {
        const qty = Number(item?.qty) || 0;
        
        return {
          totalQty: totals.totalQty + qty,
        };
      },
      { totalQty: 0 }
    );
  }, [productCart]);


  console.log('productCart ====>', productCart);

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
              <Button onClick={() => navigationHanlder(item)} key={item?.label} sx={{ 
                color: location?.state == item?.stateValue ? COLORS.white : COLORS.baseColor, 
                fontWeight: '600', 
                backgroundColor: location?.state == item?.stateValue ? COLORS.maroon : '',
                ":hover":{ backgroundColor: COLORS.maroon, color: 'white'} }}>{item?.label}</Button>
            ))}
          </Box>
        }

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {
              userData?.email && <Badge badgeContent={totalQty} color="info" sx={{cursor: 'pointer'}}>
              <FaCartArrowDown onClick={() => setCartDrawerOpen(true)} color={COLORS.maroon} size={35}/>
            </Badge>
            }

          {!isMobile && (
            <>
            {
              userData?.email ? <ProfileManu logOutHandler={logOutHandler}/> : <Button
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
            }
            
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
      {
        userData?.email && <Drawer anchor="right" open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)}>
          <Cart setCartDrawerOpen={setCartDrawerOpen}/>
      </Drawer>
      }

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

           {
            userData?.email && <ListItem>
              <ListItemIcon onClick={() => logOutHandler()}>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
           }


            {
              !userData?.email && <>
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
              </>
            }


          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
