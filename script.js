//global variables
const timer = 1000;
var vtimer = 1000;
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
        //3rd card
var mainImg = document.getElementById('mainImg')
var disLvlNewPack=document.getElementById('newPackHeader');
var lvlNewPack=0;
var upgradeNewPackPlace=document.getElementById('newPack');
var upgradeNewPack = parseInt(upgradeNewPackPlace.innerText);
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
},timer)
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
},timer)
//checker third card
setInterval(function(){
    disLvlNewPack.innerText = `Pack Manager LVL.${lvlNewPack}`;
    scorePlace.innerText = scoreClicker;
    upgradeNewPackPlace.innerText = upgradeNewPack;
    if(scoreClicker >= upgradeNewPack){
        upgradeNewPackPlace.classList.remove('disabled');
        upgradeNewPackPlace.style.backgroundColor = "green";
        upgradeNewPackPlace.style.borderColor = "lightgreen";
    }
    else{
        upgradeNewPackPlace.classList.add('disabled');
        upgradeNewPackPlace.style.backgroundColor = "red";
        upgradeNewPackPlace.style.borderColor = "darkred";
    }
    //console.log('updating');
},timer)
//clicker function
document.getElementById('mainImg').addEventListener('click', function(){
    //Clicker
    scoreClicker += incClicker;
    scorePlace.innerText = scoreClicker;
    
});
//upgradepacks clicker
document.getElementById('slightOfHand').addEventListener('click',function(){
    //checker resuirements
    if(scoreClicker >= upgradeScore){ 
        scoreClicker = scoreClicker-upgradeScore;
        upgradeScore = upgradeScore * 3;
        buySlightOfHandNumb = upgradeScore ;
        incClicker = incClicker *2;
        levelSOA+=1;
        //console.log(upgradeScore)
        //console.log(incClicker)
        //console.log(buySlightOfHandPlace.innerText)
        //console.log(levelSOA);
    }
})
//minion loop
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
            //console.log('updatMinion');
        }, vtimer);
        //console.log(incMinion)
        //console.log(upgradeMinion)
        //console.log(upgradeMinionPlace.innerText)
    }
})
//third card
document.getElementById('newPack').addEventListener('click',function(){
    if(lvlNewPack == 0){
        mainImg.removeAttribute('src');
        mainImg.setAttribute('src',"./images/golden.jpg")
    }
    scoreClicker = scoreClicker-upgradeNewPack;
    lvlNewPack++;
    upgradeNewPack = upgradeNewPack*3;
    incMinion = incMinion*2;
    incClicker = incClicker*2;
    vtimer = 500;
})
