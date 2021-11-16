import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
const port = 3000

app.use(express.static('public'))

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set("views", "./views")


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})