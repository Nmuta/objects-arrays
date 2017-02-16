// Write code to print all the odd numbers between 1 and 100.
//Do this using a for loop and a while loop.

for (var i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

var i = 1;
while (i <= 100) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
}
