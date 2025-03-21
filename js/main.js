// Function to open tabs
function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    const activeButton = Array.from(tabButtons).find(button => button.getAttribute('onclick').includes(tabId));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Handle sidebar menu active state
document.addEventListener('DOMContentLoaded', () => {
    // Get all sidebar menu links
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');

    // Function to remove the active class from all links
    const removeActiveClasses = () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    };

    // Function to set the active class based on the current page
    const setActiveClass = () => {
        // Determine the current page URL
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        // Map page URLs to menu items
        const pageMap = {
            'index.html': 'HOME',
            'skills.html': 'SKILLS & EXPERIENCE',
            'projects.html': 'PROJECTS',
            'contact.html': 'CONTACT',
            'blog.html': 'BLOG'
        };

        // Find the corresponding menu item and add the active class
        navLinks.forEach(link => {
            const linkText = link.textContent.trim().toUpperCase();
            if (pageMap[currentPath] && pageMap[currentPath].toUpperCase() === linkText) {
                link.classList.add('active');
            }
        });
    };

    // Set the active class on page load
    removeActiveClasses();
    setActiveClass();

    // Add click event listeners to update the active class on click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            removeActiveClasses();
            link.classList.add('active');
        });
    });
});
