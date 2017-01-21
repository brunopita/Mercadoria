module.exports = function (app) {
	app.get('/mercadoria',function(req,res){
		res.render('mercadoria/index');
	});
}