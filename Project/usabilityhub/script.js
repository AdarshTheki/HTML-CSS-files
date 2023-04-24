const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    const navLink = document.querySelector('.nav-links')
    navLink.classList.toggle('sidebar');
})