var emailNovo
var senhaNovo

function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if ((login == "admin" && senha == "admin") || (login == "admin@horizonte.com" && senha == "123456") || (login == emailNovo && senhaNovo == senhaNovo)) {
        alert("Sucesso!");
        location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos");
    }
}

function buscarCep() {
    const cep = document.getElementById("cep").value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json()
            .then(dados => {
                document.getElementById("rua").value = dados.logradouro
                document.getElementById("bairro").value = dados.bairro
                document.getElementById("cidade").value = dados.localidade
                document.getElementById("estado").value = dados.estado
            })
        )
}

function enviarCadastro() {
    var nome = document.getElementById("nome").value.trim();
    var emailNovo = document.getElementById("emailNovo").value.trim();
    var cep = document.getElementById("cep").value.trim();
    var rua = document.getElementById("rua").value.trim();
    var bairro = document.getElementById("bairro").value.trim();
    var cidade = document.getElementById("cidade").value.trim();
    var estado = document.getElementById("estado").value.trim();
    var senhaNovo = document.getElementById("senhaNovo").value.trim();


    if (nome === "" || emailNovo === "" || cep === "" || rua === "" || bairro === "" || cidade === "" || estado === "" || senhaNovo === "") {
        alert("⚠️ É necessário preencher todos os campos!");
        return false;
    } else {
        alert("✅ Cadastro concluído com sucesso!")
        location.href = "login.html"
    }

    console.log(senhaNovo + "|" +emailNovo)
}

function orcamento() {
    var nome = document.getElementById("preenchimento1").value.trim();
    var email = document.getElementById("preenchimento2").value.trim();
    var data = document.getElementById("preenchimento3").value.trim();

    if (nome === "" || email === "" || data === "") {
        alert("⚠️ É necessário preencher todos os campos!");
        return false;
    } else {
        alert("✅ Formulário enviado com sucesso!")
        window.location.reload();
    }
}