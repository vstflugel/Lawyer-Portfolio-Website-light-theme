import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#333' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        LegalPro
      </Typography>
         <Button color="inherit" component="a" href="/">
          Home
        </Button>
         <Button color="inherit" component="a" href="/register">
          Register
        </Button>
         <Button color="inherit" component="a" href="/dashboard">
          Dashboard
        </Button>
         <Button color="inherit" component="a" href="/client-reviews">
          Client Reviews
        </Button>
   </Toolbar>
  </AppBar>
);

export default Header;

//      {[ 'About Us', 'Services', 'Testimonials', 'Contact'].map((item) => (
//        <Button key={item} color="inherit">
//          {item}
//        </Button>
//      ))}
