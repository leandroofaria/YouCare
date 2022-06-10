function inputVazio() {
    email = document.getElementById("email").value;
    console.log(email);

    senha = document.getElementById("senha").value;
    console.log(senha);

    if (email == ""  || email.length < 3) {
        alert('Digite um email válido!');
    }

    else if (senha == ""  || senha.length < 5) {
        alert('A senha precisa ter no minímo 5 caracteres!');
    }
}
