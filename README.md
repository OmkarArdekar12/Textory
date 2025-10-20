# Textory - Real-time Chat Application

---

<h2><a href="https://textory.onrender.com" rel="noopener noreferrer" target="_blank">Textory - Stay Connect</a></h2>

### Textory is a real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js), integrated with Socket.IO for live messaging. The frontend uses React, Tailwind CSS and DaisyUI, with Zustand for state management. Users can create accounts, login, and chat in real time with other users. Additionally, Textory comes with 35 pre-integrated UI themes, allowing users to personalize their chat interface for a richer and more interactive experience.

<h3><a href="https://textory.onrender.com" rel="noopener noreferrer" target="_blank">Live Link: https://textory.onrender.com</a></h3>

## Features

<ul align="left">
<li><b>Real-time chat using Socket.IO</b></li>
<li><b>Global state management using Zustand</b></li>
<li><b>Profile management for users</b></li>
<li><b>User authentication with JWT tokens</b></li>
<li><b>Secure password storage using bcrypt</b></li>
<li><b>Cloudinary integration for storing images</b></li>
<li><b>Responsive UI built with Tailwind CSS & DaisyUI</b></li>
<li><b>Functionality for checking current online users</b></li>
<li><b>35 pre-integrated UI themes to personalize the UI/UX</b></li>
</ul>

## Tech Stack

- Frontend: React, Tailwind CSS, DaisyUI, Zustand, React Router, Socket.IO Client
- Backend: Node.js, Express.js, MongoDB, Mongoose, Socket.IO Server, JWT
- Other tools: Axios, React Hot Toast, Lucide React, React Icons, dotenv, etc

## Installation

### Textory

```
git clone <textory-repo-url>
```

<p align="center">OR</p>

```
git clone https://github.com/OmkarArdekar12/Textory.git
```

### Backend

```
cd backend
npm install
npm run dev   # runs the server with nodemon in development mode
```

<p align="center">OR</p>

```
cd backend
npm i
npm start
```

### Frontend

```
cd frontend
npm install
npm run dev
```

### Configuration

1. Create a .env file in the backend folder with the following keys:

```
PORT=5001 or your_port
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_CLOUD_API_KEY=your_api_key
CLOUDINARY_CLOUD_API_SECRET=your_api_secret
NODE_ENV=development or your_mode
```

2. Update the frontend API base URL in '/frontend/src/lib/axios.js' and '/frontend/src/store/useAuthStore.js' files.

<br>
<br>
<hr>
