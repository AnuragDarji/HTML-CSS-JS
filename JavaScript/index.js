/* 1. way to print in java script.
console.log("Hello World!");
alert("me");
document.write("this id document write"); */

//2. Java script console API
// console.log("Hello world",4+6,"Another log");
// console.warn("this is warning");
// console.error("this is an error");

//3. Java script variables
// What is variables? - Container to store data values
/*
multi-line
comment...
*/

// var num1 = 34;
// var num2 = 69;
// console.log(num1 + num2);

//4. Data types in javascript
//Numbers
// var num1 = 30;
// var num2 = 56.74;

//String
// var str1 = "this is string";
// var str2 = 'this is also a string';

//objects
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     tony: 97.99
// }
// console.log(marks);

//Booleans
// var a = true;
// var b = false;
// console.log(a,b);

// undefined
// var und = undefined;
// console.log(und);
// var und;
// console.log(und);

// null
// var n = null;
// console.log(n);

/* 
At high level, there are two types of Data types in JavaScript
1. Primitive data types: number, string, boolean, undefined, null, symbol.
2. Reference data types: Arrays and objects.
*/

// var arr = [1,2,3,"Hi",5,6,7];
// console.log(arr);

// Operators in JavaScrpit
// Arithmetic Operators
// var a = 100;
// var b = 10;
// console.log("The value of a+b is",a+b);
// console.log("The value of a-b is",a-b);
// console.log("The value of a*b is",a*b);
// console.log("The value of a/b is",a/b);

//Assignment Operators
//var c = b;
//c += 2; //c = c+2;
//c -= 2;
//c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators.
// var x = 34;
// var y = 56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);
// console.log(x!=y);

// Logical Operators.

// Logical AND
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&true);
// console.log(false&&false);

// Logical OR
// console.log(true||true);
// console.log(true||false);
// console.log(false||true);
// console.log(false||false);

// Logical NOT
// console.log(!true);
// console.log(!false);

// Function in JavaScript
function avg(a,b){
    return (a + b)/2;
}
// DRY = Do not repeat yourself.
c1 = avg(4,6);
c2 = avg(14,16);
// console.log(c1 ,c2);

// Conditionals in JavaScript.
/*
var age = 41;
// Single if statement.
if(age>18){
    console.log("You can drink rasna water");
}
// If-else statement.
// if(age>18){
//     console.log("You can drink rasna water");
// }
// else{
//     console.log("You can't drink rasna water");
// }

// If-else Ladder.
age = 21;
if(age>32){
    console.log("You are not a kid.");
}
else if(age>26){
    console.log("Bachhe nahi rahe");
}
else if(age>22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age>18){
    console.log("18 Bachhe nahi rahe");
}
else{
   console.log("Bachhe rahe");  
}
console.log("End of Ladder.");
*/

var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for (var i=0;i<arr.length;i++){
//     if(i==2){
//        // break;
//        continue;
//     }
//   console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const ac = 0;
// ac++;
// ac=ac+1;

// let j = 0;
// while (j<arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

let myArr = ["Fan","Camera",34,null,true];
// Array Methods.
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Anurag");
// myArr.shift();
// const newLen = myArr.unshift("Anurag");
// console.log(newLen);
// console.log(myArr);

let myLoveString = "Harry is a good boy good good Harry";
// console.log(myLoveString.length);
// console.log(myLoveString.indexOf("good"));
// console.log(myLoveString.lastIndexOf("good"));

// console.log(myLoveString.slice(0,3));

d = myLoveString.replace("Harry","Anurag");
// d = d.replace("good","bad") // only first good can change.
// console.log(d,myLoveString);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

// DOM Manipulation.
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-success');

// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('button');
// console.log(tn);
tn = document.getElementsByTagName('div');
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is created bold";
tn[0].replaceChild(createdElement2,createdElement);
// removeChild(element) --> remove an element

// Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// function clicked(){
//     console.log("The button was clicked");
// }

// window.onload = function(){
//     console.log("The document was loaded.");
// }

// Events in JavaScript
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked.</b>"
//     console.log("Click on container");
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container");
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked.</b>"
//     console.log("Mouse down when clicked on container");
// })

// Arrow Function
//  function summ(a,b){
//     return a+b;
// }
// summ = (a,b) =>{
//     return a+b;
// }

logkaro = () =>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set intervel fired.</b>"
    console.log("I am your log");
}
// setTimeout and setintervel
// clr = setTimeout(logkaro,5000);
// clr = setInterval(logkaro,2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout.

// JavaScript localStorage.
// localStorage.setItem('name','anurag');
// localStorage;
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// Json
// obj = {name: 'anurag', length: 1, a: {this: 'tha"t'}};
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// console.log(typeof obj);
// parsed = JSON.parse(`{"name":"anurag","length":1,"a":{"this":"that"}}`);
// console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`);
