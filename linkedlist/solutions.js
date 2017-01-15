const LLNode = require('./llnode.js');
const LinkedList = require('./linkedlist.js');

// constructor for list
let head = new LLNode(1);
head.next = new LLNode(2);
head.next.next = new LLNode(3);
let myList = new LinkedList(head);

// write a function to add a node to the end of the list
LinkedList.prototype.append = (node) => {
	// iterate through list to last node
	let iter = head;
	while (typeof iter.next != 'undefined') {
		iter = iter.next;
	}
	iter.next = node;
}

// write a function to remove a node from the list
LinkedList.prototype.remove = (targetData) => {
	for (var iter = head; typeof iter.next != 'undefined'; iter = iter.next) {
		if (iter.next.data === targetData) {
			iter.next = iter.next.next;
			return;
		}
	}
	// value not found
	console.error('Value not found in list');
}

// write a function to detect if the list is circular (rear of the list points back to the head)
LinkedList.prototype.checkCircular = () => {
	// iterate through list to last node
	let iter = head;
	while (typeof iter.next != 'undefined') {
		iter = iter.next;
	}
	if (iter.next === head) return true;

	return false;
}
