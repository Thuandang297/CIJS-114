// CIJS-114: Lesson 1 Exercises
// File: lesson-01.js

// Bài 1: In ra chuỗi sử dụng Template Literals, kết hợp Function
const productInfo = (name, price) => {
    const formattedPrice = Number(price).toLocaleString("en-US");
    return `Sản phẩm: ${name}, Giá: ${formattedPrice} VNĐ`;
};

// Bài 2: Viết hàm chào người dùng theo tên
const greet = name => `Xin chào, ${name}!`;

// Bài 3: Tính tổng các số từ 1 đến n
const sumUpTo = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Bài 4: Tính bình phương một số
const square = n => Math.pow(n, 2);

// Bài 5: Kiểm tra số chẵn hay lẻ
const isEven = n => n % 2 === 0;

// Bài 6: Viết hàm trả về phần tử đầu tiên của mảng
const firstElement = array => array[0];

// Bài 7: Sử dụng Rest Operator để tính tổng
const sum = (...params) => params.reduce((acc, curr) => acc + curr, 0);

// Bài 8: Tách giá trị từ đối tượng
const seperateObj = ({ name, age }) => `Name: ${name}, Age: ${age}`;

// Bài 9: In ra danh sách tên từ mảng đối tượng
const arrayName = arr => arr.map(item => item.name).join(", ");

// Bài 10: Tính độ dài chuỗi
const stringLength = str => str.length;

// Bài 11: Chuyển đổi chuỗi thành chữ hoa
const toUpperCase = str => str.toUpperCase();

// Bài 12: Chuyển đổi số sang dạng tiền tệ
const formatCurrency = number => `${Number(number).toLocaleString("en-US")} VNĐ`;

// Bài 13: Tính giá trị lớn nhất trong mảng
const max = arr => Math.max(...arr);

// Bài 14: Viết hàm kiểm tra số nguyên tố
const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

// Bài 15: In ra chuỗi n lần
const repeatString = (str, n) => Array(n).fill(str).join(" ");

// Bài 16: Tính tổng số lẻ trong mảng
const sumOdd = arr => arr.filter(n => n % 2 !== 0).reduce((acc, curr) => acc + curr, 0);

// Bài 17: Tính tổng các số lớn hơn n
const sumGreaterThan = (arr, n) => arr.filter(x => x > n).reduce((acc, curr) => acc + curr, 0);

// Bài 18: Chuyển đổi ngày từ dạng YYYY-MM-DD sang DD/MM/YYYY
const formatDate = dateStr => {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
};

// Bài 19: Lấy 3 phần tử đầu tiên trong mảng
const firstThree = arr => arr.slice(0, 3);

// Bài 20: Kiểm tra xem chuỗi có chứa ký tự cụ thể hay không
const containsChar = (str, char) => str.includes(char);

// Bài 21: Gộp hai mảng thành một
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

// Bài 22: Đếm số lần xuất hiện của một phần tử trong mảng
const countOccurrences = (arr, val) => arr.filter(x => x === val).length;

// Bài 23: Lọc các số lẻ từ mảng
const filterOdd = arr => arr.filter(n => n % 2 !== 0);

// Bài 24: Tìm các số lớn hơn một giá trị cho trước
const greaterThan = (arr, val) => arr.filter(x => x > val);

// Bài 25: Tính giai thừa của một số
const factorial = n => {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

// Bài 26: Tách riêng số chẵn và số lẻ trong mảng
const separateEvenOdd = arr => {
    const even = arr.filter(n => n % 2 === 0);
    const odd = arr.filter(n => n % 2 !== 0);
    return { even, odd };
};

// Bài 27: Sắp xếp mảng tăng dần
const sortAsc = arr => [...arr].sort((a, b) => a - b);

// Bài 28: Tính tổng các số ở vị trí chẵn trong mảng
const sumEvenIndex = arr => arr.reduce((acc, curr, index) => index % 2 === 0 ? acc + curr : acc, 0);

// Bài 29: Tạo một mảng các số nhân với 2
const multiplyByTwo = arr => arr.map(x => x * 2);

// Bài 30: Tạo một chuỗi từ mảng string
const arrayToString = arr => arr.join("");


