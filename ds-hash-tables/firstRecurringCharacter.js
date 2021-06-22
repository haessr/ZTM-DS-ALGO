// Given array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// [2,1,1,2,3,5,1,2,4] --> 1
// [2,3,4,5] --> undefined

function firstRecurringCharacterN2(input) {
	for(let i = 0; i < input.length; i++){
		for (let j = i + 1; j < input.length;j++) {
			if (input[i] === input[j]) return input[i];
		}
	}

	return undefined;
} // O(n^2)

function firstRecurringCharacter(input) {
	let map = {};
	for (let i = 0 ; i < input.length; i++) {
		if(map[input[i]]) {
			return input[i];
		} else {
			map[input[i]] = true;
		}
	}

	return undefined;
} // O(n)

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,3,4,5]));