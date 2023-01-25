"use strict"
/*
The main difference is that document.write () inserts text into the document (the webpage in the browser window); console.log () does not. The user cannot see what is logging to the console as that is another interface, separate from the HTML/CSS environment.
*/
/*// lect-1
//  console.log("i am a javascript trainer");
//  console.log("i am a javascript trainer");

//lect-2
// let x is a varible declaration
//  x=5 is a variable initialization
//  let x=5 is a variable declaration and initialization
let x=5;
let y=5.6;
let age=22;
let name="sachin";
let isMarried=true;

//let --- keyword to declare a variable
//x,y,age,name,isMarried --- variable name
//5,5.6,22,"sachin",true --- value

console.log(x);
console.log(y);
console.log(age);
console.log(name);
console.log(isMarried);

console.log(5);
console.log(5.6);
console.log(22);
console.log("sachin");
console.log(true);

 /*

 /*
  'use strict';
 console.log(a);
    var a = 1;
    var a=4;
    console.log(a);
    
    // console.log(b); //ReferenceError:
    let b=2;
    //  let b=5; //error
    //using var keyword we can redeclare the variable
    //using let keyword we can not redeclare the variable

    // var can be hoisted and let can not be hoisted  

    //hoisting is a javascript mechanism where variables and function declarations are moved to the top of their scope before code execution.
    //using var you can use the variable before it is declared 
    //but using let you can not use the variable before it is declared

const c=7;
//what is property of const?
//const c=7; //redeclaration is not possible
//1.const can not be redeclared
// c=8; //reassignment is not possible
//2.const can not be reassigned
// console.log(d);
//const d=9; //error //hoisting is not possible
//3.const can be hoisted


console.log(typeof add1);
console.log(typeof function(){})

console.log(typeof arr)

const obj=null;
console.log(typeof obj);  

var geeks = new Date(4500); 
console.log(geeks);
console.log(typeof geeks);

//String datatype definition
//String is a sequence of characters enclosed in single or double quotes or backticks.
// examples
// let str="hello world";
// let str1='hello world';
// let str2=`hello world`;

//Number datatype definition
//Number is a numeric datatype in javascript. It can be integer, float, double, long, short, etc.
// examples
// let num=5;
// let num1=5.5;
// let num2=5.5e5;
// change into simple integer num2=5.5e5;
// meaning of num3=5.5e-5;
// 5.5*10^-5=0.000055
// 5.5*10^5=550000

// Javascript are always one type for number is


 
// let num3=5.5e-5;

//BigInt datatype definition
//BigInt is a numeric datatype in javascript. It can be integer, float, double, long, short, etc. It can be used to represent any integer value. 
//why we use bigint if we have number datatype
//number datatype can represent only upto 2^53-1 value and after that it will give us wrong output
// example that after 2^53-1 value it will give us wrong output
let num=123456789012345678901234567890;
console.log(num);
console.log(typeof num);
//without using bigint datatype it will give same output as bigint datatype why?

let num1=BigInt(123456789012345678901234567890);
console.log(num1);
console.log(typeof num1);

// 1.2345678901234568e+29
// number
// 123456789012345677877719597056n
// bigint
//if you are using number datatype it losses his presision and accuracy
//if you are using bigint datatype it will not lose his presision and accuracy

console.log("Some text" / 2);       // Output: NaN
console.log("Some text" / 2 + 10);  // Output: NaN
console.log(Math.sqrt(-1));  

//Boolean datatype definition
// Boolean is a datatype in javascript. It can be true or false.
// examples
// let bool=true;
// let bool1=false;

//Undefined datatype definition
// Undefined is a datatype in javascript. It can be undefined. It is used to represent the absence of value.
// examples
let undef=undefined;
let firstName;
let x;
console.log(firstName);
console.log(x);

//Null datatype definition
// Null is a datatype in javascript. It can be null. It is used to represent the absence of value. It is used to represent the absence of value. It is used to represent the absence of value.
// examples
let null1=null;
console.log(typeof null1);

//Symbol datatype definition
// Symbol is a datatype in javascript. It can be symbol. It is used to represent the unique value. It is used to represent the unique value. It is used to represent the unique value.
// examples
let sym=Symbol('shiva');
let sym2=Symbol('shiva');
console.log(sym===sym2);
console.log(sym);
console.log(typeof sym);

console.log(null===null);
console.log(undefined===undefined);
console.log(true===true);
console.log(false===false);
console.log(5===5);
console.log(5.5===5.5);
console.log(5.5e5===5.5e5);

*/

// let ,var, cont --- keywords to declare a variable
// let --- block scope
//data type --- number,string,boolean,undefined,null
//non-primitive data type --- object,array,function



/*
 //scope of a variable
 //global scope --- variable declared outside a function
let x='shiva'; //global scope variable
console.log(x);
function sayHello(){
    console.log(x);
}
sayHello();

 //local scope --- variable declared inside a function
function sayHello1(){
    let x='shiva'; //local scope variable
    let y='sachin';
    console.log(x);
    console.log(y);
}
sayHello1();
// console.log(y); //ReferenceError: y is not defined

//block scope --- variable declared inside a block {}
//block --- if,for,while,switch,try,catch etc
if(true){
    let x1='shiva'; //block scope variable
    console.log(x1);
}
// console.log(x1); //ReferenceError: x1 is not defined

{
    let c=5;
}

// console.log(c); //ReferenceError: c is not defined
*/





/*
//statement vs expression
//statement --- a complete line of code that performs a specific task 
//expression --- a line of code that produces a value  (5+6) is an expression 
//expression is a combination of variables,operators and values that computes to a value 
//strict mode is a expression 
//why strict mode is a expression
//because it produces a value 
//strict mode is a string expression  "use strict"

// let public=5;
// console.log(public);

 
// Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

// These are:

// implements
// interface
// let
// package
// private
// protected
// public
// static
// yield


 
// let const var 

// x=5;
// console.log(x);

let numbersofstudnet=6;
// numberofstudent=7;
console.log(numbersofstudnet);

// x=5;
// console.log(x);

let public =5;
console.log(public); 
*/

/*
//javascriipt conditional statements
//if,if-else,if-else-if,switch case 

// Conditional statements are used to perform different actions based on different conditions.
//javascript if, else and else if
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false

//if statement
if (condition) {
    //  block of code to be executed if the condition is true
  }

  //example of if statement
let hour=20;
if(hour<18){
    console.log("Good day");
}

//else statement
if (condition) {
    //  block of code to be executed if the condition is true
  }
    else{
        //  block of code to be executed if the condition is false
    }

//example of else statement
let hour1=20;
if(hour1<18){
    console.log("Good day");
}
else{
    console.log("Good evening");
}

//else if statement
if (condition) {
    //  block of code to be executed if the condition is true
  }
    else if(condition2){
        //  block of code to be executed if the condition is false
    }
    else{
        //  block of code to be executed if the condition is false
    }

//example of else if statement
let hour2=20;
if(hour2<18){
    console.log("Good day");
}
else if(hour2<20){
    console.log("Good evening");
}
else{
    console.log("Good night");
}
*/

//JavaScript Switch Statement
//The switch statement is used to perform different actions based on different conditions.

//component of switch statement
//switch expression
//case
//break
//default

/*
//case1:
// The switch statement is used to perform different actions based on different conditions.
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }

//   This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.


//example of switch statement
let day=2;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
}

//in javascript we can use any data type in switch case
let day1="monday";
switch(day1){
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "wednesday":
        console.log("wednesday");
        break;
    case "thursday":
        console.log("thursday");
        break;
    case "friday":
        console.log("friday");
        break;
    case "saturday":
        console.log("saturday");
        break;
    case "sunday":
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
}

//swithc case without break
let day2="monday";
switch(day2){
    case "monday":
        console.log("monday");
    case "tuesday":
        console.log("tuesday");
    case "wednesday":
        console.log("wednesday");
    case "thursday":
        console.log("thursday");
    case "friday":
        console.log("friday");
    case "saturday":
        console.log("saturday");
    case "sunday":
        console.log("sunday");
    default:
        console.log("invalid day");
}
//if you omit the break statement, the next case will be executed even if the evaluation does not match the case.

//switch case with multiple case
let day3="monday";
switch(day3){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("weekday");
        break;
    case "saturday":
    case "sunday":
        console.log("weekend");
        break;
    default:
        console.log("invalid day");
}

// can switch without default 
// let day4="mond";
switch(new Date().getDay()){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("weekday");
        break;
    case "saturday":
    case "sunday":
        console.log("weekend");
        break;
    // default:
    //     console.log("invalid day");
}

//The default Keyword
// The default keyword specifies the code to run if there is no case match:


//if default is not last case in the switch statement 
let x=100;
switch(x){
    default:
        console.log("default");
        break; //if you omit break then it will execute all the cases
    case 0:
        console.log("0");
        break;
    case 10:
        console.log("10");
        break;
}

// Switching Details
// If multiple cases matches a case value, the first case is selected.

// If no matching cases are found, the program continues to the default label.

// If no default label is found, the program continues to the statement(s) after the switch.
*/


//multiple cases matches a case value  then first case is selected
 //example
 

//can we use multiple default in switch case
//no we can't use multiple default in switch case

//can we use multiple break in switch case
//yes we can use multiple break in switch case but no use of it
let y=4;
switch(y){
    case 0:
        console.log("0");
        break;
        break; //it will not execute this break statement because it is after break statement and it will check next case and default case
    case 1:
        console.log("1");
        break;
    default:
        console.log("default");
        break; 


}

//use other statement after break statement
let x=1;
switch(x){
    case 0:
        console.log("0");
        break;
        console.log("0"); //it will not execute this line because it is after break statement and it will check next case and default case
    case 1:
        console.log("1");
        break;
    default:
        console.log("default");
        break;
}

 




 
 

