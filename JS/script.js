const texto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);

    })

function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value)
    mensaje.value = textoEncriptado
    texto.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
      
    }
    
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(texto.value)
    mensaje.value = textoEncriptado
    texto.value = "";
    mensaje.style.backgroundImage = "none";
 }   

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }     
    }
    
    return stringDesencriptado
}


function copiar(){
    let texto = document.getElementById("mensaje");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.exce
    
}

