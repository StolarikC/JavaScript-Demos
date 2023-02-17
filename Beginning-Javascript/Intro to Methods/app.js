// We can add functions as properties on objects.  We call them methods!

// The Math object consists primarily of methods.

const myMath = {
	PI: 3.14159,
	square: function (num) {
		return num * num;
	},
	cube: function (num) {
		return num ** 3;
	}
}

// ******************** SHORTHAND BELOW ********************
const myMathShort = {
	PI: 3.14159,
	square(num) {
		return num * num;
	},
	cube(num) {
		return num ** 3;
	}
}
// MUST KEEP THE COMMAS BECAUSE WE ARE IN AN OBJECT! (Object is const myMath)



// ******************** THE KEYWORD 'THIS' ********************
const cat = {
	name: 'Blue Steele',
	color: 'grey',
	breed: 'scottish fold',
	meow() {
		console.log(`${this.name} says MEOWWW`);
	}
}
// Inside the above method, 'the keyword THIS' refers to the cat object itself.

// !!! The value of 'THIS' depends on the invocation context of the function it is used in. !!!

const meow2 = cat.meow;
// meow2 is contained within the 'WINDOW' object, NOT THE CAT OBJECT.  Thus, when it is invoked this way, the same 'this' from the Cat object, now points to the Window object instead.con