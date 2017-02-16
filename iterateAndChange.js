// Iterate through the array [1, 2, 3, 4] to change the array to [2, 3, 4, 5].
var input = [1, 2, 3, 4];
var newArr = [];

for (var i = 0; i < input.length; i++){
  newArr.push(input[i] + 1);
}

console.log(newArr);
