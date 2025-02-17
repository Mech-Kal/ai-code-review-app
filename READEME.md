# AI Code Review App

## Overview
This is a full-stack AI-powered code review application that allows users to enter code, send it to an AI model for analysis, and receive feedback in real time. The application uses **React.js** for the frontend and **Node.js with Express** for the backend, integrating an AI service for reviewing the code.

## Features
- Live code editing with syntax highlighting (Prism.js)
- AI-powered code review functionality
- Markdown-rendered feedback
- Modern UI with dark mode support

---

## Tech Stack
### **Frontend** (React.js)
- **React.js** (Vite-based setup)
- **React Simple Code Editor** (for editing code)
- **Prism.js** (for syntax highlighting)
- **React Markdown** (for rendering AI feedback)
- **Axios** (for API requests)
- **CSS** (for styling)

### **Backend** (Node.js + Express.js)
- **Express.js** (REST API setup)
- **dotenv** (to manage environment variables)
- **CORS** (Cross-Origin Resource Sharing)
- **Axios** (to communicate with AI services)

---

## Installation & Setup

### 1. **Clone the Repository**
```sh
git clone https://github.com/Mech-Kal/ai-code-review-app.git
cd ai-code-review-app
```
### 2. Backend Setup
```sh
cd server  # Navigate to the backend folder
npm install  # Install dependencies
```
#### Environment Variables (.env)
Create a .env file in the server directory and add:
```env
PORT=3000
GOOGLE_GEMINI_KEY=your-api-key-here
```
#### Run the Backend
```sh
npm start  # Starts the server on port 3000
```
### 3. Frontend Setup
```sh
cd ../client  # Navigate to frontend folder
npm install  # Install dependencies
```
#### Run the Frontend
```sh
npm run dev  # Starts the React app
```
## API Endpoints
#### POST /ai/get-review
* **Request Body:**
```json
{
  "code": "function sum() { return 1 + 1; }"
}
```
* **Response:**
```json
{
  "review": "Consider adding comments and handling edge cases."
}
```
## Folder Structure
```pgsql
.
├── client/        # Frontend React app
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/        # Backend Node.js app
│   ├── src/
│   │   ├── app.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```
## Future Enhancements
* **Authentication:** Add user login/signup functionality.
* **Multi-language support:** Enable AI reviews for multiple programming languages.
* **Database Integration:** Save user submissions and AI feedback.

## Author
👤 **Kalpak Kamble**

* **GitHub**: Mech-Kal
* **Email**: kalpak2002@gmail.com
## License
This project is open-source and available under the MIT License.

