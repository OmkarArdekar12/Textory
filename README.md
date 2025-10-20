# Textory - Real-time Chat Application

---

## Textory - Stay Connect

### Textory is a real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js), integrated with Socket.IO for live messaging. The frontend uses Tailwind CSS and DaisyUI, with Zustand for state management. Users can create accounts, login, and chat in real time with other users.

## Features

- Real-time chat using Socket.IO
- Global state management using Zustand
- Profile management for users
- User authentication with JWT tokens
- Secure password storage using bcrypt
- Cloudinary integration for storing images
- Responsive UI built with Tailwind CSS & DaisyUI

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
