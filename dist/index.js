import { Node } from './node/index.js';
let root = new Node(5);
root.add(3);
root.add(8);
root.add(1);
root.add(4);
console.log(root);
console.log(root.length());
