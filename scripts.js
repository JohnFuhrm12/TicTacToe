// Init

let row1 = ['', '', ''];
let row2 = ['', 'X', ''];
let row3 = ['', '', ''];

let xTurn = false;

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

    const squares = [square1, square2, square3, square4, square5, square6, square7, square8, square9];

    square1.addEventListener('click', function() {
        if (row1[0] === '' && xTurn) {
            row1[0] = 'X';
        };
        if (row1[0] === '' && !xTurn) {
            row1[0] = 'O';
        };
        loadBoard();
    });

    const testbtn = document.getElementById('test');

    testbtn.addEventListener('click', function() {
        console.log('hi');
        loadBoard();
    });
};