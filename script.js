// ─────────────────────────────────────────────
// Kenna's Dream – JavaScript Starter File
// ─────────────────────────────────────────────
// This file adds interactivity and behavior to your site.
// You can expand it with animations, form handling, or dynamic content.

// ✅ Highlight the active navigation link when clicked
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Remove 'active' class from all links
      navLinks.forEach(l => l.classList.remove("active"));

      // Add 'active' class to the clicked link
      link.classList.add("active");
    });
  });
});

/* 
─────────────────────────────────────────────
💡 Future Ideas You Can Add Here:
─────────────────────────────────────────────

1. Smooth scroll to sections:
   - Use scrollIntoView() for anchor links

2. Form validation:
   - Check required fields before submission

3. Modal popups:
   - Show messages, alerts, or confirmations

4. Mobile menu toggle:
   - Add hamburger menu for small screens

5. Welcome animation:
   - Fade in header or content on page load

6. Accessibility enhancements:
   - Keyboard navigation, ARIA roles, focus management

*/