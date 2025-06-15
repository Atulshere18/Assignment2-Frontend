import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditStudentPage() {
  const { id } = useParams();  
  const [student, setStudent] = useState({ name: '', age: '', grade: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/students/${id}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        });
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${id}`, student, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      });
      navigate('/students');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Edit Student</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          required
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          type="number"
          value={student.age}
          onChange={(e) => setStudent({ ...student, age: e.target.value })}
          required
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Grade"
          variant="outlined"
          fullWidth
          value={student.grade}
          onChange={(e) => setStudent({ ...student, grade: e.target.value })}
          required
          sx={{ marginBottom: '20px' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Update Student
        </Button>
      </form>
    </Box>
  );
}

export default EditStudentPage;
