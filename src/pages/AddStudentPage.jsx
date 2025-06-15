import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddStudentPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/students', { name, age, grade }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      });
      navigate('/students');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Add New Student</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Grade"
          variant="outlined"
          fullWidth
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
          sx={{ marginBottom: '20px' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Student
        </Button>
      </form>
    </Box>
  );
}

export default AddStudentPage;
