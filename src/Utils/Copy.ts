export const copy = (input: string) => {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = input;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
}