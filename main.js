console.log(mdc);
        const drawer =mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

        const dataTable = mdc.dataTable.MDCDataTable.attachTo(document.querySelector('.mdc-data-table')); 

        const topAppBar =mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
        topAppBar.setScrollTarget(document.getElementById('drawer'));
        topAppBar.listen('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
        });

        const menu1 =mdc.menu.MDCMenu.attachTo(document.querySelector('#accmenu'));
        const accbtn = document.querySelector('#accbar');
        accbtn.addEventListener("click",()=>{
            menu1.open = !menu1.open;
        });

        const menu2 =mdc.menu.MDCMenu.attachTo(document.querySelector('#fedmenu'));
        const fedbtn = document.querySelector('#fedbtn');
        fedbtn.addEventListener("click",()=>{
            menu2.open = !menu2.open;
        });

        const textFieldElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
        textFieldElements.forEach((textFieldEl) => {
            mdc.textField.MDCTextField.attachTo(textFieldEl); 
        });

        const dialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));


         // CURD operation

        const add_btn = document.querySelector('#add_btn');
        add_btn.addEventListener("click", ()=>{
            dialog.open();
            dialog.scrimClickAction="";
            dialog.autoStackButtons = false;
            resetForm();
            if (save_btn.style.display != "block") {
                save_btn.style.display = "block";
            }
            
            var change_btn = document.querySelector('#change_btn');
            if (change_btn.style.display != "none") {
                change_btn.style.display = "none";
            }
        
        });

        function resetForm() {
            document.getElementById("fieldName").value = "";
            document.getElementById("fieldValue").value = "";
            document.getElementById("status").checked = false;
        }


        const save_btn = document.querySelector('#save_btn');
        save_btn.addEventListener("click",()=>{
            var formData = readFormData();
            insertNewRecord(formData);
            resetForm();
        });


        function readFormData() {
            var formData = {};
            formData["fieldName"] = document.getElementById("fieldName").value;
            formData["fieldValue"] = document.getElementById("fieldValue").value;
            formData["status"] = checkCheckbox();
            return formData;
        }

        function checkCheckbox() {  
        var yes = document.getElementById("status");
        if (yes.checked == true){
            var y = document.getElementById("status").value; 
            return y;
        }
        else{
            return ""
        }
        }  

    var counter = 0;
    var parentContainer = document.getElementById("parent_container");
    
    function insertNewRecord(data) {
        var html = `<tr data-row-id="u`+counter+`" class="mdc-data-table__row">
            <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
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
        </td>
        <th class="mdc-data-table__cell" scope="row" >`+data.fieldName+`</th>
        <td class="mdc-data-table__cell">`+data.fieldValue+`</td>
        <td class="mdc-data-table__cell">`+data.status+`</td>
        <td class="mdc-data-table__cell"><button onclick="edit(this);" id="editID`+counter+`" data-id="settings::2" class="mdc-icon-button material-icons">create</button></td>
    </tr>`

    parentContainer.insertAdjacentHTML('beforeend',html);

    }

    function edit(tr){
        //console.log(alert("hello"));
        //var parent_node = document.getElementById(editID).parentNode.parentNode;
        dialog.open();
        dialog.scrimClickAction="";
        dialog.autoStackButtons = false;
        selectedRow = tr.parentElement.parentElement;
        document.getElementById("fieldName").value = selectedRow.cells[1].innerText;
        document.getElementById("fieldValue").value = selectedRow.cells[2].innerText;
        if(selectedRow.cells[3].innerText == "Active"){
            document.getElementById("status").checked = true;
        }
        else{
            document.getElementById("status").checked = false;
        }
        var save = document.querySelector('#save_btn');
        if (save.style.display != "none") {
            save.style.display = "none";
        }
        
        var change_btn = document.querySelector('#change_btn');
        if (change_btn.style.display != "block") {
            change_btn.style.display = "block";
        }

        change_btn.addEventListener("click",()=>{
            var updatedformData = readFormData();
           // console.log(formData);
            updateFormData(updatedformData);
            //resetForm();
        });
        
    }

    function updateFormData(formData) {
        selectedRow.cells[1].innerText = formData.fieldName;
        selectedRow.cells[2].innerText = formData.fieldValue;
        selectedRow.cells[3].innerText = checkCheckbox();
    }



