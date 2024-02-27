navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      
    }
  });

let mensagemUsuario = "";
let mensagemModificada = "";


function botaoCriptografar() {
    mensagemUsuario = document.querySelector("textarea").value;
    if (mensagemUsuario == "") {
        return;
    } else if (verificarCaracteres(mensagemUsuario)) {
        return true;
    }else{
        elementHide("image1");
        elementHide("text1");
        elementHide("text2");
        mensagemModificada = criptografar(mensagemUsuario);
        mensagemNovo("novoTexto", mensagemModificada);
        document.getElementById("texto__original").value = "";
        document.getElementById("botao__decopiar").style.visibility = "visible";
    }
}

function botaoDescriptografar() {
    mensagemUsuario = document.querySelector("textarea").value;
    if (mensagemUsuario == "") {
        return;
    } else if (verificarCaracteres(mensagemUsuario)) {
        return true;
    }else {
        elementHide("image1");
        elementHide("text1");
        elementHide("text2");
        mensagemModificada = descriptografar(mensagemUsuario);
        mensagemNovo("novoTexto", mensagemModificada);
        document.getElementById("texto__original").value = "";
        document.getElementById("botao__decopiar").style.visibility = "visible";
    }
}

function mensagemNovo(id, texto){
    let name = document.getElementById(id);
    name.innerHTML = texto;
}

function elementHide(id){
    document.getElementById(id).style.display = "none";
}

function verificarCaracteres(string) {
    const regex = /([A-Z])|([ÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ])|([^a-zA-Z0-9\s])/g;
    return regex.test(string);
  }

function criptografar(originalString) {
    let newString = originalString.replace(/e/g, "enter");
    newString = newString.replace(/i/g, "imes");
    newString = newString.replace(/a/g, "ai");
    newString = newString.replace(/o/g, "ober");
    newString = newString.replace(/u/g, "ufat");

    return newString;
}

function descriptografar(originalString) {
    let newString = originalString.replace(/enter/g, "e");
    newString = newString.replace(/imes/g, "i");
    newString = newString.replace(/ai/g, "a");
    newString = newString.replace(/ober/g, "o");
    newString = newString.replace(/ufat/g, "u");

    return newString;
}

function copiar() {
    navigator.clipboard.writeText(mensagemModificada).then(
        () => {
          
        },
        () => {
          
        },
      );
    }