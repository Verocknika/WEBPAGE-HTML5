// Toggle hamburger menu
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function () {
            document.querySelector('.nav-links').classList.toggle('active');
        });
    }
});