# 🏢 Employee Management System (EMS)

A **full-stack Employee Management System** built using the **MERN stack** with **role-based authentication**.  
The system provides separate dashboards for **Admin** and **Employees**, enabling task assignment, tracking, and management in a real-world workflow.

---

## 🌐 Live Demo

- **Frontend (Vercel)**  
  🔗 https://employee-management-system-fagb.vercel.app/

- **Backend API (Render)**  
  🔗 https://employee-management-system-tpf9.onrender.com

- **GitHub Repository**  
  🔗 https://github.com/RizakSingh/Employee-management-system-

---

## 🚀 Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (`admin`, `employee`)
- Protected routes
- Secure password hashing

### 👨‍💼 Admin Dashboard
- Create employees
- Assign tasks to employees
- View all tasks
- Manage employee workload
- Centralized admin panel

### 👩‍💻 Employee Dashboard
- View assigned tasks
- Track personal tasks
- Task statistics overview

### 🎨 UI & UX
- Responsive design using **Tailwind CSS**
- Clean dashboard layout
- Modern gradient-based UI

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- bcrypt / bcryptjs

### Deployment
- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

---

## 📂 Project Structure

Employee-management-system/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── server.js
│
├── src/
│ ├── components/
│ │ ├── auth/
│ │ ├── Dashboard/
│ │ ├── others/
│ │ └── TaskList/
│ ├── context/
│ ├── api/
│ ├── assets/
│ ├── App.jsx
│ └── main.jsx
│
└── README.md


---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Frontend (.env)
VITE_API_BASE_URL=https://employee-management-system-tpf9.onrender.com/api


⚠️ Never push .env files to GitHub

▶️ Getting Started (Local Setup)
1️⃣ Clone the repository
git clone https://github.com/RizakSingh/Employee-management-system-.git
cd Employee-management-system-

2️⃣ Backend Setup
cd backend
npm install
npm start


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔑 Authentication Flow

Authentication is role-based

JWT token is stored on the client

UI renders dashboards based on user role

Admin

Can create employees

Can assign and manage tasks

Employee

Can view assigned tasks

Can track task progress

👨‍💼 Admin Credentials (Testing)

⚠️ Admin role is hardcoded for testing purposes

Admin credentials are defined in the backend logic for development/testing.

⚠️ In production, admin creation should be handled securely via database or admin-only routes.

📌 Key Learnings & Concepts

Role-based authentication system

JWT implementation

Context API for global state management

RESTful API design

Case-sensitive imports in production (Linux deployment)

Full deployment pipeline using Vercel & Render

🧪 Future Improvements

Task status updates (Completed / In Progress)

Admin analytics dashboard

Pagination & search

Email notifications

Role-based permissions enhancement

👨‍💻 Author

Rizak Singh
Full-Stack MERN Developer
