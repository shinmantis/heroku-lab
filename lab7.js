const difficulties = ["Easy", "Kinda-Easy", "Somewhat-Easy", "Medium", "Medium-Well?", "Hard"];

const goalString = 
[
  "lad fad sad dad",
  "This is not a test.",
  "Actually it really was a test.",
  "Life is sometimes a very difficult test to pass.",
  "Are you ready for a much more difficult test?  Life waits for no one.",
  "True! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad?"
];

/*Added some diffrent font styles which appear as the levels progress */
const fontStyle = ["Baloo Bhai", "Righteous", "Playball", "Orbitron", "Sacramento", "Tangerine"];

/*Added some diffrent background color styles which appear as the levels progress */
const backgroundStyle = ["aqua", "BlueViolet", "CornflowerBlue", "DeepPink", "IndianRed", "LightSkyBlue"];







var i = 0;
var start = 0;
var end = 0;




window.addEventListener("keypress", function (event) 
{ 


  //get the element where the user is typing 
  const textbox = document.getElementById("userinput");

  //sets the inner html content of the paragraph element to 
  //the keyboard value that is being typed by the user.
  textbox.textContent = textbox.textContent + event.key;

  //As soon as the user enters a single character, start the timer
  if(textbox.textContent.length == 1)
  {
    console.log("timer fired!");
    start = Date.now();
  }

  
  //If the type value is the same as the goalString, then
  //the user moves on to the next level
  if (textbox.textContent == goalString[i]) 
  {

    //End the timer on completing the challenge successfully
    end = Date.now();


    //Caclulate the elasped time
    diff = (end - start)/1000

    //Display the elapsed time
    document.getElementById("timerValue").innerHTML = diff;
  

    //Get the h3 element labeled by the id tag as "result"
    const result = document.getElementById("result");
    
    //Display a congratulatory message
    result.textContent = "You Win!";

    //Create the next challenge button
    var next = document.createElement('button');

    //Set and id of next for the button
    next.setAttribute("id", "next");

    //Set class of next for the button
    next.setAttribute("class", "next");

    //Set the text for the next challenge button
    next.innerHTML = "Next Challenge";

    //Append the button
    document.body.appendChild(next);

    //Set the event listener to fire when it's clicked
    next.addEventListener('click', nextChallenge);
   
  }

})



function nextChallenge()
{
   //increment the array counter to move onto the next level
    i = i+1;

    if(i > 5)
    {
      window.location.href = "https://media1.giphy.com/media/l46CtynlAiRNzfsA0/giphy.gif"
    }


    else
    {
      //rest timer values
      start = 0;

      end = 0;

      //Clear the previous timer value
      document.getElementById("timerValue").innerHTML = "";

      //Get the h3 element labeled by the id tag as "result"
      const result = document.getElementById("result");
      
      //Reset the results html element
      result.textContent = "Type the Following text:";

      //Get the user inputs html element
      const textbox = document.getElementById("userinput");  

      //Clear the textbox content after completing the current level
      textbox.textContent = "";


      //Get the h3 element labeled by the id tag as "level"
      lvl = document.getElementById("level")
      
      //Set the current level to the current ith value of the difficulties array
      lvl.textContent = difficulties[i];

      //Get the strong element labeled by the "goal" tag
      goal = document.getElementById("goal");

      //Set the next goal to the ith value of te goalstring arrray
      goal.textContent = goalString[i];

      //Remove the next challenge at the begining of every new challenge
      document.getElementById("next").remove();


      //Set the new font style for the next challenge
      body.style.fontFamily = fontStyle[i];

      //Set the new background color
      body.style.background = backgroundStyle[i];
    }



}
