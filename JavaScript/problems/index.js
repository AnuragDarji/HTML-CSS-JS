// function pattern(n) {
//   for (let i = 0; i < n; i++) {
//     let row = ""; // reset for each row

//     for (let j = 0; j < n - i; j++) {
//       row += (n - i);
//     }

//     console.log(row);
//   }
// }

// pattern(5);

// function pattern(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     if (i === 0 || i === n - 1) {
//       // top & bottom row
//       row = "*".repeat(n);
//     } else {
//       // middle rows
//       row = "*" + " ".repeat(n - 2) + "*";
//     }
//     console.log(row);
//   }
// }

// pattern(5);

// function pattern(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = n - i - 1; j > 0; j--) {
//       row += " ";
//     }
//     for (let j = n; j > 0; j--) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// pattern(5);

// function pattern(n) {
//   const mid = Math.floor(n / 2);

//   for (let i = 0; i <= mid; i++) {
//     let row = "";

//     for (let j = 0; j < mid - i; j++) {
//       row += " ";
//     }

//     for (let j = 0; j < 2 * i + 1; j++) {
//       if (j === 0 || j === 2 * i) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }

//     console.log(row);
//   }

//   for (let i = mid - 1; i >= 0; i--) {
//     let row = "";

//     for (let j = 0; j < mid - i; j++) {
//       row += " ";
//     }

//     for (let j = 0; j < 2 * i + 1; j++) {
//       if (j === 0 || j === 2 * i) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }

//     console.log(row);
//   }
// }

// pattern(7);

// Number

// const balance = new Number(120)

// console.log(typeof balance)

// Boolean

// const isCheck = new Boolean(true)
// console.log(isCheck)

// let today = new Date()
// console.log(today.getDate())

// const value = 2;
// console.log(typeof Number(value));
// console.log(Number(value))

// ------ array

// const arr = [10, 40, 30, 150, 80];

// const smallestElem = arr.reduce((a, b) => (a < b ? a : b));
// const largestElem = arr.reduce((a, b) => (a > b ? a : b));

// console.log(smallestElem, largestElem);

// const arr = [10, 40, 30, 150, 80, 10];

// const removeElem = arr.filter((val, index)=> arr.indexOf(val) === index)

// console.log(removeElem)

// const arr = new Array(10,20,30,40)

// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [];

// teaCollection.forEach(function (tea, i, arr) {
//   if (tea === "chai" || i >= arr.indexOf("chai")) {
//     return;
//   }
//   availableTeas.push(tea);
// });

// console.log(availableTeas);

// const arr = [2, 5, 7, 9];
// const doubleArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 7) {
//     continue;
//   }

//   doubleArr.push(arr[i] * 2);
// }

// console.log(doubleArr)

// let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
// let shortTeas = [];

// for (const chai of myTeas) {
//     if(chai.length > 10){
//         break;
//     }

//     shortTeas.push(chai)
// }

// console.log('====================================');
// console.log(shortTeas);
// console.log('====================================');

// var compose = function(functions) {

//     return function(x) {
//         let result = x;
//         for(let i=functions.length-1; i>=0; i--){
//             result = functions[i](result)
//         }
//         return result
//     }
// };

// /**
//  * const fn = compose([x => x + 1, x => 2 * x])
//  * fn(4) // 9
//  */

// const fn = compose([x => x + 1, x => 2 * x])
// const res = fn(4)
// console.log('====================================');
// console.log(res);
// console.log('====================================');

// ------------- FIBONNACI SERIES -------------

// function fibonnaci(n) {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     if (i == 0 || i==1) {
//       arr.push(i);
//     } else{
//         arr.push(arr[i-2] + arr[i-1])
//     }
//   }
//   return arr
// }

// console.log(fibonnaci(15));

// --------------------------- ROMAN TO INT -------------

// function romantoInt(str) {
//   romanObj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   const strArr = str.split("");
//   let sum = 0;

//   for (const elem of strArr) {
//     if (Object.keys(romanObj).includes(elem)) {
//       sum += romanObj[elem];
//     }
//   }

//   return sum;
// }

// console.log(romantoInt("III"));

// ---------------------------------------------

// function orderTea(){
//     return function confirmOrder(){
//         return "Your order is confirm"
//     }
// }

// console.log(orderTea()())

// function orderTea() {
//   function confirmOrder() {
//     return "Your order is confirm";
//   }

//   return confirmOrder();
// }

// console.log(orderTea())

// const calculateTotal = (p,q) =>{
//     return p*q
// }

// const total = calculateTotal(10,23)
// console.log(total)

// ----------- find bigger and smaller no. form an array

// const arr = [10, 3, 45, 77, 34, 67, 23];

// console.log(
//   arr.reduce((a, b) => (a > b ? a : b)),
//   arr.reduce((a, b) => (a < b ? a : b)),
// );

// ---------------- find kth large no in array -----------

// const sortedArr = arr.sort((a,b)=>b-a)

// function largestElem(k){
//     return sortedArr[k-1]
// }

// console.log(sortedArr,largestElem(arr.length-1))

// --------------------------------------

// function makeTea(typeofTea) {
//   return typeofTea;
// }

// function processTeaOrder(teafn) {
//   return teafn("earl grey");
// }

// console.log(processTeaOrder(makeTea));

// function createTeaMaker() {
//   return function (teaType) {
//     return `Making ${teaType}`;
//   };
// }

// let teaMaker = createTeaMaker();
// console.log(teaMaker("green tea"))

// ---------------- deep clone of object -------------

// const obj = {
//   name: "anurag",
//   age: 23,
// };

// delete obj.age;
// console.log(obj);

// const {age, ...newObj} = obj

// console.log(newObj);

// const user = {
//   name: "Anurag",
//   address: {
//     city: "Ahmedabad",
//     pincode: 380013,
//   },
// };

// const copy = structuredClone(user);

// copy.address.pincode = 380063;

// console.table(user, ["pincode"]);
// console.table(copy);

// const arr = [1,2,3,4,5]
// const copyArr = structuredClone(arr)

// copyArr.pop()

// console.log(arr)
// console.log(copyArr)

// ---------------- move all zero at end of an array ----------------

// function moveAllZerosAtEnd(arr) {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       j++;
//     }
//   }

//   return arr;
// }

// console.log("====================================");
// console.log(moveAllZerosAtEnd([0, 1, 0, 3, 12]));
// console.log("====================================");

// --------------- count the elemement that are greater than then prev element avg -----------

// const arr = [100, 200, 150, 300];

// function countElem(arr) {
//   let count = 0;
//   for (let i = 1; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < i; j++) {
//       sum += arr[j];
//     }
//     console.log(sum/i)
//     if (arr[i] > sum / i) {
//       count++;
//     }
//   }

//   return count
// }

// console.log(countElem(arr))

// --------------------- ASCII to string and vise versa -------------

// const str = "Hello"
// const code = str.charCodeAt(1)
// console.log(code)

// ASCII -> String

// const result = String.fromCharCode(72)
// console.log(result)

const arr = [1, [2, [3, 4], 5], 6];

function flatArr(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr.push(...flatArr(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(flatArr(arr));
