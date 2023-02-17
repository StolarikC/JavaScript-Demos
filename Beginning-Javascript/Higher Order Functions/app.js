// // ******************** ACCEPTING FUNCTIONS AS ARGUMENTS ********************
// function callTwice(func) {
// 	func();
// 	func();
// }

// function callTenTimes(f) {
// 	for (let i = 0; i < 10; i++) {
// 		f();
// 	}
// }

// function rollDie() {
// 	const roll = Math.floor(Math.random() * 6) + 1
// 	console.log(roll)
// }

// callTwice(rollDie);
// // As seen above, when passing a function through another function, DO NOT USE PARENTHESES following the function being passed INTO the other.  This passes the VALUE of the passed function instead of the function itself.




// ******************** RETURNING A FUNCTION AS A VALUE FROM WITHIN A FUNCTION ********************

function makeMysteryFunc() {
	const rand = Math.random();
	if (rand > 0.5) {
		return function () {
			console.log("CONGRATS, I AM A GOOD FUNCTION!")
			console.log("YOU WIN ETERNAL HAPPINESS!!")
		}
	} else {
		return function () {
			alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
			alert("STOP TRYING TO CLOSE THIS WINDOW!")
			alert("STOP TRYING TO CLOSE THIS WINDOW!")
			alert("STOP TRYING TO CLOSE THIS WINDOW!")
			alert("STOP TRYING TO CLOSE THIS WINDOW!")
			alert("STOP TRYING TO CLOSE THIS WINDOW!")
		}
	}
}


function makeBetweenFunc(min, max) {
	return function (num) {
		return num >= min && num <= max;
	}
}




// makeBetweenFunc(5,10) =>

// function isBetween(num){
// return num >=50 && num <=100
// }