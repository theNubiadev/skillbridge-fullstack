# SkillBridge – A Freelancer Hiring Platform

A full-stack platform built with **Next.js** where freelancers showcase their skills and clients post jobs, hire talent, and leave reviews.

---

## 🧩 Overview

SkillBridge connects freelancers and clients, enabling profile creation, job posting, hiring, messaging, and reviews.

---

## 💡 Core Features

### 👨‍💻 Freelancers
- Register/login (JWT auth)
- Create/edit profile (bio, skills, hourly rate)
- Upload portfolio (images, links)
- Apply to jobs
- Track job status (applied, hired, rejected)
- Message clients

### 📢 Clients
- Register/login
- Post jobs (title, description, budget, tags)
- View freelancer profiles
- Hire freelancers
- Rate & review completed projects

### 🛠️ Admin Dashboard (Optional)
- Manage users
- Moderate job posts & reviews

---

## 🖥️ Tech Stack

| Layer       | Tech                                                |
| ----------- | --------------------------------------------------- |
| Frontend    | **Next.js** + React + Tailwind CSS                  |
| Backend     | Node.js + Express                                   |
| Database    | MongoDB + Mongoose                                  |
| Auth        | JWT + bcrypt                                        |
| File Upload | Multer (portfolio uploads)                          |
| Deployment  | Vercel (frontend), Render/Railway (backend + DB)    |

---

## 🔐 Pages / Components

### Frontend
- `HomePage`
- `Login / Register`
- `FreelancerDashboard.jsx`
- `ClientDashboard.jsx`
- `JobForm.jsx`
- `FreelancerProfile.jsx`
- `JobListing.jsx`
- `ChatWindow.jsx`
- `ReviewSection.jsx`

### Backend
- `/api/auth` – register/login
- `/api/users` – user profile
- `/api/jobs` – create/update/list jobs
- `/api/applications` – apply to jobs
- `/api/messages` – chat
- `/api/reviews` – rating & reviews

---

## 🧠 Stretch Features

- Real-time chat (Socket.io)
- Payment integration (Stripe)
- Notifications system
- Email confirmation
- Skill tags auto-suggestion (AI)

---

## 🎯 Why SkillBridge?

- Real-world complexity (auth, CRUD, file uploads)
- Demonstrates full-stack ability
- Portfolio-worthy and extensible
- Solves a real-world problem

---

## Project Structure

```
skillbridge/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── auth/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   ├── dashboard/
│   │   ├── client/page.tsx
│   │   └── freelancer/page.tsx
│   ├── freelancers/page.tsx
│   ├── jobs/page.tsx
│   ├── messages/page.tsx
│   └── profile/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── JobCard.tsx
│   └── ProfileForm.tsx
├── lib/
│   ├── mongodb.js
│   ├── auth.ts
│   └── middleware.ts
├── models/
│   ├── User.ts
│   ├── Job.ts
│   └── Application.ts
├── app/api/
│   ├── auth/
│   │   ├── register/route.ts
│   │   └── login/route.ts
│   ├── jobs/
│   │   ├── route.ts
│   └── profile/
│       └── route.ts
├── components/
│   ├── Navbar.tsx
├── styles/
│   └── globals.css
├── .env.local
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the Next.js development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploy on Vercel

Deploy your Next.js app easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


lucide-react
shadcnui 