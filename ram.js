var writeMode = false;
var ramSize;
var velocidadMS;

function setWriteMode(isWriting) {
  writeMode = isWriting;
  if (isWriting) {
    document.getElementById("wrValue").innerHTML = "Escritura";
  }
  else {
    document.getElementById("wrValue").innerHTML = "Lectura";
  }
}

function flushRAM() {
  setTable("data");
  setWriteMode(true);
  var dims = getDimensions(true);
  for (let i = 1; i < dims[0]; i++) {
    for (let j = 0; j < dims[1]; j++) {
      writeTo(i, j, 0);
    }
  }
  ramSize = dims[0];
  setWriteMode(true);
}

function setRAMSpeed() {
    rangeVal = document.getElementById("velocidadRAM").valueAsNumber;
    velocidadMS = (rangeVal * -20) + 2000;
}

function writeToRAM(data) {
  if (writeMode) {
    flushRAM();
    let dataSize = data.length;
    if (dataSize > 8) {
      dataSize = ramSize;
    }
    let asciiData = toASCIIValues(data);
    let k = 0;
    let i = 1;
    let id = setInterval(function() {
        if(k >= dataSize) {
            setWriteMode(false);
            clearInterval(id);
        }
        else {
            let bin = to8Bit(asciiData[k]);
            setWriteMode(true);
            for (let j = 0; j < bin.length; j++) {
                setTable("io");
                writeTo(0, j, bin[j]);
                setTable("data");
                
                writeTo(i, j, bin[j]);
            }
            k++;
            i++;
        }
    }, velocidadMS);
  }
  else {
      console.error("RAM is in read mode");
  }
}
