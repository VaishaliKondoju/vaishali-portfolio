// Function to load the header dynamically
function loadHeader(pageTitle) {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            document.title = pageTitle;
        })
        .catch(error => {
            console.error('Error loading header:', error);
            document.getElementById('header-placeholder').innerHTML = '<p>Error loading header. Please refresh the page.</p>';
        });
}

// Function to open tabs (already in main.js)
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
