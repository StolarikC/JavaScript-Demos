// function singSong() {
// 	console.log("DO");
// 	console.log("RE");
// 	console.log("MI");
// }


// ARGUMENTS BELOW // 

// function greet(firstName) {
// 	console.log(`Hey there, ${firstName}!`)
// }

// MULTIPLE FUNCTIONS BELOW //

function greet(firstName, lastName) {
	console.log(`Hey there, ${firstName} ${lastName[0]}!`)
}

// greet('George', 'Clooney')


function repeat(str, numTimes) {
	let result = '';
	for (let i = 0; i < numTimes; i++) {
		result += str;
	}
	console.log(result);
}

function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		return false;
	}
	return x + y;
}