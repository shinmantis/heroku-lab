

var restartButton = document.querySelector("#restartButton");

restartButton.addEventListener('click', restart);

var body = document.getElementsByTagName("BODY")[0];



//Initialize the beginning font style
function init()
{
  
  body.style.fontFamily = fontStyle[0];
  body.style.background = backgroundStyle[0];
  

}



function restart()
{

  //clear timer values
  start = 0;

  end = 0;

  //restart the array indicies
  i = 0;

  //Clear displayed timer value
  document.getElementById("timerValue").innerHTML = "";

  //Clear User input feild
  const textbox = document.getElementById("userinput");

  textbox.textContent = ""

  //Get the h3 element labeled by the id tag as "result"
  const result = document.getElementById("result");
    
  //Reset the contents
  result.textContent = "Type the Following text:";

  //Get the h3 element labeled by the id tag as "level"
  lvl = document.getElementById("level")
    
  //Set the current level to the current ith value of the difficulties array
  lvl.textContent = difficulties[i]

  //Get the strong element labeled by the "goal" tag
  goal = document.getElementById("goal")

  //Set the next goal to the ith value of te goalstring arrray
  goal.textContent = goalString[i]

  //Get restart button elementt
  const button = document.getElementById("restartButton");

  //Unfocus the button so you don't restart accidentally
  button.blur();

  //Remove the next challenge button if it exists on restart
  var next = document.getElementById("next");

  if(next)
  {
    document.getElementById("next").remove();
  }

  //Set the initial font style
  body.style.fontFamily = fontStyle[i];

  //Set the initial background color
  body.style.background = backgroundStyle[i];

  
}