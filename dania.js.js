# 1- Write a program to declare two numbers. If both numbers are greater than 10,
#print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".

let num1 = 15
let num2 = 7
if num1 && num2 > 10
  {  console.log("Both numbers are greater than 10");} 
else if 
   { console.log("At least one number is not greater than 10"); }

#2- Write a program to declare a username and a password.
#If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".

let correctUsername0 = "admin";
let correctPassword0 = "12345";
let enteredUsername0 = "admin";
let enteredPassword0 = "12345";
if (enteredUsername0 === correctUsername0 && enteredPassword0 === correctPassword0) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}


# 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
#Otherwise, print "The number is not between 10 and 20".
let num = 11
if (num1 && num2 >= 10 && num1 && num2 <= 20)
{ console.log("The number is between 10 and 20"); }
 
else { 
    console.log("The number is not between 10 and 20");
}
   
 #4- Write a program that to declare age and whether they have a driver's license (yes or no).
#If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".


let age = parseInt(prompt("Enter your age: "));
let hasLicense = prompt("Do you have a driver's license? (yes/no)").toLowerCase();


if (age >= 18 && hasLicense === "yes") {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

# 5- Write a program to declare a number.
#If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".


let num = parseInt(prompt("Enter a number: "));
if (num > 10 || num < 0) {
  console.log("Invalid number");
} else {
  console.log("Valid number");
}

# 6- Write a programto declare a number.
#If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid".
#Otherwise, print "The number is not valid".


let num = parseInt(prompt("Enter a number: "));
if ((num >= 5 && num <= 10) || (num >= 20 && num <= 25)) {
  console.log("The number is valid");
} else {
  console.log("The number is not valid");
}

#7- to declare a password. If the password is "secret" or "password", print "Access granted".
#Otherwise, print "Access denied".

let validPasswords = ["secret", "password"];
let enteredPassword = prompt("Enter the password: ");
if (validPasswords.includes(enteredPassword)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

#8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even,
#print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".


let num = parseInt(prompt("Enter a number: "));
if (num >= 0 && num <= 100 && num % 2 === 0) {
  console.log("The number is even and between 0 and 100");
} else {
  console.log("The number is not even and/or not between 0 and 100");
}

#9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative".
#Otherwise, print "Both numbers are positive".


let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));

if (num1 < 0 || num2 < 0) {
  console.log("At least one number is negative");
} else {
  console.log("Both numbers are positive");
}

#10- Write a program to declare age and whether they are a student (yes or no).
#If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".

let age = parseInt(prompt("Enter your age: "));
let isStudent = prompt("Are you a student? (yes/no)").toLowerCase();
if (age < 18 || isStudent === "yes") {
  console.log("You qualify for a discount");
} else {
  console.log("You do not qualify for a discount");
} 