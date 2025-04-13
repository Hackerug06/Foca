document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            navMenu.classList.remove('show');
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Load events dynamically
    const eventsContainer = document.getElementById('events-container');
    const events = [
        {
            title: "Community Prayer Breakfast",
            date: "June 10, 2025 | 8:00 PM",
            description: "Join us for a time of fellowship and prayer."
        },
        {
            title: "Vacation Bible School",
            date: "July 15-19, 2025 | 9:00 AM - 12:00 PM",
            description: "A fun-filled week of Bible stories, crafts, and games for kids ages 5-12."
        },
        {
            title: "Church Picnic",
            date: "August 5, 2025 | 11:00 AM",
            description: "Annual church picnic at Church. Bring a dish to share!"
        }
    ];

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p class="event-date">${event.date}</p>
            <p>${event.description}</p>
        `;
        eventsContainer.appendChild(eventCard);
    });

    // Simple form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});
