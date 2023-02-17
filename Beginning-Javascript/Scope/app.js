// function collectEggs(){
// 	let totalEggs = 6;
// 	console.log(totalEggs);
// }

// OUTSIDE function'{}'DOES NOT WORK
// console.log(totalEggs);

// Even after running function with 'totalEggs' DOES NOT WORK
// collectEggs();
// console.log(totalEggs);

// using 'let' inside the function confines 'totalEggs' to inside the function alone and does not exist outside of it this way.

// ********************FUNCTION SCOPE BELOW (INSIDE FUNCTIONS)********************
// let totalEggs = 0;
// function collectEggs(){
// 	totalEggs = 6;
// }
// console.log(totalEggs)
// collectEggs();
// console.log(totalEggs)

// let bird = 'Scarlet Macaw';
// function birdWatch(){
// 	let bird = 'Great Blue Heron';
// 	console.log(bird);
// }

// line 26 will return 'GBH' as long as it is declared after 'SM'
// if line 25 were gone, line 26 would return 'SM' because it is defined BEFORE the function.

// ********************BLOCK SCOPE BELOW (INSIDE CONDITIONALS)********************

// let radius = 8;
// if (radius > 0) {
// 	const PI = 3.14159
// 	let msg = 'HIII!'
// }

// console.log(radius); 
// // Above line prints
// console.log(msg);
// // Above line does not print, neither would 'PI'



// for(let i = 0; i <5; I++){
// 	let msg = "yamumgay"
// 	console.log(msg)
// 	// Above prints
// }
// console.log(msg)
// // Above does not print

// ********************LEXICAL SCOPE BELOW (An Inner Function, nested inside of some parent function, has access to the scope, or to the variables, defined in the scope of the outer, parent, function. )********************

function bankRobbery() {
	const heroes = ['Spiderman, Wolverine, Black Panther, Captain Marvel']
	function cryForHelp() {
		function inner() {

			for (let hero of heroes) {
				console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
			}
		}

	}
	cryForHelp();
}

// inner has access to cryForHelp and bankRobbery
// cryForHelp has access ONLY to bankRobbery
// bankRobbery has NO ACCESS to cryForHelp or inner