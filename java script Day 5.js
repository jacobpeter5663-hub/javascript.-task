JavaScript Answers (Q1–Q30)
Q1: What is the difference between var, let, and const?
- var: Function-scoped, can be re-declared and updated.
- let: Block-scoped, cannot be re-declared in the same scope, but can be updated.
- const: Block-scoped, cannot be re-declared or updated. Must be initialized during declaration.
  
Q2: Can you re-declare a variable with var? What about let and const?
- var → Yes
- let → No
- const → No
Example:
var a = 10;
var a = 20;

let b = 10;
let b = 20; 

const c = 10;
const c = 20; 

Q3: Output
var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
z = 30;

console.log(x, y, z);
Output:
TypeError: Assignment to constant variable.
  
Q4: Difference between declaring and initializing a variable
- Declaration: Creating a variable.
let a;
- Initialization: Assigning a value.
a = 10;

Q5: Output
let a;
console.log(a);
Output:
undefined

Q6: What is hoisting?
Hoisting is JavaScript's behavior of moving declarations to the top before execution.
Example:
console.log(a);
var a = 10;
Output:
undefined

Q7: Difference between null and undefined
- undefined → Variable declared but not assigned.
- null → Intentional empty value.
Example:
let a;
console.log(a); 

let b = null;
console.log(b); 

Q8: Output
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

Output:
object
undefined
object
object
Operators

Q9: Difference between == and ===
- == → Compares values only (type conversion allowed)
- === → Compares value and type
Example:
5 == "5"   // true
5 === "5"  // false

Q10: Difference between ++i and i++
- ++i → Increment first, then use.
- i++ → Use first, then increment.
Example:
let i = 5;
console.log(++i); // 6

let j = 5;
console.log(j++); // 5
console.log(j);   // 6

Q11: Output
let x = 10;
let y = "5";

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
Output:
105
5
50
2

Q12: Logical operators
- && → AND
- || → OR
- ! → NOT
Example:
5 > 3 && 4 > 2   // true
5 > 10 || 4 > 2  // true
!(5 > 3)         // false

Q13: Output
console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));
Output:
true
true
false

Q14: Ternary Operator
Syntax:
condition ? trueValue : falseValue;
Example:
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
Output:
Adult
Type Casting

Q15: Implicit vs Explicit Type Casting
- Implicit: Automatic conversion by JavaScript.
- Explicit: Manual conversion using Number(), String(), Boolean().
  
Q16: Output
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));
Output:
123
NaN
1
0
false
true

Q17: What is NaN?
NaN means Not a Number.
Example:
console.log(Number("abc"));
Output:
NaN
Conditional Statements

Q18: Difference between if-else and switch
- if-else → Best for conditions and ranges.
- switch → Best for checking one variable against multiple values.
  
Q19: Output
let age = 20;

if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}
Output:
Adult

Q20: Nested if
Example:
let age = 20;

if(age >= 18){
    if(age >= 21){
        console.log("Eligible");
    }
    else{
        console.log("Adult");
    }
}

Q21: Program to check even or odd using ternary operator
let num = 10;

let result = (num % 2 === 0) ? "Even" : "Odd";

console.log(result);
Loops

Q22: Difference between while and do-while
- while → Checks condition before executing.
- do-while → Executes once before checking condition.
  
Q23: Output
for(let i = 1; i <= 5; i++){
    console.log(i);
}
Output:
1
2
3
4
5

Q24: Difference between for...of and for...in
- for...of → Iterates over values.
- for...in → Iterates over keys/indexes.
Example:
let arr = [10,20,30];

for(let value of arr){
    console.log(value);
}

for(let index in arr){
    console.log(index);
}

Q25: Program to find the sum of numbers from 1 to 100
let sum = 0;

for(let i = 1; i <= 100; i++){
    sum += i;
}

console.log(sum);
Output:
5050
Arrays

Q26: Difference between slice() and splice()
- slice() → Returns a new array; original array is unchanged.
- splice() → Modifies the original array.
  
Q27: Output
let arr = [1,2,3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);
Output:
[1, 2, 3]
Functions

Q28: Difference between Function Declaration and Function Expression
Function Declaration
function greet(){
    console.log("Hello");
}
Function Expression
const greet = function(){
    console.log("Hello");
};

Q29: Arrow Function
Example:
const greet = () => {
    console.log("Hello");
};

greet();
Output:
Hello

Q30: Output
function greet() {
    return "Hello";
}

let message = greet();

console.log(message);
Output:
Hello
