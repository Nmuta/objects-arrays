// 1. Write a loop that iterates over the array [1, 2, 3, 4], doubles each element, and stores in back. [2, 4, 6, 8]

var input = [1, 2, 3, 4];
var newArr = [];
for (var i = 0; i < input.length; i++) {
  newArr.push(input[i] + input[i]);
}
console.log(newArr);

// 2. Adele is having trouble remembering her own song lyrics. For some reason, all she knows is the word "Hello".
// Write a loop that logs to the screen each of her lines with the word "Hello" in front of it.

var lines = [
    "It's me.",
    'Can you hear me?',
    'from the other side',
    'from the outside'
];

for (var i = 0; i < lines.length; i++) {
  console.log("Hello " + lines[i]);
}
