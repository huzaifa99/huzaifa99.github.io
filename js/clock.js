function startTime()
{
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  min = checkTime(min);
  sec = checkTime(sec);

  document.getElementById('txt').innerHTML =
  hour + ":" + min +":" + sec;

  //The window.setTimeout() method can be written without the window prefix.
  //The first parametre is a function to be execaued.
  //The second parametre indicate the number of milliseconds before execution.

  var time = setTimeout(startTime, 300);
}

function checkTime(num)
{
  if (num < 10)
  {
    num = "0" + num
  }; // add zero in front of number < 10
  return num;
}
