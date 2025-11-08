<h1><img src="./frontend/public/Logo.png" width="45px" valign="middle"/> Textory - Real-time Chat Application</h1>

<div>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge&logo=zustand&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
<img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white"/>
<img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</div>

<h2>Textory - Stay Connect</h2>

### Textory is a real-time chat application built using the MERN Stack (MongoDB, Express.js, React, Node.js) and powered by Socket.IO for live two-way communication. <br>It allows users to create accounts, log in securely, and chat instantly with others in real time. <br>The frontend is developed with React, styled using Tailwind CSS and DaisyUI, while Zustand efficiently manages global state. <br>Users can also customize their chat interface with 35 pre-integrated UI themes, enhancing personalization and user engagement. <br>Cloudinary is integrated for image storage, and JWT authentication ensures secure communication between client and server. <br>Textory offers a modern, fast, and responsive experience for staying connected anytime, anywhere.

#### Textory = Text + Story <br>It represents a platform where every conversation becomes a _story_ — a connection that continues to grow in real time.

<h2><a href="https://textory.vercel.app/" rel="noopener noreferrer" target="_blank">Textory  <img src="./frontend/public/Logo.png" width="25px" valign="middle"/> Live Link: https://textory.vercel.app</a></h2>

## Features

<h3>
<ul align="left">
<li>Real-time chat system using Socket.IO</li>
<li>Global state management using Zustand</li>
<li>Profile management for users</li>
<li>User authentication and secure sessions with JWT</li>
<li>Online users list - showing active users in real time</li>
<li>Password hashing and security using bcrypt</li>
<li>Cloudinary integration for storing images</li>
<li>Responsive and modern UI built with Tailwind CSS and DaisyUI</li>
<li>35 pre-integrated UI themes to personalize the UI/UX and chat experience</li>
<li>Deployed Backend on Render and Frontend on Vercel</li>
</ul>
</h3>

## Tech Stack

<h3>
<ul>
<li>Frontend: React, Socket.IO Client, Tailwind CSS, DaisyUI, Zustand, React Router, Axios, React Hot Toast, Lucide React, React Icons</li>
<li>Backend: Node.js, Express.js, MongoDB, Mongoose, Socket.IO, JWT</li>
<li>Authentication & Security: JWT, bcryptjs, cookie-parser, dotenv</li>
<li>State Management: 35 UI Themes, Responsive Design</li>
<li>UI/UX Enhancements: Zustand</li>
<li>Deployment: Render (Backend), Vercel (Frontend)</li>
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
VITE_BACKEND_URL=http://localhost:5001 or your_backend_url
```

<hr>
<br>
<br>

<!-- ### Textory is a real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js), integrated with Socket.IO for live messaging. The frontend uses React, Tailwind CSS and DaisyUI, with Zustand for state management. Users can create accounts, login, and chat in real time with other users. Additionally, Textory comes with 35 pre-integrated UI themes, allowing users to personalize their chat interface for a richer and more interactive experience. -->
