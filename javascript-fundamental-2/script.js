// function 
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









