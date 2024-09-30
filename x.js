const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav');
const yearsDropdown = document.getElementById('yearsDropdown');
const yearOptions = document.getElementById('yearOptions');

// Toggle navigation when hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Toggle year dropdown on mobile screens
yearsDropdown.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    yearOptions.style.display = yearOptions.style.display === 'flex' ? 'none' : 'flex'; // Toggle years display
});

// Close navigation when clicking outside
document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
    }
});

// Function to dynamically load content into the main section
function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });
}