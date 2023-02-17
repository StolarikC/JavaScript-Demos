// THE ARGUMENTS OBJECT
// Available inside every function.
// It's an array-ike object that 'HAS A LENGTH PROPERTY'
// It 'DOES NOT HAVE ARRAY METHODS' like push/pop
// Contains all the arguemts passed to the function.
// Not available inside of arrow functions!

// DOES NOT WORK
// function sum(){
//     return arguments.reduce((total, el) => total + el)
// }
// DOES NOT WORK

// Use a "REST PARAM" (...) inside the argument.
// function sum(...nums){
//     return nums.reduce((total, el) => total + el)
// }


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

// REST PARAMETER TAKES AN ARRAY OF ARGUMENTS AND MAKES THEM INTO ONE OBJECT.

