function enviarAction() {
    text = document.getElementById("inputText").value;
    setRAMSpeed();
    setWriteMode(true);
    writeToRAM(text);
    setWriteMode(false);
}