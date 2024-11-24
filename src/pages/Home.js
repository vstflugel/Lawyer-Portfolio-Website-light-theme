import React from 'react';
import { CssBaseline, Container, Box, Typography, Button, Grid, Paper } from '@mui/material';

const Home = () => {
    return (
      <Container>
    <CssBaseline />
        <HeroSection />
        <Services />
        <Testimonials />
      </Container>
    );
};

const HeroSection = () => (
  <Box
    sx={{
      textAlign: 'center',
      backgroundColor: '#f7f3e6',
      padding: '50px 20px',
      marginBottom: '40px',
    }}
  >
    <Typography variant="h3" gutterBottom>
      Welcome to LegalPro
    </Typography>
    <Typography variant="h6" color="text.secondary" paragraph>
      Your trusted partner in legal excellence
    </Typography>
    <Button variant="contained" color="success" size="large">
      Schedule a Consultation
    </Button>
  </Box>
);

const Services = () => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h4" gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={3}>
      {[
        { title: 'Corporate Law', desc: 'Expert legal services for businesses and corporations.' },
        { title: 'Family Law', desc: 'Compassionate guidance through family legal matters.' },
        { title: 'Criminal Defense', desc: 'Strong defense strategies to protect your rights.' },
      ].map((service) => (
        <Grid item xs={12} md={4} key={service.title}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6">{service.title}</Typography>
            <Typography color="text.secondary">{service.desc}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const Testimonials = () => (
  <Box sx={{ backgroundColor: '#f7f3e6', py: 5, px: 3, borderRadius: 2 }}>
    <Typography variant="h4" gutterBottom>
      Testimonials
    </Typography>
    <Grid container spacing={3}>
      {[
        { name: 'Simran Pandey', text: 'LegalPro helped me navigate through a tough situation with professionalism and care. Highly recommend!' },
        { name: 'Shiv Bhadoria', text: 'The lawyer at LegalPro is knowledgeable and truly caring. I felt supported throughout my case.' },
        { name: 'Shubham Mishra', text: 'Thanks to the lawyer, I was able to achieve a favorable outcome in my legal matter.' },
      ].map((testimonial) => (
        <Grid item xs={12} md={4} key={testimonial.name}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="body1" gutterBottom>
              "{testimonial.text}"
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              - {testimonial.name}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);


export default Home; 
