var date = new Date();



var dayNumber = date.getDay();

var dayNames = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',

};

var dayOfWeekToday = dayNames[dayNumber];

document.getElementById("dayOfWeek").innerHTML = "Today is: " + dayOfWeekToday; 


function hour12(hour24) {
  if (date.getHours() > 12) {
    return hour24 - 12 + 'PM';
  }
  else {
    return hour24 + 'AM';
  }
}

var hour = hour12(date.getHours());
var minute = date.getMinutes();
var second = date.getSeconds();

document.getElementById("time").innerHTML = "Current time is: " + hour + ' : ' + minute + ' : ' + second;

document.getElementById("defaultTimeFormat").innerHTML = date;