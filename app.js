import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
const port = 3000
const navButtons = [
  { name: 'About', isActive: false },
  { name: 'Portfolio', isActive: false },
  { name: 'Contact', isActive: false }
]

app.use(express.static('public'))

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set("views", "./views")

app.get('/', (req, res) => {
  for (let i = 0; i < navButtons.length; i++) navButtons[i].isActive = false
  res.render('index', { navButtons })
})

app.get('/About', (req, res) => {
  for (let i = 0; i < navButtons.length; i++) navButtons[i].isActive = false
  navButtons[0].isActive = true
  res.render('about', { navButtons })
})

app.get('/Portfolio', (req, res) => {
  for (let i = 0; i < navButtons.length; i++) navButtons[i].isActive = false
  navButtons[1].isActive = true
  res.render('portfolio', { navButtons })
})

app.get('/Contact', (req, res) => {
  for (let i = 0; i < navButtons.length; i++) navButtons[i].isActive = false
  navButtons[2].isActive = true
  res.render('contact', { navButtons })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})