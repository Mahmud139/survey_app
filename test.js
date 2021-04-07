function onformSubmit(){
    var formData = readFormData();
}

function readFormData() {
    var formData = {};
    formData["fieldName"] = document.getElementById("fieldName").value;
    formData["fieldValue"] = document.getElementById("fieldValue").value;
    formData["status"] = document.getElementById("salary").value;
    return formData;
}

var check_box = `<td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
<div class="mdc-checkbox mdc-data-table__row-checkbox">
    <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="u0"/>
    <div class="mdc-checkbox__background">
    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
    </svg>
    <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mdc-checkbox__ripple"></div>
</div>
</td>`
function insertNewRecord(data) {
    var table = getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = check_box
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fieldName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fieldValue;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.status;
}