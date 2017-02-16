/*
Question: Do you think changing an object or array passed into a function
remain changed once the function completes?

Depending on the method you use, I do think that the array passed in can remain changed.
For example, with the Array.splice() method, the original array passed in will be
different after the splice() method is called. For example:
*/

var students = ["Satoshi", "DJ", "Brad", "Laura"];
console.log(students.splice(1,2)); // returns ["DJ", "Brad"]
console.log(students); // returns ["Satoshi", "Laura"]

//However with the slice() method, the original array is unchanged:
var students = ["Satoshi", "DJ", "Brad", "Laura"];
console.log(students.slice(1,2)); // returns ["DJ"]
console.log(students); // returns ["Satoshi", "DJ", "Brad", "Laura"]
