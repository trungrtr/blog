const express = require('express') //nap thu vien
const app = express() //cha ve 1 doi tuong 
const port = 3000 // chay web o cong nao

// định nghĩa tuyến đường route(/....)
app.get('/trangchu', (req, res) => {
  res.send('Hello Worldddd!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
