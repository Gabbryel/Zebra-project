function menu () {
    const menu = document.getElementById('menu');
    const burgerMenu = document.getElementById('burger-menu');
    const x = document.getElementById('close-menu');
    const navBurgerMenu = document.getElementById('nav-burger--menu');

    const openMenu = () => {
      burgerMenu.addEventListener('click', () => {
        if (menu.style.display === 'none') {
          menu.style.display = 'inline';
        } else {
          menu.style.display = 'none';
        }
      })  
    }

    const openMenuFromNavbar = () => {
        navBurgerMenu.addEventListener('click', () => {
            menu.style.display = 'inline';
        })
    }
    
    const closeMenu = () => {
      x.addEventListener('click', () => {
        menu.style.display = 'none';
      })
    }

    if ( x && burgerMenu && menu) {
        openMenu();
        closeMenu();
        openMenuFromNavbar();
    }
}

export { menu };

