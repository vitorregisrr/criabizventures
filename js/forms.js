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
    $(".empresas-sec__form").each(function(){
        $(this).validate({
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
    })

    // Form empresa JS
    setTimeout(() => {
        if (window.innerWidth < 992) {
            $('#step-2, .form-step-2').hide();
        }
    }, 800);

    $('#form-next, .form-next-button')
        .click(function () {
            const target = $(this).attr('data-target') || "#form-empresas";;
            if ($(target).valid()) {
                $(target).find('.form-step-1, #step-1').hide();
                $(target).find('.form-step-2, #step-2').fadeIn();
                $(target).find('.step-2').addClass('active');
            }
        });

    $('#form-submit, .form-submit-button').click(function () {
        const target = $(this).attr('data-target') || "#form-empresas";
        if ($(target).valid()) {
            $(this).attr('disabled', 'true');
            $.ajax({
                url: "https://formsquash.io/f/dMIPTXMFpTk8Q3cRyRGe",
                method: "POST",
                dataType: "json",
                contentType: "application/json; charset=iso-8859-1",
                data: JSON.stringify({
                    type: $(target)
                        .find('input[name="type"]')
                        .val(),
                    email: $(target)
                        .find('input[name="email"]')
                        .val(),
                    pessoa: $(target)
                        .find('input[name="pessoa"]')
                        .val(),
                    empresa: $(target)
                        .find('input[name="empresa"]')
                        .val(),
                    cidade: $(target)
                        .find('input[name="cidade"]')
                        .val(),
                    telefone: $(target)
                        .find('input[name="telefone"]')
                        .val(),
                    resumo: $(target)
                        .find('textarea[name="resumo"]')
                        .val()
                })
            })
            $(target).hide();
            $(target).parent().find('.empresas-sec__success').fadeIn();
        }
    });

})();