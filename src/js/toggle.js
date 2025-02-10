const navItems = document.querySelectorAll('.nav__item');
const mobileBtn = document.querySelector('.mobile__btn')
const mobileDisplay = document.querySelector('.mobile')

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




mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('isOpen')
    if (mobileBtn.classList.contains('isOpen')) {
        mobileDisplay.style.display = 'block'
    } else {
        mobileDisplay.style.display = 'none'

    }
})


const date = new Date()
console.log(typeof (date));