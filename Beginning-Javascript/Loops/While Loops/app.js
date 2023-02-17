let num = 0;
while (num < 10) {
	num++;
	console.log(num);
	
}
// Order of num++ and consol.log matters!  num++ -> consol.log  is [1-10], console.log -> num++ is [0-9].

// For Loops are preferred for preset numbers of iterations or arrays of known size.

// While Loops are more usefule when the number of iterations is unknown, user-defined, or randomly chosen.

// for a game loop of unknown turn lengths:

// while(!gameOver){
// 	//player 1 move
// 	// player 2 move
// }

// console.log('Congrats, You Win!')



// const SECRET = "BabyHippo"
// let guess = prompt("Enter the secret code...");
// while (guess !== SECRET) {
// 	guess = prompt("enter the secret code...")
// }
// console.log(
// "CONGRATS! YOU GOT THE SECRET!!!"
// )

// let input = prompt("Hey, say something!")
// while(true){
// 	input = prompt(input);
// 	if (input === "stop copying me") break;
// }
// console.log("OKAY YOU WIN!")

