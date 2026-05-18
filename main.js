
const numbersContainer = document.getElementById('numbers-container');
const generateButton = document.getElementById('generate-button');
const themeToggle = document.getElementById('theme-toggle');

// Theme Toggle Logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const getColorForNumber = (number) => {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa'; // Gray
    return '#b0d840'; // Green
};

const displayNumbers = (numbers) => {
    numbersContainer.innerHTML = '';
    numbers.forEach(number => {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style.backgroundColor = getColorForNumber(number);
        ball.textContent = number;
        numbersContainer.appendChild(ball);
    });
};

generateButton.addEventListener('click', () => {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
});

// Initial generation
displayNumbers(generateLottoNumbers());
