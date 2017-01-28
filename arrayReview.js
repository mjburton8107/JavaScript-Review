var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(arr){
  return arr[arr.length-1];
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function loopArray (arr){
  var newArray = [];
  for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      newArray.push(arr[i]);
    }
  } return newArray;
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function randomLooper (randomNumber, arr){
    for (var i = 0; i < arr.length; i++){
      if (arr.indexOf(randomNumber) !== -1){
          return true;
    }
  } false;
}

randomLooper(getRandomArbitrary(), randomArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = [];

for (var i = 0; i < first.length; i++){
  second.push(first[i]);
}

second.push(6,7);

console.log(first);
console.log(second);
// alert(first) //[1,2,3,4,5];
// alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

function longest (str){
  var wordArray = str.split(' ');
  var longestWord = '';
  for (var i = 0; i < wordArray.length; i++){
    if(wordArray[i].length > longestWord.length){
      longestWord = wordArray[i];
    }
  } return longestWord;
}

console.log(longest(sentence));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capitalize(str){
  var wordArray = str.split(' ');
  var newArray = [];
  for (var i = 0; i < wordArray.length; i++){
    var capWord = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1, wordArray[i].length);
    newArray.push(capWord);
  } return newArray.join(' ');
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
function vowelCounter(str){
  var letterArr = str.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  var vowelCount = 0;
  for (var i = 0; i < letterArr.length; i++){
    if(vowels.indexOf(letterArr[i]) !== -1){
      vowelCount++;
    }
  } return vowelCount;
}
