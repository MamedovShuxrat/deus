const navItems = document.querySelectorAll('.nav__item');

navItems.forEach((navItem) => {
    const navLinkArrow = navItem.querySelector('.nav__link-arrow');
    const navSublist = navItem.querySelector('.nav__sublist');

    navLinkArrow.addEventListener('click', () => {
        navItem.classList.toggle('active');

        navSublist.style.display = navItem.classList.contains('active') ? 'flex' : 'none';
    });
});

