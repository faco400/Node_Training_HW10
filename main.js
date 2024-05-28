function customHash(string) {
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

const sample = 'Vinicius';

console.log(customHash(sample));
//1. Hash function should be deterministic: for a given data as input, the output should always be the same
//2. Hash function should be fast: the performance should be optimal since it will be used for reading, updating and adding data
//3. Hash function should be Uniform distributed: hash should be uniformelerly distributed as to avoid collision
//4. Hash funtion should be Non-Invertible: original data cannot be recovered without using a lot of computing resources
