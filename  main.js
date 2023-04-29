// alert("Hello world!");

var diceNumber1 = Math.floor(Math.random() * 6) + 1;
var diceNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "dice" + diceNumber1 + ".png";
var diceImage2 = "dice" + diceNumber2 + ".png";


var imageSource1 = "images/" + diceImage1;
var imageSource2 = "images/" + diceImage2;


var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", imageSource1);
image2.setAttribute("src", imageSource2);

if (diceNumber1 > diceNumber2) {
    document.querySelector('h1').innerHTML = "🚩Player 1 wins";
} else if (diceNumber2 > diceNumber1) {
    document.querySelector('h1').innerHTML = "🚩Player 2 wins";
} else {
    document.querySelector('h1').innerHTML = "Draw";
}