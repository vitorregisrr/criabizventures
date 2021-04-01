(function () {
    'use strict';
    
    jQuery.extend(jQuery.validator.messages, {
        required: "Este campo é obrigatório.",
        email: "E-mail inválido.",
        number: "Por favor insira um número válido.",
        maxlength: jQuery
            .validator
            .format("Por favor insira no máximo {0} caracteres."),
        minlength: jQuery
            .validator
            .format("Por favor insira no minímo {0} caracteres."),
        rangelength: jQuery
            .validator
            .format("Please enter a value between {0} and {1} characters long."),
        range: jQuery
            .validator
            .format("Por favor insira entre {0} e {1} caractéres.")
    });

    // Formulário acessar (LOGIN)
    $("#form-empresas").validate({
        rules: {
            empresa: {
                required: true
            },
            pessoa: {
                required: true
            },
            cidade: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            linkPitchDeck: {
                required: true
            },
            resumo: {
                required: true
            }
        },

        messages: {}

    });

    // Form empresa JS
    setTimeout(() => {
        if (window.innerWidth < 992) {
            $('#step-2, .form-step-2').hide();
        }
    }, 800);

    $('#form-next')
        .click(function () {
            if ($("#form-empresas").valid()) {
                $('#step-1').hide();
                $('#step-2').fadeIn();
                $('#form-marker-2').addClass('active');
            }
        });

    $('#form-submit').click(function () {
        if ($("#form-empresas").valid()) {

            $('#form-submit').attr('disabled', 'true');

            $.ajax({
                url: "https://formsquash.io/f/dMIPTXMFpTk8Q3cRyRGe",
                method: "POST",
                dataType: "json",
                contentType: "application/json; charset=iso-8859-1",
                data: JSON.stringify({
                    type: $('#form-empresas')
                        .find('input[name="type"]')
                        .val(),
                    email: $('#form-empresas')
                        .find('input[name="email"]')
                        .val(),
                    pessoa: $('#form-empresas')
                        .find('input[name="pessoa"]')
                        .val(),
                    empresa: $('#form-empresas')
                        .find('input[name="empresa"]')
                        .val(),
                    cidade: $('#form-empresas')
                        .find('input[name="cidade"]')
                        .val(),
                    telefone: $('#form-empresas')
                        .find('input[name="telefone"]')
                        .val(),
                    resumo: $('#form-empresas')
                        .find('textarea[name="resumo"]')
                        .val()
                })
            })
            $('#form-empresas').hide();
            $('#success-tab').fadeIn();
        }
    });

})();