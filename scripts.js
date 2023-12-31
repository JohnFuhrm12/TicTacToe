// Init

let row1 = ['', '', ''];
let row2 = ['', '', ''];
let row3 = ['', '', ''];

let xTurn = true;
let xWins = false;
let oWins = false;
let endgame = false;

const gameboard = [row1, row2, row3];

// Load Contents

function loadBoard() {
    const row1DOM = document.getElementById('row1');
    const first = row1DOM.children;
    let firstChildren = [first[0].firstChild, first[1].firstChild, first[2].firstChild];

    for (let i = 0; i < firstChildren.length; i++) {
        let count = 0;
        firstChildren.forEach((child) => {
            child.innerText = row1[count];
            count += 1;
        });
    };

    const row2DOM = document.getElementById('row2');
    const second = row2DOM.children;
    let secondChildren = [second[0].firstChild, second[1].firstChild, second[2].firstChild];

    for (let i = 0; i < secondChildren.length; i++) {
        let count = 0;
        secondChildren.forEach((child) => {
            child.innerText = row2[count];
            count += 1;
        });
    };

    const row3DOM = document.getElementById('row3');
    const third = row3DOM.children;
    let thirdChildren = [third[0].firstChild, third[1].firstChild, third[2].firstChild];

    for (let i = 0; i < thirdChildren.length; i++) {
        let count = 0;
        thirdChildren.forEach((child) => {
            child.innerText = row3[count];
            count += 1;
        });
    };

    // Change Headline

    const headline = document.getElementById('headline');

    if (xTurn && !endgame) {
        headline.innerText = `Player 1's Turn`;
    };

    if (!xTurn && !endgame) {
        headline.innerText = `Player 2's Turn`;
    };

    // Check for Win Conditions Horizontal
    if (row1[0] === 'X' && row1[1] === 'X' && row1[2] === 'X') {
        endgame = true;
        xWins = true;
    };

    if (row1[0] === 'O' && row1[1] === 'O' && row1[2] === 'O') {
        endgame = true;
        oWins = true;
    };

    if (row2[0] === 'X' && row2[1] === 'X' && row2[2] === 'X') {
        endgame = true;
        xWins = true;
    };

    if (row2[0] === 'O' && row2[1] === 'O' && row2[2] === 'O') {
        endgame = true;
        oWins = true;
    };

    if (row3[0] === 'X' && row3[1] === 'X' && row3[2] === 'X') {
        endgame = true;
        xWins = true;
    };

    if (row3[0] === 'O' && row3[1] === 'O' && row3[2] === 'O') {
        endgame = true;
        oWins = true;
    };

    // Check for Win Conditions Vertical
    if (row1[0] === 'X' && row2[0] === 'X' && row3[0] === 'X') {
        endgame = true;
        xWins = true;
    };

    if (row1[0] === 'O' && row2[0] === 'O' && row3[0] === 'O') {
        endgame = true;
        oWins = true;
    };

    if (row1[1] === 'X' && row2[1] === 'X' && row3[1] === 'X') {
        endgame = true;
        xWins = true;
    };

    if (row1[1] === 'O' && row2[1] === 'O' && row3[1] === 'O') {
        endgame = true;
        oWins = true;
    };

    if (row1[2] === 'X' && row2[2] === 'X' && row3[2] === 'X') {
        endgame = true;
        xWins = true;
    };

    if (row1[2] === 'O' && row2[2] === 'O' && row3[2] === 'O') {
        endgame = true;
        oWins = true;
    };

    // Check for Win Conditions Diagnol
    
    if (row1[0] === 'X' && row2[1] === 'X' && row3[2] === 'X') {
        endgame = true;
        xWins = true;
    };

    if (row1[0] === 'O' && row2[1] === 'O' && row3[2] === 'O') {
        endgame = true;
        oWins = true;
    };

    if (row1[2] === 'X' && row2[1] === 'X' && row3[0] === 'X') {
        endgame = true;
        xWins = true;
    };

    if (row1[2] === 'O' && row2[1] === 'O' && row3[0] === 'O') {
        endgame = true;
        oWins = true;
    };

    // Check for Draw

    if (row1[0] !== '' && row1[1] !== '' && row1[2] !== '' && row2[0] !== '' && row2[1] !== '' && row2[2] !== '' && row3[0] !== '' && row3[1] !== '' && row3[2] !== '') {
        endgame = true;
    };

    console.log(endgame);

    endGame();
};

// Endgame

function endGame() {
    const headline = document.getElementById('headline');
    if (endgame) {
        if (xWins) {
            headline.innerText = `X Wins!`;
        } else if (oWins) {
            headline.innerText = `O Wins!`;
        } else {
            headline.innerText = `Game Over`;
        }
        setTimeout(function(){
            row1[0] = '';
            row1[1] = '';
            row1[2] = '';
            row2[0] = '';
            row2[1] = '';
            row2[2] = '';
            row3[0] = '';
            row3[1] = '';
            row3[2] = '';
            loadBoard();
        }, 2000);
        endgame = false;
        xTurn = true;
        xWins = false;
        oWins = false;
    };
};

window.onload = function() {
    loadBoard();

    const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');
    const square3 = document.getElementById('square3');
    const square4 = document.getElementById('square4');
    const square5 = document.getElementById('square5');
    const square6 = document.getElementById('square6');
    const square7 = document.getElementById('square7');
    const square8 = document.getElementById('square8');
    const square9 = document.getElementById('square9');

    square1.addEventListener('click', function() {
        if (row1[0] === '' && xTurn) {
            row1[0] = 'X';
            xTurn = false;
        };
        if (row1[0] === '' && !xTurn) {
            row1[0] = 'O';
            xTurn = true;
        };
        loadBoard();
    });

    square2.addEventListener('click', function() {
        if (row1[1] === '' && xTurn) {
            row1[1] = 'X';
            xTurn = false;
        };
        if (row1[1] === '' && !xTurn) {
            row1[1] = 'O';
            xTurn = true;
        };
        loadBoard();
    });

    square3.addEventListener('click', function() {
        if (row1[2] === '' && xTurn) {
            row1[2] = 'X';
            xTurn = false;
        };
        if (row1[2] === '' && !xTurn) {
            row1[2] = 'O';
            xTurn = true;
        };
        loadBoard();
    });

    square4.addEventListener('click', function() {
        if (row2[0] === '' && xTurn) {
            row2[0] = 'X';
            xTurn = false;
        };
        if (row2[0] === '' && !xTurn) {
            row2[0] = 'O';
            xTurn = true;
        };
        loadBoard();
    });

    square5.addEventListener('click', function() {
        if (row2[1] === '' && xTurn) {
            row2[1] = 'X';
            xTurn = false;
        };
        if (row2[1] === '' && !xTurn) {
            row2[1] = 'O';
            xTurn = true;
        };
        loadBoard();
    });

    square6.addEventListener('click', function() {
        if (row2[2] === '' && xTurn) {
            row2[2] = 'X';
            xTurn = false;
        };
        if (row2[2] === '' && !xTurn) {
            row2[2] = 'O';
            xTurn = true;
        };
        loadBoard();
    });

    square7.addEventListener('click', function() {
        if (row3[0] === '' && xTurn) {
            row3[0] = 'X';
            xTurn = false;
        };
        if (row3[0] === '' && !xTurn) {
            row3[0] = 'O';
            xTurn = true;
        };
        loadBoard();
    });

    square8.addEventListener('click', function() {
        if (row3[1] === '' && xTurn) {
            row3[1] = 'X';
            xTurn = false;
        };
        if (row3[1] === '' && !xTurn) {
            row3[1] = 'O';
            xTurn = true;
        };
        loadBoard();
    });

    square9.addEventListener('click', function() {
        if (row3[2] === '' && xTurn) {
            row3[2] = 'X';
            xTurn = false;
        };
        if (row3[2] === '' && !xTurn) {
            row3[2] = 'O';
            xTurn = true;
        };
        loadBoard();
    });
};