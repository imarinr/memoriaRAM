function toASCIIValues(cadena) {
    let asciiValues = [];
    for(let i = 0; i < cadena.length; i++) {
        asciiValues[i] = cadena.charCodeAt(i);
    }

    return asciiValues;
}

function to8Bit(value) {
    let binVec = [];
    const DIVISOR = 2;
    let dividendo, cociente, residuo;
    let i = 7;

    cociente = -1;
    dividendo = value;

    while(cociente != 0) {
        cociente = Math.floor(dividendo / DIVISOR);
        residuo = dividendo % DIVISOR;
        binVec[i] = residuo;
        dividendo = cociente;
        i--;
    }

    while(i >= 0) {
        binVec[i] = 0;
        i--;
    }

    return binVec;
}