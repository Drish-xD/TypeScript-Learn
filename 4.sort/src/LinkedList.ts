import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  // Length of LinkedList
  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  // Add new Node to LinkedList
  add(value: number) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  // Find the Node using Index
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) return node;

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  // Compare 2 nodes of LinkedList
  compare(leftIndex: number, rightIndex: number) {
    if (!this.head) {
      throw new Error('List is Empty');
    }

    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  // Swap 2 nodes of LinkedList
  swap(leftIndex: number, rightIndex: number) {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    return ([leftNode.value, rightNode.value] = [rightNode.value, leftNode.value]);
  }

  // Printing the LinkedList
  print() {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;

    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
