# 📄 Resume Builder

> AlmaBetter Frontend Capstone Project

A modern and responsive Resume Builder application built using **React.js**, **Redux Toolkit**, **Tailwind CSS**, and **Vite**. The application helps users create professional resumes by filling in their personal information, work experience, education, and skills through a simple multi-step interface.

---

## 🚀 Live Demo

**Vercel:**  
https://resume-builder-mu-six-72.vercel.app/

---

## 📂 GitHub Repository

https://github.com/Shubham321112/resume-builder

---

# 📖 Project Overview

Resume Builder is a web application that allows users to create professional resumes in just a few simple steps.

The application provides a clean and user-friendly interface where users can:

- Select a resume template
- Fill personal information
- Add work experience
- Add education details
- Add skills
- Preview the resume
- Download the resume as PDF

The project follows a modern React architecture using Redux Toolkit for state management and React Router for page navigation.

---

# ✨ Features

- 📌 Professional Resume Templates
- 👤 Personal Information Form
- 💼 Work Experience Section
- 🎓 Education Section
- 💻 Skills Section
- 📷 Profile Photo Upload
- 👀 Live Resume Preview
- 📄 PDF Download
- 💾 Local Storage Support
- 🔄 Redux State Management
- 📱 Responsive Design
- ✅ Form Validation

---

# 🛠️ Technologies Used

### Frontend

- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Vite

### Libraries

- html2pdf.js
- React Icons

### Version Control

- Git
- GitHub

### Deployment

- Vercel

---

# 📁 Project Structure

```text
resume-builder
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   │
│   │── Home.jsx
│   │── About.jsx
│   │── PersonalInfo.jsx
│   │── WorkExperience.jsx
│   │── Education.jsx
│   │── Skills.jsx
│   │── Preview.jsx
│   │── MyResume.jsx
│   │
│   ├── redux
│   │── store.js
│   │── resumeSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🔄 Application Workflow

```text
Home
   │
   ▼
Select Resume Template
   │
   ▼
Personal Information
   │
   ▼
Work Experience
   │
   ▼
Education
   │
   ▼
Skills
   │
   ▼
Resume Preview
   │
   ▼
Download PDF
```

---

# 📄 Pages

## 🏠 Home

- Resume Template Selection
- Navigation
- Get Started Button

---

## 👤 Personal Information

Users can enter:

- Profile Photo
- First Name
- Last Name
- Email
- Mobile Number
- Address
- City
- State
- Postal Code
- Career Objective

### Validation

- Required Fields
- Email Validation
- Mobile Number Validation

---

## 💼 Work Experience

Users can enter:

- Company Name
- Job Title
- Start Date
- End Date
- Current Job
- Job Description

### Validation

- Required Fields
- Date Validation

---

## 🎓 Education

Users can enter:

- College Name
- Degree
- Specialization
- CGPA
- Passing Year
- Location

### Validation

- Required Fields

---

## 💻 Skills

Users can add professional skills such as:

- React.js
- JavaScript
- HTML
- CSS
- Tailwind CSS

---

## 👀 Resume Preview

Displays the complete resume.

Features:

- Live Preview
- Professional Templates
- Download PDF

---

## 📂 My Resume

- View Resume
- Edit Resume
- Delete Resume

---

# 🧠 State Management

Redux Toolkit is used to manage application state.

The Redux Store stores:

- Personal Information
- Work Experience
- Education
- Skills
- Selected Resume Template

---

# 💾 Local Storage

The application stores resume data inside Local Storage.

Benefits:

- Data remains after page refresh.
- Prevents accidental data loss.

---

# ✅ Form Validation

The application validates user inputs before moving to the next page.

Validation includes:

- Required Fields
- Valid Email Format
- Valid Mobile Number
- Empty Field Checks

---

# 📥 Installation

Clone the repository

```bash
git clone https://github.com/Shubham321112/resume-builder.git
```

Move into the project directory

```bash
cd resume-builder
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

---

# 🚀 Deployment

The application is deployed using **Vercel**.

Live URL:

https://resume-builder-mu-six-72.vercel.app/

---

# 🔮 Future Enhancements

- User Authentication
- Multiple Resume Saving
- AI Resume Suggestions
- Cover Letter Generator
- More Resume Templates
- Cloud Database Integration

---

# 👨‍💻 Developer

**Shubham Priyadarshi**

Frontend Developer

AlmaBetter Frontend Capstone Project

---

# ⭐ Thank You

If you like this project, don't forget to ⭐ the repository.