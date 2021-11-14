const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express();
const __check = path.resolve();
console.log(__check)
app.use('/' , serveStatic(path.join(__check, '/frontend/dist')))

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__check, '/frontend/dist/index.html'))
})


// //here we are configuring dist to serve app files
// app.use('/', serveStatic(path.join(__dirname, '/dist')))

// // this * route is to serve project on different page routes except root `/`
// app.get(/.*/, function (req, res) {
// 	res.sendFile(path.join(__dirname, '/dist/index.html'))
// })

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)