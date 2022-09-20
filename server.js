import express from 'express'
const PORT = process.env.PORT || 5000
import router from './router/router.js'
import path from 'path'
import ejs from 'ejs'


const app = express()

app.use(express.json())
app.use(router)

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/', (req, res) => res.render(''))
app.get('/home', (req, res) => res.render('index'))
app.get('/donates', (req, res) => res.render('donators'))


app.listen(PORT, () => console.log('server http://localhost:5000'))