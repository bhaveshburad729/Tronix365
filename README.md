# Tronix365 - Advanced Embedded & IoT Internship Platform

## 🚀 Overview
**Tronix365** is a state-of-the-art event registration and management platform designed for the "40-Day Embedded & IoT Internship Program". This full-stack application provides a seamless experience for students to enroll, pay, and secure their seats in real-time.

Built with performance, security, and user experience in mind, the platform features a dynamic pricing engine, real-time seat tracking, and secure payment integration.

**Founder & CEO:** Shubham Ubale

---

## ✨ Key Features

### 🎨 Frontend (Client-Side)
-   **Modern UI/UX**: Built with **React + Vite** and styled with **Tailwind CSS** for a premium, dark-themed aesthetic.
-   **Responsive Design**: Fully optimized for all devices (Mobile, Tablet, Desktop).
-   **Real-Time Seat Counter**: Uses Server-Sent Events (SSE) to show live seat availability.
-   **Dynamic Pricing**:
    -   **Super Early Bird**: First 10 registrations @ ₹6,000.
    -   **Standard**: Remaining seats @ ₹10,000.
-   **Integrated Payment Gateway**: Seamless checkout experience using **Razorpay**.

### ⚙️ Backend (Server-Side)
-   **High-Performance API**: Powered by **FastAPI** (Python) for lightning-fast response times.
-   **Database**: **PostgreSQL** for robust data management (Users, Seats, Payments).
-   **Security**:
    -   Payment Signature Verification (Anti-Tamper).
    -   CORS & Trusted Host Protection.
    -   SQL Injection Protection via SQLAlchemy.
-   **Automated Emails**: Sends instant confirmation emails with payment receipts upon successful enrollment.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js, Vite, Tailwind CSS, Axios, Framer Motion |
| **Backend** | FastAPI, Python, Uvicorn |
| **Database** | PostgreSQL, SQLAlchemy |
| **Payments** | Razorpay API |
| **Real-Time** | Server-Sent Events (SSE) |
| **Deployment** | Render / Vercel |

---

## 🚀 Installation & Setup

### Prerequisites
-   Node.js & npm
-   Python 3.8+
-   PostgreSQL

### 1. Clone the Repository
```bash
git clone https://github.com/bhaveshburad729/tronix365.git
cd tronix365
```

### 2. Backend Setup
```bash
cd backend
python -m venv venv
# Windows
.\venv\Scripts\activate
# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
```
**Configure Environment Variables:**
Create a `.env` file in the `backend` folder:
```env
DATABASE_URL=postgresql://user:password@localhost/tronix365
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```
**Run Server:**
```bash
uvicorn app.main:app --reload
```

### 3. Frontend Setup
```bash
cd ..
npm install
```
**Configure Environment:**
Create a `.env` file in the root folder:
```env
VITE_API_URL=http://localhost:8000
```
**Run Client:**
```bash
npm run dev
```

---

## 🔒 Security Measures
-   **Environment Variables**: Sensitive keys are never hardcoded.
-   **Atomic Transactions**: Prevents race conditions during seat booking.
-   **Input Validation**: Pydantic schemas ensure data integrity.

---

## 📞 Contact
**Shubham Ubale**
*Founder & CEO, Tronix365*

-   📍 **Address**: Tronix365, near Stanza living, behind Datta Mandir, Vadgaon Budruk, Pune, Maharashtra 411041
-   📧 **Email**: shubham.tronix365@gmail.com
-   📱 **Phone**: +91 88301 53805

---
&copy; 2025 Tronix365. All Rights Reserved.

**Developed by BHAVESH BURAD**
