/_ === README.md === _/

# Teacher Management Interface

A modern, responsive Teacher Management Interface built using **Next.js**, **TypeScript**, and **Tailwind CSS**.

![Screenshot](./screenshot.png)

## 🚀 Live Demo

[Deployed Demo Link](https://your-vercel-demo-link.com)

## 📹 Demo Video

[Loom/YouTube Video Link](https://your-demo-video-link.com)

---

## 📄 Overview

This project modernizes the Teacher Management interface with a **clean UI**, **responsive layout**, **form validation**, and **loading states** as per the task requirements.

Key highlights:

- Mobile-first responsive design
- TypeScript with full type safety
- Accessible components (ARIA, keyboard focus)
- Interactive Tabs, Sidebar highlights, Navbar actions
- Payment/contact form with validation and loading

---

## 🛠 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   ├── Teacher/
│   │   ├── TeacherCard.tsx
│   │   ├── ContactCard.tsx
│   │   ├── QualificationsCard.tsx
│   │   ├── Tabs.tsx
│   │   └── ContactForm.tsx
│   └── Timetable/
│       └── Timetable.tsx
├── pages/
│   └── index.tsx
├── styles/
│   └── globals.css
└── types/
    └── teacher.d.ts
```

---

## 📦 Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/teacher-management-ui.git
cd teacher-management-ui
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Development Server**

```bash
npm run dev
```

4. **Build for Production**

```bash
npm run build
```

---

## ✨ Features Implemented

- ✅ Responsive layout (mobile to desktop)
- ✅ Clean, accessible design
- ✅ Tabs with active state switching
- ✅ Sidebar with active selection
- ✅ Navbar with interactive icons
- ✅ Contact form with:
  - Validation
  - Loading state
  - Success feedback

---

## 🎨 Design Decisions

- Used **Tailwind CSS** for rapid and responsive styling.
- Applied **micro-interactions** with hover and focus states.
- Ensured **keyboard accessibility** and proper semantic HTML.
- Used **Lucide-react** icons for visual clarity.

---

## 📝 Assumptions

- The task focuses on **frontend UI/UX only**.
- Buttons and navigation are not connected to backend functionality.
- Payment interface is represented via a contact-style form for demonstration.

---

## ✅ Future Improvements (Optional)

- Add real page navigation or context switching
- Implement backend API integration for the form
- Add charts or graphs for schedules

---

✅ **Thank you!**

For any questions, feel free to reach out.

---

> "PearlThoughts Frontend Assessment | Submission: Teacher Management UI"
