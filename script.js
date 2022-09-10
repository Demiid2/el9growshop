
function responsiveMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('inactivo')) {
        menu.classList.add('activo');
        menu.classList.remove('inactivo')
    } else {
        menu.classList.remove('activo');
        menu.classList.add('inactivo');
    }
}