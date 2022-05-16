//global variables
    //variables for the clicker itself
var scorePlace = document.getElementById('score');
var scoreClicker = parseInt(scorePlace.innerText);
var incClicker = 1;
    //vars for buy
        //slightOfHand
var buySlightOfHandPlace = document.getElementById('slightOfHand');
var buySlightOfHandNumb = parseInt(buySlightOfHandPlace.innerText);
//clicker function
document.getElementById('mainImg').addEventListener('click', function(){
    //Clicker
    scoreClicker += incClicker;
    scorePlace.innerText = scoreClicker;
    
});
//checker loop
setInterval(function(){
    if(scoreClicker >= buySlightOfHandNumb){
        buySlightOfHandPlace.classList.remove('disabled');
        buySlightOfHandPlace.style.backgroundColor = "green";
        buySlightOfHandPlace.style.borderColor = "lightgreen"
    }
    console.log('updating');
},1000)
