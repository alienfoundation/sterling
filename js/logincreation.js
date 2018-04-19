function deleteRowFunc(value) {
    document.getElementById("myTable").deleteRow(value);
}

function editRowFunc(value) {
    rowne = document.getElementById("r"+value+"1");
    rowe = document.getElementById("r"+value+"2");
    rowne.style.display = "none";
    rowe.style.display = "table-row";
}