// Print the numbers 1 to 10 and also the number 10 to 1,
// side by side. Do this using a for loop and a while loop.

// I did get help on this from Brad as I was very confused on this one.

for (var i = 0; i < 10; i++) {
  var x = 1, y = 10;
  console.log(x+i, y-i);
}


var i = 0;
while (i < 10) {
  var x = 1, y = 10;
  console.log(x + i, y - i);
  i++;
}
