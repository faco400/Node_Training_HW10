# Node_Training_HW10
Repository focusing on Studying node with the focus on the concepts of hash functions and hash tables

1. [Task](#task)
2. [Documentation](#documentation)
  - [Hash](#hash)
  - [Linked List](#linked-list-class-to-represent-singly-linked-list-data-structure)
  - [Node](#node-class-to-represent-a-node-of-linked-list)
3. [Analysis](#analysis)

# Homework 10

### Task

Explore the concepts of hash functions and hash tables, and to implement a hash table with a custom hash function in JavaScript. This assignment will test your understanding of hash functions, collision resolution, and the practical application of hash tables.

### **Part 1: Understanding Hash Functions**

1. **Research**: Begin by researching and understanding what hash functions are, how they work, and their applications in computer science and data storage.

### **Part 2: Implementing a Custom Hash Function**

1. **Custom Hash Function**: Implement a custom hash function in JavaScript. Your hash function should take a string as input and produce a hash code (an integer) as output. Be creative, but ensure that your function distributes values uniformly.
2. **Collision Handling**: Implement a collision resolution strategy. You can choose from methods like separate chaining (using linked lists), open addressing (linear probing, quadratic probing), or any other technique you prefer.

### **Part 3: Building a Hash Table**

1. **Hash Table Class**: Create a JavaScript class for a hash table that uses your custom hash function. Include methods for inserting key-value pairs, retrieving values by key, and deleting key-value pairs.
2. **Testing**: Create test cases to ensure that your hash table and custom hash function work correctly. Test scenarios should include inserting, retrieving, and deleting values, as well as handling collisions gracefully.

### **Part 4: Documentation and Analysis**

1. **Documentation**: Provide clear and concise comments and documentation for your code. Explain how your custom hash function and hash table class work.
2. **Analysis**: Write a brief analysis of the performance of your custom hash function and hash table. Discuss the time complexity of key operations (insertion, retrieval, deletion) and any trade-offs you made in your implementation.

### **Submission**

Submit your JavaScript code for the custom hash function and hash table along with your documentation and analysis. Include test cases that demonstrate the correctness and efficiency of your implementation.

### **Example**

Here's a simplified example structure to give you an idea of what your code might look like:

```jsx
class CustomHashTable {
  constructor() {
    // Initialize the hash table...
  }

  hash(key) {
    // Implement your custom hash function...
  }

  insert(key, value) {
    // Implement key-value insertion...
  }

  get(key) {
    // Implement key retrieval...
  }

  delete(key) {
    // Implement key deletion...
  }
}

// Create an instance of CustomHashTable and demonstrate its usage...
```

### **Bonus Challenge**

For an extra challenge, consider implementing additional features for your hash table, such as resizing the table dynamically to maintain an efficient load factor, or implementing a method to iterate through all key-value pairs in the hash table.


## Documentation

## [Hash](./hash.js)
- **Properties:**
  - **size**: size of hash table
  - **buckets**: Array of hash table. Each bucket represents a linked list.

- **Methods**:
  - **customHash(string)**: method to create a hash of 32 bits from a string. it returns the hash generated
  - **set(key,value)**: method to insert key-value pair into hash table
  - **get(key)**: method to find element by key in hash table
  - **delete(key)**: method to delete element by key in hash table



## [Node](./linkedList.js): Class to represent a node of linked list
- **Properties:**
  - **key:** key of element of hash table inserted in linked list
    - **type:** String
  - **value:** value of element to be stored
    - **type:** Any
  - **next:** Pointer to next element of linked list
    - **type:** Node or null.

## [Linked List](./linkedList.js): Class to represent singly Linked list data structure

- **Properties:**
  - **head:** head of linked list, points to first element of list
    - **type:** Node or null.

- **Methods:**
  - **insert(key, value)**: receives a key, value pair creates a node with that key, value pair and insert it into the linked list. Returns true if 

  - **delete(key)**: Deletes a node with specified key from linked list

  - **search(key)**: search for a node with specified key in linked list. If it finds then returns node, otherwise return false. It also returns false if empty list
  
  - **findValue(key)**: search for a node with specified key in linked list. If it finds then returns value of node, otherwise return false. It also returns false if empty list

## Analysis
When using a linked list in hash table we have some advantages and disavantages:
### Advantages:
  - Simple implementation
  - Hash table never fills up since we can always add new elements into the chain of linked list
  - Less sensitive to hash functions or load factors
  - Mostly used when unknown how many and how frequently keys are inserted or deleted
### Disavantages:
  - The cache performance of chaining is not as good as keys are stored using a linked list. Open adressing on the other hand  has better cache performance as everything is stored in the same table.
  - Wastage of space (some parts of hash table are never used)
  - If chaining becomes long, the search time becomes (O(n)) in worts case.
  - Uses extra space for links

**Performance of Chaining:**
Performance of chaining can be evaluated under assumption that each key is equally likely to be hashed to any slot of table (simple uniform hashing).

```
m = Number of slots in hash table
n = Number of keys to be inserted in hash table

load factor a = n/m

Expected time to search = (O(1 + a))
Expected time to delete = (O(1 + a))

Time to insert = (O(1))
Time complexity of search insert and delete if (O(1)) if a is (O(1))
```

### Performance of customHash:
The overall complexity of custom Hash is (O(n)) because of loop that navigates through the string's lenght. Since the function does not grow the size of data structure its space complexity is (O(1)).