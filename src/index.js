const path = require('path') // Đã sửa: bỏ ngoặc nhọn
const express = require('express') // nap thu vien
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express() // cha ve 1 doi tuong
const port = 3000 // chay web o cong nao



app.use(express.static(path.join(__dirname,'public')))



// dinh nghia tuyen duong route(/....)
app.use(morgan('combined'))





// template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// Đã sửa: dùng path.join (dấu chấm) và trỏ đúng đường dẫn thư mục views
app.set('views', path.join(__dirname, 'resources/views'))

// Route chính để render giao diện
app.get('/', (req, res) => {
  res.render('home');
})

// Đã comment lại đoạn này để không bị trùng với route '/' ở ngay phía trên
// app.get('/', (req, res) => {
//   res.send('<h1 style =red >Hello World!</h1>')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})