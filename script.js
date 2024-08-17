var imagesArray=["","dice1.png","dice2.png", "dice3.png", "dice4.png","dice5.png", "dice6.png"];
var randomNumber1 = Math.floor((Math.random()*6)+1) ;

var randomNumber2 = Math.floor((Math.random()*6)+1) ;

var imageElement1=document.querySelector(".img1"); 

imageElement1.setAttribute("src","images/"+imagesArray[randomNumber1]);

var imageElement2=document.querySelector(".img2"); 

imageElement2.setAttribute("src","images/"+imagesArray[randomNumber2]);

function diceRoll(){ 
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 Wins!";
} else if (
    randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML= "Player 2 Wins!";
    } else{
        document.querySelector("h1").innerHTML= "It's a draw!";
    }
};

diceRoll();
