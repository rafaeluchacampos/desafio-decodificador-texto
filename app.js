let mensagemUsuario = "";
let mensagemModificada = "";


function botaoCriptografar() {
    mensagemUsuario = document.querySelector("textarea").value;
    elementHide("image1");
    elementHide("text1");
    elementHide("text2");
    mensagemModificada = mensagemUsuario;
    mensagemNovo("novoTexto", mensagemModificada);
    document.getElementById("texto__original").value = "";
    document.getElementsByClassName("botao__copiar").removeAttribute("disabled", "")
    document.getElementsByClassName("botao__copiar").setAttribute("enable", true);
    document.getElementsByClassName("botao__copiar").style.display = "visible";
}

function mensagemNovo(id, texto){
    let name = document.querySelector(id);
    name.innerHTML = texto;
}

function elementHide(id){
    document.getElementById(id).style.display = "none";
}