//Other Loops

//E1
var origArr = [1, 2, 3, 4];

function addOne(arr) {
 var newArr = [];
 for (var i = 0; i < arr.length; i++) {
   newArr[i] = arr[i] + 1;
 }
 return newArr;
}

addOne(origArr);
