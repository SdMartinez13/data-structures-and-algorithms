'use strict';


class LinkedList {
  constructor(){
    this.head = null;
  }

  // Insert? Add lets you insert at the end of the list whereas instert lets you select an index first and then continue.
  //  Argument has value and it shoul return nothing.
  // Adds new node wwith that value to the head of the list with an O(1) Time performance.

  insert(value){
    this.head = new Node(value, this.head);
  }

  // takes in an argument of value
  // Returns Booolean
  // indicates whether that value exists as a Node’s value somewhere within the list.
  // you can also do "includes", they have the same functionality
  contains(value){
    let ongoing = this.head;
    // Setting a while loop to check if ongoing position is set to an actual value.
    while (ongoing !== null){
      if(ongoing.value === value){
        return true;
      }
      else{
        ongoing = ongoing.next;
      }
    }
    return false;
  }

  // to string -> toString() function in JS. this contains no argument.
  //  Returns a string representing all the values in the Linked List.
  toString(){
    let ongoing = this.head;
    let string = '';
    while (ongoing !== null) {
      string += `{${ongoing.value}} -> `;
      ongoing = ongoing.next;
    }
    return string + 'NULL';
  }
}

// let list = new LinkedList();
//
// list.insert('a');
// list.insert('b');
// list.insert('c');
// list.insert('d');
// list.insert('e');
//
// console.log('this is the current list', list);
//
module.exports = LinkedList;
