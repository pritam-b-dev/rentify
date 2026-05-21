# 🚗 Rentify — Car Rental Platform

A modern car rental platform where users can browse, book, and manage car rentals with ease.

🌐 **Live Site:** [https://rentify-blond-chi.vercel.app](https://rentify-blond-chi.vercel.app)

---

## ✨ Features

- 🔍 **Search & Filter** — Search cars by name using MongoDB `$regex` and filter by car type in real time
- 🔐 **Secure Authentication** — Email/password and Google OAuth login powered by BetterAuth with JWT verification
- 📅 **Smart Booking System** — Book cars with start/end date selection, optional driver, and automatic total price calculation
- 🚘 **My Added Cars** — Logged-in users can add their own cars and manage them separately
- 📋 **My Bookings** — Users can view all their bookings with car details, duration, and total cost
- 🔒 **Protected APIs** — Private routes secured with JWT stored in HTTP-only cookies
- 📈 **Booking Count** — Each car tracks how many times it has been booked using MongoDB `$inc`
- ✏️ **Edit & Delete Cars** — Car owners can update or remove their listed cars
- 📱 **Responsive Design** — Fully responsive UI for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

**Frontend**

- Next.js 15 (App Router)
- Tailwind CSS
- HeroUI
- BetterAuth (Client)

**Backend**

- Node.js + Express.js
- MongoDB + Mongoose
- JWT (via `jose-cjs`)
- BetterAuth (Server)

---

## 📦 NPM Packages Used

| Package           | Purpose               |
| ----------------- | --------------------- |
| `better-auth`     | Authentication        |
| `jose-cjs`        | JWT verification      |
| `mongodb`         | Database              |
| `express`         | Server framework      |
| `cors`            | Cross-origin requests |
| `dotenv`          | Environment variables |
| `react-Hot-Toast` | Toast notifications   |
| `react-icons`     | Icons                 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account

### Clone the repository

```bash
git clone https://github.com/pritam-b-dev/rentify.git
cd rentify
```

### Install dependencies

```bash
npm install
```

### Setup environment variables

Create a `.env.local` file:

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run the development server

```bash
npm run dev
```

---

## 🔗 Links

- 🌐 Live Site: [https://rentify-blond-chi.vercel.app](https://rentify-blond-chi.vercel.app)
- 💻 GitHub: [https://github.com/pritam-b-dev/rentify](https://github.com/pritam-b-dev/rentify)
