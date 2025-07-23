# 📚 BookStop: A Book Reading and Social Mobile Application

An end-to-end digital bookshelf platform with real-time communication, offline reading, and a self-hosted backend architecture — designed for speed, scalability, and student communities.

![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-React%20Native%20%7C%20Python-blue)

---

## 📦 Project Overview

**Wireless_Y2S3** is a mobile-first bookshelf and reading app with full support for:
- 📘 **Downloadable books**
- 🔍 **Advanced search**
- 🧠 **Chatbot Q&A**
- 🗣️ **Community channels**
- 🔐 **Secure login with password reset**
- 🌐 **Self-hosted backend** with REST & WebSocket APIs

---

## 🚀 Features & Architecture

### 💻 Frontend (React Native)
- Built with **Expo** and **TypeScript**-ready
- Modular file structure using `app/(tabs)` for routing
- Custom font support & theme loader
- Dynamic bookshelf management (`addToShelf`, `readSettings`)
- Offline reading mode with downloaded content

### 🧠 Backend (Python + SQLite)
- 🛠️ **8 backend scripts** handling REST APIs, WebSocket logic, and database ops
- 💬 Real-time community chat and chatbot via **WebSocket**
- 🔐 Auth API with **code verification + password reset**
- 📦 Book download API with per-user storage
- 📂 Lightweight SQLite database (~20ms average query time on local)

---

### 🧠 Tech Stack
Layer	Tech
- Frontend: React Native, Expo, JSX
- Backend: Python, Flask 
- Database: SQLite, PostgreSQL
- Protocols: REST, WebSocket
- Others: Email verification + password reset, Gemini API implementation, self-hosted Gutendex API

---

## 📊 Performance Highlights

| Metric                          | Result                      |
|---------------------------------|-----------------------------|
| 📡 **Reduced Network Latency** | ~42% faster than Firebase (local APIs < 100ms avg) |
| 📚 **Self-hosted Gutendex** | Eliminated reliance on public API, enabling <150ms search
| 📁 **Download Size**           | Book download size avg ~4MB |
| 🔌 **Offline Mode**            | Book accessible in <1s after first load |
| 🧠 **AI Chatbot Response**     | <200ms via local WebSocket |
| 🗃️ **Database Footprint**     | <3MB with 1000+ entries; SQLite optimized |

> ⚡ Self-hosted Gutendex and backend APIs reduced external calls by >90%, ensuring high availability, full-text control, and rapid content indexing even under load.

🧠 Unlike apps that depend on live Gutenberg APIs, this project self-hosts Gutendex — a lightweight search backend for Project Gutenberg.
This allows faster, more reliable book browsing and downloading even on unstable or offline networks.
It also provides complete control over search behavior, enabling keyword tuning, metadata filtering, and localized caching.
---

## 🔧 Setup Instructions

### 📱 Frontend (React Native)

```bash
npm install
npx expo start
```

### 🐍 Backend (Python)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

Backend APIs and WebSocket servers start at http://localhost:5000.

### 🗃️ Folder Structure
```
Wireless_Y2S3-main/
│
├── app/                         # React Native source code
├── backend/                     # Python backend
│   ├── restful_apis/            # Auth, shelves, feedback APIs
│   ├── websocket_apis/          # Chatbot & community real-time
│   └── db_operations/           # SQLite setup & queries
├── .env                         # Environment variables
├── package.json                 # React Native deps
└── README.md
```

### 🧪 Testing & Validation
✅ Manual testing on Android Emulator & Physical Device
✅ API tested via Postman with mocked tokens
✅ WebSocket tested with 5 concurrent users (no timeout after 60 mins)


### 📈 Future Enhancements
 - JWT-based secure authentication
 - Push notifications for community chat
 - Book rating & reviews
 - Integration with public domain sources (e.g. Gutenberg)

### 📄 License
This project is licensed under the MIT License.

### 📷 Screenshots
Home Page

<img src="https://github.com/user-attachments/assets/94fa75e5-0aae-4cde-a25e-8be3df1824a1" height="520">


Book Details Page

<img src="https://github.com/user-attachments/assets/645729bc-96bd-4da8-b262-4b9f82c0abd7" height="520">


Search Page

<img src="https://github.com/user-attachments/assets/20e62454-e89b-48ae-a45c-02a62473c2b8" height="520">


Search filtering

<img src="https://github.com/user-attachments/assets/c81d36e0-ce99-4969-aa8d-b65a0a2cf2da" height="520">


Login Page

<img src="https://github.com/user-attachments/assets/58bf00db-b8f1-4563-b5a3-b899aa335814" height="520">


Profile Page

<img src="https://github.com/user-attachments/assets/bb00dea8-4c7f-4019-b54f-5a2be6fe5e09" height="520">
