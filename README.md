# AlmaBetter Frontend Capstone Project

# Resume Builder

## Overview

Resume Builder is a modern web application developed using React.js that enables users to create professional resumes quickly and efficiently.

The application provides a step-by-step process where users can enter their personal information, work experience, education, and skills. After completing the details, users can preview their resume using different templates and download it as a PDF.

This project was developed as the Frontend Capstone Project at AlmaBetter.

---

# Features

- Professional Resume Builder
- Multiple Resume Templates
- Multi-Step Resume Form
- Form Validation
- Profile Photo Upload
- Resume Preview
- PDF Download
- Local Storage Support
- Responsive Design
- Redux State Management

---

# Installation

Clone the repository

```bash
git clone https://github.com/Shubham321112/resume-builder.git
```

Go inside the project

```bash
cd resume-builder
```

Install dependencies

```bash
npm install
```

Run the application

```bash
npm run dev
```

---

# Technologies and Libraries Used

- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Vite
- html2pdf.js
- JavaScript
- HTML5
- CSS3

---

# Application Folder Structure

```
resume-builder
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   │      Home.jsx
│   │      About.jsx
│   │      PersonalInfo.jsx
│   │      WorkExperience.jsx
│   │      Education.jsx
│   │      Skills.jsx
│   │      Preview.jsx
│   │      MyResume.jsx
│   │
│   ├── redux
│   │      resumeSlice.js
│   │      store.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Project Workflow

```
Home Page
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

# Pages

## Home Page

- Select Resume Template
- Navigate to Resume Builder
- About Us
- My Resume

---

## Personal Information

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

Validation is implemented for:

- Required Fields
- Email Format
- Mobile Number

---

## Work Experience

Users can add:

- Company Name
- Job Title
- Start Date
- End Date
- Current Job
- Job Description

---

## Education

Users can enter:

- College Name
- Degree
- Specialization
- CGPA
- Location
- Passing Year

---

## Skills

Users can enter their professional skills.

Example:

- React.js
- JavaScript
- HTML
- CSS
- Tailwind CSS

---

## Resume Preview

Displays the complete resume with the selected template.

Features:

- Live Preview
- PDF Download

---

## My Resume

Users can:

- View Resume
- Edit Resume
- Delete Resume

---

# State Management

Redux Toolkit is used for centralized state management.

It stores all user information including:

- Personal Information
- Work Experience
- Education
- Skills
- Selected Resume Template

---

# Form Validation

The application validates user input before proceeding to the next step.

Validation includes:

- Required Fields
- Email Validation
- Mobile Number Validation
- Empty Field Validation

---

# Local Storage

The application stores resume data in Local Storage.

Benefits:

- Data is preserved after refreshing the page.
- Users do not lose their information accidentally.

---

# Deployment

## GitHub Repository

https://github.com/Shubham321112/resume-builder

## Live Demo

https://resume-builder-mu-six-72.vercel.app/

---

# Future Enhancements

- User Authentication
- Multiple Resume Saving
- AI Resume Suggestions
- Cover Letter Generator
- More Resume Templates
- Cloud Database Integration

---

# Developed By

**Shubham Priyadarshi**

Frontend Capstone Project

AlmaBetter