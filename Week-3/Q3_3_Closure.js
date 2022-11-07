function createIncrement() {
  let count = 0;
  function increment() {
    //console.log(count);
    count++;
  }

  let message = `Count is ${count}`; //This Message is evalueated and final String is passed to log funtion

  function log() {
    // let message = `Count is ${count}`; // This will give dynamic count
    //based on number if times increment is called.
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged? 0
