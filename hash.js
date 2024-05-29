const {LinkedList} = require('./linkedList.js');

class Hash {
  constructor(size) {
    this.size = size; // initial size of custom hash
    this.buckets = Array(size).fill(null).map(() => new LinkedList()); // initializing buckets as linked lists to handle collisions
  }

  customHash(string) {
    let hash = 0;
    // if string empty returns 0
    if(string.length === 0)
      return hash;
  
    // iterate string converting each char to ascii value
    for(let i = 0; i < string.length; i++) {
      let ch = string.charCodeAt(i);
  
      // converting to a 32 bit value and adding ascii character value
      hash = ((hash << 5) - hash) + ch;
      hash |= 0; //IMPORTANT, This ensures that the limit of hash is 32 bits
  
    }
  
    return hash;
  
  }

  // setting key-value pair into hash table
  set(key,value) {
    //generates hash fom key
    const hash = this.customHash(key);
    //get index using hash and size of hash table
    const index = hash % this.size;

    //get bucket (linked list) from array of buckets(linked lists) using index
    const bucket = this.buckets[index];

    //insertting into bucket
    bucket.insert(key,value);
  }

  //find value using key
  get(key) {
    const hash = this.customHash(key);
    const index = hash % this.size;

    const bucket = this.buckets[index];

    // find first value in bucket using key
    return bucket.findValue(key);

  }

  // deletes element using key
  delete(key) {
    const hash = this.customHash(key);
    const index = hash % this.size;

    const bucket = this.buckets[index];

    //delete element inside bucket
    bucket.delete(key);
  }

}

module.exports = {Hash};

// const sample = 'Vinicius';
// console.log(customHash(sample));