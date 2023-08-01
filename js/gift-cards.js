const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

const titleWord = document.querySelector('.vouchers__title-word');

const words = [
    'Lunch',
    'Dinner',
    'Breakfast'
];

function apdateWord () {
    titleWord.innerText = getRandom(words);
};

setInterval(apdateWord, 2000);