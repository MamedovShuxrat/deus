const images = [
    'images/about-bg1.png',
    'images/about-bg2.png',
    'images/about-bg3.png'
];

let currentIndex = 0

function updateImage(index) {

    const imgElement = document.querySelector('.about__img')
    imgElement.src = images[index]
}

document.getElementById('left-btn-about').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    updateImage(currentIndex)
})

document.getElementById('right-btn-about').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length
    updateImage(currentIndex)
})