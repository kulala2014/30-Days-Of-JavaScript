let firstName = 'Clyde', lastName = 'Gao', country = 'CN', city = 'Xi\'an', age = 33, isMarried = true;

console.log(typeof firstName)
console.log(typeof age)

console.log(`Check if type of '10' is equal to 10: ${typeof '10' === typeof 10}`)

console.log(`Check if parseInt('9.8') is equal to 10: ${parseInt('9.8') === 10}`)
console.log(`Check how to make ('9.8') is equal to 10: ${Math.round(parseFloat('9.8')) === 10}`)

console.log(1===1)
console.log(typeof '10' === typeof '132213')
console.log(null == undefined)

let now = new Date();
console.log(`${now.getMonth() +1}/${now.getDate()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getMilliseconds()}`)


let base = 0;
 do {
    base = prompt('Please enter base number')
} while(typeof base === Number)

console.log(`Enter base: ${base}`)

let height = 0;
 do {
    height = prompt('Please enter height number')
} while(typeof height === Number)

console.log(`Enter height: ${height}`)

console.log(`The area of the triangle is ${0.5*base*height}`)

let year = now.getFullYear()
let month = formatDate(now.getMonth() + 1);
let day =formatDate(now.getDate());
let hour =formatDate(now.getHours());
let minutes = formatDate(now.getMinutes());


console.log(`${year}-${month}-${day} ${hour}:${minutes}`)


function formatDate(data) {
    return String(data).padStart(2, '0');
}