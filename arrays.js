//ARRAYS ===========================================

//Question: what are the types of elemnts in randomArray : var randomArray = ["hi", 3, null, [1, 2, 3], true, "bye"];
String, integer, null, boolean, array

//Question: Write the array of the names of the people in your group.
var arr = ["Daniel", "Satoshi", "Brad", "Elle", "Carol", "Dashon", "Jose", "Laura", "Lauren", "Julian"];

/*Question: What will the following code produce?: var myArray = ["Elie", "Janey", "Matt", "Parker", "Tim"];
var index = 3;
myArray[3]*/
"Parker"
//QuestionWhat would happen if I specify myArray[100]?
undefined
//Question What would happen if I specify myArray[-1]?
undefined

/*Exercise Write a loop that iterates over the array [1, 2, 3, 4], doubles each element, and stores in back. [2, 4, 6, 8]*/
var arry = [1, 2, 3, 4]
for (i = 0; i < arry.length; i++) {
  arry[i] *= 2;
}
console.log(arry)
//Exercise Adele is having trouble remembering her own song lyrics. For some reason, all she knows is the word "Hello"
var lines = [
    "It's me.",
    'Can you hear me?',
    'from the other side',
    'from the outside'
];
