// ======== callback ==========
// def: function as parameter of another function are called callback function or we can say that function inside another function called callback function..

// function getData(id, getNextData) {
//   setTimeout(() => {
//     console.log("data: ", id);
//     getNextData && getNextData(id);
//   }, 2000);
// }

// Note:
// () => getData(2)      // Not executed
// (() => getData(2))()  // executed

// ========= callback hell ======
// console.log("getting data1 ....");
// getData(1, () => {
//   console.log("getting data2 ....");
//   getData(2, () => {
//     console.log("getting data3 ....");
//     getData(3);
//   });
// });

//========= promises ==========

// const promise = new Promise((res, rej) => {
//   rej("error");
// });

// promise
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// console.log(promise)

// =========== promise chaining. ==========

// function getData(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data: ", id);
//       resolve("success");
//     }, 3000);
//   });
// }

// console.log("getting data1 ....");
// getData(1)
//   .then((res) => {
//     console.log("getting data2 ....");
//     return getData(2);
//   })
//   .then((res) => {
//     console.log("getting data3 ....");
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// ======= Async/Await =======

// Async function always return a promise.

// async function hello() {
//   console.log("Hello");
// }

// console.log(hello());

// Await pauses the execution of its surrounding async function util the promise is settled.

// function getData(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data: ", id);
//       resolve("success");
//     }, 3000);
//   });
// }

// async function getAllData() {
//   console.log("getting data1 ....");
//   await getData(1);
//   console.log("getting data2 ....");
//   await getData(2);
//   console.log("getting data3 ....");
//   await getData(3);
// }

// getAllData();

// ===== using IIFE - Immediately Invoked Function Expression =====

// (async function() {
//   console.log("getting data1 ....");
//   await getData(1);
//   console.log("getting data2 ....");
//   await getData(2);
//   console.log("getting data3 ....");
//   await getData(3);
// })();

