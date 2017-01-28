//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  var favoriteThings = {
    band:'daft punk',
    food:'meat',
    person:'heidi',
    book:'4HWW',
    movie:'top gun',
    holiday:'christmas'
  };
//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'tesla';
favoriteThings.brand = 'lululemon';

console.log(favoriteThings);

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = 'Lettuce'
favoriteThings.book = '50 Shades of Gray';

console.log(favoriteThings);


//Now, alert your favorite person, then alert your favorite book.

window.alert(favoriteThings.person);
window.alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

function looper (obj){
  for (var key in obj){
    if(!obj[key]){
      delete obj[key];
    }
  } return obj;
}

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

looper(user);
user.name = 'Mike Burton';
user.username = 'mjburton';

//Now console.log your object and make sure it looks right.

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//create an empty object called methodCollection.

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console.

methodCollection.alertHello = function(){
  alert('hello');
}
methodCollection.logHello = function(){
  console.log('hello');
}

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.

function voweler(str){
  var letterArray = str.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  var newObj = {};
  for (var i = 0; i < letterArray.length; i++){
    if(vowels.indexOf(letterArray[i]) !== -1){
      if(!newObj[letterArray[i]]){
        newObj[letterArray[i]] = 1;
      } else {
        newObj[letterArray[i]]++;
      }
    }
  } return newObj;
}


voweler("This is a test") //{i: 2, a: 1, e: 1};
