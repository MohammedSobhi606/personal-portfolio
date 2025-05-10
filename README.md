Mohammed Sobhi's Portfolio
Welcome to my personal portfolio, a showcase of my skills as a frontend developer specializing in modern web technologies. This project demonstrates my expertise in building responsive, animated, and multilingual web applications using Next.js, Tailwind CSS, and Framer Motion. Explore the live site at mohammed-sobhi.netlify.app.
Table of Contents

About
Features
Technologies
Setup
Usage
Deployment
Contact

About
This portfolio highlights my work as a frontend developer with experience in the MERN stack, e-commerce platforms, and blog applications. Designed to impress potential clients and employers, it features a clean, responsive interface with smooth animations, a dark theme toggle, and multilingual support (English, Arabic, Spanish). The site is deployed on Netlify for fast, reliable performance.
Key projects include:

Portfolio: A dynamic showcase of my work with animated project cards.
E-Commerce App: An online store with Stripe integration and MongoDB backend.
Blog App: A MERN-based platform for posts and comments with Redux state management.

Features

Responsive Design: Fully mobile-friendly layout using Tailwind CSS grid and responsive typography (text-base sm:text-lg, text-xl sm:text-2xl).
Dark Theme: Toggleable light/dark mode with localStorage persistence, styled with Tailwind’s dark: variants.
Multilingual Support: Supports English, Arabic (RTL), and Spanish using next-intl, with a sleek language switcher.
Animations: Smooth fade-in and stagger effects for project cards using Framer Motion’s staggerChildren.
Clean Code: Modular Next.js structure with TypeScript for type safety (e.g., Data interface for project cards).
Contact Integration: Telegram link (@moha2000yahoo) for direct communication.
SEO Optimized: Proper meta tags and locale-based routing (/en, /ar, /es) for global accessibility.

Technologies

Frontend: Next.js 14 (App Router), React 19, Tailwind CSS, Framer Motion
Internationalization: next-intl for multilingual support
Type Safety: TypeScript
Deployment: Netlify
Other: localStorage for theme/language persistence, Vercel (optional for local testing)

Setup
To run this portfolio locally, follow these steps:
Prerequisites

Node.js (v18 or higher)
npm or yarn

Installation

Clone the repository:git clone https://github.com/your-username/your-repo.git
cd your-repo


Install dependencies:npm install


Create a .env.local file (if needed for API keys, e.g., MERN backend):NEXT_PUBLIC_API_URL=http://your-api


Add translation files in messages/ (e.g., en.json, ar.json, es.json) for multilingual support.

Running Locally
npm run dev

Open http://localhost:3000/en to view the site.
Usage

Toggle Theme: Click the theme switcher in the header to switch between light and dark modes.
Change Language: Use the language switcher to select English, Arabic, or Spanish (Arabic uses RTL).
Explore Projects: View project cards with animated hover and fade-in effects, showcasing my work.
Contact Me: Click the Telegram link (@moha2000yahoo) to connect directly.

Deployment
The portfolio is deployed on Netlify at mohammed-sobhi.netlify.app. To deploy your own version:

Push the repository to GitHub.
Connect to Netlify via the Netlify dashboard.
Set build settings:
Build command: npm run build
Publish directory: .next


Configure environment variables (if any) in Netlify’s dashboard.
Deploy, and Netlify will handle automatic scaling and HTTPS.

Contact
I’m available for freelance opportunities and collaborations. Reach out via:

Telegram: @moha2000yahoo
Email: your-email@example.com
Portfolio: mohammed-sobhi.netlify.app

Feel free to explore the code, suggest improvements, or contact me to discuss your next project!

Built with 💻 by Mohammed Sobhi
