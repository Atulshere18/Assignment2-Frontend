

````markdown
# Frontend - Student Management System

This is the frontend part of the Student Management System. The project allows administrators to manage student records, including creating, reading, updating, and deleting (CRUD) operations for students. The frontend is built using React, Material-UI, and Axios for making API requests.

## Features

- **Login/Registration**: Users can log in or register to access the application.
- **Dashboard**: The dashboard displays the list of students and allows CRUD operations.
- **Student CRUD**: Users can:
  - **Add** new students.
  - **Edit** existing student details.
  - **Delete** students.
- **Role-based Authentication**: Admin users can perform CRUD operations, while regular users have read-only access.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A UI framework for React to speed up the development of clean and responsive designs.
- **Axios**: A promise-based HTTP client for making API requests to the backend.
- **React Router**: For navigating between different pages in the application.
- **JWT Authentication**: JSON Web Tokens for securing the routes.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Atulshere18/Assignment2-Frontend.git
````

2. **Navigate to the `frontend` Directory**:

   ```bash
   cd frontend
   ```

3. **Install Dependencies**:

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

4. **Set up Environment Variables**:

   You may need to set up an `.env` file for your API endpoint if it’s different from the default.

   Example `.env` file:

   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

   This will ensure that Axios knows where to send requests.

5. **Run the Application**:

   Start the development server by running:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Folder Structure

Here is the basic folder structure of the frontend:

```
frontend/
├── node_modules/               # Node.js modules
├── public/                     # Static files like index.html
│   └── index.html
├── src/                        # Source files
│   ├── components/             # Reusable UI components
│   ├── pages/                  # Page components (e.g., Dashboard, Login, Register)
│   ├── services/               # API calls using Axios
│   ├── App.js                  # Main React component
│   ├── App.css                 # Styles for the app
├── package.json                # Project metadata and dependencies
└── .gitignore                  # Files to ignore by Git
```

### Key Components

* **LoginPage**: Component responsible for user login.
* **RegisterPage**: Component for registering a new user.
* **DashboardPage**: Displays the student list and allows CRUD operations.
* **StudentFormPage**: Form for adding or editing a student.

## API Integration

The frontend communicates with the backend using **Axios** to perform CRUD operations.

* **Login API**: POST request to `/api/auth/login` for user login.
* **Student CRUD APIs**: The `GET`, `POST`, `PUT`, and `DELETE` methods interact with `/api/students`.

### Example Axios Request

```js
// In your services/StudentService.js file
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const getStudents = async (token) => {
  const response = await axios.get(`${API_URL}/students`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
```

## Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch**: `git checkout -b feature/your-feature-name`
3. **Make Changes** and Commit: `git commit -am 'Add new feature'`
4. **Push to Your Branch**: `git push origin feature/your-feature-name`
5. **Create a Pull Request**.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to customize the sections as needed. Add any extra details, such as known issues, credits, etc., based on the project’s requirements.

### Key Sections:

1. **Features**: Lists the key features of the frontend.
2. **Technologies Used**: Lists the tools and technologies used in the project.
3. **Installation**: Provides instructions on how to set up the project locally.
4. **Folder Structure**: Shows the folder organization of the frontend project.
5. **API Integration**: Provides information on how the frontend communicates with the backend.
6. **Contributing**: Gives instructions for developers who want to contribute to the project.

Let me know if you need any modifications or additions!
