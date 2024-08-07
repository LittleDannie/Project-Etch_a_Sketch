const container = document.querySelector('#container');

for (let i = 0; i < 18; i++) {
    const squareRow = document.createElement('div');
    squareRow.classList.add('squareRow')

    for (let i = 0; i < 18; i++) {
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