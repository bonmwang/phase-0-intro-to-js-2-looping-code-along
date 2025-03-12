const names = ["Alice", "Bob", "Charlie"];
const event = "birthady";
const messages = writeCards(names, event);
console.log(messages);

// writeCards function
function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
  }
  
  // countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }