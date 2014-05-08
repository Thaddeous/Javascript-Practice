
var three = 3
var two = 2
var four = "four"
var five = 5





// Variables
var dog = {
  name: "Sealie",
  nickname: "Seal Puppy",
  breed: "Labrador Retriever",
  color: "chocolate",
  bYear: 1998,
  dYear: 2014,
  treat: "bones"
}

var referenceToBreed = dog.breed

var familyMember = {
  name: "Hannah",
  nickname: "Bean",
  relation: "sister",
  bYear: 1990,
  dYear: null,
  age: 24
}

// notdef // will return "notdef is not defined" because notdef is not a named variable
var nope = null // will return "null" because the vaiable is defined, but has no inherent/assigned value
var undf // will return "undefined" because the variable is named but not defined
var obj = {} // will return obj {}

// Strings
var stt = "string-text-here" // will return "string-text-here"; a string is just text/numbers, etc. inside a set of matching parentheses

var eins = "one"
var zwei = "two"
  // typing "eins+zwei" in console will return "onetwo" because it concatenates (sticks together) the strings
var drei = "3"
var vier = "4"
  // typing "drei+vier" in console will return "34" because it treats the numerals in a string like text instead of like numbers
var fuenf = 5
  // typing "fuenf+6" in console will return "11" because it treats fuenf as a number (5 is not in quotation marks, so it's not a string)

// Booleans
var richtig = true
var falsch = false
  // typing "richtig+falsch" in the console will return "1" because the computer understands true to have a value of 1, and false to have 
  // a value of 0 (binary code)

// Arrays
var siebenachtneun = [7, 8, 9]
  // an array is a group of multiple values that can be assigned to a single variable; arrays are indexed (meaning that each of the the 
  // values occupies a certain numerical position) starting at a count of zero (imagine that every value is preceded by a comma; count the)
  // commas to determine which position a value occupies)

  // typing "siebenachtneun" in the console will return "[7, 8, 9]"
  // typing "siebenachtneun[0]" in the console will return "7" because 7 is in the zero position

// Comparison Operators
console.log(10 + 10); // addition
console.log(10 - 10); // subtraction

console.log(10 * 10); // multiplication
console.log(10 / 10); // division

console.log(10 == 10); // is equal to
console.log(10 != 10); // is not equal to

console.log(10 === 10); // is identical to (values in exact same format -- letters/numerals/string, etc.)
console.log(10 !== 10); // is not identical to

console.log(10 > 10); // is greater than
console.log(10 < 10); // is less than

console.log(10 >= 10); // is greater than or equal to
console.log(10 <= 10); // is less than or equal to

// If/Else Statements
if (fuenf=5) {
  alert("Congratulations, you just learned the German word for five!"); // fuenf equals five, so you will see the alert
}
else {
  alert("Nope, five isn't smaller than four. Sucker."); // fuenf will never not equal five, so you'll never see this alert
}

if (fuenf<6) {
  prompt("Yep, five is still less than six. If you'd like to type in a box that will do nothing, go right ahead!")
}

// Methods


// Functions
function dogAge (tad, joe, whitney, lance, luke, william) {
  return tad - joe - whitney - lance - luke + william;
};

// console.log(dogAge(dog.dYear, dog.bYear));

// 



































// // I wasnt learning anything reading so here goes

// // alert("Would you like to play a game?");
// // prompt("What is your name?")

// // function test(){
// // document.write("Hello there!")
// // }

// // console.log(test);

// function test(){
// document.write("Hello there! This is a test page. Not sure what I am testing but nevertheles..... Here it is.")
// }

// test()





// I started playing around with data and pulling it into the console. 
// Below I created three objects and gave them all data while purposefully leaving some data out.

var tad = new Object();
tad.name = "Thaddeous";
tad.gender = "Male";
tad.age = 26;
tad.citystate = "Greenville, SC";
tad.weight = {
    pounds: 145,
    ounzes: 16, 
  }

var shannon = new Object();
shannon.name = "Shannon";
shannon.gender = "Female";
shannon.age = 25;

shannon.height = {
    feet: 5,
    inches: 6,
  }

shannon.birthday = {
    Month: "June",
    Day: 18,
    Year: 1988,
  }

var duke = new Object();
duke.petname = "Duke";
duke.nickname = "Dukem Nukem";
duke.breed = "Rottweiler";
duke.color = "Dark Red";

duke.birthday = {
    Month: "January",
    Day: 25,
    Year: 2005,
  }

console.log(tad);
console.log(shannon);
console.log(duke);

console.log("My name is", tad.name, ". I am currently", tad.age, "yrs old, and not that you need to know but I weigh", tad.weight, ".");
console.log("I am a single", tad.gender, ", and live in", tad.citystate, ".");
console.log("My favorite pet was a", duke.breed, "named", duke.petname, ". His nickname was", duke.nickname, ".");
console.log("I was born on", tad.birthday, ". and my dog was born in the year", duke.birthday, ".");


// This is the start of strings and objects
// Tring to differentiate between the two now
var myObject = new Object(); 
myObject['0'] = "f";
myObject['1'] = "o";
myObject['2'] = "o";

var myString = new String('foo');

console.log(myObject);
console.log(myString);

//Defining a person constructor via cody's help so that I can create people later
var Person = function(living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function() {return this.gender;};
}

var jerry = new Person(true, 25, 'male');

console.log(jerry);

var myString = new String("foo")

console.log(myString);


// There are two way to do log the same info
// Example A logs -- Object {living: true, age: 25, gender: "male", getGender: function} 
var benA = new Object();
benA.living = true;
benA.age = 33;
benA.gender = "male";
benA.getGender = function() {return this.gender;};

console.log(benA);


// Example B logs -- Person {living: true, age: 33, gender: "male", getGender: function}
var Person = function(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() {return this.gender;};
};

var benB = new Person(true, 33, "male");

console.log(benB);

// Of the above two examples the take away is that example B allows,  
// me to construct a person making factory and is not just dead static code...

var Person = function Person(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function () {return this.gender;};  
};

var tad = new Person (true, 33, "male");  // tad is an object and an instance of a person
console.log(typeof tad); // logs object
console.log(tad); //logs the internal properties and valuues of tad
console.log(tad.constructor); // logs the Person() function

//Arrays
var myArray = new Array(); //My array is an instance of array
// My array is also an object and instance of the Array () constructor

console.log(typeof myArray); //logs the object because the myArray is a type of an object
console.log(myArray); //logs [ ]
console.log(myArray.constructor); // logs Array()


var Person = function(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() {return this.gender;};
};

var cody = new Person(true, 33, "male");
console.log(cody);

var lisa = new Person(true, 35, "female");
console.log(lisa);




// function pattern
var myFunction = function(){return 'foo'};
console.log(myFunction()); // log 'foo'

// method pattern

var myObject = {myFunction: function(){return 'bar';}}
console.log(myObject.myFunction()); // log 'bar'
// constructor pattern

var Cody = function(){
  this.living = true;
  this.age = 33;
  this.gender = 'male';
  this.getGender = function() {return this.gender;};
}
var cody = new Cody(); // invoke via Cody constructor
console.log(cody); // logs cody object and properties

// apply() and call() pattern
var greet = {
  runGreet: function(){
  console.log(this.name,arguments[0],arguments[1]);
  }
}

var cody = {name:'cody'};
var lisa = {name:'lisa'};

// invoke the runGreet function as if it were inside of the cody object

greet.runGreet.call(cody,'foo','bar'); // logs 'cody foo bar'

// invoke the runGreet function as if it were inside of the lisa object


// // Objects

// // // Variables

// // Strings

// // Comparison Operators

// // Methods

// // Data Type - Undefined

// // Data Type - Null

// // Booean Values

// // If/Else Statements

// // Functions

// // Data Structures - Objects

// // Data Structures - Arrays




