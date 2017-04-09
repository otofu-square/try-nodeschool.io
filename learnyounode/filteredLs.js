const fs = require('fs')

const filePath = process.argv[2]
const filter = process.argv[3]

fs.readdir(filePath, (err, files) => {
  if (err) throw 'Error has occured'
  files.filter((file) => file.includes(`.${filter}`)).forEach((v) => console.log(v))
})

// official solution
//
// var fs = require('fs')
// var path = require('path')
//
// var folder = process.argv[2]
// var ext = '.' + process.argv[3]
//
// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
