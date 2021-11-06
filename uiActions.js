function enviarAction() {
    text = document.getElementById("inputText").value;
    setWriteMode(true);
    writeToRAM(text);
    setWriteMode(false);
}