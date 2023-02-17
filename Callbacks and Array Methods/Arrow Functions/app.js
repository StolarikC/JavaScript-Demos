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



// MOVIES MAP METHOD

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

// MAP IS USED TYPICALLY WHEN A PORTION OF DATA IS NEEDED (NOT ALL OF IT). OR IF WE NEED TO TRANSFORM EACH ELEMENT OF A STARTING ARRAY, CREATE A NEW ARRAY, WHILE MAINTING THE ORIGINAL STARTING ARRAY.

// ARROW FUNCTIONS BELOW
// In the MOVIE MAP METHOD ABOVE, we pass in a function that only exists to be passed into the map function.
// This a perfect opportunity for arrow functions to create more compact code.

// const add = function(x,y) {
//     return x + y;
// }
// function add(x,y) {
//     return x + y;
// }

const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
    // return x ** 2
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// ARROW FUNCTIONS => IMPLICIT RETURNS
// !!!ONLY WORKS WITH ARROW FUNCTIONS!!!

// rollDie Example (remove 'return' & replace '{}' with '()'.)
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1;
)
// EITHER OF THESE CAN BE PUT ON A SINGLE LINE (AS BELOW)
const add = (a, b) => a + b

// !!!IMPLICIT RETURNS WORK IF AND ONLY IF THERE IS ONE AND ONLY ONE EXPRESSION IN THE BODY OF THE FUNCTION!!!

// MOVIES AGAIN

// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))
// Could be a one-liner, but a little too long.


// The code below works fine as is.
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
// but if we express the same thing as an arrow function, it becomes UNDEFINED.

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000)
    }
}