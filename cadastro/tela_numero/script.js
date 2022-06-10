function inputVazio() {
    numero = document.getElementById("telefone").value;
    console.log(numero);

    if (numero == ""  || numero.length < 10) {
        alert('Digite um número valido!');
    }

    else {
        window.location.href="/cadastro/tela_validacao/index.html"
    }
}