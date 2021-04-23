const express = require('express')
const path = require('path')
const app = express()
const port = 3000

function logger(req, res, next) {
  console.log(req.headers.host)
  next()
}

// middleware
app.use(logger)

app.use(express.static(path.join(__dirname, 'static')));


// Middleware
app.get('/hello', (req, res, next) => {
  //res.send("<h1>HELLO</h1>")
  res.json({hello: "darlin"})
})

app.get('/', (req, res) => {
  res.json({hello: "world"})
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
