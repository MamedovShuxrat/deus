const percentageData = [20, 35, 42, 55, 70, 85, 90];

const dotsContainer = document.querySelector('.platform__dots');
const circleInner = document.querySelector('.platform__circle_inner');
const circleData = document.querySelector('.platform__circle_data');
const productPercentage = document.getElementById('productPercentage')

function updateCircle(index) {
    const percentage = percentageData[index];
    circleData.textContent = `${percentage}%`;
    productPercentage.textContent = percentage
    circleInner.style.background = `conic-gradient(rgb(57, 199, 236) 0%, rgb(57, 199, 236) ${percentage}%, #ffffff ${percentage}%)`;

    updateDots(index);
}

let currentIndex = 0;
updateCircle(currentIndex);

function createDot(index) {
    const dot = document.createElement('span');
    dot.className = 'platform__dot';
    dot.dataset.index = index;

    if (index === currentIndex) {
        const percentage = percentageData[index];
        dot.style.background = `conic-gradient(rgb(57, 199, 236) 0%, rgb(57, 199, 236) ${percentage}%, #ffffff ${percentage}%)`;
    }

    const dotData = document.createElement('span');
    dotData.className = 'platform__dot_data';
    dot.appendChild(dotData);

    dotsContainer.appendChild(dot);
}

function updateDots(activeIndex) {
    const dots = document.querySelectorAll('.platform__dot');
    dots.forEach(dot => {
        const index = parseInt(dot.dataset.index);
        if (index === activeIndex) {
            const percentage = percentageData[index];
            dot.style.background = `conic-gradient(rgb(57, 199, 236) 0%, rgb(57, 199, 236) ${percentage}%, #ffffff ${percentage}%)`;
        } else {
            dot.style.background = '#ffffff';
        }
    });
}

percentageData.forEach((percentage, index) => createDot(index));

function moveSlider(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex - 1 + percentageData.length) % percentageData.length;
    } else if (direction === 'right') {
        currentIndex = (currentIndex + 1) % percentageData.length;
    }
    updateCircle(currentIndex);
}

document.getElementById('left-btn-pr').addEventListener('click', () => {
    moveSlider('left');
});

document.getElementById('right-btn-pr').addEventListener('click', () => {
    moveSlider('right');
});


