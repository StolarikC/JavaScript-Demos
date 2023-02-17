// 'SPREADing' converts an array or other string into a series of individual elements instead of one string.

// EXAMPLE

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 23432]

Math.max(nums)
// returns 'NaN'

// HOWEVER, if we 'Spread' the original array when passing it into the 'Math' function:
Math.max(...nums)
// returns '13 4 5 21 3 3 1 2 7 6 4 2 23432'

// ADDITIONALLY, if we use "console.log(nums)":
// returns "[13,4,5,21,3,3,1,2,7,6,4,2,23432]"

// HOWEVER, if we spread: "console.log(...nums)":
// returns '13 4 5 21 3 3 1 2 7 6 4 2 23432'

// console.log('hello') --> 'hello'
// console.log(...'hello') --> 'h e l l o'


const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];

const feline = { legs: 4, family: 'Felidae' };
const canine { isFurry:true, family:'Caninae'}

const catDog = { ...feline, ...canine }
// with the above order, canine family winse b/c it overwrites the feline family.
const catDog = { ...canine, ...feline }


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias!123',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }
