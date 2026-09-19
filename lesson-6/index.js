function A() {
  console.log('Function A. Tôi đang nấu thịt kho'); //=>(30p)
}
function B() {
  console.log('Function B. Tôi đang nấu canh xương');// => 25p
}
function C() {
  console.log('Function C. Tôi đang nấu bò xào'); // => 15p
}
function D() {
  console.log('Function D. Tôi đang nấu rau luộc'); //=> 10p
}
//==> 1h20p
// Với bất đồng bộ => 30p

function execute() {
  B();
  A();
  C();
  D();
}

// thực thi các công việc A, B, C, D
// execute();

function A() {
  console.log('Bắt đầu làm công việc A');
  setTimeout(() => {
    console.log('Đã hoàn thành công việc A');
    // hàm callback sẽ được thực thi sau 3 giây
  }, 5000);
}
function B() {
  console.log('Thực hiện xong công việc B');
}

// setInterval(() => {
//   console.log("Tập thể dục")
// }, 2000)

// A();
// B();

//Example 3
const setPromise = new Promise((resolve, reject) => {
  // Logic xử lý bất đồng bộ ở đây
  const check = false;
  if (check) {
    // Chuỗi Kết quả thành công sẽ được đưa vào giá trị tham số của callback trong .then
    resolve('Kết quả thành công');
  } else {
    // Chuỗi Có lỗi xảy ra sẽ được đưa vào giá trị tham số của callback trong .catch
    // reject('Có lỗi xảy ra');
  }
});
// setPromise
//   .then((value) => {
//     console.log('Then', value);
//   })
//   .catch((error) => {
//     console.log('Catch ==>' + error)
//   });




// Promise 1: Hoàn thành sau 2 giây
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('✅ Promise 1 đã hoàn thành sau 0.5 giây');
  }, 500);
});

// Promise 2: Hoàn thành sau 1 giây
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('✅ Promise 2 đã hoàn thành sau 1 giây');
  }, 1000);
});

// Promise.all([promise1, promise2]).then((x) => {
//   console.log('Sau promise', x);
// })

// Promise.race([promise1, promise2]).then((x) => {
//   console.log('Racing....', x);
// })

// promise1.then((result1) => {
//   promise2.then((result2) => {
//     promise2.then((result2) => {
//       promise2.then((result2) => {
//         promise2.then((result2) => {
//           promise2.then((result2) => {

//           })
//         })
//       })
//     })
//   })
// })

function functionC(result) {
  // đồng bộ
  console.log('C được thực hiện');
  console.log('Giá trị tham số:', result);
}

// const setPromiseB = new Promise((resolve, reject) => {
//   let check = true;
//   const mockValue = {
//     data: {
//       name: 'MindX School',
//       age: 10
//     }
//   }
//   if (check) {
//     resolve(mockValue);
//   } else {
//     reject("Some error...");
//   }
// });
// setPromiseB.then((value) => {
//   functionC(value);
// });
// console.log('Chạy trước');

// async function funcName() {
//   return 'thành công'
// }



function functionC(result) {
  // đồng bộ
  console.log('C được thực hiện');
  console.log('Giá trị tham số:', result);
}

const setPromiseB = new Promise((resolve, reject) => {
  let check = true;
  // some logic ...
  const mockValue = {
    data: {
      name: 'MindX School',
      age: 10
    }
  }
  if (check) {
    resolve(mockValue);
  } else {
    reject("Some error...");
  }
});
const setPromiseC = new Promise((resolve, reject) => {
  let check = true;
  // some logic ...
  const mockValue = {
    data: {
      name: 'MindX School',
      age: 10
    }
  }
  if (check) {
    resolve(mockValue);
  } else {
    reject("Some error...");
  }
});
async function execute() {
  try {
    console.log("--- chạy 1 ---");
    const [responseB, responseC] = await Promise.all([setPromiseB, setPromiseC]);
    console.log("--- chạy 2 ---");
    console.log(result);
    console.log("--- chạy 3 ---");
    functionC(result);
  } catch (error) {
    // khi promise bị lỗi (rejected) kết quả lỗi sẽ được đưa vào tham số error của catch
    // chương trình sẽ không bị crash khi có try catch
    console.log(error);
  }
}

// thực thi chương trình
execute();


const api = 'https://jsonplaceholder.typicode.com/todos';
fetch(api).then((response) => {
  console.log(response);
  return response.json();
}).then((data) => {
  console.log(data);
});