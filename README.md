# Aptiq - Doctor Appointment Booking System

Aptiq is a full-stack doctor appointment booking platform built with the MERN stack (MongoDB, Express, React, Node.js), Vite, and Tailwind CSS. The application is split into three main modules: a user-facing booking portal, an administrative/doctor dashboard, and a secure REST API backend.

## Project Structure

- **`/frontend`**: The client-side application for patients to view available doctors, book appointments, make payments via Razorpay, and manage their profiles.
- **`/admin`**: The administration panel for administrators and doctors to manage listings, track appointments, set doctor availability, and view dashboard analytics.
- **`/backend`**: The Express API server handling MongoDB database connections, JWT-based authentication, doctor/patient profiles, payment verification, and image uploads (using Cloudinary).

---

## Live Deployments

You can access the live instances of the project below:

* **Patient Portal (Frontend)**: `[Insert Live Frontend Link Here]`
* **Admin & Doctor Dashboard**: `[Insert Live Admin Link Here]`  *(e.g., https://your-admin-panel.vercel.app)*
* **API Server (Backend)**: [https://aptiq-4guo.onrender.com/](https://aptiq-4guo.onrender.com/)

---

## How to Run Locally

### 1. Backend Setup
1. Navigate to `/backend`:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `/backend` directory and add your credentials:
   ```env
   MONGODB_URI=your_mongodb_uri
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   JWT_SECRET=your_jwt_secret
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=your_admin_password
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```
4. Start the server:
   ```bash
   npm run server
   ```

### 2. Frontend Setup
1. Navigate to `/frontend`:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `/frontend`:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

### 3. Admin Panel Setup
1. Navigate to `/admin`:
   ```bash
   cd ../admin
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `/admin`:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

---

## Technologies Used

- **Frontend & Admin**: React 19, Vite, Tailwind CSS, React Router DOM, Axios, React Toastify
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JSON Web Tokens (JWT), Cloudinary, Multer, Razorpay, Validator
