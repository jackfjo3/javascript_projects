function moveHands() {
  var date = new Date(); // local variable date was defined rather than using the with statement
    h = 30* date.getHours() % 12 + date.getMinutes() / 60; // 30 degrees for each hour
    m = 6 * date.getMinutes(); // 6 degrees each minute
    s = 6 * date.getSeconds(); 
    // now rotate the clock via changing css

    document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";
    document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
    document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";

    setTimeout(moveHands, 1000);
}
window.onload = moveHands;