import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';
import ClientReviews from '../pages/ClientReviews';

function AppRoutes() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client-reviews" element={<ClientReviews />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

