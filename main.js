import HashMap from "./HashMap.js";
import HashSet from "./HashSet.js";


const test = HashMap();
const test2 = HashSet();

test.set('apple', 'red');
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
test.set('sasd', 'silver')

test.set('moon', 'blarple')

test2.set('moon');
test2.set('cheese');
test2.set('sauce');
test2.set('beer');
test2.set('sandwhich');
test2.set('car');
test2.set('ball');
test2.set('earth');
test2.set('rings');

console.log(test2.keys());
console.log(test2.length());

test2.set('ball');

console.log(test2.keys());
console.log(test2.length());
console.log(test2.get('ball'));
console.log(test2.has('ball'));
test2.remove('ball');
console.log(test2.keys());

console.log(test2.entries());
