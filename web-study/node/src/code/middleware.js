module.exports = function (req, res, next) {
	const { url } = req
	const urlList = [ '/login', '/register', '/logout' ]
	if (!urlList.includes(url)) {
		return res.status(401).json({
			code: 401,
			msg: '请先登录'
		})
	}
	
	next()
}
