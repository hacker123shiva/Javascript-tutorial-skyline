/*// function 
// block code 
//call -> function can call

// addition of two numbers 
let a =5;
let b=6;
console.log(a+b);

// addition of two numbers
let a1 =5;
let b1=7;
console.log(a1+b1); 
addTwoNumber(50,6); //function call
// addition of two numbers 
function addTwoNumber(a,b){ //function declaration
    console.log(a+b); //function body 
}
//function keyword --- to declare a function
//addTwoNumber --- function name
//(a,b) --- parameters
//{console.log(a+b);} --- function body
//function call --- addTwoNumber(5,6);

addTwoNumber(5,6); //function call
addTwoNumber(5,7);
addTwoNumber(5,8);

function sayHello(){
    console.log("hello");
}

sayHello();


//create a function to multiply two numbers
//create a function to divide two numbers 
//create a function to subtract two numbers

// A JavaScript function expression is a way of defining a function. Even function expression can be stored in a variable. It can be to be stored in a variable and can be accessed using variableName.
// functional expression  is a function without a name and it is stored in a variable 
let a2=4;
addTwoNumber1(5,6); 
let addTwoNumber1=function(a,b){
    console.log(a+b);
}

//1.functional expression has not function name
//2.functional expression is stored in a variable
//3.functional expression is accessed using variableName

addTwoNumber1(5,6);
addTwoNumber1(5,7);

//differnce between function declaration and function expression
//1.function declaration has function name and function expression has not function name
//2.function declaration can be called before it is defined and function expression can not be called before it is defined
//declaraed function canbe hoisted 
//function expression can not be hoisted
//what is hoisting 
//hoisting is a javascript mechanism where variables and function declarations are moved to the top of their scope before code execution.

var a3=5; //can be hoisted
let a4=5; //can not be hoisted

let kindOfPerson=function(){
    console.log("i am a javascript trainer");
}
kindOfPerson();

//arrow function 
//arrow function is a function expression which is a short hand way of writing a function expression

let multiplyTwoNumber=function(a,b){
    console.log(a*b);
}
multiplyTwoNumber(5,6);

let multiplyTwoNumber1=(a,b)=>{ //arrow function
    console.log(a*b);
}

multiplyTwoNumber1(5,6);

let sayHello2=()=>console.log('say hello'); //arrow function
sayHello2();
*/


// Arrays

let name1="john";
let name2="Sohan";
let name3="Raj";
let name4="Rohan";

let names=["john","Sohan","Raj","Rohan"];
console.log(names);
//create an array using array literal
let arr=[2,'shiva',4.5];
let arr1=[];
console.log(arr);
console.log(arr1);

//create an array using new keyword
let arr2=new Array(2,'shiva',4.5);
console.log(arr2);

//empty array using new 
let arr3=new Array();
console.log(arr3);

//access the elemenent of an array
// using index we can access the element of and array -- 0 , length-1


//[ 'john', 'Sohan', 'Raj', 'Rohan' ]
//    0        1       2       3
console.log(names[0]); 
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

console.log(names[4]); //undefined
console.log(names.length);

//changing array elements using indexing method
names[0]="shiva";
names[3]="muskan";
console.log(names);

names[100]="sohan";
console.log(names);
console.log(names.length);
console.log(names[50]);

 

/*
//  rest operator 
//what is rest operator
//rest operator is used to collect the remaining arguments into an array 

//different examples of rest operator
function print(...args){
    console.log(args);
}
print(1,2,3,4,5,6,7,8,9,10);

let [a,b,...rest]=[1,2,3,4,5,6,7,8,9,10];
console.log(a);
console.log(b);
console.log(rest);


//  rest operator give us the remaining arguments into an array 

function add(...args){
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum=sum+args[i];
    }
    console.log(sum);
}

add(1,2,3,4,5,6,7,8,9,10);


// what is spread operator 
// spread operator is used to split the array elements into single elements
*/

/*
// differnt example of spread operator

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr)
console.log(...arr);

let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[11,12,13,14,15,16,17,18,19,20];
let arr3=[...arr1,...arr2];
console.log(arr3);

function add(a,b,c){
    console.log(a+b+c);
}

let arr4=[1,2,3];
add(...arr4);

//decomposition of arrray using rest operator
let [a,b,...rest]=[1,2,3,4,5,6,7,8,9,10];

function add1(firstName,lastname,age,...rest)
{
    let sum=0;
    for(let i=0;i<rest.length;i++){
        sum=sum+rest[i];
    }
    console.log(`My name is ${firstName} ${lastname} and my age is ${age} and my sum is ${sum}`);

}
arr=["shiva","srivastava",21,1,2,3,4,5,6,7,8,9,10]
add1(...arr);
*/





