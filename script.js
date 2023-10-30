window.onload = function() {

  var seconds = 20;
  var rest = true;
  var interval;

  intervalTime = 20;
  breakTime = 10;

  var gearButton = document.getElementById("gear");

  var startButton = document.getElementById("start");
  var pauseButton = document.getElementById("pause");
  var resetButton = document.getElementById("reset");

  var statusHeader = document.getElementById("status");
  var secondsSpan = document.getElementById("sec");

  myWorkouts = ["Jumping Jacks","High Knees","Run in place","Squats", "Butt Kickers", "Push Ups", "Burpees", "Shoulder Press", "Chest Fly", "Front Kicks"];

  startButton.onclick = function() {
    rest = false;
    changeToGo();
    interval = setInterval(countdownSeconds, 1000);
  }

  resetButton.onclick = function() {
    reset();
  }

  function reset() {
    clearInterval(interval);
    seconds = intervalTime;
    secondsSpan.innerText = seconds;
    rest = true;
    changeToRest();
  }

  pauseButton.onclick = function() {
    clearInterval(interval);
  }

  function countdownSeconds() {
    seconds -= 1;
    secondsSpan.innerText = seconds;
    checkForStateChange();
  }

  function checkForStateChange() {
    if (seconds == 0 && rest == false) {
      seconds = parseInt(breakTime ) + 1;
      rest = true;
      changeToRest();
    } else if (seconds == 0 && rest == true) {
      seconds = parseInt(intervalTime) + 1;
      rest = false;
      changeToGo();
    }
  }

  function changeToRest() {
    $("body").css("background", "cyan");
    statusHeader.innerText = "Rest";
  }

  function changeToGo() {
    $("body").css("background", "pink");
    const random = Math.floor(Math.random() * myWorkouts.length);
    statusHeader.innerText = myWorkouts[random];
  }


  gearButton.onclick = function (){
    window.name = "parent";
    let newWindow = open('gear.html', '_blank',"width=600,height=800").focus;
    }
  }
  window.onfocus = function(){
    let text = localStorage.getItem("elist");
    let arr = JSON.parse(text);
    if (arr[0] != undefined){
      myWorkouts= arr;
    }
    let localIntervalTime = JSON.parse(localStorage.getItem("intervalTimeStored"));
    intervalTime = parseInt(localIntervalTime);
    let localBreakTime = JSON.parse(localStorage.getItem("breakTimeStored"));
    breakTime = parseInt(localBreakTime);
    reset();
  }