<h1><img src="./frontend/public/Logo.png" width="45px" valign="middle"/> Textory - Real-time Chat Application</h1>

<h2>Textory - Stay Connect</h2>

### Textory is a real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js), integrated with Socket.IO for live messaging. The frontend uses React, Tailwind CSS and DaisyUI, with Zustand for state management. Users can create accounts, login, and chat in real time with other users. Additionally, Textory comes with 35 pre-integrated UI themes, allowing users to personalize their chat interface for a richer and more interactive experience.

<h3><a href="https://textory.vercel.app/" rel="noopener noreferrer" target="_blank"><img src="./frontend/public/Logo.png" width="25px" valign="middle"/> Textory Live Link: https://textory.vercel.app</a></h3>

## Features

<h3>
<ul align="left">
<li>Real-time chat using Socket.IO</li>
<li>Global state management using Zustand</li>
<li>Profile management for users</li>
<li>User authentication with JWT tokens</li>
<li>Secure password storage using bcrypt</li>
<li>Cloudinary integration for storing images</li>
<li>Responsive UI built with Tailwind CSS & DaisyUI</li>
<li>Functionality for checking current online users</li>
<li>35 pre-integrated UI themes to personalize the UI/UX</li>
</ul>
</h3>

## Tech Stack

<h3>
<ul>
<li>Frontend: React, Tailwind CSS, DaisyUI, Zustand, React Router, Socket.IO Client</li>
<li>Backend: Node.js, Express.js, MongoDB, Mongoose, Socket.IO Server, JWT</li>
<li>Other tools: Axios, React Hot Toast, Lucide React, React Icons, dotenv, etc</li>
</ul>
</h3>

## Installation

### Textory Installation

```
git clone <textory-repo-url>
```

<p align="center">OR</p>

```
git clone https://github.com/OmkarArdekar12/Textory.git
```

### Backend Setup

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

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

### Configuration

##### 1. Create a `.env` file in the backend folder with the following keys:

```
PORT=5001 or your_port
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_CLOUD_API_KEY=your_api_key
CLOUDINARY_CLOUD_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:5173 or your_frontend_url
NODE_ENV=development or production in deployment (optional)
```

##### Create a `.env` file in the backend folder with the following keys:

```
BACKEND_URL=http://localhost:5001 or your_backend_url
```

<br>
<br>
<hr>
