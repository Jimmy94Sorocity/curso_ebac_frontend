const form = document.getElementById("form-exercicio");
let formulario_evalido = false;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const campo_a = document.getElementById("campo-a");
    const campo_b = document.getElementById("campo-b");
    const mensagem_sucesso = `O número do campo B é maior do que o número do campo A`;
    const mensagem_erro = `O número do campo B não é maior do que o número do campo A`;

    formulario_evalido = (campo_b.value > campo_a.value)
    if (formulario_evalido) {
        const container_mensagemsucesso = document.querySelector(".success-message");
        container_mensagemsucesso.innerHTML = mensagem_sucesso;
        container_mensagemsucesso.style.display = "block";

    } else {
        const container_mensagemerro = document.querySelector(".error-message");
        container_mensagemerro.innerHTML = mensagem_erro;
        container_mensagemerro.style.display = "block";
    }
})