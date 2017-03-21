//1. FizzBuzz
//Print the numbers 1..100
//For multiples of 3, print "Fizz" instead of the number
//For multiples of 5, print "Buzz" instead of the number
//For multiples of 3 and 5, print "FizzBuzz" instead of the number

// for(var i=1; i<=100; i++) {
//   if(i%15 === 0) {
//     console.log("FizzBuzz");
//   } else if(i%5 ===0) {
//     console.log(("Buzz"));
//   } else if (i%3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }


// 2. Write a function called sum that will return the sum of ANY NUMBER of arguments. eg:
// sum(1, 2, 5) // evaluates to 8
// sum(4, 2) // evaluates to 6
// sum(9, 34, 25, 1, -3) //evaluates to 66
// function sum(){
//   var finalSum = 0;
//   for(var i = 0; i<arguments.length; i++) {
//     finalSum += arguments[i];
//   }
//   return finalSum;
// }
// console.log(sum(1,2,6));


// 3. Write a function letterCount() that takes a string and returns an object with the count of each letter that is in the string.
// letterCount("hello world");
// will return:
// {
//   h: 1,
//   e: 1,
//   l: 3,
//   o: 2,
//   w: 1,
//   r: 1,
//   d: 1
// }
// function letterCount(string) {
// var counter = {};
// string.split('').forEach(function(letter, i, arr) {
//   if(!counter[letter]) {
//     counter[letter] = 1;
//   } else {
//     counter[letter] = counter[letter] +1;
//   }
// });
// return counter;
// }
// console.log(letterCount("hello world"));
