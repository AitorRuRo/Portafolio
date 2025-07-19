function Gmail(){
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = "aitorrubiorosales9@gmail.com";
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
}