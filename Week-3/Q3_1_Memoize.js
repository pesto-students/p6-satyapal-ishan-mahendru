function add(a, b) {
  return a + b;
}

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    console.time();
    const key = args.toString();
    let value;
    if (cache.has(key)) {
      value = cache.get(key);
    } else {
      cache.set(key, args.reduce(fn));
      value = cache.get(key);
    }
    console.timeEnd();
    return value;
  };
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add);
//then calling…

console.log(memoizeAdd(100, 100)); //returns 200

console.log(memoizeAdd(100)); //returns 100
console.log(memoizeAdd(100, 200)); //returns 300
console.log(memoizeAdd(100, 100)); //returns 200 without computing
