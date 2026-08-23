const studentName = 'Levis'

const notify1 = 'My name is' + 'Levis'

const notify2 = 'My name' + studentName + 'is'

//String literal
const notify3 = `My name is  ${studentName}`
console.log("🚀 ~ notify3:", notify3)
console.log(Number(10000).toLocaleString())

//Function

//1.Normal Function
const result = sayHello('Linh')

function sayHello(name, age) {
    // console.log("🚀 ~ sayHello ~ age:", age)
    // console.log(`Hello my friend! ${name}`)

    // console.log("Fish");
    return `Hello my friend! ${name}`

}

// console.log("🚀 ~ result:", result)

// Arrow function

// const sum = (a, b) => {
//     return a + b
// }
// console.log(sum(5, 4));



const sum = (a, b) => a + b

const resultSum = sum(5, 10)
console.log("🚀 ~ resultSum:", resultSum)
const greet = (name, age) => {
    console.log("Hello " + name)
}
// greet('Hannal')

//Rest Operator
function sumArgs(name, ...args) {
    console.log("🚀 ~ sumArgs ~ name:", name)
    console.log(args);
    let total = 0
    for (let i = 0; i < args.length; i++) {
        // console.log("🚀 ~ sumArgs ~ args[i]:", args[i])
        total += args[i]
        // console.log("🚀 ~ sumArgs ~ total:", total)
    }
    return total;
}
const resultArgs = sumArgs('Levis', 1, 2, 3, 4, 5, 6, 7, 8, 9) // 15
console.log("🚀 ~ resultArgs:", resultArgs)
