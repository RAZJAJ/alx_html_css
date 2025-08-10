document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'open' class on the hamburger button
            hamburger.classList.toggle('open');
            // Toggle the 'active' class on the navigation links
            navLinks.classList.toggle('active');
        });
    }
});