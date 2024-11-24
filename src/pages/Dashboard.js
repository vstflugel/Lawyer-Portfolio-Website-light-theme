import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { CloudUpload, Delete, Download } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2, mt: 4 }}>
        Welcome to Your Dashboard
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Manage your cases, documents, and communication with ease.
      </Typography>
      <Grid container spacing={3}>
        {/* Profile Management Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Profile Management
            </Typography>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
            >
              Update Profile
            </Button>
          </Paper>
        </Grid>

        {/* Case Initiation Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Case Initiation
            </Typography>
            <TextField
              fullWidth
              label="Case Title"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Case Description"
              variant="outlined"
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
            >
              Initiate Case
            </Button>
          </Paper>
        </Grid>

        {/* Document Management Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Document Management
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TextField
                fullWidth
                label="Upload Document"
                variant="outlined"
                disabled
                sx={{ mr: 2 }}
              />
              <Button
                variant="contained"
                startIcon={<CloudUpload />}
                color="success"
              >
                Upload Document
              </Button>
            </Box>
            <List>
              {['Contract.pdf', 'Agreement.docx', 'Statement.xlsx'].map(
                (doc, index) => (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <>
                        <IconButton edge="end" aria-label="download">
                          <Download />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                          <Delete />
                        </IconButton>
                      </>
                    }
                  >
                    <ListItemText primary={doc} />
                  </ListItem>
                )
              )}
            </List>
          </Paper>
        </Grid>

        {/* Messaging System */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Messaging System
            </Typography>
            <Box
              sx={{
                p: 2,
                border: '1px solid #ccc',
                borderRadius: '8px',
                minHeight: '100px',
                mb: 2,
                bgcolor: '#f7f7f7',
              }}
            >
              <Typography variant="body1">
                <strong>[Lawyer Name]:</strong> Please send over the updated
                documents.
              </Typography>
              <Typography variant="body1">
                <strong>[You]:</strong> Sure, I will upload them by tomorrow.
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Type a message"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
            >
              Send
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

