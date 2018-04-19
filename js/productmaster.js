function newRow(value, color) {

    var len = document.getElementById("myTable").rows.length;

    var location = document.getElementById("location");
    var role = document.getElementById("role");
    var branch = document.getElementById("branch");

    var inp = document.createElement("INPUT");
    inp.setAttribute("type", "text");

    var table = document.getElementById("myTable");
    var row = table.insertRow(value+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    cell10.setAttribute("class", "action");
    row.classList.add(color);

    // var inp = document.createElement("INPUT");
    // inp.setAttribute("type", "text");

    var inp1 = "<input type='text' name='field1'>";
    var inp2 = "<input type='text' name='field2'>";
    var inp3 = "<input type='text' name='field3'>";
    var inp4 = "<input type='text' name='field4'>";
    var inp5 = "<input type='text' name='field5'>";
    var inp6 = "<input type='text' name='field6'>";
    var inp7 = "<input type='text' name='field7'>";
    var inp8 = "<input type='text' name='field8'>";
    var inp9 = "<input type='text' name='field9'>";

    cell1.innerHTML = inp1;
    cell2.innerHTML = inp2;
    cell3.innerHTML = inp3;
    cell4.innerHTML = inp4;
    cell5.innerHTML = inp5;
    cell6.innerHTML = inp6;
    cell7.innerHTML = inp7;
    cell8.innerHTML = inp8;
    cell9.innerHTML = inp9;
    cell10.innerHTML = "<input type='submit' value='Save'></input>";
    cell10.setAttribute("colspan", "2");

}

function deletefunc(value) {
    document.getElementById("myTable").deleteRow(value);
}