$(document).ready(function() {
    $("#telefone").mask("(00) 00000-0000"); // plugin de mascara para o telefone
    $("#cpf").mask("000.000.000-00");
    $("#cep").mask("00000-000");

    $("form").validate({ // colocando a validação obrigatoria nos campos
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: { // alterando a mensagem padrão
            nome: "Por favor, insira seu nome completo",
            telefone: "Por favor, insira seu telefone",
            email: "Por favor, insira um e-mail válido",
            cpf: "Por favor, insira seu CPF",
            enderecoCompleto: "Por favor, insira seu endereço completo",
            cep: "Por favor, insira seu CEP"
        },
        submitHandler: function(form) {
            alert("Formulário cadastrado com sucesso!");
            $("#nome").val("");
            $("#cpf").val("");
            $("#telefone").val("");
            $("#email").val("");
            $("#endereco-completo").val("");
            $("#cep").val("");
        },
        invalidHandler: function(evento, validador) { // colocando um alerta para o usuario saber quantos campos ele não preencheu
            let campos_incorretos = validador.numberOfInvalids();
            if (campos_incorretos) {
                alert(`Existem ${campos_incorretos} campos incorretos`);
            }
        }
    });
});