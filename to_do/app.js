function newTask () {
  var task = document.getElementById('input').value; // grabs what is inside input field
  var UL = document.getElementById('myList');  // sets the ul element to my UL variable
  var LI = document.createElement('li'); // creates an li element that will recieve the task

  LI.appendChild(document.createTextNode(task)); // appends to the created li element the task entered into the input field
  UL.appendChild(LI); // appends to the list the li element that now holds the task from the input field
  document.getElementById('input').value=""; // resets the input field to blank
  LI.onclick = removeItem; // clicking an entered task will delete it ?? why don't we need () for this function?

  // program runs as enter key (keyCode 13) is released
}
document.body.onkeyup = function(e) {
  if(e.keyCode == 13) {
    newTask();
  }
}

function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}

