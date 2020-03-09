var options = Array('ROCK' , 'PAPER' , 'SCISSORS');
const playbutton = document.getElementById("play");
const playarea = document.getElementById('playarea');
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const playericon = document.getElementById("playericon");
const computericon = document.getElementById("computericon");
let wins = document.getElementById("wins");
let losses = document.getElementById("losses");
let ties = document.getElementById("ties");
let round = document.getElementById("roundnumber");
let winCount = 0;
let lossCount = 0;
let tieCount = 0;
let roundCount = 1;
let score = 0;

playbutton.addEventListener('click' , startGame);

function startGame(){ //initializes the event listeners and removes event listener from the playbutton
    wins.innerHTML = winCount;
    losses.innerHTML = lossCount;
    ties.innerHTML = tieCount;
    round.innerHTML = roundCount;
    rock.addEventListener("click", playerRock);
    paper.addEventListener('click' , playerPaper);
    scissors.addEventListener('click' , playerScissors);
    rock.addEventListener("click", playRound);
    paper.addEventListener('click' , playRound);
    scissors.addEventListener('click' , playRound);
    playbutton.removeEventListener('click' , startGame);
    togglePlayButton(); //makes the play button disappear
    togglePlayArea();//makes the play area appear
}

function togglePlayButton (){ //removes the play button after the game is started
    playbutton.style.display = 'none';
}

function togglePlayArea(){ //makes the play area appear
    playarea.style.display = 'grid';
}

function setPlayerIcon(image){ //function that displays player selection in "playericon"    
    if (image == 'rock') {
        playericon.style.backgroundSize = 'cover';
        playericon.style.backgroundImage = 'url(images/rock1.png)';
        playericon.style.border = "5px solid rgba(255, 255, 255, 0.50)";
        
    } else if (image == 'paper') {
        playericon.style.backgroundSize = 'cover';
        playericon.style.backgroundImage = 'url(images/paper1.png)';
        playericon.style.border = "5px solid rgba(255, 255, 255, 0.50)";
    } else if (image == 'scissors') {
        playericon.style.backgroundSize = 'cover';
        playericon.style.backgroundImage = 'url(images/scissors1.png)';
        playericon.style.border = "5px solid rgba(255, 255, 255, 0.50)";
    }
}

function setComputerIcon(image){
    if (image == 'rock'){
        computericon.style.backgroundSize = 'cover';
        computericon.style.backgroundImage = 'url(images/rock1.png)';
        computericon.style.border = "5px solid rgba(255, 255, 255, 0.50)";
    } else if (image == 'paper'){
        computericon.style.backgroundSize = 'cover';
        computericon.style.backgroundImage = 'url(images/paper1.png)';
        computericon.style.border = "5px solid rgba(255, 255, 255, 0.50)";
    } else if (image == 'scissors'){
        computericon.style.backgroundSize = 'cover';
        computericon.style.backgroundImage = 'url(images/scissors1.png)';
        computericon.style.border = "5px solid rgba(255, 255, 255, 0.50)";
    }
}
//function that displays computer selection in "computericon"

function playRound(){ //keeps track of round... after five rounds removes the event listeners from buttons
    if (roundCount == 6){ // when score = 5, remove the listeners
        rock.removeEventListener("click" , playerRock);
        paper.removeEventListener("click" , playerPaper);
        scissors.removeEventListener("click" , playerScissors);
        rock.removeEventListener("click" , playRound);
        paper.removeEventListener("click" , playRound);
        scissors.removeEventListener("click" , playRound);
        if (winCount > lossCount){
            console.log('You are ze winner!');//calculate winner/loser
        } else if (lossCount > winCount){
            console.log('You are ze loser!');
        } else console.log("I think this is a tie")
}
}

function computerPlay(){ //this randomizes the computers selection
    let = computerSelection = options[Math.floor(Math.random() *options.length)];
    return computerSelection;
}

function playerRock(){ //this plays upon rock being clicked
    let x = computerPlay();
    setPlayerIcon('rock');
   if (x == 'ROCK'){
        setComputerIcon('rock');
        console.log('TIE!');
        tieCount++;
        updateTieCount(tieCount);
   } else if (x == 'PAPER'){
        setComputerIcon('paper');
        console.log('You Lose!  PAPER beats ROCK!');
        lossCount++;
        updateLossCount(lossCount);
   } else if (x == 'SCISSORS'){
        setComputerIcon('scissors');
        console.log('You Win! ROCK beats SCISSORS!');
        winCount++;
        updateWinCount(winCount);
   } else {
        console.log('Something is wrong here.');
    }
    ++roundCount
    updateRoundCount(roundCount);
}

function playerPaper(){ // this plays upon paper being clicked
    let x = computerPlay();
    setPlayerIcon('paper');
    if (x == 'PAPER'){
        setComputerIcon('paper');
        console.log('TIE!');
        ++tieCount;
        updateTieCount(tieCount);
    } else if (x == 'ROCK'){
        setComputerIcon('rock');
        console.log('You Win! PAPER beats ROCK!');
        ++winCount;
        updateWinCount(winCount);
    } else if (x == 'SCISSORS') {
        setComputerIcon('scissors');
        console.log('You Lose! SCISSORS beats PAPER!');
        ++lossCount;
        updateLossCount(lossCount);
    } else {
        console.log('Something is wrong here.');
    }
    ++roundCount
    updateRoundCount(roundCount);
}

function playerScissors(){ //this plays upon scissors being clicked
    let x = computerPlay();
    setPlayerIcon('scissors');
    if (x == 'SCISSORS'){
        setComputerIcon('scissors');
        console.log('TIE!');
        ++tieCount;
        updateTieCount(tieCount);
    } else if (x == 'PAPER'){
        setComputerIcon('paper');
        console.log('You win! SCISSORS beats PAPER!');
        ++winCount;
        updateWinCount(winCount);
    } else if (x == 'ROCK'){
        setComputerIcon('rock');
        console.log('You Lose! ROCK beats SCISSORS!');
        ++lossCount;
        updateLossCount(lossCount);
    } else {
        console.log('Something is wrong here.');
    }
    ++roundCount
    updateRoundCount(roundCount);
}

function updateRoundCount(){ //this updates the round count variable and reassigns the div on the page to the current round count
    if (roundCount <= 5){
        round.innerHTML = roundCount;
    } else round.innerHTML = 5;
}

function updateTieCount(){ //this updates the tiecount variable and reassigns the div on the page
    ties.innerHTML = tieCount;
}

function updateLossCount(){ //this updates the losscount variable and reassigns the div on the page
    losses.innerHTML = lossCount;
}

function updateWinCount(){ //this updates the wincount variable and reassigns the div on the page
    wins.innerHTML = winCount;
    return winCount;
}