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
    $("#form-empresas").validate({
        rules: {
            empresa: {
                required: true
            },
            pessoa: {
                required: true,
            },
            cidade: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15
            },
            resumo: {
                required: true,
            },
        },
    
        messages: {
        }
    
    });

    
    // Form empresa JS
    if(window.innerWidth < 992){
        $('#step-2').hide();
    }

    $('#form-next').click(function(){
        if($("#form-empresas").valid()){
            $('#step-1').hide();
            $('#step-2').fadeIn();
            $('#form-marker-2').addClass('active');
        }
    });

    $('#form-submit').click(function(){
        if($("#form-empresas").valid()){
            $('#form-empresas').hide();
            $('#success-tab').fadeIn();
        }
    });

   
})();