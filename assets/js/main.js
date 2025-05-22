function toggleMenu () {
    const burgerElement = document.getElementById('burger');
    const expandedMenuElement = document.getElementById('expanded-menu');

    burgerElement.classList.toggle('active');
    expandedMenuElement.classList.toggle('active');

    document.body.classList.toggle("blocked");
}

window.toggleMenu = toggleMenu;
