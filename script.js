//This is all the function that can use by the gameStart
function gameBoard(){
    
  const showModal = document.querySelector('.hidden-modal');
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
   const checkBoard = (btnArr, playerMark, showWin) =>{
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
          gameResult(withXmark, withOmark, playerMark, arrChecking, btnArr, showWin);
      }
   }

   function gameResult(x,o,mark, newbtnArr, btnArr, showWin){
      const horOne = ["1", "2", "3"];
      const horTwo = ["4", "5", "6"];
      const horThree = ["7", "8", "9"];
      const verOne = ["1", "4", "7"];
      const verTwo = ["2", "5", "8"];
      const verThree = ["3", "6", "9"];
      const horver = ["1", "5", "9"];
      const horverTwo = ["3", "5", "7"];

      if((horOne.every(value => x.includes(value)) || horOne.every(value => o.includes(value))) || (verOne.every(value => x.includes(value)) || verOne.every(value => o.includes(value)))){  
          ShowWinner(mark, btnArr, showWin);
          
      
        }
        else if((horTwo.every(value => x.includes(value)) || horTwo.every(value => o.includes(value))) || (verTwo.every(value => x.includes(value)) || verTwo.every(value => o.includes(value)))){
          ShowWinner(mark, btnArr, showWin);
          
        }
        else if((horThree.every(value => x.includes(value))) || (horThree.every(value => o.includes(value))) || (verThree.every(value => x.includes(value))) || (verThree.every(value => o.includes(value)))){
          ShowWinner(mark, btnArr, showWin);
          
        }
        else if((horver.every(value => x.includes(value))) || (horver.every(value => o.includes(value)))){
          ShowWinner(mark, btnArr, showWin);
          
        }
        else if((horverTwo.every(value => x.includes(value))) || (horverTwo.every(value => o.includes(value)))){
          ShowWinner(mark, btnArr, showWin);
          
        }
        else if(newbtnArr.length === 9){
          showWin.textContent = `The Game is Draw`;
          showModal.style.display = 'flex';
          
        }

   }  

   // Show a modal that display the winner and restart button
   const ShowWinner = (winnerMark, btnArr, showWin) =>{
      if(winnerMark === 'X'){
        if(player[0].name === inValue[0]){
          showWin.textContent = `Winner is player ${player[0].name}`;
          updateScoreforOne(winnerMark);
          player[0].name = inValue[1];
          player[1].name = inValue[0];
          
        }
        else{
          showWin.textContent = `Winner is player ${player[0].name}`;
          updateScoreforOne(winnerMark);
          player[0].name = inValue[0];
          player[1].name = inValue[1];
          
        }
      }
      else{
          if(player[1].name === inValue[1]){
            showWin.textContent = `Winner is player ${player[1].name}`;
            updateScoreforOne(winnerMark); 
          }
          else{
            showWin.textContent = `Winner is player ${player[1].name}`;
            updateScoreforOne(winnerMark);
          }  
      }
      showModal.style.display = 'flex';
      btnArr.forEach(array => array.disabled = true);
   }

   const reGame = (btnArr, showWin) =>{
      btnArr.forEach(array => array.textContent = "");
      btnArr.forEach(array => array.disabled = false);
      showModal.style.display = 'none';
      showWin.textContent = "";
   }

   const updateScoreforOne = (winnerMark) => {
      if(winnerMark === 'X'){
        if(player[0].name === inValue[0]){
          scoreOne++;
          console.log('One')
          playerScore[0].textContent = `${player[0].name}: ${scoreOne}`;
        }
        else{
          console.log('two')
          scoreTwo++;

          playerScore[1].textContent = `${player[0].name}: ${scoreTwo}`;
        }   
      }
      else{
        if(player[1].name === inValue[0]){
          scoreOne++;
          console.log('Three');
          playerScore[0].textContent = `${player[1].name}: ${scoreOne}`;
        }
        else{
          console.log('forth')
          scoreTwo++;
          playerScore[1].textContent = `${player[1].name}: ${scoreTwo}`;
        } 
      }      
   }

return { BoardMark, checkBoard, reGame, getValue}

}

// this is the process of the game
function gameStart(){
  const board = gameBoard();
  board.getValue();
  const reStartBtn = document.querySelector('#Restart');
  const winner = document.querySelector('#Show-Winner');
  let allButton = Array.from(document.querySelectorAll('.box-container'));
  allButton.forEach(button => button.addEventListener('click', event => {
      let clickedButtonData = event.currentTarget.getAttribute('data-num');
      Start(clickedButtonData);
  }));
  

  let activePlayer = 0;

  const switchPlayerTurn = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
};
  
  function Start(buttonData){
      if(activePlayer === 0){
          const getActivePlayer = 'X';
          board.BoardMark(buttonData, allButton, getActivePlayer);
          board.checkBoard(allButton, getActivePlayer, winner);
      }
      else{
          const getActivePlayer = 'O';
          board.BoardMark(buttonData, allButton, getActivePlayer);
          board.checkBoard(allButton, getActivePlayer, winner);
      }
      switchPlayerTurn();
      if(winner.textContent !== ""){
          reStartBtn.addEventListener('click', () => {
              board.reGame(allButton, winner);
              if(activePlayer === 0){
                activePlayer = 1
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