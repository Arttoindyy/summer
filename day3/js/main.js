let userSelected = null;

function Read() {
    let data = {};
    data["txtFullName"] = document.getElementById("txtFullName").value;
    data["txtAddress"] = document.getElementById("txtAddress").value;
    data["txtSalary"] = document.getElementById("txtSalary").value;

    return data;
}

function FormSubmit() {
    let formData = Read();
    if (userSelected == null){
        Create(formData);
    }           
    else{
        Update(formData);
    }
            
    ClearForm();
}

function Create(data) {
    var table = document.getElementById("tblHuman").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.txtFullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.txtAddress;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.txtSalary;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="Edit(this)">แก้ไข</a>
                       <a onClick="Delete(this)">ลบ</a>`;
}

function ClearForm() {
    document.getElementById("txtFullName").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtSalary").value = 0;

    userSelected = null;
}

function Edit(td) {
    userSelected = td.parentElement.parentElement;
    document.getElementById("txtFullName").value = userSelected.cells[0].innerHTML;
    document.getElementById("txtAddress").value = userSelected.cells[1].innerHTML;
    document.getElementById("txtSalary").value = userSelected.cells[2].innerHTML;
}

function Update(formData) {
    userSelected.cells[0].innerHTML = formData.txtFullName;
    userSelected.cells[1].innerHTML = formData.txtAddress;
    userSelected.cells[2].innerHTML = formData.txtSalary;
}

function Delete(td) {
    if (confirm('คุณต้องการลบข้อมูลแถวนี้ ใช่หรือไม่?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tblHuman").deleteRow(row.rowIndex);

        ClearForm();
    }
}