const container = document.querySelector('#container');
const newGridButton = document.querySelector('input[type=button]');


newGridButton.addEventListener('click', () => {
    const userInput = parseInt(prompt('Input value for new grid!', 16));

    if (userInput > 0 && userInput <= 100) {
        createGrid(userInput);
    } else if (userInput <= 0)  {
        alert('Value must be greater than 0');
    } else if (userInput > 100) {
        alert('Value must not be more than 100');
    }
});

function createGrid(num = 18) {
    container.innerHTML = '';

    for (let i = 0; i < num; i++) {
        const squareRow = document.createElement('div');

        squareRow.classList.add('squareRow')
        for (let i = 0; i < num; i++) {
            const square = document.createElement('div');
            square.classList.add('square');

            squareRow.appendChild(square);
        }

        container.appendChild(squareRow);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', (event) => {
            event.target.style['background-color'] = 'rgb(120, 120, 120)';
        })
    });
}