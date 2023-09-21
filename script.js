function gameBoard(){

  const markTurn = (turnData, playerTurn, arrbtn) => {
    for(const newArr of arrbtn){
      let dataAtt = newArr.getAttribute('data-num');
      if (dataAtt === turnData){
        let x = document.querySelector(`button[data-num="${turnData}"]`);
        x.textContent = playerTurn;   
      }
    }
  }

  return { markTurn }

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

    switchPlayerTurn();
  }

}

const game = gameStart();



// Task Tommorrow
// give validation that the turn can't change or click again.
// display the winner
// the button X and O to know who gonna be the first turn
// computer player
// 







