// Get the current page URL
const currentPage = window.location.pathname;

// Remove any active class from previous elements
document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
});

// Add the 'active' class to the corresponding navigation link
if (currentPage.includes("index.html")) {
    document.getElementById("home").classList.add("active");
} else if (currentPage.includes("products.html")) {
    document.getElementById("products").classList.add("active");
} else if (currentPage.includes("about.html")) {
    document.getElementById("about").classList.add("active");
}
