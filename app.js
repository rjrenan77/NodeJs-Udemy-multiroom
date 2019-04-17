//importar as configs do server
var app = require("./config/server");

//parametrizar a porta
var server = app.listen(7777, ()=>{
    console.log("Server iniciado");
});

var io = require("socket.io").listen(server);

//criando variavel global
app.set("io",io);


//criando a conexao por websocket
io.on("connection", (socket)=>{

    console.log("Usuário conectou");
    socket.on("disconnect", ()=>{
        console.log("Usuário desconectou");
    })

    /* dialogo */
    socket.on("msgParaServidor", (data)=>{
        socket.emit("msgParaCliente", {apelido: data.apelido, mensagem: data.mensagem})
        socket.broadcast.emit("msgParaCliente", {apelido: data.apelido, mensagem: data.mensagem})

        if(parseInt(data.apelido_atualizado) == 0){
            socket.emit("participantesParaCliente", {apelido: data.apelido})
            socket.broadcast.emit("participantesParaCliente", {apelido: data.apelido})
        }

    })

  
        
  


});