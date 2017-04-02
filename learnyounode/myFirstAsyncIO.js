const fs = require('fs')
const filePath = process.argv[2]

fs.readFile(filePath, (err, data) => {
  if (err) throw 'Error has occured'
  console.log(data.toString().split('\n').length - 1)
})
