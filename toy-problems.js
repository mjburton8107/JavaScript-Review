/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

function plusOneSum(arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++){
    total += arr[i]+1;
  } return total;
}


/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
function flatten (arr){
  var newArray = [].concat.apply([], arr);
  return newArray;
}
/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

function compare (arr1, arr2){
  for (var i = 0; i < arr1.length; i++){
    if (arr2.indexOf(arr1[i]) === -1){
      return arr1[i];
    }
  }
}



/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
function longestWords (str){
  var myWords = str.split(' ');
  var longestWord = '';
  for (var i = 0; i < myWords.length; i++){
    if(myWords[i].length > longestWord.length){
      longestWord = myWords[i];
    }
  } return longestWord;
}

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function multipleSum (num){
  var sum = 0;
  for (var i = 0; i < num; i++){
    if(i % 3 === 0){
      sum += i;
    } else if (i % 5 === 0){
      sum += i;
    }
  } return sum
}

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function duplicates (str){
  var letters = str.split('');
  var newArray = [];
  for (var i = 0; i < letters.length; i++){
    if (newArray.indexOf(letters[i]) === -1){
      newArray.push(letters[i]);
    }
  } return newArray.join('');
}

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum (arr){
  arr.reduce(function(a, b){
    return a + b;
  }, 0);
}
