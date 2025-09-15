# Real-Time Video Call Application With Tons of Useful Features

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)  
[![Frontend](https://img.shields.io/badge/frontend-JavaScript%20%7C%20HTML%20%7C%20CSS-blue)](#frontend)  
[![Backend](https://img.shields.io/badge/backend-Node.js%20%7C%20Express-orange)](#backend)

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation & Setup](#installation--setup)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Configuration](#configuration)  
- [Contributing](#contributing)  
- [License](#license)  
- [Acknowledgements](#acknowledgements)

---

## About

This is a **Real-Time Video Call Application** built to include a variety of useful features. The app provides real-time video communication between users, possibly with enhancements such as mute/unmute, camera on/off, chat, screen sharing, etc. It's divided into frontend and backend components.

Live demo (Backend):  
[real-time-vedio-call-app-backend.vercel.app](https://real-time-vedio-call-app-backend.vercel.app) :contentReference[oaicite:0]{index=0}

---

## Features

Here are some of the notable features:  

- Real-time video and audio calling  
- Mute / Unmute microphone  
- Enable / Disable camera  
- Text chat alongside video call  
- Screen sharing option  
- Responsive UI  
- Support for multiple users (depending on implementation)  

*(Modify this list if there are more or fewer features in your project.)*

---

## Tech Stack

| Component | Technologies |
|-----------|---------------|
| Frontend  | JavaScript, HTML, CSS |
| Backend   | Node.js, Express (or whatever framework you used) |
| WebRTC / Socket / Signaling | (if used) e.g. WebRTC, Socket.io |
| Deployment | Vercel (for backend), … |

---

## Getting Started

### Prerequisites

These are the things you’ll need to have installed:

- Node.js (v14 or higher)  
- npm or yarn  
- Git  

### Installation & Setup

1. Clone the repo  
   ```bash
   git clone https://github.com/LokeshVerma54001/Real-Time-Vedio-Call-Application-With-Tons-of-Usefull-Features.git
Navigate into backend directory and install dependencies

bash
Copy code
cd Real-Time-Vedio-Call-Application-With-Tons-of-Usefull-Features/backend
npm install
Navigate into frontend directory and install dependencies

bash
Copy code
cd ../frontend
npm install
Configuration:

Create .env files if necessary (for API keys, signaling server URL, etc.)

Set environment variables (e.g. SERVER_URL, PORT, etc.)

Running the app locally:

bash
Copy code
# Backend
cd backend
npm run start

# Frontend (in another terminal)
cd frontend
npm run start
Usage
Open the frontend in your browser (typically at http://localhost:3000)

You should be able to join or start a video call, invite others, mute/unmute, toggle camera, chat, etc.

Use screen sharing feature if available.

(Adjust exact usage based on the UI & features.)

Folder Structure
Here’s a suggested folder structure (adjust if your repo differs):

pgsql
Copy code
/Real-Time-Vedio-Call-Application-With-Tons-of-Usefull-Features
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   ├── server.js (or index.js)
│   └── … other backend files
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── … other frontend files
│   └── … other frontend-specific files
├── .gitignore
└── README.md
Configuration
If there are configuration settings (API endpoints, environment variables, port numbers, etc.), mention them here. For example:

Variable	Description	Example
PORT	Port on which backend server runs	5000
SIGNALING_SERVER_URL	URL for websocket/signaling server	wss://your-signaling-server.com
Others	…	…

Contributing
Thank you for considering contributing! Here’s how you can help:

Fork the repo

Create your feature branch:

bash
Copy code
git checkout -b feature/YourFeatureName
Commit your changes:

bash
Copy code
git commit -m "Add some feature"
Push to the branch:

bash
Copy code
git push origin feature/YourFeatureName
Open a Pull Request

Review & discuss if needed

Make sure your code follows the style of the project, you test your changes, and update documentation if you added or changed features.

License
This project is licensed under the MIT License ‒ see the LICENSE file for details.

Acknowledgements
Thanks to any libraries, tutorials, people that helped

Icons, design assets, etc.

Inspiration: (if your project was inspired by another project)

