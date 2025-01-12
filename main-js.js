document.addEventListener('DOMContentLoaded', function() {
    // AI Tools Data
    const aiTools = [
        {
            name: 'Grammarly',
            url: 'https://www.grammarly.com',
            description: 'AI-powered writing assistant for grammar and style improvement.'
        },
        {
            name: 'Khan Academy',
            url: 'https://www.khanacademy.org',
            description: 'AI-enhanced educational platform offering free world-class education.'
        },
        // Add other tools here
    ];

    // AI Topics Data for Accordion
    const aiTopics = [
        {
            title: 'Definition of AI',
            content: 'AI is the field of computer science focused on creating systems capable of performing tasks that typically require human intelligence.'
        },
        {
            title: 'History of AI',
            content: 'Timeline from 1950s to present, including major developments and breakthroughs.'
        },
        // Add other topics here
    ];

    // Initialize AI Tools Grid
    function initializeToolsGrid() {
        const toolsGrid = document.querySelector('.tools-grid');
        aiTools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.innerHTML = `
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <a href="${tool.url}" target="_blank">Learn More</a>
            `;
            toolsGrid.appendChild(toolCard);
        });
    }

    // Initialize Accordion
    function initializeAccordion() {
        const accordion = document.querySelector('.accordion');
        aiTopics.forEach((topic, index) => {
            const item = document.createElement('div');
            item.className = 'accordion-item';
            item.innerHTML = `
                <div class="accordion-header">
                    <h3>${topic.title}</h3>
                    <span class="accordion-icon">+</span>
                </div>
                <div class="accordion-content">
                    <p>${topic.content}</p>
                </div>
            `;
            accordion.appendChild(item);
        });

        // Add click event listeners to accordion headers
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('.accordion-icon');
                
                // Toggle active class
                content.classList.toggle('active');
                
                // Update icon
                icon.textContent = content.classList.contains('active') ? '-' : '+';
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initialize components
    initializeToolsGrid();
    initializeAccordion();

    // Add scroll animation for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(section);
    });
});
