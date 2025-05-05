// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const learnMoreBtn = document.getElementById('learn-more');
const changeAboutBtn = document.getElementById('change-about');
const aboutText = document.getElementById('about-text');
const contactForm = document.getElementById('contact-form');
const skillsContainer = document.querySelector('.skills-container');
const projectsContainer = document.querySelector('.projects-container');
const yearElement = document.getElementById('year');

// Sample data - you can replace with your actual data
const userData = {
    name: "Ahmed Hassan",
    department: "Software Engineer | Web Developer",
    about: [
        "I've a genuine curiosity and encouragements for exploring emerging technologies and staying updated with the latest industry trends. This drive motivates me to continuously enhance my skills and seek out innovative solution that can bring significant value to organization.",
        "When I'm not coding, you can find me hiking in the mountains or reading science fiction novels. I believe in continuous learning and always stay updated with the latest web technologies.",
        "My approach to development is user-centric, focusing on creating intuitive and accessible interfaces that provide real value to users."
    ],
    skills: [
        { icon: "fab fa-html5", name: "HTML5", description: "Semantic markup and accessibility" },
        { icon: "fab fa-css3-alt", name: "CSS3", description: "Responsive design and animations" },
        { icon: "fab fa-js", name: "JavaScript", description: "ES6+ and modern frameworks" },
        // { icon: "fab fa-bootstrap", name: "Bootstrap", description: "Rapid responsive development" },
        // { icon: "fas fa-wind", name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { icon: "fab fa-bootstrap",name: "Bootstrap", description: "Version 5.x, responsive grids, components" },
        { icon: "fas fa-wind", name: "Tailwind CSS", description: "Utility-first workflow, JIT compiler" },
        { icon: "fab fa-react", name: "React", description: "Component-based architecture" },
        { icon: "fab fa-node-js", name: "Node.js", description: "Server-side JavaScript" },
        { icon: "fas fa-database", name: "MongoDB", description: "NoSQL database management" }
    ],
    projects: [
        { 
            title: "E-commerce Website", 
            description: "A full-stack e-commerce platform with payment integration", 
            image: "IMG/E-commerce.avif",
            links: { live: "#", code: "#" }
        },
        { 
            title: "Online Food Delivery", 
            description: "A website that makes ordering food effortless! Get restaurant-quality meals delivered fast to your doorstep", 
            image: "IMG/Online-Food-Delivery.webp",
            links: { live: "#", code: "#" }
        },
        { 
            title: "Tourism", 
            description: "A vibrant tourism website showcasing breathtaking destinations, travel guides, and curated experiences.", 
            image: "IMG/tourism.webp",
            links: { live: "#", code: "#" }
        }
    ]
};

// Current about text index
let currentAboutIndex = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    yearElement.textContent = new Date().getFullYear();
    
    // Set user name and department
    document.querySelector('.name').textContent = userData.name;
    document.querySelector('.department').textContent = userData.department;
    
    // Set initial about text
    aboutText.textContent = userData.about[currentAboutIndex];
    
    // Load skills
    loadSkills();
    
    // Load projects
    loadProjects();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');

            // Prevent scrolling when menu is open
       if (navLinks.classList.contains('active')) {
           document.body.style.overflow = 'hidden';
       } else {
           document.body.style.overflow = 'auto';
    }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    });
    
    // Learn more button event
    learnMoreBtn.addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Change about text button
    changeAboutBtn.addEventListener('click', function() {
        currentAboutIndex = (currentAboutIndex + 1) % userData.about.length;
        aboutText.textContent = userData.about[currentAboutIndex];
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '20px 0';
        }
    });
});

// Load skills function
function loadSkills() {
    skillsContainer.innerHTML = userData.skills.map(skill => `
        <div class="skill-card" data-skill="${skill.name}">
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        </div>
    `).join('');
}

// Load projects function
function loadProjects() {
    projectsContainer.innerHTML = userData.projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.links.live}" target="_blank">Live Demo</a>
                    <a href="${project.links.code}" target="_blank">View Code</a>
                </div>
            </div>
        </div>
    `).join('');
}