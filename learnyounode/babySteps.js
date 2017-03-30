const numbers = process.argv.slice(2).map((arg) => Number(arg))
const result = numbers.reduce((p, n) => p + n)

console.log(result)
