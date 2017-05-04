function askPolitely(sentence){
  // find please at the end of sentences
  var plsStart = sentence.length - 7;
  var plsEnd = sentence.length -1;
  var pls = sentence.slice(plsStart, plsEnd); 

  if (pls === 'please') {
    return sentence;
  }
  // skip if sentence is not a question
  if (sentence.charAt(sentence.length-1) != '?') {
    return sentence;
  }
  else {
    return sentence.slice(0,-1) + ' please?';
  }
}

// EXAMPLE TESTS

console.log(askPolitely("May I borrow your pencil?"));
// OUTPUT: "May I borrow your pencil please?"

console.log(askPolitely("May I borrow your pencil please?"));
// OUTPUT: "May I borrow your pencil please?"

console.log(askPolitely("My name is Grace Hopper."));
// OUTPUT: "My name is Grace Hopper."