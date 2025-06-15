import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DashboardPage() {
  const [students, setStudents] = useState([]);
  const [studentStats, setStudentStats] = useState({ total: 0, new: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        });
        setStudents(response.data);
        setStudentStats({
          total: response.data.length,
          new: response.data.filter(student => new Date(student.createdAt).getFullYear() === new Date().getFullYear()).length,
        });
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudentData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: '250px',
          backgroundColor: '#1976d2',
          color: 'white',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h5" gutterBottom>
            Admin Dashboard
          </Typography>
          <Divider sx={{ marginBottom: '20px' }} />
          <Button
            variant="text"
            fullWidth
            sx={{ color: 'white', marginBottom: '10px' }}
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </Button>
          <Button
            variant="text"
            fullWidth
            sx={{ color: 'white', marginBottom: '10px' }}
            onClick={() => navigate('/students')}
          >
            Students
          </Button>
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ marginTop: 'auto' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: '20px', backgroundColor: '#f4f6f9' }}>
        {/* Topbar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="h4">Dashboard</Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3}>
          {/* Total Students */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Total Students
                </Typography>
                <Typography variant="h4">{studentStats.total}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* New Students This Year */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  New Students (2023)
                </Typography>
                <Typography variant="h4">{studentStats.new}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Students Table */}
        <Box sx={{ marginTop: '30px' }}>
          <Typography variant="h6" gutterBottom>
            Student List
          </Typography>
          <Grid container spacing={2}>
            {Array.isArray(students) && students.length > 0 ? (
              students.map((student) => (
                <Grid item xs={12} md={6} key={student._id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{student.name}</Typography>
                      <Typography color="textSecondary">{student.age} years old</Typography>
                      <Typography variant="body2" color="textSecondary">{student.grade}</Typography>
                      <Divider sx={{ marginTop: '10px' }} />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <Button size="small" onClick={() => alert(`Edit ${student.name}`)}>Edit</Button>
                        <Button size="small" onClick={() => alert(`Delete ${student.name}`)} color="error">
                          Delete
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography>No students found.</Typography>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardPage;
