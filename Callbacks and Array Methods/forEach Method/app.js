const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// function print(element){
//     console.log(element)
// }

// numbers.forEach(function (el) {
//     console.log(el)
// })


// SAME THING WITH A FOR OF LOOP:
// for (let el of numbers) {
//     console.log(el);
// }

// // Below only prints even numbers.
// numbers.forEach(function (el) {
//     if (el % 2 === 0)
//     console.log(el)
// })


// MAP METHOD FOR NUMBERS BELOW
// const doubles = numbers.map(function(num){
// return num * 2;
// })
// [2, 4, 6, 8, 10, 12, etc.]


// MOVIES EXAMPLE BELOW
const movies = [
    {
    title: 'Amadeus',
    score: 99
},
{
    title: 'Parasite',
    score: 95
},
{
    title: 'Stand By Me',
    score: 85
},
{
    title: 'Alien',
    score: 95
}
]
// MOVIES FOR EACH METHOD
// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })


// MOVIES MAP METHOD

const titles = movies.map(function(movie){
    return movie.title.toUpperCase();
})

// MAP IS USED TYPICALLY WHEN A PORTION OF DATA IS NEEDED (NOT ALL OF IT). OR IF WE NEED TO TRANSFORM EACH ELEMENT OF A STARTING ARRAY, CREATE A NEW ARRAY, WHILE MAINTING THE ORIGINAL STARTING ARRAY.