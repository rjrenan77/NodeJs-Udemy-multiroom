//importar as configs do server
var app = require("./config/server");

//parametrizar a porta
app.listen(7777, ()=>{
    console.log("Server iniciado");
});