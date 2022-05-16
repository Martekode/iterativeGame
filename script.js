//global variables
var scorePlace = document.getElementById('score');
var scoreClicker = parseInt(scorePlace.innerText);
var incClicker = 1;
//clicker function
document.getElementById('mainImg').addEventListener('click', function(){
    //console.log(scoreClicker);
    scoreClicker += incClicker;
    scorePlace.innerText = scoreClicker;
    //console.log(scoreClicker);
})