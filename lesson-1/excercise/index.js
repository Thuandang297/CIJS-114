import { arrayName, firstElement, greet, isEven, productInfo, seperateObj, square, stringLength, sum, sumUpTo } from './utils.js';

console.log(productInfo('Computer','10000'));

console.log(greet("Hà anh!"));

console.log(sumUpTo(10));

console.log(square(5));


console.log("🚀 ~ isEven:", isEven(10))

console.log(firstElement([1,2,3,4]));

console.log(sum(1,2,3,4,5,6));


const user = { name: "Nam", age: 30 };

console.log("🚀 ~ seperateObj(user):", seperateObj(user))

const people = [{ name: "An" }, { name: "Bình" }];

console.log("🚀 ~ arrayName(people):", arrayName(people))

console.log("🚀 ~ stringLength('Hello world!'):", stringLength('Hello world!'))

console.log("🚀 ~ Array(n).fill(str):", Array(5).fill("TOM").join('-'))
