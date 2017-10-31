const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
	//uri: 'mongodb://localhost:27017/mean-angular-2',
	uri: 'mongodb://linn:123@ds119768.mlab.com:19768/angular-2-app', // Production
	secret: crypto,
	db: 'angular-2-app'
}