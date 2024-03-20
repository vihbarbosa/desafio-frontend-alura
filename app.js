let texto = '';
const E =['e','enter'];
const I =['i','imes'];
const A =['a','ai'];
const O = ['o','ober'];
const U = ['u','ufat'];

if (window.location.pathname.includes("crypt.html")){
    exibirTextoNaTela('texto_resposta',localStorage.getItem('texto'))
}

function validateInput(input) {
    let value = input.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    value = value.replace(/[^a-z]/g, "");

    input.value = value;
}

function exibirTextoNaTela(tag,texto){
    console.log(texto)
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}



function encrypt(){
    palavra = document.querySelector('textarea').value;
    vogais = [E,I,A,O,U];
    vogais.forEach(e => {
        palavra = palavra.replaceAll(e[0],e[1]);
    });
    texto = palavra;
    if (window.location.pathname.includes("index.html")) {
        localStorage.setItem('texto', texto);
        window.location.href = "crypt.html";
        console.log(window.location.pathname)
    }else{
        exibirTextoNaTela('texto_resposta',texto);
        limparCampo();
    }
}

function decrypt(){
    palavra = document.querySelector('textarea').value;
    vogais = [U,O,A,I,E];
    vogais.forEach(e => {
        palavra = palavra.replaceAll(e[1],e[0]);
    });
    texto = palavra;
    if (window.location.pathname.includes("index.html")) {
        localStorage.setItem('texto', texto);
        window.location.href = "crypt.html";
    }else{
        exibirTextoNaTela('texto_resposta',texto);
        limparCampo()
    }
}

function copyToClipboard() {
    navigator.clipboard.writeText(texto)
}

function limparCampo(){
    input = document.querySelector('textarea');
    input.value = '';
}
