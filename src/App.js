import React from 'react';
import { CssBaseline, Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}


export default App;

