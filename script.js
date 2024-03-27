const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function registrar() {
    var registerName = document.getElementById("registerName").value
    var registerEmail = document.getElementById("registerEmail").value
    var registerSenha = document.getElementById("registerSenha").value

    if (registerName && registerName.value !== "" && registerEmail && registerEmail.value !== "" && registerSenha && registerSenha.value !== "") {
        alert("registrado");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
    


function logar() {
    var login = document.getElementById("loginEmail").value
    var senha = document.getElementById("loginPassword").value

    if(login == "admin" && senha == "admin"){
        alert("sucesso")
        location.href = "index.html"
    }

    else if (login == registerEmail.value){
        alert("sucesso")
    }

    else {
        alert("Dados incorretos.");
    }
}