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

var chooseWinner = function(player, cpu) {
  if (order[player] === order[cpu]) {
    return 'Tied Game. Try again?';
  }
  if (order[player] === order[cpu + 1]) {
    score++;
    return 'Winner! Try again?';
  }
  else {
    score--;
    return 'You lost... Try again?';}
};



var results = document.getElementById('results');


function shootWith(weaponNum) {
  // set players choice
  playerChoice = weaponNum;
  cpuChoice.init();
  // give feedback on the cpu choice
  results.innerText = 'Computer chose: ' + cpuChoice.text;
  // determine winner
  // display the winner and current score
  results.innerText += '\n' + chooseWinner(playerChoice, cpuChoice.store);
  results.innerText += '\n Score: ' + score;
}
 