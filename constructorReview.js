//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food){
  this.species = species;
  this.name = name;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var person = function(name, age, height, gender){
  return{
    name: name,
    age: age,
    height: height,
    gender: gender,
  }
}

//Create a animal array and a person array.

var animalArray = [];
var personArray = [];


//Create two instances of Animal and push those into your animal array

var dog = new Animal('dog', 'fido', 4, 'brown', ['dog food', 'kibble', 'bacon']);
var cat = new Animal('cat', 'whiskers', 4, 'black', ['tuna', 'mice']);

animalArray.push(dog, cat);



//Create two instances of person and push those into your person array.

personArray.push(person('mike', 32, '6 foot', 'male'));
personArray.push(person('heidi', 31, '5 foot 8 inches', 'female'));



//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.eat = function(){
  alert(this.name + ' ate ' + this.food[Math.random]);
}


//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not? No, you would have had to add it in the original maker pattern. We already have a return built in and the parameters have been set



/*
  1) What happens when you use the 'new' keyword to call a Constructor function? It creates a new object
  2) What's a good way to describe the keyword 'this' - it's like a pronoun to describe which object the action is acting on
  3) Can a normal function which creates an object and then returns that object use the prototype? yes
  4) What happens if you forget to use 'new' when calling a constructor? you'll be adding calling your constructor function without specifying this and thus adding to the global/window object
*/
