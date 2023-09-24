//This is all the function that can use by the gameStart
function gameBoard(){
  const winner = document.querySelector('#Show-Winner');
  const showModal = document.querySelector('.hidden-modal');
  const reStartBtn = document.querySelector('#Restart');
  const playerCon = document.querySelector('.player-Name');
  const pContwo = playerCon.querySelector('.pcontain')
  const playIn = Array.from(pContwo.querySelectorAll('input'));
  const mainCon = document.querySelector('.Main-Box-Container');
  const inValue = [];
  const playerDisplay = document.querySelector('.scoreboard');
  const playerScore = Array.from(playerDisplay.querySelectorAll('p'));
  let scoreOne = 0;
  let scoreTwo = 0;
  const player = [
    {
      name: 'playerOne',
      players: 'X'
    },
    {
      name: 'playerTwo',
      players: 'O'
    }
];


  const getValue = () => {
      const Startbtn = pContwo.querySelector('.Start-btn');
      Startbtn.addEventListener('click', () => {
        playIn.forEach(input => inValue.push(input.value));
        playIn.forEach(input => input.value = '');
        player[0].name = inValue[0];
        player[1].name = inValue[1];
        mainCon.style.display = 'grid';
        playerCon.style.display = 'none';
        playerDisplay.style.display = 'flex'
        playerScore[0].textContent = `${inValue[0]}: ${scoreOne}`;
        playerScore[1].textContent = `${inValue[1]}: ${scoreTwo}`;
      });
    }
  
  // changing the textContent of the Board with the player Mark
  const BoardMark = (btnData, btnArr, playerMark) =>{
      for(const newArr of btnArr){
          let btnAtt = newArr.getAttribute('data-num');
          if(btnAtt === btnData){
              const selectedBtn = document.querySelector(`button[data-num="${btnData}"]`);
              validate(selectedBtn, playerMark); 
          }
      }

  }

  //The button can't be click again once it was already taken by the opposing player
  function validate(clkBtn, Markings){
      if(clkBtn.textContent === ''){
          clkBtn.textContent = Markings;
          clkBtn.disabled = true;
      }
  }

  //Checking the Board if we already have a winner or the gtame is draw
   const checkBoard = (btnArr, playerMark) =>{
      const withXmark = [];
      const withOmark = [];

      const arrChecking = btnArr.filter(array => array.textContent !== "");

      for(const separation of arrChecking){
          if(separation.textContent === 'X'){
              withXmark.push(separation.getAttribute('data-num'));
          }
          else{
              withOmark.push(separation.getAttribute('data-num'));
          }
      }

      if(withXmark.length >= 3){
          gameResult(withXmark, withOmark, playerMark, arrChecking, btnArr);
      }
   }

   function gameResult(x,o,mark, newbtnArr, btnArr){
      const horOne = ["1", "2", "3"];
      const horTwo = ["4", "5", "6"];
      const horThree = ["7", "8", "9"];
      const verOne = ["1", "4", "7"];
      const verTwo = ["2", "5", "8"];
      const verThree = ["3", "6", "9"];
      const horver = ["1", "5", "9"];
      const horverTwo = ["3", "5", "7"];

      if((horOne.every(value => x.includes(value)) || horOne.every(value => o.includes(value))) || (verOne.every(value => x.includes(value)) || verOne.every(value => o.includes(value)))){  
          ShowWinner(mark, btnArr);
          // console.log('1');
      
        }
        else if((horTwo.every(value => x.includes(value)) || horTwo.every(value => o.includes(value))) || (verTwo.every(value => x.includes(value)) || verTwo.every(value => o.includes(value)))){
          ShowWinner(mark, btnArr);
          console.log('2');
        }
        else if((horThree.every(value => x.includes(value))) || (horThree.every(value => o.includes(value))) || (verThree.every(value => x.includes(value))) || (verThree.every(value => o.includes(value)))){
          ShowWinner(mark, btnArr);
          // console.log('3');
        }
        else if((horver.every(value => x.includes(value))) || (horver.every(value => o.includes(value)))){
          ShowWinner(mark, btnArr);
          // console.log('4');
        }
        else if((horverTwo.every(value => x.includes(value))) || (horverTwo.every(value => o.includes(value)))){
          ShowWinner(mark, btnArr);
          // console.log('5');
        }
        else if(newbtnArr.length === 9){
          winner.textContent = `The Game is Draw`;
          showModal.style.display = 'flex';
          // console.log('6');
        }

   }  

   // Show a modal that display the winner and restart button
   const ShowWinner = (winnerMark, btnArr ) =>{
      if(winnerMark === 'X'){
        if(player[0].name === inValue[0]){
          winner.textContent = `Winner is player ${player[0].name}`;
          updateScoreforOne(winnerMark);
          player[0].name = inValue[1];
          player[1].name = inValue[0];
          console.log(player);
        }
        else{
          winner.textContent = `Winner is player ${player[0].name}`;
          updateScoreforTwo(winnerMark);
          player[0].name = inValue[0];
          player[1].name = inValue[1];
          console.log(player);
        }
      }
      else{
          if(player[1].name === inValue[1]){
            winner.textContent = `Winner is player ${player[1].name}`;
            updateScoreforTwo(winnerMark);
            // player[0].name = inValue[0];
            // player[1].name = inValue[1];
            console.log(player);
          }
          else{
            winner.textContent = `Winner is player ${player[1].name}`;
            updateScoreforOne(winnerMark);
          }  
      }
      showModal.style.display = 'flex';
      btnArr.forEach(array => array.disabled = true);
   }

   const reGame = (btnArr) =>{
      btnArr.forEach(array => array.textContent = "");
      btnArr.forEach(array => array.disabled = false);
      showModal.style.display = 'none';
      winner.textContent = "";
   }

   const updateScoreforOne = (winnerMark) => {
      scoreOne++;
      if(winnerMark === 'X'){
        playerScore[0].textContent = `${player[0].name}: ${scoreOne}`;
      }
      else{
        playerScore[0].textContent = `${player[1].name}: ${scoreOne}`;
      }
      
   }
   const updateScoreforTwo = (winnerMark) => {
      scoreTwo++;
      if(winnerMark === 'X'){
        playerScore[1].textContent = `${player[0].name}: ${scoreTwo}`;
        console.log('impostor');
      }
      else{
        playerScore[1].textContent = `${player[1].name}: ${scoreTwo}`;
        console.log('here');
      }
      

   }

return { BoardMark, checkBoard, winner, reStartBtn, reGame, getValue, inValue, player }

}

// this is the process of the game
function gameStart(){
  const board = gameBoard();
  board.getValue();

  let allButton = Array.from(document.querySelectorAll('.box-container'));
  allButton.forEach(button => button.addEventListener('click', event => {
      let clickedButtonData = event.currentTarget.getAttribute('data-num');
      Start(clickedButtonData);
  }));
  

  let activePlayer = board.player[0];
  console.log(activePlayer);

  const switchPlayerTurn = () => {
  activePlayer = activePlayer === board.player[0] ? board.player[1] : board.player[0];
};
  const getActivePlayer = () => activePlayer;

  function Start(buttonData){
      board.BoardMark(buttonData, allButton, getActivePlayer().players);
      board.checkBoard(allButton, getActivePlayer().players);
      switchPlayerTurn();
      if(board.winner.textContent !== ""){
          board.reStartBtn.addEventListener('click', () => {
              board.reGame(allButton);
              if(activePlayer === board.player[0]){
                activePlayer = board.player[1]
                switchPlayerTurn();
              }
              else{
                switchPlayerTurn();              
              }
              
          });
      }
      
      
  }

}

const Game = gameStart();