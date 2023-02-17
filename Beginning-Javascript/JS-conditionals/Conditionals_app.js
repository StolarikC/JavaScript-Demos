// let random = Math.random();
// if (random < 0.5) {
// 	console.log("YOUR NUMBER IS LESS THAN THE NUMBER 0.5!")
// } else {
// 	console.log("YOUR NUMBER IS GREATER THAN (OR EQUAL TO) THE NUMBER 0.5!")
// }
// console.log(random)


// // const dayOfWeek = prompt('ENTER A DAY OF THE WEEK').toLowerCase();

// // if (dayOfWeek === 'monday') {
// // 	console.log("UGHHH I HATE MONDAYS...")
// // } else if (dayOfWeek === 'saturday') {
// // 	console.log("YAY I LOVE SATURDAYS!")
// // } else if (dayOfWeek === 'friday') {
// // 	console.log("FRIDAYS ARE NICE, ESPECIALLY AFTER WORK!")
// // } else if (dayOfWeek === 'sunday') {
// // 	console.log("Enjoy your day! Don't think about work tomorrow!!!")
// // } else {
// // 	console.log("MEH")
// // }


// // 0-5 - FREE
// // 5 - 10 CHILD $10
// // 10 - 65 ADULT $20
// // 65+ SENIOR $10

// const age = prompt('Enter Your Age');

// if (age <= 5) {
// 	console.log("You are a baby. You get in for free!")
// } else if(age < 10) {
// 	console.log("You are a child. You pay $10.")
// } else if(age < 65) {
// 	console.log("You are an adult. You pay $20.")
// } else {
// 	console.log("You are a senior citizen. You pay $10.")
// }




const password = prompt("Please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
	if (password.indexOf(' ') !== -1) {
		console.log("PASSWORD MAY NOT CONTAIN SPACES!")
	} else {
		console.log("Password is valid.")
	}
} else {
	console.log("PASSWORD TOO SHORT! Must contain 6+ characters.")
}

// Password cannot include spaces
