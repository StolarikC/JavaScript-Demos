// DESTRUCTURING ARRAYS
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const highScore = scores[0];
const secondHighScore = scores[1];

// EASIER WAY TO DO THIS BELOW
const [gold, silver, bronze, ...everyoneElse] = scores;



// DESTRUCTURING OBJECTS
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// constlastName = user.lastName;
// etc.

// EASIER METHOD
const { email, firstName, lastName, city, bio } = user;

// In order to rename variables while deconstructing:
const { born: birthYear } = user;
const { died: deathYear = 'N/A' } = user;

// Assign a default value ('N/A') in case of "deconstructing" values that do not exist in the original object.
const { city, state, died = 'N/A' } = user2;



// DECONSTRUCTING PARAMS

// function fullName(user){
//     return `${user.firstName} ${user.lastName}`
// }

// OR

// function fullName(user) {
// const {firstName, lastName} = user;
// return `${firstName} ${lastName}`
// }

// OR

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}


// MOVIE EXAMPLE RETURNS!!!
const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All the Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Alien',
        score: 95,
        year: 1979
    }
]

// movies.filter((movie) => movie.score >= 90)
// OR
// movies.filter(({ score }) => score >= 90)

// OR IF YOU WANT 'title' 'score' and 'year'
// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

// OR

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})
