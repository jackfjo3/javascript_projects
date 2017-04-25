function moveHands() {
  with (new Date()) {
    h = 30 * (getHours() % 12 + getMinutes() / 60); // 30 degrees for each hour
    m = 6 * (getMinutes()); // 6 degrees each minute
    s = 6 * (getSeconds()); 
    // now rotate the clock via changing css

    document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";
    document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
    document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";

    setTimeout(moveHands, 1000);
  }
}
window.onload = moveHands;