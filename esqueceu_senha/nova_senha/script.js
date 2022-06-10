function inputVazio() {
    senha = document.getElementById("senha").value;
    console.log(senha);

    novasenha = document.getElementById("novasenha").value;
    console.log(novasenha);

    if (senha == ""  || senha.length < 5) {
        alert('Digite uma senha válida!');
    }

    else if (senha != novasenha) {
        alert('As senhas precisam ser iguais!');
    }

    else {
        window.location.href="/tela_entrar/index.html"
    }
}