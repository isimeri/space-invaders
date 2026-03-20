const board = document.querySelector(".board");
const gameOverMsg = document.querySelector(".game-over-message");
const restartBtn = document.querySelector(".restart-btn");
const startBtn = document.querySelector(".start-btn");
const width = 15;
let enemiesInitialPos = [3,4,5,6,7,8,9,10,11,18,19,20,21,22,23,24,25,26,33,34,35,36,37,38,39,40,41];
let enemiesRandomPos = new Set(Array(27).fill(null).map(i => {
    return Math.floor(Math.random() * 3) * 15 + Math.floor(Math.random() * 8 + 3);
}));
let direction = 1;
let aliens;
let aliensLastColumn = [11,26,41];
let aliensFirstColumn = [3,18,33];
let domCellsArr = [];
let gameOver = false;
let enemyInterval;


function init(){ clearInterval(enemyInterval);
    board.innerHTML = "";
    gameOver = false;
    domCellsArr = [];
    aliens = [...enemiesRandomPos];
    aliensLastColumn = [11,26,41];
    aliensFirstColumn = [3,18,33];
    gameOverMsg.classList.add("hidden");
    createBoard();
}
restartBtn.addEventListener("click", ()=>{
    init();
    // de o bagat intr-un setTimeout sau ceva
    // sa avem un 3 sec de get ready
    enemyInterval = setInterval(moveEnemy, 200);
});

startBtn.addEventListener("click", ()=>{
    document.addEventListener("keydown", moveHero);
    document.addEventListener("keydown", shootLaser);
    startBtn.disabled = true;
    startBtn.classList.add("display-none");
    restartBtn.disabled = false;
    restartBtn.classList.remove("display-none");
    enemyInterval = setInterval(moveEnemy, 200);
});

function createBoard(){ 
    for(let i = 0; i < width * width; i++){
        let domCell = document.createElement("div");
        domCell.classList.add("cell");
        domCell.id = i;
        domCellsArr.push(domCell);
        board.appendChild(domCell);
    }
    paintBoard();
    domCellsArr[Math.floor(domCellsArr.length - width/2)].classList.add("hero");
    domCellsArr[Math.floor(domCellsArr.length - width/2)].innerHTML = `<svg
        viewBox="0 0 24 24"
        role="presentation"
        version="1.1"
        id="svg8814"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <defs
            id="defs8818" />
        <path
            d="m 10,9 c 0,-1 1,-2 2,-2 1,0 2,1 2,2 0,1 -1,2 -2,2 -1,0 -2,-1 -2,-2 z M 15,3 C 13.269619,0.62623336 12,0 12,0 12,0 10.730381,0.62623336 9,3 7.2696189,5.3737666 7.9190452,12.080248 6,15 c -1.9190452,2.919752 -3.8428842,3.438315 -5,5 -0.81820442,1.104278 -1,4 -1,4 0,0 1.9595185,-0.831153 3,-1 2.3032041,-0.373759 5.3500842,-1.649916 7,0 0.235702,0.235702 0,1 0,1 h 4 c 0,0 -0.235702,-0.764298 0,-1 1.649916,-1.649916 4.696796,-0.373759 7,0 1.040482,0.168847 3,1 3,1 0,0 -0.181796,-2.895722 -1,-4 C 21.842884,18.438315 19.919045,17.919752 18,15 16.080955,12.080248 16.730381,5.3737666 15,3 Z"
            id="path8812"/>
        </svg>`;
} 

// function clearBoard(){ 
    // for(i=0;i<domCellsArr.length;i++){ 
        // domCellsArr[i].class = "cell";
    // }
// } 

function paintBoard() { 
    for(let i = 0; i < domCellsArr.length; i++){
        if(domCellsArr[i].classList.contains("enemy")){
            domCellsArr[i].classList.remove("enemy");
            domCellsArr[i].innerHTML = "";
        }
    }
    for(let i = 0; i < aliens.length; i++){
        domCellsArr[aliens[i]].classList.add("enemy");
        domCellsArr[aliens[i]].innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 10.54C16.78 7.44 14.63 5 12 5S7.22 7.44 7 10.54C4 11.23 2 12.5 2 14C2 16.21 6.5 18 12 18S22 16.21 22 14C22 12.5 20 11.23 17 10.54M14.93 11.84C13.03 12.05 10.97 12.05 9.07 11.84C9.03 11.56 9 11.28 9 11C9 8.8 10.35 7 12 7S15 8.8 15 11C15 11.28 15 11.56 14.93 11.84Z" /></svg>`;
    }
} 

function moveHero(e){
    if(gameOver) return;

    const hero = board.querySelector(".hero");
    const leftEdge = domCellsArr.length - width;
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
                d="m 10,9 c 0,-1 1,-2 2,-2 1,0 2,1 2,2 0,1 -1,2 -2,2 -1,0 -2,-1 -2,-2 z M 15,3 C 13.269619,0.62623336 12,0 12,0 12,0 10.730381,0.62623336 9,3 7.2696189,5.3737666 7.9190452,12.080248 6,15 c -1.9190452,2.919752 -3.8428842,3.438315 -5,5 -0.81820442,1.104278 -1,4 -1,4 0,0 1.9595185,-0.831153 3,-1 2.3032041,-0.373759 5.3500842,-1.649916 7,0 0.235702,0.235702 0,1 0,1 h 4 c 0,0 -0.235702,-0.764298 0,-1 1.649916,-1.649916 4.696796,-0.373759 7,0 1.040482,0.168847 3,1 3,1 0,0 -0.181796,-2.895722 -1,-4 C 21.842884,18.438315 19.919045,17.919752 18,15 16.080955,12.080248 16.730381,5.3737666 15,3 Z"
                id="path8812"/>
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
                d="m 10,9 c 0,-1 1,-2 2,-2 1,0 2,1 2,2 0,1 -1,2 -2,2 -1,0 -2,-1 -2,-2 z M 15,3 C 13.269619,0.62623336 12,0 12,0 12,0 10.730381,0.62623336 9,3 7.2696189,5.3737666 7.9190452,12.080248 6,15 c -1.9190452,2.919752 -3.8428842,3.438315 -5,5 -0.81820442,1.104278 -1,4 -1,4 0,0 1.9595185,-0.831153 3,-1 2.3032041,-0.373759 5.3500842,-1.649916 7,0 0.235702,0.235702 0,1 0,1 h 4 c 0,0 -0.235702,-0.764298 0,-1 1.649916,-1.649916 4.696796,-0.373759 7,0 1.040482,0.168847 3,1 3,1 0,0 -0.181796,-2.895722 -1,-4 C 21.842884,18.438315 19.919045,17.919752 18,15 16.080955,12.080248 16.730381,5.3737666 15,3 Z"
                id="path8812"/>
            </svg>`;
    }
}

function moveEnemy(){
    if(aliensLastColumn.some(item => item%width === width-1) && direction === 1){
        direction = -1;
        for(let i = 0; i<aliens.length; i++){
            aliens[i]+=width;
        }
        console.log(direction);
        paintBoard();
        checkForLose();
        return;
    }
    if(aliensFirstColumn.some(item => item%width === 0) && direction === -1){
        direction = 1;
        for(let i = 0; i<aliens.length; i++){
            aliens[i] += width;
        }
        console.log(direction);
        paintBoard();
        checkForLose();
        return;
    }
    for(let i = 0; i<aliens.length; i++){
        aliens[i]+=direction;
    }
    aliensFirstColumn = aliensFirstColumn.map(item => item+=direction);
    aliensLastColumn = aliensLastColumn.map(item => item+=direction);
    paintBoard();
}
    
function checkForWin(){
    if(aliens.length === 0){
        gameOver = true;
        gameOverMsg.classList.remove("hidden");
        gameOverMsg.innerText = "What a glorious victory!";
        clearInterval(enemyInterval);
    }
}
function checkForLose(){
    for(let i = domCellsArr.length -1; i>= domCellsArr.length-width; i--){
        if(domCellsArr[i].classList.contains("enemy")){
            gameOver=true;
            clearInterval(enemyInterval);
            gameOverMsg.classList.remove("hidden");
            gameOverMsg.innerText = "You have been defeated...";
            return;
        }
    }
}

function shootLaser(e){
    if(gameOver) return;
    if(e.code === "KeyZ"){ 
        const hero = document.querySelector(".hero");
        const heroId = hero.id;
        let laserId = heroId-width;
        domCellsArr[laserId].classList.add("laser");

        let laserMove = setInterval(()=>{ 
            domCellsArr[laserId].classList.remove("laser");
            laserId -= width;
            domCellsArr[laserId].classList.add("laser");
            if(domCellsArr[laserId].classList.contains("enemy")){
                clearInterval(laserMove);
                domCellsArr[laserId].classList.remove("enemy", "laser");
                domCellsArr[laserId].innerHTML = ``;
                aliens.splice(aliens.indexOf(laserId), 1);
                checkForWin();
            } if(laserId<15){
                clearInterval(laserMove);
                domCellsArr[laserId].classList.remove("laser");
            }
        }, 50);
    }
}

init();