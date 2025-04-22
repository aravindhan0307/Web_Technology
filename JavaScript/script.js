// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(name && email && message) {
        // In a real application, you would send this data to the server
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Menu Highlighting
const currentLocation = location.href;
const menuItems = document.querySelectorAll('nav ul li a');
const menuLength = menuItems.length;

for(let i = 0; i < menuLength; i++) {
    if(menuItems[i].href === currentLocation) {
        menuItems[i].parentElement.className = "current";
    }
}

// Simple Animation for Sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if(sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger the animation for the first section
    setTimeout(() => {
        sections[0].style.opacity = '1';
        sections[0].style.transform = 'translateY(0)';
    }, 100);
});