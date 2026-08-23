// Bài 1: In ra chuỗi sử dụng Template Literals, kết hợp Function như sau:
const productInfo = (name, price) => `Sản phẩm: ${name}, Giá: ${price} VNĐ`

// Bài 2: Viết hàm chào người dùng theo tên
const greet = name => `Xin chào, ${name}`

// Bài 3: Tính tổng các số từ 1 đến n

const sumUpTo = n => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

// Bài 4; Tính bình phương một số

const square = n => Math.pow(n, 2)

//Bài 5: Kiểm tra số chẵn hay lẻ
const isEven = n => n % 2 == 0 ? true : false

//Bài 6: Viết hàm trả về phần tử đầu tiên của mảng

const firstElement = array => array[0]

//Bài 7: Sử dụng Rest Operator để tính tổng

const sum = (...params) => {
    let sum = 0
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        sum += element
    }
    return sum
}

//Bài 8: Tách giá trị từ đối tượng
const seperateObj = (obj) => `Name: ${obj.name}, Age: ${obj.age}`

//Bài 9: In ra danh sách tên từ mảng đối tượng
const arrayName = (arr) => {
    let listName = ''
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        listName += element.name + ','
    }
    return listName
}
//Bài 10: Tính độ dài chuỗi
const stringLength = (str) => str.length

function toUpperCase(str) {
  return str.toUpperCase();
}
function formatCurrency(number) {
  return `${number.toLocaleString("en-US")} VNĐ`;
}
function max(arr) {
  return Math.max(...arr);
}
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function repeatString(str, n) {
  return Array(n).fill(str).join(" ");
}

//Export các hàm ra bên ngoài
export { productInfo, greet, sumUpTo, square, isEven, firstElement, sum, seperateObj ,arrayName,stringLength}