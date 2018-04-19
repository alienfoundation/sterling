addBtn = document.getElementById("add-btn");
form = document.getElementById("form-container");
closeBtn = document.getElementById("close-btn");

addBtn.addEventListener("click", function(){
    form.style.display = "block";
    addBtn.style.display = "none";
});

closeBtn.addEventListener("click", function(){
    form.style.display = "none";
    addBtn.style.display = "inline-block";
});

function deleteRowFunc(value) {
    document.getElementById("myTable").deleteRow(value);
}


function addRowFunc() {

    var len = document.getElementById("myTable").rows.length;

    var location = document.getElementById("location");
    var role = document.getElementById("role");
    var branch = document.getElementById("branch");

    var table = document.getElementById("myTable");
    var row = table.insertRow(len);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = location.value;
    cell2.innerHTML = "<span class='glyphicon glyphicon-ok'></span>";
    cell3.innerHTML = "Delete";
}