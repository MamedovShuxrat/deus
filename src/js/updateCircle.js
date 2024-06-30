const percentageData = [20, 35, 42, 55, 70, 85, 90];

const dotsContainer = document.querySelector('.products__dots');
const circleInner = document.querySelector('.products__circle_inner');
const circleData = document.querySelector('.products__circle_data');

function updateCircle(index) {
    const percentage = percentageData[index];
    circleData.textContent = `${percentage}%`;
    circleInner.style.background = `conic-gradient(rgb(57, 199, 236) 0%, rgb(57, 199, 236) ${percentage}%, #ffffff ${percentage}%)`;
}

let currentIndex = 0;
updateCircle(currentIndex);

function createDot(percentage) {
    const dot = document.createElement('span');
    dot.className = 'products__dot';
    dot.style.background = `conic-gradient(rgb(57, 199, 236) 0%, rgb(57, 199, 236) ${percentage}%, #ffffff ${percentage}%)`;

    const dotData = document.createElement('span');
    dotData.className = 'products__dot_data';

    dot.appendChild(dotData);
    dotsContainer.appendChild(dot);
}
percentageData.forEach(createDot);

// setInterval(() => {
//     currentIndex = (currentIndex + 1) % percentageData.length;
//     updateCircle(currentIndex);
// }, 2000);
console.log('work');


