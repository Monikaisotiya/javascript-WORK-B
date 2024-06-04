Q.1   What is JavaScript.How to use it ?
Ans :
       JavaScript is a scripting language used to develop web pages.Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions.It also enables users to load content into a document without reloading the entire page

Q.2 How many type of Variable in JavaScript ?
 Ans :
       There are two types of variables in JavaScript : local variable and global variable.There are some rules while declaring a JavaScript variable(also known as identifiers).Name must start with a letter(a to z or A to Z), underscore(_), or dollar($) sign.
    
 Q.3 Define a Data Types in js ?
       Ans : JavaScript supports several data types including numbers, strings, booleans, arrays, objects, null, and undefined.
 
Q.4 Write a mul Function Which will Work Properly When invoked With Following Syntax.
 Ans: 
     function mul(x) { 
      return function(y) { 
        return function(z) { 
          return x*y*z; 
        }; 
      } 
    } 
      
    console.log(mul(2)(3)(5)); 
console.log(mul(2)(3)(4)); 
    
Q.5 What the deference between undefined and undeclare in JavaScript ?
  Ans : Undefined: It occurs when a variable has been declared but has not been assigned any value.Undefined is not a keyword.Undeclared: It occurs when we try to access any variable that is not initialized or declared earlier using the var or const keyword.
      
  Q.6 Using console.log() print out the following statement:
   The quote 'There is no exercise
   better for the heart than reaching down and lifting people up.' by John Holmes teaches us to
  help one another.Using console.log() print out the following quote by Mother Teresa
  
  Q.7 Check if typeof '10' is exactly equal to 10. If not make it exactly equal ?
    Ans: let str = '10';
let num = 10;

if (typeof str !== 'number') {
  str = Number(str);
}

console.log(str === num);

Q.8 Write a JavaScript Program to find the area of a triangle ?
  Ans : 
    <style>
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }
      div {
        display: flex;
        gap: 2rem;
        place-content: center;
      }
      input {
        width: 3rem;
        padding: 0.5rem;
        font-weight: 800;
        text-align: center;
      }
      button {
        width: 5rem;
      }
      #ans {
        border: 1px dashed black;
        background-color: green;
        color: white;
      }
    </style>
  </head>
  <body>
    <h3>Calculate the area of triangle</h3>
    <div>
      <input type="text" id="a" />
      <input type="text" id="b" />
      <input type="text" id="c" />
    </div>
    <button onclick="cal()">Calculate</button>
    <p id="ans"></p>
    {/* <script> */}
      cal = () => {
        const a = parseInt(document.getElementById("a").value);
        const b = parseInt(document.getElementById("b").value);
        const c = parseInt(document.getElementById("c").value);

        const sp = (a + b + c) / 2;
        const area = Math.sqrt(sp * ((sp - a) * (sp - b) * (sp - c)));

        document.getElementById("ans").innerHTML = "Answer:" + area;
      };
     
      {/* </script> */}
      
Q.9 Write a JavaScript program to calculate days left until next Christmas?
Ans:
    <h3>
      Program to calculate days left until next Christmas using JavaScript?
    </h3>
    {/* <script> */}
      let today = new Date();

      let christmasYear = today.getFullYear();
      if (today.getMonth() == 11 && today.getDate() > 25) {
        christmasYear = christmasYear + 1;
      }
      let christmasDate = new Date(christmasYear, 11, 25);

      let dayMilliseconds = 1000 * 60 * 60 * 24;

      let remainingDays = Math.ceil(
        (christmasDate.getTime() - today.getTime()) / dayMilliseconds
      );

      // Write it to the page
      document.write(
        "There are " + remainingDays + " days remaining until Christmas."
      );
      {/* </script> */}
      
      Q.10 What is Condition Statement?
      Ans: 
      Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code.\

      Q.11 Find circumference of Rectangle formula : C = 4 * a ?
      Ans: 
      
      function perimeterOfSquare(sideLength) {
        return 4 * sideLength;
      }

      // Example usage:
      const sideLength = 4;
      console.log(
        `The perimeter of the square is ${perimeterOfSquare(sideLength)}.`
      );

      Q.12 WAP to convert years into days and days into years?
      Ans: 
      
        // Function to convert years into days
      function yearsToDays(years) {
        const daysInYear = 365;
        return years * daysInYear;
      }

      // Function to convert days into years
      function daysToYears(days) {
        const daysInYear = 365;
        return days / daysInYear;
      }

      // Example usage:
      let years = 5;
      let daysFromYears = yearsToDays(years);
      console.log(`${years} years in to days ${daysFromYears} days.`);

      // 5 years of day
      let days = 1825; 
      let yearsFromDays = daysToYears(days);
      console.log(`${days} days in to year ${yearsFromDays} years.`);

Q.13 Convert temperature Fahrenheit to Celsius? (Conditional logic Question)
Ans:  

      let fahrenheit = prompt("Enter temperature in Fahrenheit: ");
      let celsius = (fahrenheit - 32) * 5/9;
      console. log(`The temperature in Celsius is ${celsius.toFixed(2)}`)
      
Q.14 Write a JavaScript exercise to get the extension of a filename.?
Ans :
      Visual Presentation:
      

Q.15 What is the result of the expression (5 > 3 && 2 < 4) ?
Ans : 
      true
      
Q.16 What is the result of the expression (true && 1 && "hello")?
Ans:
      The result is "hello", because all the operands are truthy, and the "&&" operator returns the last truthy operand.

Q.17 What is the result of the expression true && false || false && true?   
Ans:  false && true === false
      true && false === false

 Q.18 What is a Loop and Switch Case in JavaScript define that ?
 Ans: 
      Loop :
    for (let i = 0; i < 5; i++) {
    console.log(i);
}
      // Output: 0 1 2 3 4

    
      Switch :
      let fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log('Banana is selected');
        break;
    case 'apple':
        console.log('Apple is selected');
        break;
    case 'orange':
        console.log('Orange is selected');
        break;
    default:
        console.log('No match found');
}
      // Output: Apple
      
Q.19 What is the use of is Nan function?
Ans: 
      NaN is short for "Not-a-Number"
      The isNaN() method returns true if a value is NaN.


Q.20 What is the difference between && and || in JavaScript?
Ans: 
     => && is used to perform and operation means if anyone of the expression/condition evaluates to false whole thing is false.
     => || is used to perform or operation if anyone of the expression/condition evaluates to true whole thing becomes true.
      
Q.21 What is the use of Void (0)?
Ans: 
      The void operator evaluates an expression and returns undefined. By running void(0) in the URL JavaScript code, nothing is evaluated or returned.
     
Q.22 Check Number Is Positive or Negative in JavaScript?
      Ans: 
    
const number = parseInt(prompt("Enter a number: "));
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is zero");
}
else {
     console.log("The number is negative");
}

Q.23 Find the Character Is Vowel or Not ?
Ans:
      function checkChar(char) {
        ch = char.toLowerCase();
        if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u")
          return console.log("Given character is a Vowel");
        return console.log("Given character is a Consonent");
      }

      checkChar("G");
      checkChar("A");

 Q.24 Write to check whether a number is negative, positive or zero?
 Ans: 
      The condition number > 0 checks if the number is positive.
      The condition number == 0 checks if the number is zero.
      The condition number < 0 checks if the number is negative.
 
Q.25 Write to find number is even or odd using ternary operator in JS?

 Ans:
       function checkOddOrEven(n) {
    if (n & 1 == 1) {
        return "Number is odd";
    }
    return "Number is even";
}

      console.log(checkOddOrEven(12));
      console.log(checkOddOrEven(121));

      Output: first number is even
      secound number is odd    
      
Q.26 Write find maximum number among 3 numbers using ternary operator in JS?

Ans: 

       let a = 10;
      let b = 20;
      let c = 30;

      let max = a > b ? (a > c ? a : c) : b > c ? b : c;

      console.log("The maximum number is " + max);

      output : max numner is 30

Q.27 Write to find minimum number among 3 numbers using ternary operator in JS?

Ans:

let a = 10;
let b = 20;
let c = 30;

let min = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);

console.log("The minimum number is " + min);
    
    
Q.28 Write to find the largest of three numbers in JS?
Ans:  

 function findLargestNumber(num1, num2, num3) {
        return Math.max(num1, num2, num3);
      }

      const a = 10;
      const b = 20;
      const c = 15;

      console.log("The largest number is " + findLargestNumber(a, b, c));

Q.29 Write to show

i. Monday to Sunday using switch case in JS?
 
Ans: function getDayOfWeek(dayNumber) {
  let day;
  switch (dayNumber) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      day = "Invalid day number. Please enter a number between 1 and 7.";
  }
  return day;
}

// Example usage:
for (let i = 0; i <= 8; i++) {
  console.log(i + ": " + getDayOfWeek(i));
}

ii. Vowel or Consonant using switch case in JS?
Ans: 

        function checkVowelOrConsonant(char) {
        // Convert the character to lowercase to handle case insensitivity
        char = char.toLowerCase();

        switch (char) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
            return "Vowel";
          default:
            // Check if the character is an alphabet letter
            if (char >= "a" && char <= "z") {
              return "Consonant";
            }
        }
      }

 Q.30 What are the looping structures in JavaScript? Any one Example?
 
ANS:

      const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// apple
// banana
// cherry
// date
// elderberry

Q.31 Write a print 972 to 897 using for loop in JS?

ANS: 

       for (let i = 972; i >= 897; i--) {
        console.log(i);
      }

 Q.32 Write to print factorial of given number?
 Ans:  
 
      let num = 5;
      let fec = 1;
      for (i = 1; i <= num; i++) {
        fec = fec * i;
      }
      document.write(fec);

      output: 120

Q.33 Write to print Fibonacci series up to given numbers?

Ans: 
      let n1 = 0;
      let n2 = 1;
      for (i = 0; i <= 7; i++) {
        let next = n1 + n2;
        document.writeln(next);
        n1 = n2;
        n2 = next;
      }

Q.34 Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?      

Ans:  

      let num1 = 64728;
      let result = num1.toString().split("").reverse().join("");
      console.log(result);

Q.35 Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS?

 Ans:
      function sum_Of_Digits(n) {
        if (n < 0) n = -n;

        let result = 0;
        while (n > 0) {
          result += n % 10;
          n = Math.floor(n / 10);
        }
        return result;
      }

      console.log(sum_Of_Digits(6098));
      
      Output: 23

Q.36 Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -5) in JS?  

Ans:   function sumFirstAndLastDigit(number) {
        const numberStr = number.toString();
        const firstDigitStr = numberStr.charAt(0);
        const lastDigitStr = numberStr.charAt(numberStr.length - 1);
        const firstDigit = parseInt(firstDigitStr, 10);
        const lastDigit = parseInt(lastDigitStr, 10);
        const sum = firstDigit + lastDigit;

        return sum;
      }

      // Example usage:
      const exampleNumber = 1234;
      const result = sumFirstAndLastDigit(exampleNumber);
      console.log(
        `The summation of the first and last digit of ${exampleNumber} is: ${result}`
      );

    Q.37 Use console.log() and escape characters to print the following pattern in JS?
      1 1 1 1 1
      2 1 2 4 8
      3 1 3 9 27
      4 1 4 16 64
      5 1 5 25 125


    Ans:
    console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
    
Q.38 Use pattern in console.log in JS?
1).
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1 
Ans:  console.log("1\n1 0\n1 0 1\n1 0 1 0\n1 0 1 0 1");


2)
A
B C
D E F
G H I J
K L M N O 
 Ans:  console.log("A\nB C\nD E F\nG H I J\nK L M N O");

3)
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
Ans: console.log("1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15");
     
4)
*
* *
* * *
* * * *
* * * * * 
Ans: console.log("*\n* *\n* * *\n* * * *\n* * * * *");
     
Q.39 Accept 3 numbers from user using while loop and check each numbers palindrome?
(Array and object Question)

Ans:   function palindromeCheck(number) {
        let numStr = number.toString();
        return isPalindrome(numStr, 0, numStr.length - 1);
      }

      function isPalindrome(str, start, end) {
        if (start >= end) return true;
        if (str[start] !== str[end]) return false;
        return isPalindrome(str, start + 1, end - 1);
      }

      // Checking the given number is palindrome or not
      console.log(palindromeCheck(121)); // true
      console.log(palindromeCheck(12321)); // true
      console.log(palindromeCheck(12345)); // false
     
Q.40 Write a JavaScript Program to display the current day and time in the following format.
Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?      

Ans: 

 function getCurrentDayAndTime() {
        const daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const currentDate = new Date();

        const dayName = daysOfWeek[currentDate.getDay()];

        let hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        const milliseconds = currentDate.getMilliseconds();
        const period = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // Convert to 12-hour format and handle the case where hour is 0

        const paddedMinutes = String(minutes).padStart(2, "0");
        const paddedSeconds = String(seconds).padStart(2, "0");
        const paddedMilliseconds = String(milliseconds).padStart(3, "0");

        const currentTime = `${hours} ${period}: ${paddedMinutes} : ${paddedSeconds} ${paddedMilliseconds}`;

        return `Today is ${dayName}. Current Time is ${currentTime}`;
      }

      console.log(getCurrentDayAndTime());

 Q.41 Write a JavaScript program to get the current date?
 
 Ans:
 
       function getCurrentDate() {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // getMonth() returns a zero-based index
        const day = currentDate.getDate();

        // Optional: You can format the month and day to always be two digits
        const formattedMonth = String(month).padStart(2, "0");
        const formattedDay = String(day).padStart(2, "0");

        return `${formattedMonth}/${formattedDay}/${year}`;
      }

      console.log("Today's date is:", getCurrentDate());
 
Q.42 Write a JavaScript program to compare two objects?

Ans:

      function isEqual(obj1, obj2) {
    // Check if both arguments are objects
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }

    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // If the number of keys is different, the objects are not equal
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if values of all properties are equal
    for (const key of keys1) {
        if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

// Example objects
const objA = {
    name: "Alice",
    age: 25,
    details: {
        hobbies: ["reading", "gaming"],
        location: "Wonderland"
    }
};

const objB = {
    name: "Alice",
    age: 25,
    details: {
        hobbies: ["reading", "gaming"],
        location: "Wonderland"
    }
};

const objC = {
    name: "Bob",
    age: 30,
    details: {
        hobbies: ["reading", "gaming"],
        location: "Wonderland"
    }
};

// Compare objects
console.log(isEqual(objA, objB)); // true
console.log(isEqual(objA, objC)); // false

Q.43 Write a JavaScript program to convert an array of objects into CSV string?

Ans: 

     function arrayToCSV(data) {
    if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== 'object') {
        return '';
    }

    const headers = Object.keys(data[0]);

    const rows = data.map(obj => {
        return headers.map(header => {
            let value = obj[header] === null || obj[header] === undefined ? '' : obj[header].toString();
            if (value.includes('"') || value.includes(',') || value.includes('\n')) {
                value = `"${value.replace(/"/g, '""')}"`;
            }
            return value;
        }).join(',');
    });

    return [headers.join(','), ...rows].join('\n');
}

// Example usage:
const data = [
    { name: "John Doe", age: 29, city: "New York" },
    { name: "Jane Smith", age: 34, city: "Los Angeles" },
    { name: "Sam Johnson", age: 41, city: "Chicago" }
];

      console.log(arrayToCSV(data));
      
Q.44 Write a JavaScript program to capitalize first letter of a string?      

Ans:

      capitalize = function (str1) {
      return str1.charAt(0).toUpperCase() + str1.slice(1);
      };
      console.log(capitalize("js string exercises"));

Q. 45 Write a JavaScript program to determine if a variable is array?      

Ans: 

  function isArray(variable) {
        return Array.isArray(variable);
      }

      // Example usage:
      const example1 = [1, 2, 3];
      const example2 = "Hello, World!";

      console.log(isArray(example1)); // true
      console.log(isArray(example2)); // false

Q.46 Write a JavaScript program to clone an array?

Ans:

function cloneArray(arr) {
    return arr.slice();
}

// Example usage:
const originalArray = [1, 2, 3, 4];
const clonedArray = cloneArray(originalArray);

console.log(clonedArray); // [1, 2, 3, 4]
console.log(clonedArray === originalArray); 


Q.47 What is the drawback of declaring methods directly in JavaScript objects?

Ans:

In second method, calling a function is slightly longer (eg : my.foo()) and if we have bunch of extra nested functions, it would be more longer

Q.48 Print the length of the string on the browser console using console.log()?

Ans:

  const myString = "Hello, World!";
      const stringLength = myString.length;
      console.log("The length of the string is:", stringLength);

Q.49 Change all the string characters to capital letters using toUpperCase() method?

Ans: 

  function func() {
        var str = "Sad";
        var string = str.toUpperCase();
        console.log(string);
      }
      func();

Q.50 What is the drawback of declaring methods directly in JavaScript objects?

Ans:

      In second method, calling a function is slightly longer (eg : my.foo()) and if we have bunch of extra nested functions, it would be more longer

      Second method requires some extra processing by JS engine but this will not affect the speed much as it would be like optimizing our code execution time ~0.1ms , not an achievement).

Q.51 Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,

Ans:

        let today = new Date();
      console.log(today);

      let dd = today.getDate();
      let mm = today.getMonth() + 1;

      let yyyy = today.getFullYear();

      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      today = dd + "/" + mm + "/" + yyyy;

      console.log(today);

Q.52 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript?    

Ans:

let string = "30 Days Of JavaScript";
let position = string.indexOf('a');
console.log(position); // Output: 3

Q,53 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of
JavaScript?   

Ans:

      let string = "30 Days Of JavaScript";
      let position = string.lastIndexOf("a");
      console.log(position); // Output: 17

Q.54 Form Validtion in JS?

Ans:

<!DOCTYPE html>
<html>
  <head>
    <title>Form Validation Example</title>
    <script>
      // Function to validate the form
      function validateForm() {
        // Get form elements
        var name = document.forms["myForm"]["name"].value;
        var email = document.forms["myForm"]["email"].value;
        var age = document.forms["myForm"]["age"].value;
        var password = document.forms["myForm"]["password"].value;
        var confirmPassword = document.forms["myForm"]["confirmPassword"].value;

        // Regular expression for email validation
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // Name validation
        if (name == "") {
          alert("Name must be filled out");
          return false;
        }

        // Email validation
        if (email == "") {
          alert("Email must be filled out");
          return false;
        } else if (!emailPattern.test(email)) {
          alert("Please enter a valid email address");
          return false;
        }

        // Age validation
        if (age == "") {
          alert("Age must be filled out");
          return false;
        } else if (isNaN(age) || age < 18 || age > 100) {
          alert("Please enter a valid age between 18 and 100");
          return false;
        }

        // Password validation
        if (password == "") {
          alert("Password must be filled out");
          return false;
        } else if (password.length < 6) {
          alert("Password must be at least 6 characters long");
          return false;
        }

        // Confirm Password validation
        if (confirmPassword == "") {
          alert("Please confirm your password");
          return false;
        } else if (password !== confirmPassword) {
          alert("Passwords do not match");
          return false;
        }

        // If all validations pass
        alert("Form submitted successfully!");
        return true;
      }
    </script>
  </head>
  <body>
    <h2>Form Validation Example</h2>
    <form name="myForm" onsubmit="return validateForm()">
      Name: <input type="text" name="name" /><br /><br />
      Email: <input type="text" name="email" /><br /><br />
      Age: <input type="text" name="age" /><br /><br />
      Password: <input type="password" name="password" /><br /><br />
      Confirm Password:
      <input type="password" name="confirmPassword" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
      
Q.55 Form in Email, number, Password, Validation?

Ans:

  <!DOCTYPE html>
<html>
  <head>
    <title>Form Validation Example</title>
    <script>
      // Function to validate the form
      function validateForm() {
        // Get form elements
        var email = document.forms["myForm"]["email"].value;
        var phone = document.forms["myForm"]["phone"].value;
        var password = document.forms["myForm"]["password"].value;
        var confirmPassword = document.forms["myForm"]["confirmPassword"].value;

        // Regular expressions for validation
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var phonePattern = /^\d{10}$/; // Assuming a 10-digit phone number format

        // Email validation
        if (email == "") {
          alert("Email must be filled out");
          return false;
        } else if (!emailPattern.test(email)) {
          alert("Please enter a valid email address");
          return false;
        }

        // Phone number validation
        if (phone == "") {
          alert("Phone number must be filled out");
          return false;
        } else if (!phonePattern.test(phone)) {
          alert("Please enter a valid 10-digit phone number");
          return false;
        }

        // Password validation
        if (password == "") {
          alert("Password must be filled out");
          return false;
        } else if (password.length < 6) {
          alert("Password must be at least 6 characters long");
          return false;
        }

        // Confirm Password validation
        if (confirmPassword == "") {
          alert("Please confirm your password");
          return false;
        } else if (password !== confirmPassword) {
          alert("Passwords do not match");
          return false;
        }

        // If all validations pass
        alert("Form submitted successfully!");
        return true;
      }
    </script>
  </head>
  <body>
    <h2>Form Validation Example</h2>
    <form name="myForm" onsubmit="return validateForm()">
      Email: <input type="text" name="email" /><br /><br />
      Phone Number: <input type="text" name="phone" /><br /><br />
      Password: <input type="password" name="password" /><br /><br />
      Confirm Password:
      <input type="password" name="confirmPassword" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </body>
      </html>
      
Q.56 Dynamic Form Validation in JS?

 Ans:
 
      <!DOCTYPE html>
<html>
  <head>
    <title>Dynamic Form Validation Example</title>
    <style>
      .error {
        color: red;
      }
      .valid {
        color: green;
      }
    </style>
    <script>
      // Function to validate email
      function validateEmail() {
        var email = document.getElementById("email").value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var emailError = document.getElementById("emailError");

        if (email === "") {
          emailError.textContent = "Email must be filled out";
          emailError.className = "error";
          return false;
        } else if (!emailPattern.test(email)) {
          emailError.textContent = "Please enter a valid email address";
          emailError.className = "error";
          return false;
        } else {
          emailError.textContent = "Valid email";
          emailError.className = "valid";
          return true;
        }
      }

      // Function to validate phone number
      function validatePhone() {
        var phone = document.getElementById("phone").value;
        var phonePattern = /^\d{10}$/; // Assuming a 10-digit phone number format
        var phoneError = document.getElementById("phoneError");

        if (phone === "") {
          phoneError.textContent = "Phone number must be filled out";
          phoneError.className = "error";
          return false;
        } else if (!phonePattern.test(phone)) {
          phoneError.textContent = "Please enter a valid 10-digit phone number";
          phoneError.className = "error";
          return false;
        } else {
          phoneError.textContent = "Valid phone number";
          phoneError.className = "valid";
          return true;
        }
      }

      // Function to validate password
      function validatePassword() {
        var password = document.getElementById("password").value;
        var passwordError = document.getElementById("passwordError");

        if (password === "") {
          passwordError.textContent = "Password must be filled out";
          passwordError.className = "error";
          return false;
        } else if (password.length < 6) {
          passwordError.textContent =
            "Password must be at least 6 characters long";
          passwordError.className = "error";
          return false;
        } else {
          passwordError.textContent = "Valid password";
          passwordError.className = "valid";
          return true;
        }
      }

      // Function to validate confirm password
      function validateConfirmPassword() {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        var confirmPasswordError = document.getElementById(
          "confirmPasswordError"
        );

        if (confirmPassword === "") {
          confirmPasswordError.textContent = "Please confirm your password";
          confirmPasswordError.className = "error";
          return false;
        } else if (password !== confirmPassword) {
          confirmPasswordError.textContent = "Passwords do not match";
          confirmPasswordError.className = "error";
          return false;
        } else {
          confirmPasswordError.textContent = "Passwords match";
          confirmPasswordError.className = "valid";
          return true;
        }
      }

      // Function to validate the entire form
      function validateForm() {
        var isEmailValid = validateEmail();
        var isPhoneValid = validatePhone();
        var isPasswordValid = validatePassword();
        var isConfirmPasswordValid = validateConfirmPassword();

        return (
          isEmailValid &&
          isPhoneValid &&
          isPasswordValid &&
          isConfirmPasswordValid
        );
      }

      // Add event listeners for real-time validation
      document.addEventListener("DOMContentLoaded", function () {
        document
          .getElementById("email")
          .addEventListener("input", validateEmail);
        document
          .getElementById("phone")
          .addEventListener("input", validatePhone);
        document
          .getElementById("password")
          .addEventListener("input", validatePassword);
        document
          .getElementById("confirmPassword")
          .addEventListener("input", validateConfirmPassword);
      });
    </script>
  </head>
  <body>
    <h2>Dynamic Form Validation Example</h2>
    <form name="myForm" onsubmit="return validateForm()">
      Email: <input type="text" id="email" name="email" /><br />
      <span id="emailError" class="error"></span><br />

      Phone Number: <input type="text" id="phone" name="phone" /><br />
      <span id="phoneError" class="error"></span><br />

      Password: <input type="password" id="password" name="password" /><br />
      <span id="passwordError" class="error"></span><br />

      Confirm Password:
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
      /><br />
      <span id="confirmPasswordError" class="error"></span><br />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>

Q.57 how many type of JS Event? How to use it ?

Ans:

Event     	Description
onchange	  An HTML element has been changed
onclick	    The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown  	The user pushes a keyboard key
onload    	The browser has finished loading the page

Q.59 What is Bom vs Dom in JS?

Ans:

      DOM: Objects that have to do with the currently loaded page (the page is also called the document)
      
      BOM: Objects that deal with everything outside the page (the browser window and the desktop screen)
      
Q.60 Array vs object defences in JS?

Ans:

      Arrays are used when we need to collection a list of elements of the same data type or structure. On the other hand, objects are used when grouping multiple sets of data that belong together using labels, where each property or key has its own value of any type.

Q.61 Split the string into an array using split() Method?      

Ans:

       const str = "The quick brown fox jumps over the lazy dog.";

      const words = str.split(" ");
      console.log(words[5]);
   
Q.62 Check if the string contains a word Script using includes() method?

Ans:

        const sentence = "The quick brown fox jumps over the lazy dog.";

      const word = "fox";
      console.log(
        `The word "${word}" ${
          sentence.includes(word) ? "is" : "is not"
        } in the sentence`
      );

Q.63 Change all the string characters to lowercase letters using toLowerCase() Method.

Ans:

      let myGreeting = "Hey there!";
      console.log(myGreeting.toLowerCase());
    
Q.64 What is Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method.

Ans: 

     const sentence = "The quick brown fox jumps over the lazy dog.";
      const index = 4;
      console.log(
        `The character at index ${index} is ${sentence.charAt(index)}`
      );

Q.65 copy to one string to another string in JS?

Ans: 

        // Original string
      let originalString = "Hello, World!";

      // Copying the original string to another string
      let copiedString = originalString;

      // Outputting both strings
      console.log("Original String: " + originalString);
      console.log("Copied String: " + copiedString);

Q.66 Find the length of a string without using libraryFunction?

Ans:

       // Original string
      let str = "Hello, World!";

      // Function to find the length of the string
      function getStringLength(s) {
        let length = 0;
        while (s[length] !== undefined) {
          length++;
        }
        return length;
      }

      // Using the function
      let lengthOfString = getStringLength(str);

      // Output the length of the string
      console.log("Length of the string: " + lengthOfString);
      
  
 [1]. What is JavaScript?
 Ans:
 
JavaScript is the Programming Language for the Web.

JavaScript can update and change both HTML and CSS.

JavaScript can calculate, manipulate and validate data

[2]. What is the use of isNaN function?
Ans:

      You can use the isNaN() function in JavaScript to check whether a value is NaN, and then convert it to a number if necessary.

[3]. What is negative Infinity?  
Ans: 

      NEGATIVE_INFINITY is a special numeric value that is returned when an arithmetic operation or mathematical function generates a negative value greater than the largest representable number in JavaScript 

[4]. Which company developed JavaScript?
Ans: 

      JavaScript was created at Netscape Communications
      by Brendan Eich in 1995.
    
 [5]. What are undeclared and undefined variables?
 Ans:
 
      Undeclared variables are those that have not been declared or defined in the current scope,
      while undefined variables are those that have been declared but not given a value.

      const newDiv = document.createElement("div");

[6].  Write the code for adding new elements dynamically?      
Ans: 

       <script>
      // Function to add a new element
      function addElement() {
        // Create a new div element
        let newDiv = document.createElement("div");

        // Add some content to the new div
        let newContent = document.createTextNode("Hello, I am a new element!");
        newDiv.appendChild(newContent);

        // Add the new div to the body
        document.body.appendChild(newDiv); n
      }

      // Add event listener to the button to call addElement function when clicked
      document
        .getElementById("addButton")
        .addEventListener("click", addElement);
      </script>
      
 [7]. What is the difference between ViewState and SessionState?
 Ans:
 
      The Viewstate is stored within the page itself
      Sessionstate is stored in the server.
  
[8]. What is === operator?
Ans:
       a comparison operator that checks the equality of two values without performing any type conversion.

[9].How can the style/class of an element be changed?       
Ans:
      the “className” attribute
     
[10]. How to read and write a file using JavaScript?
Ans:  

      readFile() and rs. writeFile() methods are used to read and write of a file using javascript. 
    
[11]. What are all the looping structures in JavaScript?
Ans:

      [1]for loop
      for (let i = 0; i < 5; i++) {
    console.log(i);  // Outputs 0, 1, 2, 3, 4
}
      
      [2]while loop
      let i = 0;
      while (i < 5) {
      console.log(i);  // Outputs 0, 1, 2, 3, 4
      i++;
}
      [3]do...while loop
      let i = 0;
      do {
      console.log(i);  // Outputs 0, 1, 2, 3, 4
     m   i++;
    } while (i < 5);
      [4]for...in loop
      const obj = {a: 1, b: 2, c: 3};
      for (let key in obj) {
    console.log(key + ": " + obj[key]);  // Outputs "a: 1", "b: 2", "c: 3"
}
      for...of loop
      const array = [1, 2, 3, 4, 5];
     for (let value of array) {
    console.log(value);  // Outputs 1, 2, 3, 4, 5
}
      
[12].  How can you convert the string of any base to an integer in JavaScript?

Ans:
      Approach 1: Convert String to an Integer using parseInt() Method.
      Approach 2: Convert String to an Integer using Number() Method.
      Approach 3: Convert String to an Integer using Unary Operator.
      Approach 4: Convert String to an Integer using Math.floor() Method.      
      
[13]. What is the function of the delete operator?
Ans: 

      The purpose of the delete operator is to completely remove a property from an object,
     
[14].  What are all the types of Pop up boxes available in JavaScript?
Ans: 

      JavaScript has three kind of popup boxes:
      Alert box,
      Confirm box,
      Prompt box.

[15]. What is the use of Void (0)?
Ans;

      “JavaScript:void(0)” while going through HTML documents. It is used to prevent any side effects caused while inserting an expression in a web page

[16]. How can a page be forced to load another page in JavaScript?
Ans: 

      In JavaScript, we can use window. location object to force a page to load another page. We can use the location object to set the URL of a new page
      
[17]. what are the disadvantages of using innerHTML in JavaScript?     
Ans:

      It is very slow because as inner HTML already parses the content even we have to parse the content again so that's why it takes time.

[18]. Create password field with show hide functionalities
Ans: 

      Password: <input type="password" value="FakePSW" id="myInput"><br><br>
<input type="checkbox" onclick="myFunction()">Show Password

<script>
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
</script>
      
    
    