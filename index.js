var RandomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="images/dice"+RandomNumber1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImage1);
var RandomNumber2=Math.floor(Math.random()*6)+1;
var RandomDiceImage2="images/dice"+RandomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",RandomDiceImage2);

if(RandomNumber1 > RandomNumber2){
  document.querySelector("h1").innerHTML= "Player 1 Wins";
}
else if(RandomNumber2 > RandomNumber1){
  document.querySelector("h1").innerHTML= "Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draws!";

}
