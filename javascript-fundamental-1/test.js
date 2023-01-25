// let var and const   
console.log(name1) //hoisting  ---> undefined
var name1 = 'John Doe';//help in hoisting
console.log(name1);

let name2 = 'John Doe';
console.log(name2);//not hoisting

const name3 = 'John Doe';
console.log(name3);//not hoisting

{
    // var name4 = 'John Doe';
    // console.log(name4);  //function scope 

    // let name5 = 'John Doe';
    // console.log(name5);  //block scope 

    // const name6 = 'John Doe'; //block scope
    // console.log(name6);
}

// console.log(name6);

var x=4;
var x=5;
console.log(x);//redeclaration possible

let y=4;
// let y=5; //error
console.log(y); //redeclaration not possible

const z=4;
//const z=5; //error //redecaration not possible

//let and const
let s=7;
s=8;
console.log(s); //reassignment possible

const t=7;
// t=8; //error //reassignment not possible


const obj={x:4};
console.log(obj);

obj.x=5;
console.log(obj);

obj={x:5}; //error //reassignment not possible

