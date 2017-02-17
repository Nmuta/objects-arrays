//Iterating over an array

//E2
//Challenge question: It is in double quotes because there is an apostrophe within that line that needs to be differentiated.
var lines = [
  "It's me.",
  'Can you hear me?',
  'from the other side',
  'from the outside'
];

function helloLines(arr) {
var revLines = [];
for (var i = 0; i < arr.length; i++) {
  revLines[i] = "Hello, " + arr[i];
}
return revLines;
}

helloLines(lines);
