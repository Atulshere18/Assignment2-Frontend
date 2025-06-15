import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { Container } from '@mui/material';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import StudentsPage from './pages/StudentsPage';
import AddStudentPage from './pages/AddStudentPage';
import EditStudentPage from './pages/EditStudentPage';
function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Container maxWidth="sm">
        <Routes>
          <Route path="/login" element={<LoginPage setUserToken={setUserToken} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={userToken ? <DashboardPage /> : <LoginPage setUserToken={setUserToken} />} />
           <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/add" element={<AddStudentPage />} />
        <Route path="/students/edit/:id" element={<EditStudentPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
