/*
*Objetivo: Manipular entrada de dados 
Autora: Maria Luiza 
Data: 04/08/2023
Versão: 1.0
*/

// Import da bíblioteca readline (node), que recebe dados digitados pelo usuário no terminal 

var readline = require('readline')


//cria um elemento para entrada de dados do usuário
var entradaDados = readline.createInterface ({
input: process.stdin,
output: process.stdout
});

//Solicita a entrada de dados no terminal, através de uma função de CallBack do metodo question
entradaDados.question('Digite seu nome' , function (nomeUsuario){
    //Recebe na variavel nome o conteúdo digitado
    var nome = nomeUsuario;
    //Exibe na tela aum texto e a variavel
    
    //Entrada de dados da idade do Usuário
    entradaDados.question('Digite sua idade' ,function(idadeUsuario){
        var idade = idadeUsuario;
        
        //Entrada de dados do email do usuário
        entradaDados.question('Digite o seu email' ,function(emailUsuario){
            var email = emailUsuario;
        
            //Entrada de dados do telefone do usuário    
        entradaDados.question('Digite o seu telefone' ,function(telefoneUsuario){
                var telefone = telefoneUsuario;
    
         //Exibi na tela a variavel e o texto
        console.log('Bem vindo ao aplicativo,' + nome);
        console.log('A idade do usuário é: ' + idade);
        console.log('O email do usuário é: ' + email);
        console.log('O telefone do usuário é: ' + telefone);
        
        //Encerrar a entrada de dados 
        entradaDados.close();
            })
        })
    });
})


