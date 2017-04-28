var score = 0;
var playerChoice;

var readable = {
  '0': 'Rock',
  '1': 'Paper',
  '2': 'Scissors'
};

var cpuChoice = {
  init: function() {
    this.store = Math.floor(Math.random()*3);
    this.text = readable[this.store];
  },
  store: '',
  text: '',
};

var order = [0, 1, 2, 0];

var lastGameWinOrLose = '';

var chooseWinner = function(player, cpu) {
  if (order[player] === order[cpu]) {
    lastGameWinOrLose = 'Tied';
    return 'Tied Game. Try again?';
  }
  if (order[player] === order[cpu + 1]) {
    score++;
    lastGameWinOrLose = 'Won';
    return 'Winner! Try again?';
  }
  else {
    score--;
    lastGameWinOrLose = 'Lost';
    return 'You lost... Try again?';}
};



var results = document.getElementById('results');


function shootWith(weaponNum) {
  // set players choice from HTML button onclick
  playerChoice = weaponNum;
  // set computers choice from function previously defined
  cpuChoice.init();
  // give feedback on the cpu choice
  results.innerText = 'Computer chose: ' + cpuChoice.text;
  // determine winner
  // display the winner and current score
  results.innerText += '\n' + chooseWinner(playerChoice, cpuChoice.store);
  results.innerText += '\n Score: ' + score;

  // list history of wins and losses
  var histryList = document.getElementById('history');
  var LI = document.createElement('li');
  LI.appendChild(document.createTextNode(lastGameWinOrLose + ': ' +readable[playerChoice] + ', ' + cpuChoice.text));
  histryList.appendChild(LI);

}



 