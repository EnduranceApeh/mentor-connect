# 🚀 Mentor Connect

Mentor Connect is a role-based mentorship platform that connects mentees with experienced tech mentors.  
The platform allows mentees to discover mentors, send mentorship requests, and track request status, while mentors can manage their profiles and respond to incoming requests.

---

## 📌 Problem It Solves

Breaking into tech can be overwhelming without proper guidance.  
Mentor Connect provides:

- A structured way for mentees to find mentors
- A request-based mentorship system
- A secure way to share contact information only after approval
- A simple dashboard experience for both mentors and mentees

---

## ✨ Features

### 🔐 Authentication & Authorization
- Firebase Authentication
- Role-based access (Mentor / Mentee)
- Protected routes
- Auto-redirect based on user role

---

### 👨‍🎓 Mentee Features
- Browse available mentors
- View mentor profiles (skills, bio, experience)
- Send mentorship request
- Track request status (Pending / Accepted / Rejected)
- See mentor email only after request is accepted

---

### 👨‍🏫 Mentor Features
- Edit profile (Basic Info, Skills, Social Links)
- Dynamically add/remove skills
- View incoming mentorship requests
- Accept or reject requests
- Email becomes visible to mentee only after acceptance

---

### 📱 Responsive UI
- Mobile-first design
- Collapsible sidebar on smaller screens
- Fully responsive layouts across devices

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Backend / Database:** Firebase
  - Firebase Authentication
  - Firestore Database

---

---

## 🔒 Email Privacy Logic

Mentor email addresses are hidden by default.

- If request status is **pending** → show placeholder message.
- If request status is **accepted** → show success message + mentor email.
- If rejected → display rejection message.

This ensures privacy and controlled access.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mentor-connect.git
cd mentor-connect

### Inatll Dependencies and Run App
npm install
npm run dev