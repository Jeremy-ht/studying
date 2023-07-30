const http = require('http')

const server = http.createServer((req, resp) => {
	const { url, method } = req
	resp.setHeader('Content-Type', 'text/html;charset=utf-8')
	if (url === '/login') {
		resp.write(`
		<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
td{
padding: 20px 40px;
}
table tr:nth-child(odd){
background: #aef;
}
table tr:nth-child(even){
background: #fcb;
}
table, td{
十一、网页资源的基本加载过程
网页资源的加载都是循序渐进的，首先获取 HTML 的内容， 然后解析 HTML 在发送其他资源的请求，如
CSS，Javascript，图片等。 理解了这个内容对于后续的学习与成长有非常大的帮助
border-collapse: collapse;
}
</style>
</head>
<body>
<table border="1">
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>
<script>
//获取所有的 td
let tds = document.querySelectorAll('td');
//遍历
tds.forEach(item => {
item.onclick = function(){
this.style.background = '#222';
}
})
</script>
</body>
</html>
		`)
	} else if (url === '/home') {
		resp.write('home')
	}else {
		resp.write('错误')
	}
	resp.end()
})

server.listen(8888, () => console.log('server start'))
