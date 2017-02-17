//Iterating over an array

//E1
var numArr = [1,2,3,4];

function doubleArr(arr) {
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  newArr[i] = arr[i] * 2;
}
return newArr;
}

doubleArr(numArr);
