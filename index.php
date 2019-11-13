<?php

echo 
'

<html>
  <head>
  <link rel="stylesheet" href="/lab7.css">

  <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Baloo Bhai">



  <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Righteous">



  <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Playball">

  <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Orbitron">


  <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sacramento">


  <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine">
  </head>

  <body onload = "init();">
    <div id = "gameSpace">
      <h3>Current Level: <span id ="level">Easy</h3>



      <h3>Your completion time (seconds) will appear below :</h3>
      <h3 id="timerValue"></h3>

      <h3 id="result">Type the Following text:</h3>
      <strong id="goal">lad fad sad dad</strong><br>

      <p id="userinput" class="text"></p><br><br>

      <button id="restartButton" class="restart">Restart</button>
    </div>
  </body>
</html>

 <script src="lab7.js"></script>
 <script src="typing.js"></script>






';
?>