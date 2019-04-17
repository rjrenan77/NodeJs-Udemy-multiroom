//importar modulo do framework express
var express = require("express")

//consign
var consign = require("consign")

//bodyParser
var bodyParser = require("body-parser")

//express validator
var expressValidator = require("express-validator")


//iniciar express
var app = express();

//configurar ejs como engine de views
//setar as variaveis do express
app.set("view engine", "ejs");
app.set("views", "./app/views" );

//configurar middleware express.estatic para os assets
app.use(express.static("./app/public"));

//configurando body-parser
app.use(bodyParser.urlencoded({extended: true}));

//configurar o middleware express-validator
app.use(expressValidator());

//configurar o consign para fazer o autoload das rodas, models e controllers em app
consign()
    .include("app/routes")
    .then("app/models")
    .then("app/controllers")
    .into(app);


//exportando o app
module.exports = app;