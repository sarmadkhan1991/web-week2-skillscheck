//////////////////PROBLEM 1////////////////////

// Create a variable called 'myName' with a value that is your name. 

// Code here

var myName = 'Sarmad'

//////////////////PROBLEM 2////////////////////

// Create a variable called 'faveNum' with a value that is your favorite number. 

//Code here

var faveNum = 69;

//////////////////PROBLEM 3////////////////////

// Create a variable called 'lovesCode' and assign it a value of true.

//Code here

var lovesCode = true;

//////////////////PROBLEM 4////////////////////

// Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. The function should return the sum of the two parameters.

//Code here

function sum (num1, num2) {
	return num1 + num2; 
}

//////////////////PROBLEM 5////////////////////

// Create a function called 'lovesCodeChecker' that takes in a single parameter called 'x'. Check to see if 'x' is equal to true. If it is, return a true boolean. If 'x' does not equal true, return a false boolean.  

//Code here

function lovesCodeChecker (x) {
	if (x) {
		return true;
	}
	return false;
}

//////////////////PROBLEM 6////////////////////

// Create a function called 'oddChecker' that takes in one parameter, 'num'. Your function should check to see if the parameter is even or odd. If the parameter is odd, return 'the number is odd'. If the number is even, return 'the number is even'.

//Code here

function oddChecker (num) {
	if (num % 2 === 0) {
		return 'the number is even';
	}
	return 'the number is odd';
}

//////////////////PROBLEM 7////////////////////

// Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. Have the function take the two parameters and return a string that says "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"

//Code Here

function iLove (name, love) {
	return name + ' loves ' + love;
}

//////////////////PROBLEM 8////////////////////

// Create a copy of the faveColors array called 'colorCopy' using slice.
const faveColors = ['red', 'green', 'black']

//Code Here

var colorCopy = faveColors.slice(0);

//////////////////PROBLEM 9////////////////////

// Add a fourth color to the end of the 'colorCopy' array using push.

//Code Here

colorCopy.push('maroon');

//////////////////PROBLEM 10////////////////////

// Create a new array called 'middleNums' from the numbers array that will capture only the middle numbers (2, 3, 4).
const numbers = [1, 2, 3, 4, 5]

//Code Here

var middleNums = numbers.slice(1, 4);

//////////////////PROBLEM 11////////////////////

// Create an object called 'me' that has the following keys: firstName, state, age, and greeter. The value of the firstName key should be your name as a string. The value of the property state should be your current state or providence of residence as a string. The value of age should be your age as a number. greeter should be a method that returns the string 'Hello! My name is NAMEVALUE and I live in STATEVALUE' with the corresponding values. 

//Code Here

const me = {
			firstName: 'Sarmad',
			state: 'AZ',
			age: 27,
			greeter: function () {
				return `Hello! my name is ${this.firstName} and I live in ${this.state}`;
			}
};

//////////////////PROBLEM 12////////////////////

// Create a function called 'bigOrSmall' that takes in one parameter, 'arr', which will be an array of numbers. Inside of the bigOrSmall function, create a new array called 'answers'. Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. If it is, push 'big' as a string to the answers array. If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. Return the answers array inside of the function.

// Code here

function bigOrSmall (arr) {
	var answers = [];
	for (var i = 0; i < arr.length; i++){
		if (arr[i] <= 100){
			answers.push('small');
		}else {
			answers.push('big');
		}
	}
	return answers;
}

//////////////////PROBLEM 13////////////////////

// Create a function called 'arrayReverser' that takes in one parameter, 'arr'. Inside of arrayReverser, create an empty array called 'reversed'. Using a for loop, loop over the passed in array IN REVERSE (this means your counter should decrement), and then add each item to the 'reversed' array variable you created. Finally, return the 'reversed' array variable. 

//Code Here

function arrayReverser (arr) {
	var reversed = [];
	for (var i = arr.length -1 ; i >= 0; i--){
		reversed.push(arr[i]);
	}
	return reversed;
}

//////////////////PROBLEM 14 - 18 Setup////////////////////

// Below is an array, myNumbers. You will be using .map, .filter, .reduce and .forEach to manipulate the array in the following problems.
const myNumbers = [3, 55, 788, 2, 1]


//////////////////PROBLEM 14////////////////////

// First, use .map to create a new array that doubles each number. Call the new array 'doubled'.

// Code Here

var doubled = myNumbers.map(function (num) {
	return num * 2;
});

//////////////////PROBLEM 15////////////////////

// Now, use .filter to create a new array containing any numbers that are greater than 100. Call the new array 'filtered'. 

// Code Here

var filtered = myNumbers.filter(function (num) {
	if (num > 100) {
		return num;
	}
})

//////////////////PROBLEM 16////////////////////

// Next, use reduce to get the total of the numbers in the array summed together. Store the total in a new variable named 'total'. 

// Code Here

var total = myNumbers.reduce(function (acc, num) {
	return acc += num;
})

//////////////////PROBLEM 17////////////////////

// Finally, use .forEach to find the index of each item in the array. To begin, create an empty array called 'myNumbersIndex'. Then, use forEach to push each item's index from the myNumbers array into the newly created myNumbersIndex array. 

// Code Here

var myNumbersIndex = [];
myNumbers.forEach(function(element) {
	return myNumbersIndex.push(myNumbers.indexOf(element))
});

//////////////////PROBLEM 18////////////////////

// Did you know that George Foreman has five sons named George? Go ahead and change everyone's name in the notGeorge array to George using .map. Store the resulting array in a variable named 'forTheLoveOfGeorge'.
const notGeorge = ['Louis', 'Ted', 'Bill', 'Sharon', 'Mark', 'Angela']

// Code Here

var forTheLoveOfGeorge = notGeorge.map(function (str) {
	return str = 'George';
})

//////////////////PROBLEM 19////////////////////

// Using the people array, filter out everyone that isn't a friend into a new array called 'enemies'. Use .filter(). 
const people = [
    { name: 'Landy', friend: true, awesomeLevel: 10 },
    { name: 'Jeremy', friend: true, awesomeLevel: 10 },
    { name: 'Bart', friend: false, awesomeLevel: 3 },
    { name: 'Stephanie', friend: false, awesomeLevel: 6 },
    { name: 'Serena', friend: true, awesomeLevel: 8 },
    { name: 'George', friend: true, awesomeLevel: 7 }
]

// Code Here

var enemies = Array.from(people.filter(function(ppl){
	if (ppl.friend === false){
		return ppl;
	}
}));

//////////////////PROBLEM 20////////////////////

// Using the people array above, get a total of the awesomeLevel from all the people, and store that value in a variable named 'totallyAwesome'. Use .reduce().

// Code Here

var totallyAwesome = people.reduce(function(acc, person){
	return acc += person.awesomeLevel;
}, 0);
