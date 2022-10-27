//global.a = 2;
//global.b = 3;

function sum(a, b) {
  return this.a + this.b;
}

function findMinimum(...args) {
  return Math.min(...args);
}

const sumBind = sum.bind({ a: 3, b: 3 }); //bind this object permanently to given object, can't be bound again
console.log(sumBind());

const sumCallResult = sum.call({ a: 5, b: 7 }); //call is same as bind, but gives final value rather than returning function
console.log(sumCallResult);

var num = [1, 6, 7, 9, 20];
const minVal = findMinimum.apply(null, num); // array can be passed to apply, otherwise same as call
console.log(minVal);
