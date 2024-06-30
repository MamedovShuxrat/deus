const percentageData = [20, 35, 42, 55, 70, 85, 90];

const dotsContainer = document.querySelector('.products__dots');
const circleInner = document.querySelector('.products__circle_inner');
const circleData = document.querySelector('.products__circle_data');
const productPercentage = document.getElementById('productPercentage')

function updateCircle(index) {
    const percentage = percentageData[index];
    circleData.textContent = `${percentage}%`;
    productPercentage.textContent = percentage
    circleInner.style.background = `conic-gradient(rgb(57, 199, 236) 0%, rgb(57, 199, 236) ${percentage}%, #ffffff ${percentage}%)`;
}

let currentIndex = 0;
updateCircle(currentIndex);

function createDot(percentage, index) {
    const dot = document.createElement('span');
    dot.className = 'products__dot';
    dot.style.background = `conic-gradient(rgb(57, 199, 236) 0%, rgb(57, 199, 236) ${percentage}%, #ffffff ${percentage}%)`;

    const dotData = document.createElement('span');
    dotData.className = 'products__dot_data';

    dot.appendChild(dotData);
    dotsContainer.appendChild(dot);
}

percentageData.forEach((percentage, index) => createDot(percentage, index));

function moveSlider(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex - 1 + percentageData.length) % percentageData.length;
    } else if (direction === 'right') {
        currentIndex = (currentIndex + 1) % percentageData.length;
    }
    updateCircle(currentIndex);
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.products__dot');
    dots.forEach((dot, index) => {
        const percentage = percentageData[(currentIndex + index) % percentageData.length];
        dot.style.background = `conic-gradient(rgb(57, 199, 236) 0%, rgb(57, 199, 236) ${percentage}%, #ffffff ${percentage}%)`;
    });
}


document.getElementById('left-btn-pr').addEventListener('click', () => {
    console.log('Left button clicked!');
    moveSlider('left');
});

document.getElementById('right-btn-pr').addEventListener('click', () => {
    console.log('Right button clicked!');
    moveSlider('right');
});

