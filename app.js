var blue = true;
var red = false;
var green = false;
var startTime;
var mainText = document.getElementById("start-text");
var t;
var clock = `<svg id="clock" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>`


function timer(){
  blue = false;
  red = false;
  green = true;

  //Change screen to green
  document.body.style.backgroundColor = "#4bdb6a";
  mainText.innerHTML = "Click!";
  startTime = new Date().getTime();
}



document.body.onmousedown = function() {
  if(blue){
    blue = false;
    green = false
    red = true

    try{
        document.getElementById("clock").remove();
    }
    catch{

    }

    mainText.innerHTML = "Wait for green...";
    document.body.style.backgroundColor = "#ce2636";
    var r = Math.floor(Math.random() * 10) + 3;
    t = window.setTimeout(timer, r*1000);
  }
  else if(red){
    blue = true;
    green = false;
    red = false;

    mainText.innerHTML = "Too soon! Click to try again...";
    document.body.style.backgroundColor = "#ce2636";
    window.clearTimeout(t);
  }
  else if(green){
    blue = true;
    green = false;
    red = false;

    var endTime = new Date().getTime();
    var diff = endTime - startTime;
    mainText.innerHTML = diff + " ms";

    clock_el = mainText.insertAdjacentHTML('beforebegin', clock)
  }
}
