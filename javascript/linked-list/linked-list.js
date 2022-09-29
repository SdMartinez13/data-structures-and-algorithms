'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newHead = new Node(value);
    const currentHead = this.head;
    this.head = newHead;
    if(currentHead) {
      newHead.next = currentHead;
    }
  }

  includes(value) {
    let current = this.head;

    while(current !== null) {
      if(current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let stringified = '';
    while(current !== null) {
      stringified = stringified + `${current.value}`;
      current = current.next;
    }
    return stringified;
  }

  append(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = new Node(data);
    }
  }

  insertBefore(value, newValue) {
    let current = this.head;
    let after = current.next;
    while (after !== value) {
      if (after === null) throw 'Value not found';
      current = after;
    }
    current.next = new Node(newValue, after);
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;
    let temp;

    while (current) {
      if (current.value === value) {
        temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
  }

  kFromEnd (k) {
    if (k < 1) {
      return null;
    }
    let current = this.head;
    let nBehindCurrent = this.head;
    for (let i = 0; i < k - 1; i++) {
      current = current.next;
      if (!current) {
        return null;
      }
    }
    while (typeof current.next !== 'undefined') {
      nBehindCurrent = nBehindCurrent.next;
      current = current.next;
    }
    return nBehindCurrent;
  }

  zipLists (ll1, ll2) {
    const newll = new LinkedList();
    let list1 = ll1.head;
    let list2 = ll2.head;

    if (ll1.head === null && ll2.head === null) return newll;
    if (ll1.head === null) {
      newll.head = ll2.head;
      return newll;
    }
    if (ll2.head === null) {
      newll.head = ll1.head;
      return newll;
    }

    while (list1 && list2) {
      newll.append(list1.value);
      newll.append(list2.value);
      list1 = list1.next;
      list2 = list2.next;
    }
    if (list1) {
      while (list1) {
        newll.append(list1.value);
        list1 = list1.next;
      }
    }
    if (list2) {
      while (list2) {
        newll.append(list2.value);
        list2 = list2.next;
      }
    }
    return newll;
  }
}

module.exports = (LinkedList, Node);
