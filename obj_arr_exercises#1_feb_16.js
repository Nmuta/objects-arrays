//Exercise: Write a loop that iterates over the array [1, 2, 3, 4], doubles each element, and stores in back. [2, 4, 6, 8] (who do we appreciate?)

var array = [1,2,3,4];

function doubled(arr){
  var doubledNums = [];
  for(var i = 0; i < arr.length; i++){
  doubledNums.push(arr[i]*2);
  }
  return doubledNums;

};


 console.log(doubled(array)); // should return [2,4,6,8]
