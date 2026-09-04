 Task 1 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


 Task 2 

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


 Task 3 

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


 Task 4 

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


 Task 5 

let number = Number(prompt("Enter a number"));
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


 Task 6 

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}


 Task 7 

let num = 1;
let sum = 0;
while (num <= 10) {
    sum = sum + num;
    num++;
}

console.log(sum);


Task 8 

let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 5);


 Task 9 
let b = 10;
do {
    console.log(b);
    b++;
} while (b <= 5);




 Task 10

let name = "javascript";for (let char of name) {
    console.log(char);
}


 Task 11

let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for (let fruit of fruits) {
    console.log(fruit);
}


 Task 12 

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

for (let student of students) {
    console.log("Student: " + student);
}


Task 13 

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};
for (let key in employee) {
    console.log(key + " " + employee[key]);
}


 Task 14 

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};
for (let key in product) {
    console.log(key + " " + product[key]);
}


Task 15 

function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();


 Task 16 

function greet(name) {
    console.log("Hello " + name);
}
greet("Naveen");
greet("Arun");
greet("Priya");


 Task 17 

function student(name, age, department) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
}
student("Arun", 21, "IT");
student("Priya", 22, "HR");
student("Rahul", 20, "ECE");

Task 18

function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);

Task 19

function salary(amount) {
    return amount;
}

let mySalary = salary(50000);
console.log(mySalary);


 Task 20 

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}
let total = bonus(50000, 5000);
console.log(total);


 Task 21 

function employeeDetails(name, role = "Developer") {
    console.log("Name: " + name);
    console.log("Role: " + role);
}
employeeDetails("Arun");
employeeDetails("Priya", "Designer");



 Task 22 

function square(number) {
    return number * number;
}
console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));


Task 23

let calculate = function(a, b) {
    return a + b;
};
console.log(calculate(10, 20));


 Task 24 

let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 10));


 Task 25 

function test() {

    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
        console.log(x);
        console.log(y);
        console.log(z);
    }

    console.log(x);
}
test();




 Task 26 

console.log(aa);
var aa = 10;



 Task 27 

console.log(bb);

let bb = 20;


/Task 28 

console.log(cc);

const cc = 30;



Task 29 

(function() {
    console.log("Welcome to JavaScript");
})();
(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);


Task 30 

function welcomeMessage() {
    console.log("Welcome");
}
function execute(callback) {
    callback();
}
execute(welcomeMessage);


 Task 31 

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cash = cashback();

for (let value of cash) {
    console.log(value);
}


Task 32

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Rahul",
        age: 26,
        department: "IT",
        role: "Tester",
        salary: 45000
    }
];


for (let employee of employees) {
    console.log(employee);
}
for (let employee of employees) {

    for (let key in employee) {
        console.log(key + " : " + employee[key]);
    }

    console.log("----------------");
}
function displayEmployee(employee) {
    console.log("Name: " + employee.name);
    console.log("Age: " + employee.age);
    console.log("Department: " + employee.department);
    console.log("Role: " + employee.role);
    console.log("Salary: " + employee.salary);
}
for (let employee of employees) {
    displayEmployee(employee);
}
function getSalary(employee) {
    return employee.salary;
}

let salary1 = getSalary(employees[0]);

console.log("Salary: " + salary1);
for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " salary is 40000 or above");
    } else {
        console.log(employee.name + " salary is below 40000");
    }
}
let yearlySalary = (salary) => {
    return salary * 12;
};
console.log(yearlySalary(40000));
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}
