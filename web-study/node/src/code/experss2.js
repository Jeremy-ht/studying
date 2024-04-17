const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// 使用bodyParser中间件
const urlParser = bodyParser.urlencoded({ extended: false });

app.get('/login', (req, res) => {
	res.sendFile(__dirname + '/login.html')
})


app.post('/login', urlParser, (req, res) => {
	console.log(req.body);
	res.send('ok')
})


app.listen(3003, () => {
	console.log('start')
})
