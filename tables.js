var workTable;

function setTable(tableid) {
    workTable = document.getElementById(tableid);
}

function getDimensions(hasHeaderRow) {
    let dim = [];
    let count = 0;

    if (hasHeaderRow) {
        count = 1;
    }

    dim[0] = workTable.rows.length;
    dim[1] = workTable.rows[count].cells.length;
    return dim;
}

function readValue(row, col) {
    return workTable.rows[row].cells[col].innerHTML;
}

function writeTo(row, col, value) {
    workTable.rows[row].cells[col].innerText = value;
}

function copyData() {

}