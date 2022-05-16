//global variables
    //variables for the clicker itself
var scorePlace = document.getElementById('score');
var scoreClicker = parseInt(scorePlace.innerText);
var incClicker = 1;
    //vars for buy
        //slightOfHand
var buySlightOfHandPlace = document.getElementById('slightOfHand');
var buySlightOfHandNumb = parseInt(buySlightOfHandPlace.innerText);
var upgradeScore = buySlightOfHandNumb;
//checker loop
setInterval(function(){
    if(scoreClicker >= buySlightOfHandNumb){
        buySlightOfHandPlace.classList.remove('disabled');
        buySlightOfHandPlace.style.backgroundColor = "green";
        buySlightOfHandPlace.style.borderColor = "lightgreen"
    }
    else{
        buySlightOfHandPlace.classList.add('disabled');
    }
    console.log('updating');
},1000)
//clicker function
document.getElementById('mainImg').addEventListener('click', function(){
    //Clicker
    scoreClicker += incClicker;
    scorePlace.innerText = scoreClicker;
    
});
//upgradepacks 1st upgrade
document.getElementById('slightOfHand').addEventListener('click',function(e){
    //checker resuirements
    e.preventDefault;
    if(scoreClicker >= upgradeScore){
        scoreClicker = scoreClicker-upgradeScore;
        upgradeScore = upgradeScore * 2;
        buySlightOfHandNumb = upgradeScore ;
        buySlightOfHandPlace.innerText = buySlightOfHandNumb;
        incClicker = incClicker *2;
        console.log(upgradeScore)
        console.log(incClicker)
        console.log(buySlightOfHandPlace.innerText)
    }
})
