var selectedRow = null;
function FormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null) {
        insertNewRecord(formData);
    }
    else {

    }
}

//Retrive the data 
function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["address"] = document.getElementById("address").value;
    formData["pincode"] = document.getElementById("pincode").value;
    formData["state"] = document.getElementById("state").value;
    formData["country"] = document.getElementById("country").value;
    return formData;
}

// Insert the Data
function insertNewRecord(data) {
    var table = document.getElementById("infoList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fname;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.lname;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.address;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.pincode;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.state;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.country;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onclick='onDelete(this)'><i class="fa fa-trash"></i></button>`;
}

//Delete the Data
function onDelete(td) {
    if(confirm('Do you want to  delete this')) {
        row = td.parentElement.parentElement;
        document.getElementById('infoList').deleteRow(row.rowIndex);
    }
}