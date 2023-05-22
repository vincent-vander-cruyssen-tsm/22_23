document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('header-nav');

    hamburgerMenu.addEventListener('click', function () {
        mainNav.style.display = mainNav.style.display === 'none' ? 'flex' : 'none';
    });
});
