const mysqls = require('mysql')

const db = mysqls.createPool({
	host: '114.115.235.157',
	user: 'shaoyifu',
	password: 'renhao666',
	database: 'h_labor_union_3'
})


db.query('select * from sys_user where user_id = 120', (err, res) => {
	if (err) return console.log(err)
	console.log(res)
})
