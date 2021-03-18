(function () {
    'use strict';
    jQuery.extend(jQuery.validator.messages, {
        required: "Este campo é obrigatório.",
        email: "E-mail inválido.",
        number: "Por favor insira um número válido.",
        maxlength: jQuery.validator.format("Por favor insira no máximo {0} caracteres."),
        minlength: jQuery.validator.format("Por favor insira no minímo {0} caracteres."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Por favor insira entre {0} e {1} caractéres.")
    });
    

    // Formulário acessar (LOGIN)
    $("#form-contato").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            nome: {
                required: true,
            },
            empresa: {
                required: true,
            },
            telefone: {
                required: true,
                minlength: 15
            },
            assunto: {
                required: true,
            },
            mensagem: {
                required: true,
            },
        },
    
        messages: {

            telefone:{
                minlength: 'Seu número parece estar incompleto.'
            }
        }
    
    });
   
})();