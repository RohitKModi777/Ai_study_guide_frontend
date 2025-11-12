
# AI Study Guide Project

![Node.js](https://img.shields.io/badge/Backend-Node.js-green) ![React](https://img.shields.io/badge/Frontend-React-blue) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🚀 Overview

AI Study Guide is a full-stack web application that generates study summaries, quizzes, and tips for any topic using generative AI models. It is designed to help students and lifelong learners quickly understand and practice new concepts.

---

## ✨ Features

- Generate concise study summaries for any topic
- Auto-create quizzes and practice questions
- Math mode for math-specific content
- Study tips and best practices
- Switchable AI models (Gemini, Claude Haiku 4.5, etc.)
- Responsive, modern UI (React + TailwindCSS)
- Mock data fallback for offline/demo use

---

## 📦 Project Structure

```
frontend/         # React app (Vite, TailwindCSS)
  src/
    components/   # UI components (Quiz, Summary, etc.)
    hooks/        # Custom React hooks
    services/     # API calls to backend
  index.html      # Main HTML file
  ...

server/           # Node.js backend (Express)
  src/
    controllers/  # Route controllers
    middleware/   # Error handling
    routes/       # API endpoints
    services/     # AI and Wiki logic
    utils/        # Validation helpers
  .env            # Environment variables (API keys, model)
  ...
```

---

## 🛠️ Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)
- API key for your chosen AI model (Gemini, Claude, etc.)

---

## ⚡ Quick Start

### 1. Clone the repository
```powershell
git clone <repo-url>
cd ai_backend
```

### 2. Setup Backend
```powershell
cd server
cp .env.example .env   # Or create .env manually
npm install
npm run dev
```

### 3. Setup Frontend
```powershell
cd ../frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Edit `server/.env`:
```
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=your-model
PORT=BackendPORT
```
To use Claude Haiku 4.5, set:
```
GEMINI_MODEL=claude-haiku-4.5
```
and provide the correct API key if needed.

---

## 🧠 How It Works

- **Frontend**: Users enter a topic and select a mode. The app sends a request to the backend and displays the generated summary, quiz, and study tips.
- **Backend**: Receives requests, fetches Wikipedia data, and uses a generative AI model (Gemini by default) to create study content. If the AI API is unavailable, it returns mock data.

---

## 📡 API Endpoints

### `POST /api/study`

**Request Body:**
```json
{
  "topic": "Photosynthesis",
  "mode": "default" // or "math"
}
```

**Response Example:**
```json
{
  "summary": ["..."],
  "quiz": [
    {"question": "...", "options": ["..."], "correctAnswer": 0}
  ],
  "studyTip": "...",
  "mode": "default"
}
```

---

## 🔄 Switching AI Models

1. **Update Environment Variable**
   - Open `server/.env` and set:
     ```
     GEMINI_MODEL=
     ```
   - (If using a different provider, add the correct API key and variable.)

2. **Update Backend Logic (if needed)**
   - In `server/src/services/aiService.js`, ensure the model is set from the environment variable:
     ```js
     const GEMINI_MODEL = process.env.GEMINI_MODEL || '';
     model = genAI.getGenerativeModel({ model: GEMINI_MODEL });
     ```
   - No code change is needed if this is already present.

3. **Restart the Backend**
   - After changing `.env`, restart the backend server:
     ```powershell
     cd server
     npm run dev
     ```

4. **Verify**
   - Check backend logs for:
     ```
     ✅ Gemini AI initialized with model:
     ```
   - Use the frontend to generate study content and confirm the new model is used.

---

## 🧩 Customization
- Switch to any supported AI model by changing the environment variable and API key.
- Add more modes, quiz types, or study tips by editing backend service logic.

---

## 🛠️ Troubleshooting
- If the backend returns mock data, check your API key and model name in `.env`.
- For CORS or network errors, ensure both frontend and backend are running and ports match.
- Check backend logs for error messages.

---

## 🤝 Contributing
1. Fork this repo and clone your fork.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request.

---

## ❓ FAQ

**Q: Can I use OpenAI or Anthropic models?**
A: Yes, just update the backend logic and environment variables to use your preferred provider and model.

**Q: What if I get mock data?**
A: Check your API key and model name in `.env`. The backend uses mock data if the AI API is unavailable.

**Q: How do I add more quiz types?**
A: Edit the backend service logic in `server/src/services/aiService.js`.

---

## 👤 Credits
- Built by RohitKModi777
- Uses Google Gemini API (default) and can be extended to other AI models like Claude Haiku 4.5.

---

## 📄 License
MIT

## How It Works

- **Frontend**: Users enter a topic and select a mode (default or math). The app sends a request to the backend and displays the generated summary, quiz, and study tips.
- **Backend**: Receives requests, fetches Wikipedia data, and uses a generative AI model (Gemini by default) to create study content. If the AI API is unavailable, it returns mock data.

---

## AI Model Configuration

- The backend uses the Gemini model by default, controlled by the `GEMINI_MODEL` environment variable in `server/.env`.
- To enable a different model (e.g., Claude Haiku 4.5), update the environment variable and backend logic as needed.

### Example `.env` (backend)

```
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=your_model
PORT=5000
```

---

## How to Enable Claude Haiku 4.5 for All Clients

1. **Update Environment Variable**
   - Open `server/.env` and add or change:
     ```
     GEMINI_MODEL=your_model;
     ```
   - (If using a different provider, add the correct API key and variable.)

2. **Update Backend Logic (if needed)**
   - In `server/src/services/aiService.js`, ensure the model is set from the environment variable:
     ```js
     const GEMINI_MODEL = process.env.GEMINI_MODEL || '';
     // ...
     model = genAI.getGenerativeModel({ model: GEMINI_MODEL });
     ```
   - No code change is needed if this is already present.

3. **Restart the Backend**
   - After changing `.env`, restart the backend server:
     ```powershell
     cd server
     npm install
     npm run dev
     ```

4. **Verify**
   - Check the backend logs for:
     ```
     ✅ Gemini AI initialized with model: 
     ```
   - Use the frontend to generate study content and confirm the new model is used.

---

## Development & Run Instructions

### Backend
```powershell
cd server
npm install
npm run dev
```

### Frontend
```powershell
cd frontend
npm install
npm run dev
```

---

## Customization
- You can switch to any supported AI model by changing the environment variable and API key.
- Add more modes, quiz types, or study tips by editing the backend service logic.

---

## Troubleshooting
- If the backend returns mock data, check your API key and model name in `.env`.
- For CORS or network errors, ensure both frontend and backend are running and ports match.

---

## Credits
- Built by RohitKModi777
- Uses Google Gemini API (default) and can be extended to other AI models like Claude Haiku 4.5.

---

## License
MIT
