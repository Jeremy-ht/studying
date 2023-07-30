const mysql = require('mysql')
const http = require('http')

const connect = mysql.createConnection({
	host: '8.136.218.79',
	user: 'root',
	password: 'Jeremy@17',
	database: 'phone'
})

connect.connect(err => {
	if (err) throw err
	console.log('connect')
})
let r = ''
connect.query('select * from address', (err, result) => {
	if (err) throw err
	r = 222
})

const server = http.createServer((req, res) => {
	
	res.setHeader('Content-Type', 'text/html;charset=utf-8')
	res.write('1')
	res.end()
})

server.listen(8888, () => console.log('start'))
