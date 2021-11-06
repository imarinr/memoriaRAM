var writeMode = false;
var ramSize;

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
  var dims = getDimensions(true);
  for (let i = 1; i < dims[0]; i++) {
    for (let j = 0; j < dims[1]; j++) {
      writeTo(i, j, 0);
    }
  }
  ramSize = dims[0];
  setWriteMode(false);
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
    for (let i = 1; k < dataSize; i++) {
      let bin = to8Bit(asciiData[k]);
      for (let j = 0; j < bin.length; j++) {
        writeTo(i, j, bin[j]);
      }
      k++;
    }
  }
  else {
      console.error("RAM is in read mode");
  }
}
