const restaurant = {
	name: 'Ichiran Ramen',
	address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
	city: 'Brooklyn',
	state: 'NY',
	zipcode: '11206',
}

let fullAddress = String([restaurant.address, restaurant.city, restaurant.state, restaurant.zipcode]);

console.log(fullAddress);
// console.log(typeof 'fullAddress');

//Other SOLUTIONS!

//--1-- const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`

//--2-- let fullAddress = restaurant["address"] +", " + restaurant["city"] + ", " + restaurant["state"] +", " + restaurant["zipcode"]

//--3-- let data = [restaurant.name," ", restaurant.address ," ", restaurant.city, " ",restaurant.state , " ", restaurant.zipcode];
//let fullAddress = data.toString();