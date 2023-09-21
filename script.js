function gameBoard(){


}

function gameStart(){
  let allButton = Array.from(document.querySelectorAll('.box-container'));
  // Get what button I click
  const clickBtn = allButton.forEach(button => button.addEventListener('click', event => {
  let clickedButton = event.currentTarget.getAttribute('data-num');
  playRound(clickedButton);
  })); 
  
  const player = [
    {
      playerOne: 'X'
    },
    {
      playerTwo: 'O'
    }
  ];

  let activePlayer = player[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === player[0] ? player[1] : player[0];
  };
  const getActivePlayer = () => activePlayer;

  const playRound = (data) => {
    console.log(data);
    
  }

}

function clickevent (){
  let allButton = Array.from(document.querySelectorAll('.box-container'));
  // Get what button I click
  const clickBtn = allButton.forEach(button => button.addEventListener('click', event => {
  let clickedButton = event.currentTarget.getAttribute('data-num');
  toStartGame.playRound(clickedButton);
  }));  
}

const game = gameStart();





