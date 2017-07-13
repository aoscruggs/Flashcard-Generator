
// Need to require the exported modules

var ClozeCard = require('./ClozeCard.js');
var BasicCard = require('./BasicCard.js');

// Need  to capture user input
var userInput = process.argv[2];

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.","George Washington");

console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.fulltext);
console.log(firstPresidentCloze.partial);

// Need a conditional comparing user input to cloze and throw an error if they don't match

if (userInput != firstPresidentCloze.cloze) {
	console.log("This is the wrong answer. Try again");
}else{
	console.log("You've been studying American history")
}

var firstPresident = new BasicCard ("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front);
console.log(firstPresident.back);