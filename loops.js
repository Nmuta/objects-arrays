//LOOPS===========================================

//Excercise Iterate through the array [1, 2, 3, 4] to change the array to [2, 3, 4, 5].
var arr = [1,2,3,4]
for (i = 0; i < arr.length; i++) {
  arr[i] += 1
}
console.log(arr);

//Excercise Print the numbers 1 to 10 and also the number 10 to 1, side by side. Do this using a for loop and a while loop.

//========FOR LOOP=========//
var x = 11
var y = 0
for (i = 1; i <= 10; i++) {
  console.log(x - i, y + i);
}


}

//========WHILE LOOP=======//

var ctr = 1;
var negCtr = 10
while (ctr < 11) {
  console.log(ctr, negCtr);
  ctr++
  negCtr--
}

//Excercise Write code to print all the odd numbers between 1 and 100. Do this using a for loop and a while loop.

//========FOR LOOP=========//
for (i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
  console.log(i);
  }
}

//========WHILE LOOP=======//

var ctr = 1;
while (ctr < 100) {
  if(ctr % 2 !== 0) {
    console.log(ctr);
  }
  ctr++
}

/*Excercise Explain what the code below is doing. Why is a while loop more suitable than a for loop in this case? : var total = 0;
var flip = Math.random();
while (flip > 0.5) {
  total++;
  flip = Math.random();
 }
console.log("Number of consecutive times heads came up: " + total);*/

//Answer : for loops are ideal if you already know how many iterations you want to preform, and while loops are ideal if you're not sure how many times the code will iterate.
