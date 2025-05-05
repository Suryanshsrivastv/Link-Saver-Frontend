# Link Saver - Bookmark Manager

A modern, responsive web application for saving and organizing your bookmarks. Built with React and Node.js.

## 🚀 Features

- **User Authentication**: Secure signup and login functionality
- **Bookmark Management**: Add, view, and delete bookmarks
- **Responsive Design**: Fully responsive interface that works on all devices
- **Modern UI**: Clean and intuitive user interface with smooth animations
- **Secure**: JWT-based authentication and protected routes

## 🛠 Tech Stack

### Frontend
- React 18
- React Router v6
- Axios for API calls
- Custom CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Suryanshsrivastv/Link-Saver-Frontend
cd link-saver-proj
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend/link-saver-frontend
npm install

# Install backend dependencies
cd ../../backend
npm install
```
```
API_URL=https://link-saver-backend.onrender.com/api
```

## 🚀 Usage

1. Start the development server:
```bash
# Start frontend (from frontend directory)
npm run dev

# Start backend (from backend directory)
npm start
```

2. Open your browser and navigate to:
```
http://localhost:5173
```

## 🔒 Environment Variables

### Frontend
- `VITE_API_URL`: Backend API URL

### Backend
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT
- `PORT`: Server port (default: 5000)

## 📱 Features Overview

### User Authentication
- Secure signup with email validation
- JWT-based authentication
- Protected routes

### Bookmark Management
- Add bookmarks with automatic metadata fetching
- View all saved bookmarks
- Delete unwanted bookmarks
- Responsive grid layout

## 🎨 UI Components

- Modern card-based design
- Gradient accents
- Responsive navigation
- Loading states
- Error handling
- Form validation

## 🔐 Security Features

- JWT token validation
- Protected API endpoints
- Secure password handling
- Input validation
- CORS protection

## 🌐 Deployment

The application is deployed using:
- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Authors

- Initial work - [Suryansh Shrivastava]

## 🙏 Acknowledgments

- React documentation
- MongoDB documentation
- Render and Netlify for hosting
