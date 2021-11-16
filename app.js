import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
const port = 3000

app.use(express.static('public'))

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set("views", "./views")

app.get('/', (req, res) => {
  const buttons = [
    { name: 'About', isActive: false },
    { name: 'Portfolio', isActive: false },
    { name: 'Contact', isActive: false }
  ]
  res.render('index', { buttons })
})

app.get('/About', (req, res) => {
  const buttons = [
    { name: 'About', isActive: true },
    { name: 'Portfolio', isActive: false },
    { name: 'Contact', isActive: false }
  ]
  res.render('about', { buttons })
})

app.get('/Portfolio', (req, res) => {
  const buttons = [
    { name: 'About', isActive: false },
    { name: 'Portfolio', isActive: true },
    { name: 'Contact', isActive: false }
  ]
  res.render('portfolio', { buttons })
})

app.get('/Contact', (req, res) => {
  const buttons = [
    { name: 'About', isActive: false },
    { name: 'Portfolio', isActive: false },
    { name: 'Contact', isActive: true }
  ]
  res.render('contact', { buttons })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})