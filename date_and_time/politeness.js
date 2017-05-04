function askPolitely(sentence){
  var changedSentence = ''; // if we need to modify sentence we'll change this variable to keep the function pure
  
  if (sentence.charAt(sentence.length) != "?") {
    return sentence;
  }
  
  var plsStart = sentence.length - 7;
  var plsEnd = sentence.length -1;
  
  if (sentence.slice(plsStart, plsEnd) != 'please'){
    changedSentence = sentence.slice(-1,0) + ' please?';
    return changedSentence;
  }
  else {
    return sentence;
  }
}

// EXAMPLE TESTS

console.log(askPolitely("May I borrow your pencil?"));
// OUTPUT: "May I borrow your pencil please?"

console.log(askPolitely("May I borrow your pencil please?"));
// OUTPUT: "May I borrow your pencil please?"

console.log(askPolitely("My name is Grace Hopper."));
// OUTPUT: "My name is Grace Hopper."