// setTIMEOUT
console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("GOODBYE!!")

// setINTERVAL
const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

// clearINTERVAL

// clearInterval(id); 

// !!! THIS IS REQUIRED TO STOP THE SET INTERVAL FROM PRINTING!!!

