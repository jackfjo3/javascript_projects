function newTask () {
  var task = document.getElementById('input').value; // grabs what is inside input fiels
  var ul = document.getElementById('list');
  var li = document.createElement('li');

  li.appendChild(document.createTextNode("- "+ task));
  ul.appendChild(li);
  document.getElementById('input').value="";
  li.onclick = removeItem;

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

