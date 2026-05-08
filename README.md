# Shaik Zaheer Portfolio

A premium professional portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Deployment to Vercel

To deploy your portfolio to Vercel, follow these steps:

1. **Push your code to GitHub.**
2. **Go to [Vercel](https://vercel.com/) and import your repository.**
3. **Configure Environment Variables:**
   During the setup, go to the "Environment Variables" section and add the following keys from your EmailJS dashboard:
   - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS Service ID.
   - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS Template ID.
   - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS Public Key.
4. **Deploy!** Vercel will automatically detect Vite and run your build command.

## 🛠️ Tech Stack

- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** EmailJS

## 📁 Project Structure

- `src/components/`: Reusable UI components for each section.
- `src/hooks/`: Custom hooks like the typewriter effect.
- `src/index.css`: Global styles and Tailwind configuration.
- `vercel.json`: Handles SPA routing for production.

## ✨ Features

- Premium Glassmorphism UI
- Fully Responsive Design
- Smooth Scroll Animations
- Typing Animation in Hero
- Modern Contact Form Integration
- Particle and Gradient Backgrounds
