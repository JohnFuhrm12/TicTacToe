// Init

const row1 = [[''], [''], ['']];
const row2 = [[''], ['x'], ['']];
const row3 = [[''], [''], ['o']];

const gameboard = [row1, row2, row3];

// Load Contents

function loadBoard() {
    console.log('loaded');
}

window.onload = function() {
    console.log(gameboard);
};