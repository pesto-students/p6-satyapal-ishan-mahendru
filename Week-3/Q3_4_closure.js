function createStack() {
  let items = [];
  return {
    getItems() {
      return items;
    },
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
console.log(stack.getItems()); // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!
console.log(stack.getItems());
