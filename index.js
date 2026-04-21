const express = require('express') //nap thu vien
const morgan = require('morgan')
const app = express() //cha ve 1 doi tuong 
const port = 3000 // chay web o cong nao

// định nghĩa tuyến đường route(/....)
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
app.use(morgan('combined'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
