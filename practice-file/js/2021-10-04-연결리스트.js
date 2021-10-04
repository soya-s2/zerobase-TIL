// Node(data)
function Node(data) {
  this.data = data;
  this.next = null;
}



// LinkedList()
function LinkedList() {
  this.head = null;
  this.length = 0;
}



// size()
LinkedList.prototype.size = function () {
  return this.length;
};



//// isEmpty()
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};



// printNode()
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};



// append()
LinkedList.prototype.append = function (value) {
  let node = new Node(value), 
  current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }

  this.length++;
};



// insert(value, position)
LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
  current = this.head;
  index = 0,
  prev;

  if (position == 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
  }

  this.length++;

  return true;
};



// remove(value)
LinkedList.prototype.remove = function (value) {
  let current = this.head,
  prev = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
  } else {
    prev.next = current.next;
  }

  this.length--;

  return current.data;
}



// removeAt(position)
LinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
  index = 0,
  prev;

  if (position == 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
  }

  this.length--;

  return current.data;
};



// indexOf(value)
LinkedList.prototype.indexOf = function (value) {
  let current = this.head, 
  index = 0;

  while (current != null) {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  }

  return -1;
};



// remove2(value)
LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};