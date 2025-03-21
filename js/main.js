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

// Function to handle sidebar menu active state
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');
    
    // Function to remove active class from all links
    const removeActiveClasses = () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    };

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            removeActiveClasses();
            link.classList.add('active');
        });
    });

    // Set the active link based on the current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
