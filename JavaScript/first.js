// print msg...
let name = "Anurag";
console.log("Welcome "+name);

// Variable...
console.log("==============================");
let num = 34;
console.log(num);
console.log(typeof(num));

var str = "Anurag";
console.log(str);
console.log(typeof(str));

var marks = {kartik:93 ,anurag:94, jaimin:95}
console.log(marks);
console.log(typeof(marks));

var a = true;
console.log(a);
console.log(typeof(a));

var und = undefined;
console.log(und);
console.log(typeof(und));
console.log(Boolean(und));

var n = null;
console.log(n);
console.log(typeof(n));
console.log(Boolean(n));


console.log("===============================");

//Operator in JavaScript.

//1. Arithmetic Operator
var a = 100;
var b = 30;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log("-------------------");

//2. Assignment Operator.
var c = b;
// c += 2; //c = c+2;
// c -= 2;
// c *= 2;
// c /= 2;
console.log(c);

console.log("-------------------");

//3. Comparison Operators.
var x = 34;
var y = 56;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);
console.log(x!=y);

console.log("-------------------");

//4. Logical Operators.

// Logical AND
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

// Logical OR
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

// Logical NOT
console.log(!true);
console.log(!false);

console.log("================================");

// Function in JavaScript
function avg(a,b){
    return (a + b)/2;
}
// DRY = Do not repeat yourself.
c1 = avg(4,6);
c2 = avg(14,16);
console.log(c1 ,c2);

// Conditionals in JavaScript.

var age = 41;
//single if statment.
if(age>18){
    console.log("you can drink rasna water");
}

// if-else statment.
if(age>18)
    console.log("you can drink rasna water");
else
    console.log("you can't drink rasna water");

// if-else ladder.
age = 27;
if(age>32){
    console.log("you are not a kid.");
}
else if(age>26){
    console.log("Bachhe nahi rahe");
}
else if(age>22){
    console.log("yes bachhe nahi rahe");
}
else{
    console.log("bachhe rahe");
}

var arr = [1,2,3,4,5,6,7];
console.log(arr);
for (var i=0;i<arr.length;i++){
    if(i==2){
    //    break;
       continue;
    }
  console.log(arr[i]);
}

console.log("================================");

arr.forEach(function(element){
    console.log(element);
})

console.log("================================");

// const ac = 0;
// ac++;
// ac=ac+1;

let j = 0;
while (j<arr.length) {
    console.log(arr[j]);
    j++;
}

console.log("=================================");

do{
    console.log(arr[j]);
    j++;
    }
while(j<arr.length);

console.log("=================================");

let myArr = ["Fan","Camera",34,null,true];
// Array Methods.
console.log(myArr.length);
myArr.pop();
myArr.push("Anurag");
myArr.shift();
const newLen = myArr.unshift("Anurag");
console.log(newLen);
console.log(myArr);

console.log("=================================");

let myLoveString = "Harry is a good boy good good Harry";
console.log(myLoveString.length);
console.log(myLoveString.indexOf("good"));
console.log(myLoveString.lastIndexOf("good"));

console.log(myLoveString.slice(0,3));

d = myLoveString.replace("Harry","Anurag");
d = d.replace("good","bad") // only first good can change.
console.log(d,myLoveString);

console.log("=================================");

let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());

console.log("=================================");

// callback --> we can pass function as a parameter to another function.
function mul(a,b,callback){
    ans = a*b;
    console.log("The result is: "+ans);
    callback();
}
function display(){
    console.log("Good Bye");
}
mul(10,20,display);

console.log("=================================");

//JSON : Javascript Object Notation
var obj = {"Student":[
    {"name":"AAA","roll_no":10,"city":"Pune"},
    {"name":"BBB","roll_no":20,"city":"Mumbai"},
    {"name":"CCC","roll_no":30,"city":"Chennai"},
    {"name":"DDD","roll_no":40,"city":"Kolkatta"}
]};
console.log(obj);
console.log(obj.Student[0].name,obj.Student[0].roll_no,obj.Student[0].city);
console.log(obj.Student[1].name,obj.Student[1].roll_no,obj.Student[1].city);
console.log(obj.Student[2].name,obj.Student[2].roll_no,obj.Student[2].city);
console.log(obj.Student[3].name,obj.Student[3].roll_no,obj.Student[3].city);
console.log(typeof(obj));
