const express = require('express')
const middleware = require('./middleware')


const app = express()

// 中间件
function a(request, response, next) {
	console.log('我是中间件')
	next()
}

// app.use(middleware)
app.use(a)

// 静态文件
app.use(express.static( '../../public'))

app.get('/', (req, res) => {
	res.send('Hello World! express')
})

app.get('/home', (req, res) => {
	console.log(req.query.query)
	console.log(req.baseUrl)
	res.send('home')
})

app.get('/:id', (req, res) => {
	res.send(req.params.id)
})

app.get('*', (req, res) => {
	res.send('<h1>error</h1>')
})

app.listen(3003, () => {
	console.log('express start')
})
