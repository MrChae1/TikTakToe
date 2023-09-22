function gameBoard(){
  // const valid = validate();
  const markTurn = (turnData, playerTurn, arrbtn) => {
    for(const newArr of arrbtn){
      let dataAtt = newArr.getAttribute('data-num');
      if (dataAtt === turnData){
        let x = document.querySelector(`button[data-num="${turnData}"]`);
        validate(x, playerTurn);  
      }
    }
  }

  const showWin = (win, wins, showM) => {
    // const winner = document.querySelector('#Show-Winner');
    // const showModal = document.querySelector('.hidden-modal');
    wins.textContent = `Winner is player ${win}`;
    showM.style.display = 'block';  
  }

  // const reStart = (reBtn, showM, win, btnArr, fX, fO) => {
  //   const reGame = gameStart();
  //   reBtn.addEventListener('click', () => {
  //     btnArr.forEach(arr => arr.disabled = false);
  //     btnArr.forEach(arr => arr.textContent = '');
  //     fX = [];
  //     fO = [];
  //     showM.style.display = 'none';
  //     win.textContent = '';
      
  //   });
  // }

  const validate = (result, turn) => {
    if (result.textContent === ""){
      result.textContent  = turn;
      result.disabled = true;
    }
  }

  const checkBoard = (arrcheck, decider) => {
    const ForX = [];
    const ForO = [];
    let arrchecking = arrcheck.filter(arr => arr.textContent !== "");
    for(const seperate  of arrchecking){
      if(seperate.textContent === 'X'){
        ForX.push(seperate.getAttribute('data-num'));
        // console.log(ForX);
      }
      else if(seperate.textContent === 'O'){
        ForO.push(seperate.getAttribute('data-num'));
        // console.log(ForO);
      }
    }

    if(ForX.length >= 3){
      validateResult(ForX, ForO, decider, arrcheck, arrchecking);
    }
  
}

  return { markTurn, checkBoard, showWin, reStart }

}
 function validateResult(x, o, win, AllArray, arrcheck){
  const winner = document.querySelector('#Show-Winner');
  const showModal = document.querySelector('.hidden-modal');
  const reStartBtn = document.querySelector('#Restart');
  const GBoard = gameBoard();
  const horOne = ["1", "2", "3"];
  const horTwo = ["4", "5", "6"];
  const horThree = ["7", "8", "9"];
  const verOne = ["1", "4", "7"];
  const verTwo = ["2", "5", "8"];
  const verThree = ["3", "6", "9"];
  const horver = ["1", "5", "9"];
  const horverTwo = ["3", "5", "7"];

  if((horOne.every(value => x.includes(value)) || horOne.every(value => o.includes(value))) || (verOne.every(value => x.includes(value)) || verOne.every(value => o.includes(value)))){  
    GBoard.showWin(win, winner, showModal);
    // winner.textContent = `Winner is player ${win}`;
    // showModal.style.display = 'block';
    // GBoard.reStart(reStartBtn, showModal, winner, AllArray, x, o);

  }
  else if((horTwo.every(value => x.includes(value)) || horTwo.every(value => o.includes(value))) || (verTwo.every(value => x.includes(value)) || verTwo.every(value => o.includes(value)))){
    GBoard.showWin(win);
    // GBoard.reStart(reStartBtn, showModal, winner, AllArray, x, o);

  }
  else if((horThree.every(value => x.includes(value))) || (horThree.every(value => o.includes(value))) || (verThree.every(value => x.includes(value))) || (verThree.every(value => o.includes(value)))){
    GBoard.showWin(win);
    // GBoard.reStart(reStartBtn, showModal, winner, AllArray, x, o);
  }
  else if((horver.every(value => x.includes(value))) || (horver.every(value => o.includes(value)))){
    GBoard.showWin(win);
    // GBoard.reStart(reStartBtn, showModal, winner, AllArray, x, o);
  }
  else if((horverTwo.every(value => x.includes(value))) || (horverTwo.every(value => o.includes(value)))){
    GBoard.showWin(win);
    // GBoard.reStart(reStartBtn, showModal, winner, AllArray, x, o);
  }
  else if(arrcheck.length === 9){
    winner.textContent = `Draw`;
    showModal.style.display = 'block';
    // GBoard.reStart(reStartBtn, showModal, winner, AllArray, x, o);
  }
 }

function gameStart(){
  let allButton = Array.from(document.querySelectorAll('.box-container'));
  // Get what button I click
  const clickBtn = allButton.forEach(button => button.addEventListener('click', event => {
  let clickedButton = event.currentTarget.getAttribute('data-num');
  playRound(clickedButton);
  })); 


  const board = gameBoard();
  
  const player = [
    {
      players: 'X'
    },
    {
      players: 'O'
    }
  ];

  let activePlayer = player[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === player[0] ? player[1] : player[0];
  };
  const getActivePlayer = () => activePlayer;

  const playRound = (data) => {
    board.markTurn(data, getActivePlayer().players, allButton)
    board.checkBoard(allButton, getActivePlayer().players)
    switchPlayerTurn();
  }

}

const game = gameStart();



// Task Tommorrow
// the button X and O to know who gonna be the first turn
// Can Restart Game 
// computer player
// 







