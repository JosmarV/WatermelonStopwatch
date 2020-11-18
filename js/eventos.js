var minutes = 0,
    seconds = 0,
    incrementoM = 0,
    incrementoS = 0,
    incrementoT = 0,
    temp;

var pMinutes = document.getElementById("minutes");
var pSeconds = document.getElementById("seconds");
var pTens = document.getElementById("tens");

    var startStopwatch = function(){
      //tens
      incrementoT += 1;
      pTens.innerHTML = incrementoT;

      //seconds
      if(incrementoT > 99){
        incrementoS += 1;
        incrementoT = 0;
        if (incrementoS < 10) {
          pSeconds.innerHTML = "0" + incrementoS;
        }
        else {
            pSeconds.innerHTML = incrementoS;
        }
        pTens.innerHTML = "0" + incrementoT;
        console.log(pSeconds);

        //minutes
        if (incrementoS > 59) {
          incrementoM += 1;
          incrementoS = 0;
          if (incrementoM < 10) {
            pMinutes.innerHTML = "0" + incrementoM;
          }
          else {
            pMinutes.innerHTML = incrementoM;
          }
          pSeconds.innerHTML = "0" + incrementoS;
        }
      }
    };
document.getElementById("startButton").onclick = function()
{
  clearInterval(temp);
  temp = setInterval(startStopwatch, 10);
}

document.getElementById("stopButton").onclick = function()
{
  clearInterval(temp);
}

document.getElementById("resettButton").onclick = function()
{
  clearInterval(temp);
      minutes = 0,
      seconds = 0,
      tens = 0,
      incrementoM = 0,
      incrementoS = 0,
      incrementoT = 0;
  pMinutes.innerHTML = "0" + minutes;
  pSeconds.innerHTML = "0" + seconds;
  pTens.innerHTML = "0" + tens
}
