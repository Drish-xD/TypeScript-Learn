import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumberCollection } from './NumberCollection';

// numbers array
const numberCollection = new NumberCollection([2, 55, -5]);
numberCollection.sort();
console.log(numberCollection.data);

// String
const charCollection = new CharactersCollection('Xaayb');
charCollection.sort();
console.log(charCollection.data);

// linked list
const linkedList = new LinkedList();
linkedList.add(600);
linkedList.add(10);
linkedList.add(-6);
linkedList.add(50);
linkedList.sort();
linkedList.print();
