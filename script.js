function addRecord() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var food = getSelectedFood();
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cells = [];

    for (var i = 0; i < 8; i++) {
        cells[i] = newRow.insertCell(i);
    }

    cells[0].innerHTML = firstName;
    cells[1].innerHTML = lastName;
    cells[2].innerHTML = address;
    cells[3].innerHTML = pincode;
    cells[4].innerHTML = gender;
    cells[5].innerHTML = food.join(', ');
    cells[6].innerHTML = state;
    cells[7].innerHTML = country;

    document.getElementById('myForm').reset();
}

function getSelectedFood(){
    var selectedFood = [];
    var checkboxes = document.getElementsByName("food");
    for (let i=0; i < checkboxes.length; i ++){
        if (checkboxes[i].checked){
            selectedFood.push(checkboxes[i].value);
        }
    }
    return selectedFood;
}