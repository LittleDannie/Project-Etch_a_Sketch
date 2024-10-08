const container = document.querySelector('#container');
const newGridButton = document.querySelector('input[type=button]');

window.addEventListener('load', createGrid());


newGridButton.addEventListener('click', () => {
    const userInput = parseInt(prompt('Input value for new grid!', 100));

    if (userInput > 0 && userInput <= 100) {
        createGrid(userInput);
    } else if (userInput <= 0) {
        alert('Value must be greater than 0');
    } else if (userInput > 100) {
        alert('Value must not be more than 100');
    }
});

function createGrid(num = 12) {
    container.innerHTML = '';

    for (let i = 0; i < num; i++) {
        const squareRow = document.createElement('div');

        squareRow.classList.add('squareRow')
        for (let i = 0; i < num; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.lightness = 55;

            squareRow.appendChild(square);
        }

        container.appendChild(squareRow);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', (event) => {
            const newLightness = () => {
                const newValue = event.target.getAttribute('data-lightness') - 5;
                if (newValue > 0) {
                    square.dataset.lightness = newValue;
                } else {
                    square.dataset.lightness = 0;
                }
                return newValue;
            };

            event.target.style['background-color'] = `hsl(${randomHue()}, 100%, ${newLightness() + '%'}`;
        })
    });
}

function randomHue() {
    return (Math.floor(Math.random() * 360));
}
