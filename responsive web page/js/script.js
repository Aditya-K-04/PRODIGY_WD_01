// Sticky Navbar on Scroll
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Responsive Navbar
function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('responsive');
}
