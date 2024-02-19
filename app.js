let titulo= document.querySelector('h1');
titulo.innerHTML = 'Coloca tu frase a encriptar';


function encriptar(){
    let texto = document.getElementById("textoUsuario").value;
    let tituloMensaje = document.getElementById("avisos")
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi,"ufat");
            console.log(textoCifrado)

        if (document.getElementById("textoUsuario").value.length !=0){
            document.getElementById("textoUsuario").value = textoCifrado;
            avisos.textContent = "Texto encriptado con éxito";
            parrafo.textContent = "";
            muñeco.src = "festejo.png";
        } else {
            muñeco.src = "trabajando.png";
            alert("Debes ingresar algun texto");

        }         
}
function desencriptar(){
    let texto = document.getElementById("textoUsuario").value;
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
     if (document.getElementById("textoUsuario").value.length !=0){
        document.getElementById("textoUsuario").value = textoCifrado;
        avisos.textContent = "Texto desencriptado correctamente";
        parrafo.textContent = "";
        muñeco.src = "festejo.png";
    } else {
        muñeco.src = "trabajando.png";
        alert("Debes ingresar algún texto :3");
    }   
}
function copy(){
    var copyText = document.getElementById('textoUsuario');
    copyText.select();
    copyText.setSelectionRange(0,9999);
    navigator.clipboard.writeText(copyText.value);
    alert("Se copió el texto: "+ copyText.value);
}
