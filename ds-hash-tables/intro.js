let user = {
	age: 54,
	name: 'Kylie',
	magic: true,
	scream: function() {
		console.log('aaaaah!')
	}
}

console.log(user.age) // O(1)
user.spell = 'abra kadabra' // O(1)
console.log(user)
user.scream(); // O(1)

const a = new Map() // Save any datatype as a key, maintains insertion order
// const b = new Sets()

