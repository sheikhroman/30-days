let cardsArray = [
    {
        'name': 'CSS',
        'img': 'http://thapatechnical.online/logos/css.png',
    },
    {
        'name': 'HTML',
        'img': 'http://thapatechnical.online/logos/html5.png',
    },
    {
        'name': 'jQuery',
        'img': 'http://thapatechnical.online/logos/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'http://thapatechnical.online/logos/js.png',
    },
    {
        'name': 'Node',
        'img': 'http://thapatechnical.online/logos/nodejs.png',
    },
    {
        'name': 'Python',
        'img': 'http://thapatechnical.online/logos/python.png',
    }
];

const parentDiv = document.querySelector('#card-section');

for (let i = 0; i < cardsArray.length; i++){
    const childDiv = document.createElement('div');
    childDiv.classList.add('card')

    // childDiv.dataset.name = cardsArray[i].name;

    parentDiv.appendChild(childDiv)
}