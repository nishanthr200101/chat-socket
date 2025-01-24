# Real-Time Chat Application

A full-stack real-time chat application built with React.js and Node.js, featuring real-time messaging capabilities.

## 🚀 Features

- Real-time messaging
- User authentication
- Message history
- Clean and intuitive UI
- Responsive design

## 🛠️ Technology Stack

### Frontend (Client)
- React.js
- WebSocket client
- Material UI/Styled Components
- React Router

### Backend (Server)
- Node.js
- Express.js
- WebSocket server
- MongoDB/Database of choice

## 📁 Project Structure

```
.
├── client/                 # React frontend
│   ├── src/               # Source files
│   ├── public/            # Static files
│   └── package.json       # Frontend dependencies
│
├── server/                # Node.js backend
│   ├── src/               # Source files
│   ├── config/            # Configuration files
│   └── package.json       # Backend dependencies
│
├── .gitignore            # Git ignore file
├── README.md             # Project documentation
└── package.json          # Root level dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd chat-application
```

2. Install frontend dependencies
```bash
cd client
npm install
```

3. Install backend dependencies
```bash
cd ../server
npm install
```

### Configuration

1. Create a `.env` file in the server directory:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

2. Create a `.env` file in the client directory:
```
REACT_APP_API_URL=http://localhost:5000
```

### Running the Application

1. Start the backend server
```bash
cd server
npm run dev
```

2. Start the frontend application
```bash
cd client
npm start
```

The application should now be running with:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

Your Name - [your.email@example.com]

Project Link: [https://github.com/yourusername/chat-application]

