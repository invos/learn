const array = [1, [2, [3]], [4, [5]]];
console.log('Array.prototype.flat: ');
console.log(array.flat(0)); // [ 1, [ 2, [ 3 ] ], [ 4, [ 5 ] ] ]
console.log(array.flat(1)); // [ 1, 2, [ 3 ], 4, [ 5 ] ]
console.log(array.flat(2)); // [ 1, 2, 3, 4, 5 ]

const array1 = [1,2,3];
console.log('Array.prototype.map -> Array.prototype.flat: ');
console.log(array1.map(x => [x,x]).flat()); //[ 1, 1, 2, 2, 3, 3 ]
console.log('Array.prototype.flatMap: ');
console.log(array1.flatMap(x => [x,x])); //[ 1, 1, 2, 2, 3, 3 ]