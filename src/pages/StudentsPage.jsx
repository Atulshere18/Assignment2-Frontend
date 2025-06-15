import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        });
        if (Array.isArray(response.data)) {
          setStudents(response.data);
        } else {
          console.error('Expected an array, but got:', response.data);
          setStudents([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        setStudents([]);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      });
      setStudents(students.filter(student => student._id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;  
  }

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f4f6f9' }}>
      <Typography variant="h4" gutterBottom>Students List</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/students/add')}>
        Add Student
      </Button>

      <Grid container spacing={3} sx={{ marginTop: '20px' }}>
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
                    <Button size="small" onClick={() => navigate(`/students/edit/${student._id}`)}>Edit</Button>
                    <Button size="small" onClick={() => handleDelete(student._id)} color="error">Delete</Button>
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
  );
}

export default StudentsPage;
