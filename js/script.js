function Gmail(){
    const textoACopiar = "aitorrubiorosales9@gmail.com";
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textoACopiar;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
}