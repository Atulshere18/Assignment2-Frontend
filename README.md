---

## Frontend

The frontend is built with **React** and uses **Material-UI** for the design components. It includes the following pages:

### **Login Page**:

* Users can log in with their credentials.
* JWT token is stored in `localStorage`.

### **Register Page** (Admin Only):

* Admin users can register new users with roles (admin or user).

### **Dashboard Page**:

* Display a summary and link to the student management system.

### **Student Management Page**:

* **List Students**: Displays students in a paginated list.
* **Add Student**: Admin can add new students.
* **Edit Student**: Admin can edit existing student details.
* **Delete Student**: Admin can delete students.

---

## Usage

1. **Login**:
   Navigate to the login page, enter your credentials, and get an authentication token.

2. **Register (Admin Only)**:
   Navigate to the register page and create new users.

3. **Dashboard**:
   After login, the admin or user will be redirected to the dashboard. Admins can manage students, while regular users can only view them.

4. **Student Management**:
   On the "Students" page, admins can:

   * Add a student.
   * Edit an existing student's details.
   * Delete a student.

5. **Pagination**:
   The list of students is paginated. Users can navigate between pages to view more students.

---

## Technologies

* **Frontend**: React, Axios, Material-UI
* **Backend**: Node.js, Express, JWT, MongoDB
* **Database**: MongoDB
* **Authentication**: JWT-based authentication

---

## Troubleshooting

* **CORS Issues**: If you're running the frontend and backend on different ports, you might encounter CORS issues. Ensure that you have configured CORS properly in your backend.

  ```bash
  npm install cors
  ```

  And in your backend:

  ```javascript
  const cors = require('cors');
  app.use(cors());
  ```

* **JWT Token Expiry**: If you receive an authentication error, ensure the token is valid and not expired. You may need to re-login to get a new token.

---

## Contributing

Feel free to contribute by submitting issues, suggestions, or pull requests. Please ensure to follow the project structure and add tests if you're submitting any fixes or features.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
