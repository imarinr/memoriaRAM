var isHelpShowing = false;

function enviarAction() {
    text = document.getElementById("inputText").value;
    setRAMSpeed();
    setWriteMode(true);
    writeToRAM(text);
    setWriteMode(false);
}

function switchHelp(){
    let e = document.getElementById("ayuda");
    if (isHelpShowing) {//si se esta mostrando, ocultar
        e.style.display = "none";
        isHelpShowing = false;
    }
    else {
        e.style.display = "block";
        isHelpShowing = true;
    }
    
}