// let x=4;
// if(x%2===0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// let n = 12;
// if(n/2 === 0){
//        console.log("even") 
// };
// console.log("odd") 
// console.log(4/3);

// //find quotient of 11 when divided by 2

// // floor function 
// console.log(Math.floor(11/2));

// // why use of semicolon is important in javascript ?
// // semicolon is used to separate the statements in javascript and avoid the errors in javascript that are not expected by the user 
// console.log(2!='2');
// console.log(2!=='2');

 
 
// //why i get unexpected token  error in javascript ?
// // unexpected token error is used to show the error in javascript that is not expected by the user 

// let num1 = 3;
// let num2 = 4;
// let result = num1 > num2;
// if(result);  // <= you are using semicolon after if condition it means you are not using the if condition therefore it cannot check the condition
//     console.log("Num 1 is greater");

//     console.log("Bye..");

// // function to check even or odd number
// function evenOdd(num){
// //remove unintentional case 
//     if(typeof num === "number"&&Number.isInteger(num))
//     {if(num%2===0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }}
//     else{
//         console.log("not a integer number");
//     }

// }

// //how to check number is integer of float in javascript ?
// // we can check number is integer or float by using the function Number.isInteger() in javascript


// let num = 3.5;
// if(Number.isInteger(num)){
//     console.log("integer");
// }
// else{
//     console.log("float");
// }

// evenOdd(-5);

// let num11=-5
// if (num11%2)
// console.log("Number is odd")
// else
// console.log("Number is even")


// let day1 = "monday"

// day5 = "fri"
// day6 = "sat"
// day7 = "sun"

// // const d = new Date(""); //what is use new Date() in javascript ?
// // new Date() is used to get the current date and time in javascript 

// const d= "tue || wed || the ";
// if (day1 == d ) {
// console.log("waikup at 7am")

// }
// if (day234 ==  d ) {
// console.log("waikup at 4am")
// } 
// else {


// console.log("waikup at 9am")
// }

 

// // when switch is use over if else in javascript ?
// // switch is used to check the multiple conditions in javascript  

 
// let a=5;
// let b=6;

// // can we use switch for two variable to check value ?

// let day="thrusday"
// if(day==="Monday"){
//     console.log("wake up its 7 am");
// }
// else if(day==="tuesday" || "thrusday") //first day==="tuesday" solve then either false or true  always give true because operated by or and string fgive true
// // else if(day==="tuesday" || day==="thrusday")  // <= this is correct statement for your code
// {
//     console.log("wake up its 4 am");
// }
// else if(day==="friday")
// {
//     console.log("wake up its 9am");
// }
// else
// {
//     console.log("wake up its 8 am")
// }

// if("shiva")//string always consider true
// console.log("shiva");


//  //types of operators in javascript
//     //1. Arithmetic operators
//     //2. Assignment operators
//     //3. Comparison operators
//     //4. Logical operators
//     //5. Bitwise operators
//     //6. String operators
//     //7. Conditional (ternary) operator
//     //8. Comma operator
//     //9. Unary operators
//     //10. Relational operators

// //1. Arithmetic operators
// // +, -, *, /, %, ++, --
// //Arithmetic operators perform arithmetic on numbers (literals or variables).
// /*
// Operator	Description
// +	        Addition
// -	        Subtraction
// *	        Multiplication
// **	        Exponentiation (ES2016)
// /	        Division
// %	        Modulus (Division Remainder)
// ++	        Increment
// --	        Decrement
// */

// // Operators and Operands
// // The numbers and variable (in an arithmetic operation) are called operands.

// // The operation (to be performed between the two operands) is defined by an operator.
// // For example, in the expression 5 + 2, the + operator is used to add two operands 5 and 2.

// //addition
// let a = 10;
// let b = 20;
// //here two operands are variables a and b
// //what is variable in javascript
// //A variable is a container for a value, which can be a number, string, Boolean, array, or object.
// let c = a + b;
// console.log(c);

// //here two operands are literals 10 and 20
// //what is literal in javascript
// //A literal is a data value that appears directly in a program.
// console.log(4+5);

// //subtraction
// let d = 10;
// let e = 20;
// let f = d - e;
// console.log(f);

// //multiplication
// let g = 10;
// let h = 20;
// let i = g * h;
// console.log(i);

// //division
// let j = 10;
// let k = 20;
// let l = j / k;
// console.log(l);

// //modulus
// let m = 10;
// let n = 20;
// let o = m % n; //give remainder
// console.log(o);

// //increment
// let p = 10;
// p++; 
// console.log(p);
// //pre and post increment
// let r = 10;
// console.log(++r); //increment first  then print
// console.log(r++); //increment after print
// console.log(r);  


// //decrement
// let q = 10;
// q--;
// console.log(q);

// //pre and post decrement
// let s = 10;
// console.log(--s); //decrement first  then print
// console.log(s--); //decrement after print
// console.log(s);

// //2. Assignment operators
// // =, +=, -=, *=, /=, %=, **=, <<=, >>=, >>>=, &=, ^=, |=
// //Assignment operators assign values to JavaScript variables.
// /*
// Operator	Description
// =	        x = y	x = y
// +=	        x += y	x = x + y
// -=	        x -= y	x = x - y
// *=	        x *= y	x = x * y
// /=	        x /= y	x = x / y
// %=	        x %= y	x = x % y
// **=	        x **= y	x = x ** y
// <<=	        x <<= y	x = x << y
// >>=	        x >>= y	x = x >> y
// >>>=	    x >>>= y	x = x >>> y
// &=	        x &= y	x = x & y
// ^=	        x ^= y	x = x ^ y
// |=	        x |= y	x = x | y
// */

// // = operator
// let t = 10;
// console.log(t);

// // += operator
// let u = 10;
// u += 5;
// console.log(u);

// // -= operator
// let v = 10;
// v -= 5;
// console.log(v);

// // *= operator
// let w = 10;
// w *= 5;
// console.log(w);

// // /= operator
// let x = 10;
// x /= 5;
// console.log(x);

// // %= operator
// let y = 10;
// y %= 5;
// console.log(y);

// // **= operator
// let z = 10;
// z **= 5;
// console.log(z);




// //3. Comparison operators
// // ==, ===, !=, !==, >, <, >=, <=
// //Comparison operators are used in logical statements to determine equality or difference between variables or values.
// /*
// Operator	Description
// ==	        equal to
// ===	        equal value and equal type
// !=	        not equal
// !==	        not equal value or not equal type
// >	        greater than
// <	        less than
// >=	        greater than or equal to
// <=	        less than or equal to
// ?	        ternary operator
// */

// // == operator
// let a1 = 10;
// let b1 = 10;
// console.log(a1 == b1);

// // === operator
// let a2 = 10;
// let b2 = 10;
// console.log(a2 === b2);

// // != operator
// let a3 = 10;
// let b3 = 10;
// console.log(a3 != b3);

// // !== operator
// let a4 = 10;
// let b4 = 10;
// console.log(a4 !== b4);

// // > operator
// let a5 = 10;
// let b5 = 10;
// console.log(a5 > b5);

// // < operator
// let a6 = 10;
// let b6 = 10;
// console.log(a6 < b6);

// // >= operator
// let a7 = 10;
// let b7 = 10;
// console.log(a7 >= b7);

// // <= operator
// let a8 = 10;
// let b8 = 10;
// console.log(a8 <= b8);

// //4. Logical operators
// // &&, ||, !
// //Logical operators are used to determine the logic between variables or values.
// /*
// Operator	Description
// &&	        logical and
// ||	        logical or
// !	        logical not
// */

// // && operator
// let a9 = 10;
// let b9 = 10;
// console.log(a9 && b9);

// // || operator
// let a10 = 10;
// let b10 = 10;
// console.log(a10 || b10);

// // ! operator
// let a11 = 10;
// let b11 = 10;
// console.log(!a11);

// //5. Bitwise operators
// // &, |, ^, ~, <<, >>
// //Bitwise operators treat their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.
// /*
// Operator	Description
// &	        AND
// |	        OR
// ^	        XOR
// ~	        NOT
// <<	        Zero fill left shift    
// >>	        Signed right shift
// >>>	        Zero fill right shift
// */

// // & operator
// let a12 = 10;
// let b12 = 23;
// console.log(a12 & b12);

// //how & operator works
// //      10 = 00001010
// //      23 = 00010111
// // 10 & 23 = 00000010 = 2

// // | operator
// let a13 = 10;
// let b13 = 23;
// console.log(a13 | b13);

// //how | operator works
// //      10 = 00001010
// //      23 = 00010111
// // 10 | 23 = 00011111 = 31

// // ^ operator
// let a14 = 10;
// let b14 = 23;
// console.log(a14 ^ b14);

// //how ^ operator works
// //      10 = 00001010
// //      23 = 00010111
// // 10 ^ 23 = 00011101 = 29

// // ~ operator
// let a15 = 10;
// console.log(~a15);

// //how ~ operator works
// //  10 = 00001010
// // ~10 = 11110101 = -11

// // << operator
// let a16 = 10;
// console.log(a16 << 2);

// //how << operator works
// //      10 = 00001010
// // 10 << 2 = 00101000 = 40
//  //first 2 bits are removed and 2 zeros are added at the end
//  //formula: 10 * 2^2 = 40 
//  //general formula: x * 2^n = x << n

// // >> operator
// let a17 = 10;
// console.log(a17 >> 2);

// //how >> operator works
// //      10 = 00001010
// // 10 >> 2 = 00000010 = 2
//     //last 2 bits are removed and 2 zeros are added at the beginning    
//     //formula: 10 / 2^2 = 2
//     //general formula: x / 2^n = x >> n
// //for negative number
// let bb= -10;
// console.log(bb >> 2);
// //output: -3
// //how give output -3
// //   -10 = 11111111111111111111111111110110
// // -10 >> 2 = 11111111111111111111111111111101 = -3
// // last 2 bits are removed and 2 ones are added at the beginning 



// // >>> operator
// let a18 = 10;
// console.log(a18 >>> 2);

// //how >>> operator works
// //       10 = 00001010
// // 10 >>> 2 = 00000010 = 2
//     //last 2 bits are removed and 2 zeros are added at the beginning 
//     //formula: 10 / 2^2 = 2
//     //general formula: x / 2^n = x >>> n
//     //differnce between >> and >>> is that >> preserves the sign bit, while >>> always returns a positive number
// // with example show difference between >> and >>> operator
// let a19 = -10;
// console.log(a19 >> 2);
// //output: -3
// console.log(a19 >>> 2);
// //output: 1073741821
// // how give output -3 and 1073741821
// // -10 = 11111111111111111111111111110110
// // -10 >> 2 = 11111111111111111111111111111101 = -3
// // -10 >>> 2 = 00111111111111111111111111111101 = 1073741821

// //6. String operators
// // +, +=
// //String operators are used to concatenate (join) strings.

// // + operator
// let a20 = "Hello";
// let b20 = "World";
// console.log(a20 + b20);

// // += operator
// let a21 = "Hello";
// let b21 = "World";
// a21 += b21;
// console.log(a21);

// //7. Conditional (ternary) operator
// // ?:
// //The conditional operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.

// // ? operator
// let a22 = 10;
// let b22 = 10;
// console.log(a22 == b22 ? "equal" : "not equal");    
 
// //instanceOf operator
// //instanceof operator is used to check whether an object is an instance of an object type.
// //instanceof operator returns true if the specified object is of the specified object type, otherwise false.
// //syntax: object instanceof constructor
// //object: Required. The object to be tested.
// //constructor: Required. The object type to be tested.

// //instanceof operator
// let a23 = "Hello";
// console.log(a23 instanceof String);

// //8. Comma operator
// // ,
// //The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand.
// //The comma operator is used to evaluate multiple expressions, where a value is expected. It is often used to initialize multiple variables in a single statement.

// // , operator
// let a24 = 10;
// let b24 = 20;
// let c24 = 30;
// console.log(a24, b24, c24);

// //9. Unary operators
// // delete, typeof, void, +, -, ++, --
// //Unary operators are operators with only one operand.
// //The unary plus (+) operator converts its operand to a number.
// //The unary negation (-) operator converts its operand to a number and negates it.
// //The increment (++) operator increments (adds one to) its operand and returns a value.
// //The decrement (--) operator decrements (subtracts one from) its operand and returns a value.

// // + operator
// let a25 = "10";
// console.log(+a25);
// //output: 10 (number)

// // - operator
// let a26 = "10";
// console.log(-a26);
// //output: -10 (number)

// // ++ operator
// let a27 = 10;
// console.log(++a27);
// //output: 11

// // -- operator
// let a28 = 10;
// console.log(--a28);
// //output: 9

// //10. Relational operators
// // <, >, <=, >=, in, instanceof
// //Relational operators are used to test the relationship between two operands.
// //The in operator returns true if the specified property is in the specified object or its prototype chain.
// //The instanceof operator returns true if the specified object is of the specified object type.

// // < operator
// let a29 = 10;
// let b29 = 20;
// console.log(a29 < b29);

// // > operator
// let a30 = 10;
// let b30 = 20;
// console.log(a30 > b30);

// // <= operator
// let a31 = 10;
// let b31 = 20;
// console.log(a31 <= b31);

// // >= operator
// let a32 = 10;
// let b32 = 20;
// console.log(a32 >= b32);

// // in operator
// let a33 = {name: "John", age: 30};
// console.log("name" in a33);
// //output: true (name is in a33 object)
// console.log(age in a33);
// //output: false (age is not in a33 object)
// console.log("age" in a33);
// //output: true (age is in a33 object) 
// //key should be passed as string in in operator 

// //instanceof operator
// let a34 = "Hello";
// console.log(a34 instanceof String);
// //output: false (a34 is not instance of String) 
// //because a34 is not object 
// //if a34 is object then output will be true 
// //String is object in javascript

// //string literal and string object difference
// let a35 = "Hello";
// console.log(a35 instanceof String);
// //output: false (a35 is not instance of String)
// let b35 = new String("Hello");
// console.log(b35 instanceof String);
// //output: true (b35 is instance of String)

// //11. Equality operators
// // ==, ===, !=, !==
// //Equality operators are used to compare the equality (or inequality) of two operands.
// //The equality operator (==) returns true if the operands are equal.
// //The strict equality operator (===) returns true if the operands are equal and of the same type.
// //The inequality operator (!=) returns true if the operands are not equal.
// //The strict inequality operator (!==) returns true if the operands are of the same type but not equal, or are of different type.

// // == operator
// let a36 = 10;
// let b36 = "10";
// console.log(a36 == b36);
// //output: true (10 == "10")

// // === operator
// let a37 = 10;
// let b37 = "10";
// console.log(a37 === b37);
// //output: false (10 === "10")

// // != operator
// let a38 = 10;
// let b38 = "10";
// console.log(a38 != b38);

// // !== operator
// let a39 = 10;
// let b39 = "10";
// console.log(a39 !== b39);
// //output: true (10 !== "10")
// //difference between == and === operator
// // == operator check only value
// // === operator check value and type

// //difference between != and !== operator
// // != operator check only value
// // !== operator check value and type


// //  32bit binary representation 
// //  32bit binary representation of 10 is 00000000000000000000000000001010
// console.log(~10);

// //difference between javascript and java
// // in javascript we can use single quote or double quote or backtick to represent string  but in java we can use only double quote to represent string
// //javascript is loosely typed language and java is strongly typed language
// //javascript is dynamically typed language and java is statically typed language
// //javascript is interpreted language and java is compiled and interpreted language because java is compiled into byte code and byte code is interpreted by java virtual machine 
// //javascript is case sensitive and java is case sensitive 
// //javascript is object oriented language and java is object oriented language 
// //javascript is prototype based language and java is class based language 
// //javascript is single threaded language and java is multi threaded language
// //javascript is asynchronous language and java is synchronous language 
// //dynamic language means we can change the data type of variable at runtime 
// //static language means we can not change the data type of variable at runtime 
// //prototype based language means we can add properties and methods to object at runtime 
// //class based language means we can not add properties and methods to object at runtime 

// console.log(4>'3');   // true because all the values are converted into number data type before comparing them  4>'3' is true because 4 is converted into 4 and 4>3 is true
// //type coercion is the process of converting one data type into another data type automatically by javascript engine 
// console.log(3>'a'); // false because all the values are converted into number data type before comparing them  3<'a' is false because 3 is converted into 3 and 'a' is converted into NaN and 3<NaN is false
// console.log('abc'>'ab');  // unicode value of a is 97 and unicode value of b is 98 so 'abc'>'ab' is true because unicode value of 'abc' is 97+98+99=294 and unicode value of 'ab' is 97+98=195 and 294>195 is true
 
// let x2 ="pen4521";
// let y2 ="pencil"
// console.log(x2>y2); //check character code of c with 4 and c>4 so it is false //charcter wise checking is done
// console.log(x2<y2);//check character code of c with 4 and c<4 so it is true
// console.log('234'<'a');  //check character code of 2 and a and 2<a is true so '234'<'a' is true  


// console.log(null==undefined);
// console.log(''==0); //check code of '' and 0 and 0==0 is true so ''==0 is true
// console.log('shiva'>4);
// console.log('shiva'<'4');
// console.log('s'<4);
// console.log('s'>4); //there is coercion concept s converted to nan and 4 is 4 neither nan >4 nor nor<4
// console.log(NaN>3); 
// console.log(3<NaN);

// let x1 = "7";
// let y1 = "8";
// let z1 = "10";
// let result = (x1 < y1 )&& (x1 < z1); //true && false is false
// let result1 = x1 < y1 || x1 < z1;
// console.log();
// console.log((x1 < y1 )); //true  
// console.log((x1 < z1)); //false  //charcter wise compression between '7' and '1' since charcter 7 is greate than charcter 1 
// console.log((x1 < y1 )&& (x1 < z1));
// console.log(result);
// console.log(result1);

// console.log(2!='2'); //check only value  //false
// console.log(2!=='2'); //check value and datatype both are different  //true



// 50 times hello world  print
console.log("Hello World" );
console.log("Hello World" );
console.log("Hello World" );
console.log("Hello World" );

//problem --time consuming forget count  

let arr=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//problem traverse array and print all element

let str="Hello World";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]); 

// DRY principle => don't repeat yourself 

// context --> loop 
// for , while , do while , for in , for of 

//for loop
for(let i=1;i<=50;i++){ //i++ =>i=51 
console.log("Hello World") ; 
}  


// for ----> keyword
// let i=1 --> initialization  // starting point //inciate
// i<=50 --> condition // ending point  ---  //friend condition
// i++ --> increment / decrement // last point50    //time complete match
// 0,1,2,...n-1 
for(let i=0;i<arr.length;i++){  
console.log(arr[i]);
}

for(let i=0;i<str.length;i++){
console.log(str[i]);
}



