/*Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

*/

// My original solution

function findMissingLetter(array) {
  var abc = "abcdefghijklmnopqrstuvwxyz";
  abc += abc.toUpperCase();
  var indexFirstLetter = abc.indexOf(array[0]);
  for (var i=1; i<array.length; i++) {
    if (abc[indexFirstLetter+i]!=array[i]) {
      return abc[indexFirstLetter+i];
    }
  }
}

console.log(findMissingLetter(['O','Q','R','S']));


// Best practice solution using .charCodeAt()

function findMissingLetter(array) {
  // join array into string
  var str = array.join('');

  // loop through array string, finding the difference in unicode. when the difference is greater than 1 we know there is a missing letter 
  for (var i=0; i<array.length; i++) {
    if (str.charCodeAt(i+1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
}

console.log(findMissingLetter(['O','Q','R','S']));

