//Exercise Adele is having trouble remembering her own song lyrics. For some reason, all she knows is the word "Hello". Let's help her out.

var lines = [
    "It's me.",
    'Can you hear me?',
    'from the other side',
    'from the outside'
];

// //Write a loop that logs to the screen each of her lines with the word "Hello" in front of it.
//
// Not just for arrays
//
// You don't need an array in order to write a for loop. Here's an example of a for loop that makes no mention of arrays:

for (var i = 0; i < lines.length; i++) {
  console.log(lines[i]+ " " + "Hello");
}
