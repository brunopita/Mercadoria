//recebe de retorno do exports o app referente ao express
var app = require('./config/config')();

//redireciona a responsábilidade de rota para outro arquivo

//passa o controle de todas as rotas para um arquivo
var route = require('./App/routes/routesRedirect')(app);

//Listar o servidor http 
app.listen(3000,function () {
	console.log("teste");
});