
// // Q1: What is the difference between var, let, and const?

var name = "jacob peter";
name = "Raj";        
var name = "stephan";  

let age_1 = 25;
age_1 = 26;           

const city = "salem";



// // Q2: Can you re-declare a variable with var? What about let and const?

var x_1 = 10;
var x_1 = 20;

console.log(x); 

let y_1= 10;


const z_1 = 10;



//  Q3: What is the output of this code?

var a = 5;
let b= 10;
const c = 15;

a = 20;
b = 25;
c = 30;

console.log(a, b, c);



// Q4: What is the difference between declaring and initializing a variable?

let age1;
age1 = 80;
console.log(age1)



//  Q5: What will be the output?

let a;
console.log(a);


//  Q6: What is hoisting? Give an example.


console.log(x);

var x = 10;


// Q7: What is the difference between null and undefined?

let x1;
console.log(x1); 

let y1 = null;
console.log(y1); 

// Q8: What will be the output?

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

// Q9: What is the difference between == and ===?


console.log(5 == "5");

console.log(5 === "5");



//  Q10: What is the difference between ++i and i++?

let i = 5;

console.log(++i);

let j = 5;

console.log(i++);
console.log(j);


//  Q11: What will be the output?

let x = 10;
let y = "5";

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);


//  Q12: What are logical operators? Explain with examples.

console.log(10 > 5 && 20 > 10);
console.log(10 > 5 || 20 < 10);
console.log(!(10 > 5));

// Q13: What will be the output?

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));



//  Q14: What is the ternary operator? Give an example.

let age2 = 20;

let result4 = age2 >= 18 ? "Adult" : "Minor";

console.log(result4);


// Q15: What is the difference between implicit and explicit type casting?


let u= "10";
let v = 5;

console.log(u - v);


let d= "10";

console.log(Number(d));


// Q16: What will be the output?

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));



// Q17: What is NaN? Give an example.

let l= Number("hello");

console.log(l);



// Q18: What is the difference between if-else and switch?

let age = 12;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}



// Q19: What will be the output?

let age3= 20;

if(age3 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Q20: What is nested if? Give an example.

let agenum = 20;
let hasid = true;

if (agenum >= 18) {
    if (hasid == true) {
        console.log("Entry allowed");
    }
}


// Q21: Write a program to check if a number is even or odd using ternary operator.

let number = 10;

let result1 = number % 2 == 0 ? "Even" : "Odd";

console.log(result1);



//  Q22: What is the difference between while and do-while?

let p = 1;

while (p <= 3) {
    console.log(p);
    p++;
}

let q= 1;

do {
    console.log(q);
    q++;
} while (q<= 3);


// Q23: What will be the output

for(let i = 1; i <= 5; i++) {
    console.log(i);
}


// Q24: What is the difference between for-of and for-in?

 let fruits1 = ["Apple", "Banana", "Mango"];

for (let fruit of fruits1) {
    console.log(fruit);

}



let fruits = ["Apple", "Banana", "Mango"];

for (let index in fruits) {
    console.log(index);
}



// Q25: Write a program to find sum of numbers from 1 to 100.


let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);


//  Q26: What is the difference between slice and splice?

// slice 

let arr4 = [1, 2, 3, 4, 5];

let result = arr4.slice(1, 3);

console.log(result);
console.log(arr4);


// splice

let arr = [1, 2, 3, 4, 5];

arr.splice(1, 2);

console.log(arr);


//  Q27: What will be the output?

let arr3 = [1, 2, 3];

arr3.push(4);
arr3.pop();
arr3.unshift(0);
arr3.shift();

console.log(arr3);



//  Q28: What is the difference between function declaration and function expression?

function add() {
    console.log("Hello");
}

add();

let add1 = function() {
    console.log("Hello");
};

add1();



//  Q29: What is an arrow function? Give an example.

let add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));



// 30: What will be the output?

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);
