const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/script', express.static(__dirname + 'public/script'))
app.use('/data', express.static(__dirname + 'public/data'))

app.get('/', (req, res) => {
  res.render('index', {})
})

app.get('/about', (req, res) => {
  res.render('about', {})
})

app.get('/news', (req, res) => {
  res.render('news', {})
})

app.get('/latest-manga', (req, res) => {
  res.render('latest-manga', {})
})

app.get('/login', (req, res) => {
  res.render('login', {})
})

app.get('/regis', (req, res) => {
  res.render('register', {})
})

app.get('/seasonal-anime', (req, res) => {
  res.render('seasonal-anime', {})
})

app.get('/top-anime', (req, res) => {
  res.render('top-anime', {})
})

app.get('/top-manga', (req, res) => {
  res.render('top-manga', {})
})

app.get('/upcoming-anime', (req, res) => {
  res.render('upcoming-anime', {})
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
