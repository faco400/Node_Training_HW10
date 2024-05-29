const {Hash} = require('./hash.js');


//1. Hash function should be deterministic: for a given data as input, the output should always be the same
//2. Hash function should be fast: the performance should be optimal since it will be used for reading, updating and adding data
//3. Hash function should be Uniform distributed: hash should be uniformelerly distributed as to avoid collision
//4. Hash funtion should be Non-Invertible: original data cannot be recovered without using a lot of computing resources

const hashTable = new Hash(10);

// setting initial values to hash table
hashTable.set('name', 'Vinici');
hashTable.set('age', 24);
hashTable.set('email', 'vvieiradesouza.laba@solvd.com');

// getting value with key 2
console.log(hashTable.get('name')); // should return Vinici
console.log(hashTable.get('age')); // should return 25
console.log(hashTable.get('email')); // should return vvieiradesouza.laba@solvd.com

hashTable.delete('name');
console.log(hashTable.get('name')); // should return null
hashTable.set('name','Vinicius');
console.log(hashTable.get('name')); // should return Vinicius

//handling collision with linked list
hashTable.set('age', 25);
console.log(hashTable.get('age')); //should return 24
hashTable.delete('age'); // deletes first element of list
console.log(hashTable.get('age')); //should return 25 (last inserted into list)

