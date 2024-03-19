let gameBoard = document.querySelector('.gameBoard');

let problems = [
    [
        [
            [
                [null, 8, 7],
                [null, null, null],
                [1, 2, null],
            ],
            [
                [6, null, null],
                [2, null, 7],
                [null, null, null],
            ],
            [
                [null, null, 9],
                [null, null, 3],
                [null, null, 4],
            ]
        ],
        [
            [
                [9, 6, 2],
                [8, null, null],
                [3, 1, null],
            ],
            [
                [null, null, null],
                [null, null, null],
                [null, null, null],
            ],
            [
                [null, null, 8],
                [null, null, null],
                [2, 9, null],
            ]
        ],
        [
            [
                [null, null, 1],
                [null, null, 8],
                [null, null, 3],
            ],
            [
                [null, null, 3],
                [null, null, null],
                [null, 6, null],
            ],
            [
                [null, null, 6],
                [null, null, null],
                [9, 8, 1],
            ]
        ]
    ],
    [
        [
            [
                [null, null, null],
                [null, 8, 6],
                [4, 2, null],
            ],
            [
                [null, null, null],
                [2, null, 7],
                [null, null, 8],
            ],
            [
                [null, null, 8],
                [null, null, 3],
                [null, null, null],
            ]
        ],
        [
            [
                [9, 6, 2],
                [8, null, null],
                [3, 1, null],
            ],
            [
                [null, null, null],
                [null, null, null],
                [null, null, null],
            ],
            [
                [null, null, 8],
                [null, null, null],
                [2, 9, null],
            ]
        ],
        [
            [
                [null, null, 1],
                [null, null, 8],
                [null, null, 3],
            ],
            [
                [null, null, 3],
                [null, null, null],
                [null, 6, null],
            ],
            [
                [null, null, 6],
                [null, null, 4],
                [9, 8, 1],
            ]
        ]
    ]
]

let game = problems[Math.floor(Math.random() * problems.length)];

loadGameBoard(game, gameBoard);

function loadGameBoard(game, container) {
    container.innerHTML = "";
    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game[i].length; j++) {
            let space = document.createElement('div')
            space.classList.add('space')
            for (let k = 0; k < game[i][j].length; k++) {
                for (let l = 0; l < game[i][j][k].length; l++) {
                    let cell = document.createElement('div')
                    cell.classList.add('cell')
                    cell.textContent = game[i][j][k][l]

                    cell.addEventListener('click', () => {
                        makePlay(game, i, j, k, l, container)
                    })

                    space.appendChild(cell)
                }
            }
            container.appendChild(space)
        }
    }
}

function makePlay(game, i, j, k, l, container) {
    let num = parseInt(prompt('Ingrese valor a insertar'));
    if (!checkValue(game, i, j, k, l, num)) {
        game[i][j][k][l] = num;
        loadGameBoard(game, container)
    } else {
        alert('Jugada invalida');
    }
}

function checkValue(game, i, j, k, l, num) {
    for (let x = 0; x < game[i].length; x++) {
        if (game[i][x][k].includes(num)) {
            return true;
        }
    }

    for (let y = 0; y < game[i][j].length; y++) {
        console.log(game[i][j][y])
        if (game[i][j][y].includes(num)) {
            return true;
        }
    }

    for (let x = 0; x < game.length; x++) {
        for (let y = 0; y < game[x][j].length; y++) {
            if (game[x][j][y][l] === parseInt(num)) {
                return true;
            }
        }
    }
}


