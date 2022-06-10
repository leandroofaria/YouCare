function inputVazio() {
    email = document.getElementById("email").value;
    console.log(email);

    senha = document.getElementById("senha").value;
    console.log(senha);

    confirmarsenha = document.getElementById("confirmarsenha").value;
    console.log(confirmarsenha);

    if (email == ""  || email.length < 3) {
        alert('Digite um email válido!');
    }

    else if (senha == ""  || senha.length < 5) {
        alert('A senha precisa ter no minímo 5 caracteres!');
    }

    else if (senha != confirmarsenha) {
        alert('As senhas precisam ser iguais!');
    }

    else {
        window.location.href="/cadastro/tela_numero/index.html"
    }
}
