 Task 1 — Student Result Analyzer

function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {

    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = total / 5;

    let result;
    let grade;

    if (average >= 50) {
        result = "Pass";

        if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 60) {
            grade = "C";
        } else {
            grade = "D";
        }

    } else {
        result = "Fail";
        grade = "Fail";
    }

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}

studentResult("Arun", "Computer Science", 85, 90, 78, 88, 92);


// Task 2 — Employee Salary Calculator

let employee_1 = {
    name: "Jacob",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 15 / 100;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 10 / 100;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee_1);


// Task 3 — Product Filter System

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];


let above2000 = products.filter(function(product) {
    return product.price > 2000;
});

console.log("Products above 2000:", above2000);



let electronics = products.filter(function(product) {
    return product.category === "electronics";
});

console.log("Electronics:", electronics);



let below1000 = products.find(function(product) {
    return product.price < 1000;
});

console.log("First product below 1000:", below1000);


let totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log("Total Price:", totalPrice);



let expensiveProduct = products.some(function(product) {
    return product.price > 50000;
});

console.log("Any product above 50000:", expensiveProduct);


let allAbove500 = products.every(function(product) {
    return product.price > 500;
});

console.log("Every product above 500:", allAbove500);


// Task 4 — Employee Management

let employee_2 = [
    {
        id: 101,
        name: "peter",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "stephan",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Rency",
        role: "HR",
        salary: 35000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Full Stack Developer",
        salary: 60000
    },
    {
        id: 105,
        name: "Karthi",
        role: "UI Developer",
        salary: 45000
    },
    {
        id: 106,
        name: "Ravi",
        role: "Manager",
        salary: 70000
    }
];



let names = employee_2.map(function(employee) {
    return employee.name;
});

console.log("Employee Names:", names);



let highSalaryEmployees = employees.filter(function(employee) {
    return employee.salary > 40000;
});

console.log("Employees above 40000:", highSalaryEmployees);



let employee103 = employees.find(function(employee) {
    return employee.id === 103;
});

console.log("Employee ID 103:", employee103);



let totalSalary_1 = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary_1);



let highestPaid = employees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }

});

console.log("Highest Paid:", highestPaid);



let sortedEmployees = employees.sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Sorted Employees:", sortedEmployees);



let employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log("Names Only:", employeeNames);



// Task 5 — Shopping Cart

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    cart.forEach(function(item) {
        item.total = item.price * item.quantity;
    });

    console.log("Cart:", cart);


   
    let total = cart.reduce(function(sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

    console.log("Total Cart Value:", total);


    
    let discount = 0;

    if (total > 50000) {
        discount = total * 10 / 100;
    }

    console.log("Discount:", discount);


  
    let finalAmount = total - discount;

    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);



// Task 6 — Student Search System


let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

let studentNames = students.map(function(student) {
    return student.name;
});

console.log("Student Names:", studentNames);


let above80 = students.filter(function(student) {
    return student.mark > 80;
});

console.log("Students above 80:", above80);



let priya = students.find(function(student) {
    return student.name === "Priya";
});

console.log("Priya:", priya);



let totalMarks = students.reduce(function(total, student) {
    return total + student.mark;
}, 0);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);


let failed = students.some(function(student) {
    return student.mark < 50;
});

console.log("Anyone Failed:", failed);



let everyoneAbove40 = students.every(function(student) {
    return student.mark > 40;
});

console.log("Everyone above 40:", everyoneAbove40);


let sortedStudents = students.sort(function(a, b) {
    return b.mark - a.mark;
});

console.log("Students sorted by marks:", sortedStudents);



// Task 7 — Array Transformation Challenge


let numbers = [12, 5, 8, 21, 44, 7, 30, 15];



let doubleNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log("Numbers × 2:", doubleNumbers);



let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


let greaterThan15 = numbers.filter(function(number) {
    return number > 15;
});

console.log("Greater than 15:", greaterThan15);


let firstGreater20 = numbers.find(function(number) {
    return number > 20;
});

console.log("First greater than 20:", firstGreater20);


let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log("Total:", total);



let anyGreater40 = numbers.some(function(number) {
    return number > 40;
});

console.log("Any greater than 40:", anyGreater40);


let allPositive = numbers.every(function(number) {
    return number > 0;
});

console.log("Every number positive:", allPositive);


let sortedNumbers = numbers.sort(function(a, b) {
    return b - a;
});

console.log("Highest to Lowest:", sortedNumbers);


// Task 8 — String Analyzer

let sentence = prompt("Enter a sentence:");

console.log("Original Sentence:", sentence);



console.log("Total Characters:", sentence.length);



console.log("Uppercase:", sentence.toUpperCase());


console.log("Lowercase:", sentence.toLowerCase());



console.log(
    "Contains JavaScript:",
    sentence.includes("JavaScript")
);


console.log("First Character:", sentence.slice(0, 1));



console.log("Last Character:", sentence.slice(-1));



let words = sentence.split(" ");

console.log("Number of Words:", words.length);



let newSentence = sentence.replace("JavaScript", "Python");

console.log("New Sentence:", newSentence);


console.log("Sentence Array:", words);



// Final Mini Project — Employee Dashboard



let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

// 1. Display all employees

console.log("All Employees:");

employees.forEach(function(employee) {
    console.log(employee);
});


// 2. Search employee by name

let searchName = "Arun";

let employee = employees.find(function(employee) {
    return employee.name === searchName;
});

console.log("Search Result:", employee);


// 3. Department Filter

let department = "IT";

let itEmployees = employees.filter(function(employee) {
    return employee.department === department;
});

console.log("IT Employees:", itEmployees);


// 4. Salary Filter

let salaryEmployees = employees.filter(function(employee) {
    return employee.salary > 50000;
});

console.log("Employees earning above 50000:", salaryEmployees);


// 5. Total Company Salary

let totalCompanySalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Company Salary:", totalCompanySalary);



// 6. Highest Salary

let highestSalary = employees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    } else {

    }

});

console.log("Highest Salary Employee:", highestSalary);



// 7. Experience Filter


let experiencedEmployees = employees.filter(function(employee) {
    return employee.experience > 3;
});

console.log("Employees with more than 3 years:", experiencedEmployees);



// 8. Sort Salary — Low to High

let lowToHigh = [...employees].sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("Low to High:", lowToHigh);



// 9. Sort Salary — High to Low

let highToLow = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("High to Low:", highToLow);



// 10. Statistics


let totalEmployees = employees.length;

let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

let highestEmployee = employees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }

});

let averageSalary = totalSalary / totalEmployees;


console.log("<<<<<<=Employee Dashboard=>>>>>");

console.log("Total Employees:", totalEmployees);
console.log("Total Salary:", "₹" + totalSalary);
console.log("Highest Salary:", "₹" + highestEmployee.salary);
console.log("Average Salary:", "₹" + Math.round(averageSalary));
