var userChoice = prompt("Do you choose rock, paper, or scissors?");

while (!(userChoice == 'rock' || userChoice == 'paper' || userChoice =='scissors')) {
  userChoice = prompt("Do you choose rock, paper, or scissors?");
}

if (userChoice != 'rock') {console.log('hmm');}

computerChoice = Math.random();

if (computerChoice <= 0.33) {
  computerChoice = "rock";
}
else if (computerChoice >= 0.67) {
  computerChoice = "scissors";
}
else {computerChoice = "paper"}

var result = 'No Result Yet';


var compare = function(choice1, choice2) {
  if (choice1 == choice2) {
     return result = 'The result is a tie!';
  }
  if (choice1 == "rock") {
    if (choice2 == "scissors") {
      return result =  "rock wins";
    }
    else return result = "paper wins";
  }

  if (choice1 == "paper") {
    if (choice2 == "scissors") {
      return result =  "scissors wins";
    }
    else return result = "paper wins";
  }

  if (choice1 == "scissors") {
    if (choice2 == "rock") {
      return result =  "rock wins";
    }
    else return result = "scissors wins";
  }
};

compare(userChoice, computerChoice);

document.getElementById('choices').innerHTML = userChoice + " vs " + computerChoice;
document.getElementById('result').innerHTML = result;

