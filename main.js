import HashMap from "./HashMap.js";


const test = HashMap();

test.set('apple', 'red');
console.log(test.remove('banana'));
// test.set('apple', 'blue');
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')

// console.log(test.buckets);

console.log(test.has('apple'));
console.log(test.remove('apple'));
console.log(test.has('apple'));
