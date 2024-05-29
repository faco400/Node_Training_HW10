class Node {
  constructor(key, value) {
    this.key = key
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //updating value by key
  update(key, value){
    let current = this.head;
    while(current) {
      if(current.key === key) {
        current.value = value;
        return true
      }

      current = current.next;
    }
    return false;
  }
  
  //inserting into linked list
  insert(key,value) {

    // creating node with value
    const newNode = new Node(key,value);

    // if head pointing to null, make it point to newNode
    if(this.head == null){
      this.head = newNode;
    
    // else navigate to end of linked list
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }

      //last node of linked list points to newNode
      current.next = newNode;
    }
  }

  //returns linked list
  search(key) {
    //if linked list is empty(head pointed to null) return False
    if(this.head === null) {
      return false;
    }

    let current = this.head;
    while(current) {
      if(current.key === key)
        return current;

      current = current.next;
    }

    //if node not found return false
    return false
  }

  //find value by key and return it
  findValue(key) {
    let current = this.head;
    while (current !== null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  // deleting node from linked list
  delete(key) {

    //if linked list is empty(head pointed to null) return False
    if(this.head === null) {
      return false;
    }

    // if head node is equal to key, change head to point to next 
    if(this.head.key === key){
      this.head = this.head.next;
      return true
    }

    // traverse linked list with current if next is not the key to delete
    let current = this.head;
    while(current.next && current.next.key !== key) {
      current = current.next;
    }

    //if next node after current is equal in key, delete it
    if(current.next && current.next.key === key) {
      current.next = current.next.next;
      return true
    }

    //if node not found return false
    return false
  }
}

module.exports = {Node, LinkedList};