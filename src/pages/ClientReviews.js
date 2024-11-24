import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import { Upload } from '@mui/icons-material';

const ClientReviews = () => {
  return (
    <Container>
      {/* Header Section */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
          py: 4,
          bgcolor: '#f5f5f5',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h3" sx={{ color: '#333', fontWeight: 'bold' }}>
          Legal Services Overview
        </Typography>
      </Box>

      {/* Review Form */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Rate Your Legal Experience
        </Typography>
        {/* Placeholder for Icons */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <IconButton color="primary">
            <span role="img" aria-label="icon">📚</span>
          </IconButton>
          <IconButton color="primary">
            <span role="img" aria-label="icon">🏛️</span>
          </IconButton>
          <IconButton color="primary">
            <span role="img" aria-label="icon">🤝</span>
          </IconButton>
          <IconButton color="primary">
            <span role="img" aria-label="icon">👥</span>
          </IconButton>
        </Box>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Share Your Legal Experience
        </Typography>
        <TextField
          fullWidth
          label="Share your experience with LegalCase. Be honest and constructive."
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 3 }}
        />

        <Typography variant="h6" sx={{ mb: 2 }}>
          Title of Your Review
        </Typography>
        <TextField
          fullWidth
          label="Search Case Number or Title"
          variant="outlined"
          sx={{ mb: 3 }}
        />

        <Typography variant="h6" sx={{ mb: 2 }}>
          Upload Photos
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            border: '1px dashed #ccc',
            borderRadius: 1,
            padding: 2,
          }}
        >
          <Typography>Drag or Upload Images Here</Typography>
          <Button variant="contained" startIcon={<Upload />} color="success">
            Upload
          </Button>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3, bgcolor: '#6d6c3e', color: '#fff' }}
        >
          Publish Review
        </Button>
      </Paper>

    </Container>
  );
};

export default ClientReviews;

