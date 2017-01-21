//iniciação das variáveis responsáveis pelo servidor
var express = require('express');
var app = express();

//seta o padrão de view eks
app.set('view engine', 	'ejs');

//mostra para a aplicação qual a pasta que vai carregar as views
app.set('views', './App/views');


module.exports = function() {
	return app;
}