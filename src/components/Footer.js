import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#b6a57a', color: 'white', py: 4, mt: 5 }}>
    <Grid container spacing={3} justifyContent="space-between">
      <Grid item xs={12} md={6}>
        <Typography variant="h6">Contact Us</Typography>
        <Typography>
          123 Legal St, Suite 456<br />
          Legal City, LC 7890<br />
          Phone: (123) 456-7890<br />
          Email: contact@legalpro.com
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">Quick Links</Typography>
        <Link href="#" color="inherit" sx={{ display: 'block' }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" sx={{ display: 'block' }}>
          Terms of Service
        </Link>
        <Link href="#" color="inherit" sx={{ display: 'block' }}>
          FAQ
        </Link>
        <Link href="#" color="inherit" sx={{ display: 'block' }}>
          Support
        </Link>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;

