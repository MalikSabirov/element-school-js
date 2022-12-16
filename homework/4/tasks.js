// #1 Day 0: Hello World
function greeting(parameterVariable) {
	console.log("Hello, World!");
	console.log(parameterVariable);
}

// #2 Day 0: Data Types
function performOperation(secondInteger, secondDecimal, secondString) {
	const firstInteger = 4;
	const firstDecimal = 4.0;
	const firstString = "HackerRank ";

	console.log(+secondInteger + firstInteger);
	console.log(+secondDecimal + firstDecimal);
	console.log(firstString + secondString);
}

// #3 Day 1: Arithmetic Operators
function getArea(length, width) {
	let area;
	area = length * width;
	return area;
}

function getPerimeter(length, width) {
	let perimeter;
	perimeter = (length + width) * 2;
	return perimeter;
}

// #4 Day 1: Functions
function factorial(n) {
	if (n === 1) return n;

	return n * factorial(n - 1);
}

// #5 Day 1: Let and Const
function main() {
	// Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
	const radius = readLine();

	const PI = Math.PI;
	// Print the area of the circle:
	let area;
	area = PI * radius * radius;
	console.log(area);
	// // Print the perimeter of the circle:
	let perimeter;
	perimeter = 2 * PI * radius;
	console.log(perimeter);
}

// #6 Day 2: Conditional Statements: If-Else
function getGrade(score) {
	let grade;
	// Write your code here
	if (score > 25 && score <= 30) {
		grade = "A";
	} else if (score > 20 && score <= 25) {
		grade = "B";
	} else if (score > 15 && score <= 20) {
		grade = "C";
	} else if (score > 10 && score <= 15) {
		grade = "D";
	} else if (score > 5 && score <= 10) {
		grade = "E";
	} else {
		grade = "F";
	}

	return grade;
}

// #7 Day 2: Loops
function vowelsAndConsonants(s) {
	const vowels = "aeiouy";

	for (let i = 0; i < s.length; i++) {
		if (vowels.includes(s[i])) {
			console.log(s[i]);
		}
	}

	for (let i = 0; i < s.length; i++) {
		if (!vowels.includes(s[i])) {
			console.log(s[i]);
		}
	}
}

// #8 Day 3: Arrays
// Уникальные нашел через сет
function getSecondLargest(nums) {
	const set = new Set();
	nums.map((num) => set.add(num));

	const array = Array.from(set).sort((a, b) => a - b);

	return array[array.length - 2];
}

// #9 Day 3: Try, Catch, and Finally
function reverseString(s) {
	try {
		console.log(s.split("").reverse().join(""));
	} catch (err) {
		console.log(err.message);
		console.log(s);
	}
}

// #10 Day 5: Arrow Functions
function modifyArray(nums) {
	return nums.map((num) => {
		if (num % 2 === 0) {
			return num * 2;
		}

		return num * 3;
	});
}

// #11 Day 6: JavaScript Dates
function getDayName(dateString) {
	let dayName;
	const date = new Date(dateString);
	const week = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	dayName = date.getDay();

	return week[dayName];
}
