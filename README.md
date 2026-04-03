# Sayf Allah JAMAI Portfolio

A modern personal portfolio built for a backend developer focused on Django, Django REST Framework, REST APIs, and JWT authentication.

## Overview

This project is a recruiter-ready developer portfolio designed to present backend work with a clean, premium, dark SaaS-inspired interface. It highlights technical strengths, showcases the CourseCampus LMS backend API, and provides a polished contact experience.

## Live Demo

- Live demo: Add your deployed URL here

## Screenshots

- Add homepage screenshot here
- Add projects section screenshot here
- Add mobile view screenshot here

![Portfolio Preview](./public/site-preview.svg)

## Features

- Modern dark theme with glassmorphism UI
- Responsive layout for desktop, tablet, and mobile
- Sticky navigation with smooth scrolling
- Hero, About, Projects, Skills, Contact, and Footer sections
- Featured project spotlight for CourseCampus
- Contact form UI that prepares an email draft with `mailto:`
- Custom favicon and social preview metadata

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript

## Featured Project

### CourseCampus - LMS Backend API

CourseCampus is a backend-first Learning Management System API built with Django and Django REST Framework.

Key functionality:

- Custom user model with Student, Instructor, and Admin roles
- JWT authentication with access and refresh tokens
- Role-based permissions
- Course creation and management
- Student enrollment flows
- Lesson access control for enrolled students
- Assignment submission handling
- API-only backend architecture

Repository:

- https://github.com/sniipe-er/CourseCampus

## Project Structure

```text
src/
  components/
  pages/
  App.jsx
  index.css
  main.jsx
public/
  favicon.svg
  site-preview.svg
index.html
package.json
tailwind.config.js
vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sniipe-er/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Customization

Update portfolio content from:

- `src/pages/HomePage.jsx`

Update page metadata from:

- `index.html`

Update global styling from:

- `src/index.css`

## Deployment

This Vite project is ready to deploy on:

- Vercel
- Netlify
- GitHub Pages

Before deploying, replace the placeholder email address in:

- `src/pages/HomePage.jsx`

## License

Personal portfolio project by Sayf Allah JAMAI.
