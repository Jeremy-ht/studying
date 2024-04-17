const http = require('http')


const server = http.createServer((request, response) => {
	
	response.setHeader('Content-Type', 'text/html;charset=utf-8')
	
	const { url, method } = request
	console.log(request)
	let result = null
	switch (url) {
		case '/home':
			result = `<h1 style="color: darkgreen">home</h1>`
			break
		case '/center':
			result = `<h1 style="color: darkgreen">center</h1>`
			break
		default:
			result = `<h1 style="color: #ff0000">error</h1>`
	}
	
	response.end(result)
})

server.listen(3000, () => {
	console.log('node服务启动......')
})
