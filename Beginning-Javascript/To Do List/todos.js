let input = prompt('What would you like to do?');
const todos = ['STUDY CODING', 'DRINK WATER', 'GET REST (Obi-Wan)'];
while (input !== 'quit' && input !== 'q') {
	if (input === 'list') {
		console.log('************')
		for (let i = 0; i < todos.length; i++) {
			console.log(`${i}: ${todos[i]}`);
		}
		console.log('************')
	} else if (input === 'new') {
		const newTodo = prompt('Ok, what is the new todo?');
		todos.push(newTodo);
		console.log(`${newTodo} added to the list.}`)
	} else if (input === 'delete') {
		const index = parseInt(prompt('Okay, which # todo would you like to delete?'));
		if (!Number.isNaN(index)) {
			const deleted = todos.splice(index, 1);
			console.log(`Okay, ${index} deleted!`);
		} else {
			console.log('Unknown index')
		}
	}
	input = prompt('What would you like to do?');
}
console.log('OK QUIT THE APP!')