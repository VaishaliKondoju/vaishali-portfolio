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

    // Function to normalize URLs (remove leading/trailing slashes and base URL)
    const normalizePath = (path) => {
        // Remove leading/trailing slashes and any base URL
        let normalized = path.replace(/^\/|\/$/g, '').split('/').pop();
        // If the path is empty or just "/", map it to "index.html"
        if (!normalized || normalized === '') {
            normalized = 'index.html';
        }
        return normalized;
    };

    // Function to set the active class based on the current page
    const setActiveClass = () => {
        // Determine the current page URL
        let currentPath = normalizePath(window.location.pathname);
        console.log('Normalized Current Path:', currentPath); // Debug log

        // Find the corresponding menu item and add the active class
        let activeSet = false;
        navLinks.forEach(link => {
            let linkPath = normalizePath(link.getAttribute('href'));
            console.log('Normalized Link Path:', linkPath); // Debug log

            if (linkPath === currentPath) {
                link.classList.add('active');
                activeSet = true;
                console.log('Active Link Set:', link.textContent.trim(), 'with href:', linkPath); // Debug log
            }
        });

        // If no active link was set, log a warning
        if (!activeSet) {
            console.warn('No active link set for current path:', currentPath);
            console.log('Available Link Paths:', Array.from(navLinks).map(link => normalizePath(link.getAttribute('href')))); // Debug log
        }
    };

    // Set the active class on page load
    removeActiveClasses();
    setActiveClass();

    // Add click event listeners to update the active class on click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            removeActiveClasses();
            link.classList.add('active');
            console.log('Clicked Link:', link.textContent.trim(), 'with href:', link.getAttribute('href')); // Debug log
        });
    });
});
