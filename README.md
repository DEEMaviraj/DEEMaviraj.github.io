Deemantha Viraj — Personal Portfolio Website

A fully responsive personal portfolio website built from scratch using only HTML5, CSS3, and vanilla JavaScript. No frameworks or libraries used.

Features

- Fully responsive layout — works on desktop, tablet, and mobile
- JS-powered slide-in hamburger menu with animated X, overlay, and staggered nav links
- Header starts transparent and becomes solid on scroll
- Typing animation cycling through multiple roles on the home page
- CSS-only animations — spinning rings, floating dots, fade slide-ins, shimmer hover effects
- Contact form with client-side validation and toast notifications
- Skills table with colour-coded level badges
- Project detail pages for each portfolio project
- Consistent dark theme across all pages using CSS custom properties

Tech Stack

- HTML5 — semantic elements throughout (header, main, section, article, aside, nav, footer)
- CSS3 — Flexbox, Grid, custom properties, keyframe animations, media queries
- JavaScript (vanilla) — hamburger menu, typing animation, scroll header, contact form
- Google Fonts — Poppins
- Boxicons — social media icons on home page
- Font Awesome — icons on contact page


How to Run

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. No build tools, no dependencies, no server required

bash
git clone https://github.com/DEEMaviraj/portfolio.git
cd portfolio
open index.html

JavaScript Features (script.js)

Hamburger Menu
- Slide-in drawer from the right on mobile
- 3 bars animate into an X when open
- Dark overlay behind the drawer — click to close
- Nav links stagger in one by one when drawer opens
- Closes on overlay click, Escape key, nav link click, or window resize to desktop

Typing Animation
- Cycles through: Computer Science Undergraduate, ICT Tutor, Freelancer, Problem Solver
- Types at 80ms per character, erases at 40ms per character
- Blinking cursor attached to the text via CSS ::after pseudo-element

Scroll Header
- Header starts transparent on page load
- Becomes solid with blur backdrop after scrolling 50px

Contact Form
- Client-side validation for all fields
- Submits via fetch to the form action endpoint
- Shows success or error toast notification
- Button shows "Sending..." state while submitting

Author

Deemantha Viraj
BSc. Computer Science Undergraduate — University of Colombo, Sri Lanka

- GitHub: [github.com/DEEMaviraj](https://github.com/DEEMaviraj)
- LinkedIn: [linkedin.com/in/deemantha-viraj](https://www.linkedin.com/in/deemantha-viraj/)

License

This project is open source and available for personal and educational use.