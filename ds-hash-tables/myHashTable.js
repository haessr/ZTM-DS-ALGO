class myHashTable {
	constructor(size) {
		this.data = new Array(size);
	}


	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++){
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
			// this.data[address].push([key, value]);
		}
		this.data[address].push([key, value])
	}

	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for(let i = 0; i < currentBucket.length; i++) {
				if(currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}	// O(1): without collisions
		return undefined
	}

// handling collisions
 keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }
}


const newHashTable = new myHashTable(50);
newHashTable.set('grapes', 10000);
newHashTable.set('apples', 54);
console.log(newHashTable.get('grapes'))
console.log(newHashTable.get('apples'))
console.log(newHashTable.keys());