const express = require('express')
const app = express()
const port = 3000

// middleware
app.use(express.static(path.join(__dirname, 'static')));


// Middleware
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
