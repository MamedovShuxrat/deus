const navItems = document.querySelectorAll('.nav__item');


navItems.forEach((navItem) => {
    const navLinkArrow = navItem.querySelector('.nav__link-arrow');
    const navSublist = navItem.querySelector('.nav__sublist');

    if (navLinkArrow) {
        navSublist.style.display = navItem.classList.contains('active') ? 'flex' : 'none';

        navLinkArrow.addEventListener('click', () => {
            navItem.classList.toggle('active');

            navSublist.style.display = navItem.classList.contains('active') ? 'flex' : 'none';
        });
    }
});


const reasonsItems = document.querySelectorAll('.reasons__item');

reasonsItems.forEach(item => {
    item.addEventListener('click', () => {
        reasonsItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});
