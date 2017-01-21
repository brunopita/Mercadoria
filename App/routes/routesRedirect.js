module.exports = function (app) {
	var routeHome = require('./home')(app);
	var routeMercadoria = require('./mercadoria')(app);
}