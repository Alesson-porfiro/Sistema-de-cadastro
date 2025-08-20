const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");
const Idata = document.querySelector(".data");

function cadastrar() {
    fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: Inome.value,
            email: Iemail.value,
            senha: Isenha.value,
            telefone: Itel.value, // corrigido
            data: Idata.value      // formato yyyy-MM-dd
        })
    })
    .then(res => res.json())
    .then(data => console.log("Usuário criado:", data))
    .catch(err => console.error("Erro:", err));
}

function limpar() {
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itel.value = "";
    Idata.value = "";
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
});
