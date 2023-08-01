const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

const author = document.querySelector('.footer_text-author');

const wordTeamInDifferentLanguages = [
    '© Created by Team- 05',
    '© Created by Команда- 05',
    '© Created by Equipo - 05',
    '© Created by Équipe - 05',
    '© Created by Squadra - 05',
    '© Created by 团队 - 05',
    '© Created by チーム - 05',
    '© Created by 팀 - 05',
    '© Created by فريق -05 ',
    '© Created by टीम - 05',
    '© Created by Nhóm - 05',
    '© Created by Tim - 05',
    '© Created by Pasukan - 05',
    '© Created by Koponan - 05',
    '© Created by Ομάδα - 05',
    '© Created by Lag - 05',
    '© Created by Csapat - 05',
    '© Created by Tým - 05',
    '© Created by Echipă - 05',
];

author.innerText = getRandom(wordTeamInDifferentLanguages);

const colors = [
    'red',
    'green',
    'blue',
    'coral',
    'pink',
    'dark',
    'orange',
    'crimson',
    'maroon',
    'tomato',
    'gold',
    'purple',
];

author.style.color = getRandom(colors);