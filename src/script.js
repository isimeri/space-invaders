require("./styles.css");

const board = document.querySelector(".board");
const gameOverMsg = document.querySelector(".game-over-message");
const restartBtn = document.querySelector(".restart-btn");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const boardWidthInput = document.querySelector("#board-width-input");
const boardWidthDisplay = document.querySelector(".board-width-display");

const DEFAULT_SETTINGS = {
    boardWidth: 15,
    boardHeight: 15,
    enemySpeed: 200, //ms
    laserSpeed: 50 // ms
}

// game settings
let boardWidth = parseInt(boardWidthInput.value) || DEFAULT_SETTINGS.boardWidth;
const boardHeight = DEFAULT_SETTINGS.boardHeight;
const laserSpeed = DEFAULT_SETTINGS.laserSpeed;
const enemySpeed = DEFAULT_SETTINGS.enemySpeed;

let aliensFirstColumn, aliensLastColumn, domCellsArr, aliens, direction, gameOver, gameRunning, enemyRows;
let enemyInterval;


function init(){

    clearInterval(enemyInterval);
    gameOver = false;
    gameRunning = false;
    board.innerHTML = "";
    gameOverMsg.classList.add("hidden");
    domCellsArr = [];
    direction = 1;
    boardWidth = parseInt(boardWidthInput.value) || DEFAULT_SETTINGS.boardWidth;
    boardWidthDisplay.textContent = boardWidthInput.value;
    enemyRows = Math.round(boardWidth / 4);


    const enemyRowMaxLen = Math.floor(boardWidth * 0.6);
    const aliensSet = new Set(Array(enemyRows * Math.floor(boardWidth * 0.6)).fill(null).map(i => {
        // generez inamicii in felul urmator
        // enemyRows - nr de randuri de inamici. fiecare rand o sa aiba lungime de maxim 60% din latimea tablei
        // e.g. pt o latime de 15 casute vor fi maxim 9 inamici intr-un rand
        // restul de minim 40% spatiu liber se va imparti cat de egal se poate in stanga si in dreapta grupului de inamici
 
        return Math.floor(Math.random() * enemyRows)
        * boardWidth + Math.floor(Math.random() * enemyRowMaxLen + Math.floor((boardWidth - enemyRowMaxLen) / 2));
    }));

    aliens = [...aliensSet];
    aliensFirstColumn = Array(enemyRows).fill(null).map((item, index) => {
        return index * boardWidth + Math.floor((boardWidth - enemyRowMaxLen) / 2);
    });
    aliensLastColumn = Array(enemyRows).fill(null).map((item, index) => {
        return index * boardWidth + Math.floor((boardWidth - enemyRowMaxLen) / 2) + enemyRowMaxLen - 1;
    });
    
    createBoard();
}

function createBoard(){ 
    for(let i = 0; i < boardWidth * boardHeight; i++){
        let domCell = document.createElement("div");
        domCell.classList.add("cell");
        domCell.classList.add(`cell-${boardWidth}`);
        domCell.id = i;
        domCellsArr.push(domCell);
        board.appendChild(domCell);
    }
    paintBoard();
    domCellsArr[Math.floor(domCellsArr.length - boardWidth / 2)].classList.add("hero");
    domCellsArr[Math.floor(domCellsArr.length - boardWidth/2)].innerHTML = `<svg
        viewBox="0 0 24 24"
        role="presentation"
        version="1.1"
        id="svg8814"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <defs
            id="defs8818" />
        <path
            d="m 10.166666,11.25 c 0,-0.916667 0.916668,-1.8333334 1.833334,-1.8333334 0.916666,0 1.833334,0.9166664 1.833334,1.8333334 0,0.916666 -0.916668,1.833334 -1.833334,1.833334 -0.916666,0 -1.833334,-0.916668 -1.833334,-1.833334 z M 14.75,3.75 C 13.163818,1.5740473 12,1 12,1 12,1 10.836182,1.5740473 9.25,3.75 7.6638173,5.9259527 8.2591248,12.07356 6.5,14.75 4.7408752,17.42644 2.9773562,17.901788 1.9166666,19.333334 1.166646,20.345588 1,23 1,23 c 0,0 1.7962253,-0.761891 2.75,-0.916667 2.1112705,-0.342612 4.9042438,-1.512423 6.416666,0 0.21606,0.216061 0,0.916667 0,0.916667 h 3.666668 c 0,0 -0.21606,-0.700606 0,-0.916667 1.512422,-1.512423 4.305396,-0.342612 6.416666,0 C 21.203776,22.238109 23,23 23,23 23,23 22.833354,20.345588 22.083334,19.333334 21.022644,17.901788 19.259125,17.42644 17.5,14.75 15.740875,12.07356 16.336182,5.9259527 14.75,3.75 Z"
            id="path8812" />
        </svg>`;
}

// se ocupa doar de desenarea vrajmasilor
function paintBoard() { 
    for(let i = 0; i < domCellsArr.length; i++){
        if(domCellsArr[i].classList.contains("enemy")){
            domCellsArr[i].classList.remove("enemy");
            domCellsArr[i].innerHTML = "";
        }
    }
    for(let i = 0; i < aliens.length; i++){
        if(domCellsArr[aliens[i]].classList.contains("hero")){
            domCellsArr[aliens[i]].classList.remove("hero");
        }
        domCellsArr[aliens[i]].classList.add("enemy");
        domCellsArr[aliens[i]].innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 10.54C16.78 7.44 14.63 5 12 5S7.22 7.44 7 10.54C4 11.23 2 12.5 2 14C2 16.21 6.5 18 12 18S22 16.21 22 14C22 12.5 20 11.23 17 10.54M14.93 11.84C13.03 12.05 10.97 12.05 9.07 11.84C9.03 11.56 9 11.28 9 11C9 8.8 10.35 7 12 7S15 8.8 15 11C15 11.28 15 11.56 14.93 11.84Z" /></svg>`;
    }
} 

// se ocupa si de logica lui hero si de desenarea lui
function moveHero(e){
    if(gameOver) return;

    const hero = board.querySelector(".hero");
    const leftEdge = domCellsArr.length - boardWidth;
    const rightEdge = domCellsArr.length - 1;

    if(e.code === "ArrowLeft" && parseInt(hero.id) > leftEdge) {
        hero.classList.remove("hero");
        hero.innerHTML = ``;
        hero.previousElementSibling.classList.add("hero");
        hero.previousElementSibling.innerHTML = `<svg
            viewBox="0 0 24 24"
            role="presentation"
            version="1.1"
            id="svg8814"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs
                id="defs8818" />
            <path
                d="m 10.166666,11.25 c 0,-0.916667 0.916668,-1.8333334 1.833334,-1.8333334 0.916666,0 1.833334,0.9166664 1.833334,1.8333334 0,0.916666 -0.916668,1.833334 -1.833334,1.833334 -0.916666,0 -1.833334,-0.916668 -1.833334,-1.833334 z M 14.75,3.75 C 13.163818,1.5740473 12,1 12,1 12,1 10.836182,1.5740473 9.25,3.75 7.6638173,5.9259527 8.2591248,12.07356 6.5,14.75 4.7408752,17.42644 2.9773562,17.901788 1.9166666,19.333334 1.166646,20.345588 1,23 1,23 c 0,0 1.7962253,-0.761891 2.75,-0.916667 2.1112705,-0.342612 4.9042438,-1.512423 6.416666,0 0.21606,0.216061 0,0.916667 0,0.916667 h 3.666668 c 0,0 -0.21606,-0.700606 0,-0.916667 1.512422,-1.512423 4.305396,-0.342612 6.416666,0 C 21.203776,22.238109 23,23 23,23 23,23 22.833354,20.345588 22.083334,19.333334 21.022644,17.901788 19.259125,17.42644 17.5,14.75 15.740875,12.07356 16.336182,5.9259527 14.75,3.75 Z"
                id="path8812" />
            </svg>`;
    }
    if(e.code === "ArrowRight" && parseInt(hero.id) < rightEdge) {
        hero.classList.remove("hero");
        hero.innerHTML = ``;
        hero.nextElementSibling.classList.add("hero");
        hero.nextElementSibling.innerHTML = `<svg
            viewBox="0 0 24 24"
            role="presentation"
            version="1.1"
            id="svg8814"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs
                id="defs8818" />
            <path
                d="m 10.166666,11.25 c 0,-0.916667 0.916668,-1.8333334 1.833334,-1.8333334 0.916666,0 1.833334,0.9166664 1.833334,1.8333334 0,0.916666 -0.916668,1.833334 -1.833334,1.833334 -0.916666,0 -1.833334,-0.916668 -1.833334,-1.833334 z M 14.75,3.75 C 13.163818,1.5740473 12,1 12,1 12,1 10.836182,1.5740473 9.25,3.75 7.6638173,5.9259527 8.2591248,12.07356 6.5,14.75 4.7408752,17.42644 2.9773562,17.901788 1.9166666,19.333334 1.166646,20.345588 1,23 1,23 c 0,0 1.7962253,-0.761891 2.75,-0.916667 2.1112705,-0.342612 4.9042438,-1.512423 6.416666,0 0.21606,0.216061 0,0.916667 0,0.916667 h 3.666668 c 0,0 -0.21606,-0.700606 0,-0.916667 1.512422,-1.512423 4.305396,-0.342612 6.416666,0 C 21.203776,22.238109 23,23 23,23 23,23 22.833354,20.345588 22.083334,19.333334 21.022644,17.901788 19.259125,17.42644 17.5,14.75 15.740875,12.07356 16.336182,5.9259527 14.75,3.75 Z"
                id="path8812" />
            </svg>`;
    }
}

// defineste logica miscarii dusmanilor
function moveEnemy(){
    if(aliensLastColumn.some(item => item%boardWidth === boardWidth-1) && direction === 1){
        direction = -1;
        for(let i = 0; i<aliens.length; i++){
            aliens[i]+=boardWidth;
        }
        paintBoard();
        checkForLose();
        return;
    }
    if(aliensFirstColumn.some(item => item % boardWidth === 0) && direction === -1){
        direction = 1;
        for(let i = 0; i<aliens.length; i++){
            aliens[i] += boardWidth;
        }
        paintBoard();
        checkForLose();
        return;
    }
    for(let i = 0; i < aliens.length; i++){
        aliens[i] += direction;
    }
    aliensFirstColumn = aliensFirstColumn.map(item => item += direction);
    aliensLastColumn = aliensLastColumn.map(item => item += direction);
    paintBoard();
}
// verifica daca am iesit victoriosi
function checkForWin(){
    if(aliens.length === 0){
        clearInterval(enemyInterval);
        gameRunning = false;
        boardWidthInput.disabled = false;
        gameOver = true;
        gameOverMsg.classList.remove("hidden");
        gameOverMsg.innerText = "What a glorious victory!";
    }
}
// verifica daca am fost infranti
function checkForLose(){
    // verific randul pe care se afla hero, primul de jos
    for(let i = domCellsArr.length -1; i >= domCellsArr.length - boardWidth; i--){
        if(domCellsArr[i].classList.contains("enemy")){
            clearInterval(enemyInterval);
            gameRunning = false;
            boardWidthInput.disabled = false;
            gameOver = true;
            gameOverMsg.classList.remove("hidden");
            gameOverMsg.innerText = "You have been defeated...";
            return;
        }
    }
}
// se ocupa de logica laserului si de desenarea lui
function shootLaser(e){
    if(gameOver) return;
    if(e.code === "KeyZ"){ 
        const hero = document.querySelector(".hero");
        const heroId = hero.id;
        let laserId = heroId - boardWidth;
        domCellsArr[laserId].classList.add("laser");

        let laserMove = setInterval(()=>{ 
            domCellsArr[laserId].classList.remove("laser");
            laserId -= boardWidth;
            domCellsArr[laserId].classList.add("laser");
            if(domCellsArr[laserId].classList.contains("enemy")){
                clearInterval(laserMove);
                domCellsArr[laserId].classList.remove("enemy", "laser");
                domCellsArr[laserId].innerHTML = ``;
                aliens.splice(aliens.indexOf(laserId), 1);
                checkForWin();
            } if(laserId < boardWidth){
                clearInterval(laserMove);
                domCellsArr[laserId].classList.remove("laser");
            }
        }, laserSpeed);
    }
}

// ========================== event listeners ==============================

boardWidthInput.addEventListener("input", e => {
    if(gameRunning) return;

    boardWidthDisplay.textContent = e.target.value;
});

boardWidthInput.addEventListener("change", e => {
    if(gameRunning) return;

    document.removeEventListener("keydown", moveHero);
    document.removeEventListener("keydown", shootLaser);
    boardWidth = parseInt(e.target.value);
    startBtn.disabled = false;
    startBtn.classList.remove("display-none");
    restartBtn.disabled = true;
    restartBtn.classList.add("display-none");
    init();
});

restartBtn.addEventListener("click", () => {
    init();
    gameRunning = true;
    boardWidthInput.disabled = true;
    // de o bagat intr-un setTimeout ?
    // sa avem 1-2 sec de get ready
    enemyInterval = setInterval(moveEnemy, enemySpeed);
});

startBtn.addEventListener("click", () => {
    document.addEventListener("keydown", moveHero);
    document.addEventListener("keydown", shootLaser);
    startBtn.disabled = true;
    startBtn.classList.add("display-none");
    restartBtn.disabled = false;
    restartBtn.classList.remove("display-none");
    gameRunning = true;
    boardWidthInput.disabled = true;
    enemyInterval = setInterval(moveEnemy, enemySpeed);
});

resetBtn.addEventListener("click", () => {
    gameRunning = false;
    clearInterval(enemyInterval);
    document.removeEventListener("keydown", moveHero);
    document.removeEventListener("keydown", shootLaser);
    boardWidthInput.disabled = false;
    startBtn.disabled = false;
    startBtn.classList.remove("display-none");
    restartBtn.disabled = true;
    restartBtn.classList.add("display-none");
    init();
});

init();