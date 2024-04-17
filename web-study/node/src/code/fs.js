const fs = require('fs');

// fs.writeFile('./fs.txt', 'Hello World! 2', (err) => {
// 	if (err) console.log(err)
// 	console.log('File written successfully.')
// })

// fs.appendFile('./fs.txt', '\nnode.js', err => {
// 		if (err) console.log(err)
// 		console.log('File written successfully.')
// 	}
// )

// const cws = fs.createWriteStream('./fs.txt')
// cws.write('Hello World! 3\n')
// cws.write('Hello World! 4\n')
// cws.end()


// fs.readFile('./fs.txt', 'utf-8', (err, data) => {
// 	if (err) console.log(err)
// 	console.log(data)
// })

// const crs = fs.createReadStream('./fs.txt')
// crs.on('data', (chunk) => {
// 	console.log('------NEW CHUNK------')
// 	console.log(chunk)
// })
// crs.on('end', () => {
// 	console.log('End of file')
// })
// crs.on('error', (err) => console.log(err))

// fs.rename('./fs.txt', './fs2.txt', (err) => {
// 		if (err) console.log(err)
// 		console.log('File renamed successfully.')
// 	}
// )

// fs.unlink('./fs.txt', (err) => {
// 	if (err) console.log(err)
// 	console.log('File deleted successfully.')
// })


// fs.mkdir('./fs/fs2', (err) => {
// 	if (err) console.log(err)
// 	console.log('Directory created successfully.')
// })


// fs.stat('./fs.js', (err, stats) => {
// 	if (err) console.log(err)
//   console.log(stats.isSocket())
// })

// fs.readdir('./fs', (err, files) => {
// 	if (err) console.log(err)
// 	files.forEach((file, index) => {
// 		const arr = file.split('_')
// 		fs.rename(`./fs/${file}`, `./fs/${index + 11}_${arr[1]}`, (err) => {})
// 	})
// })


function copyFile(fileName) {
	const file = fs.createReadStream(fileName)
	let datas = null
	file.on('data', (chunk) => {
		datas = chunk;
	})
	
	file.on('end', (chunk) => {
		const fileArr = fileName.split('.')
		const cws = fs.createWriteStream(`${fileArr[0]}_copy.${fileArr[1]}`)
		cws.write(datas)
		cws.write('\ncopy')
		cws.end()
	})
}

// 复制文件
// copyFile(__dirname + '/fs/fs2.txt')

















