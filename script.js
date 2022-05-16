//global variables
    //cards
        //1stcard
var levelSOA = 0;
var disLvlSoa = document.getElementById('SOA');
disLvlSoa.innerText = `Slight off hand LVL.${levelSOA}`;
        //2nd crad
var lvlMinion = 0;
var disLvlMinion = document.getElementById('minion-header');
var incMinion = 5;
var upgradeMinionPlace = document.getElementById('minion');
var upgradeMinion = parseInt(upgradeMinionPlace.innerText);
var intervalMinion;
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
    disLvlSoa.innerText = `slight off hand lvl.${levelSOA}`;
    scorePlace.innerText = scoreClicker;
    buySlightOfHandPlace.innerText = buySlightOfHandNumb;
    if(scoreClicker >= buySlightOfHandNumb){
        buySlightOfHandPlace.classList.remove('disabled');
        buySlightOfHandPlace.style.backgroundColor = "green";
        buySlightOfHandPlace.style.borderColor = "lightgreen";
    }
    else{
        buySlightOfHandPlace.classList.add('disabled');
        buySlightOfHandPlace.style.backgroundColor = "red";
        buySlightOfHandPlace.style.borderColor = "darkred";
    }
    //console.log('updating');
},1000)
//checker second card
setInterval(function(){
    disLvlMinion.innerText = `minion LVL.${lvlMinion}`;
    scorePlace.innerText = scoreClicker;
    upgradeMinionPlace.innerText = upgradeMinion;
    if(scoreClicker >= upgradeMinion){
        upgradeMinionPlace.classList.remove('disabled');
        upgradeMinionPlace.style.backgroundColor = "green";
        upgradeMinionPlace.style.borderColor = "lightgreen";
    }
    else{
        upgradeMinionPlace.classList.add('disabled');
        upgradeMinionPlace.style.backgroundColor = "red";
        upgradeMinionPlace.style.borderColor = "darkred";
    }
    //console.log('updating');
},1000)
//clicker function
document.getElementById('mainImg').addEventListener('click', function(){
    //Clicker
    scoreClicker += incClicker;
    scorePlace.innerText = scoreClicker;
    
});
//upgradepacks 1st upgrade
document.getElementById('slightOfHand').addEventListener('click',function(){
    //checker resuirements
    if(scoreClicker >= upgradeScore){ 
        scoreClicker = scoreClicker-upgradeScore;
        upgradeScore = upgradeScore * 3;
        buySlightOfHandNumb = upgradeScore ;
        incClicker = incClicker *2;
        levelSOA+=1;
        console.log(upgradeScore)
        console.log(incClicker)
        console.log(buySlightOfHandPlace.innerText)
        console.log(levelSOA);
    }
})
document.getElementById('minion').addEventListener('click',function(){
    //checker resuirements
    
    if(scoreClicker >= upgradeMinion){
        clearInterval(intervalMinion);
        scoreClicker = scoreClicker - upgradeMinion;
        incMinion = incMinion *2;
        upgradeMinion = upgradeMinion*3;
        lvlMinion++;
        intervalMinion = setInterval(function() {
            scoreClicker += incMinion;
            console.log('updatMinion');
        }, 1000);
        console.log(incMinion)
        console.log(upgradeMinion)
        console.log(upgradeMinionPlace.innerText)
    }
})
