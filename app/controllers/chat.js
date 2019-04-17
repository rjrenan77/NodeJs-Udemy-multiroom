module.exports.iniciaChat = function(application, req,res){

    //propriedade name no input html que traz o valor do campo digitado para o body parser
    var dadosForm = req.body;
    console.log(dadosForm)
    
    req.assert("apelido","Apelido é obrigatório!").notEmpty();
    req.assert("apelido","Apelido deve ter entre 3 e 15 caracteres!").len(3,15);

    //retorna erros
    var erros = req.validationErrors();

    if(erros){
        res.render("index", {validacao: erros});
        //res.send("Existem erros no formulário!");
        return;
    }

    //chamando variavel criada em app.js pelo express
    application.get("io")
        .emit(
            "msgParaCliente", 
            {apelido: dadosForm.apelido, mensagem: " acabou de entrar no chat" }
        );

    res.render("chat", {dadosForm: dadosForm});
}