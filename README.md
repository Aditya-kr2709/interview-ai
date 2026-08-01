# GENAI - AI Mock Interview Platform

GENAI is a full-stack AI-powered interview preparation platform designed to help students and professionals practice interviews, receive AI-generated feedback, and track their performance over time.

## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 🤖 AI-generated interview questions
- 💬 Interactive mock interview sessions
- 📊 AI-powered interview evaluation
- 📝 Personalized interview reports
- 📚 Interview history management
- 📱 Responsive user interface

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- SCSS
  

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
  

### AI
- AI API Integration for generating interview questions and evaluating responses

## 📂 Project Structure

```
GENAI/
│
├── FRONTEND/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── services/
│   └── server.js
│
├── package.json
└── .env
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/<your-username>/GENAI.git
```

### Install backend dependencies

```bash
npm install
```

### Install frontend dependencies

```bash
cd FRONTEND
npm install
```

### Configure environment variables

Create a `.env` file in the backend directory and add:

```
PORT=5000
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
AI_API_KEY=your_api_key
```

### Run Backend

```bash
npm run dev
```

### Run Frontend

```bash
cd FRONTEND
npm run dev
```

## 🎯 Future Improvements

- Voice-based interviews
- Video interview support
- Resume analysis
- Interview analytics dashboard
- Coding interview support
- Multiple AI models
