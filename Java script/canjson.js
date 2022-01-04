window.addEventListener('load', function () {
    var emps ;
    let _url = "../JSON/employee.json";
    $.ajax({
    url: _url,
    type: "get",
    success: function (data) {
    emps = data;}
    })});
var fName = document.getElementById('fn');
var lName = document.getElementById('ln');
var address = document.getElementById('Address');
var  email = document.getElementById('email');
var age = document.getElementById('age');

var flage = true;
var obj = {};
function getData() {
    var xhr = new XMLHttpRequest();

    // xhr.open("get", "employee.json");
    // xhr.onload = function () {
    //     obj = JSON.parse(xhr.responseText);
    //     AddnewEmp();
    //     SaveData(obj);
    //     }
    // xhr.send();
    xhr.open("get", "../JSON/employee.json");
    xhr.send();
    xhr.onreadystatechange=function(){
        
        if(xhr.readyState==4){
            if (xhr.status==200){
                obj= JSON.parse(xhr.responseText);
                AddnewEmp();
                SaveData(obj);
                console.log(obj)
            }
        }
    }
 
}  


function AddnewEmp() {
   var emp = {
        "FirstName": fName.value,
        "LastName": lName.value,
        "Address": address.value,
        "Email": email.value,
        "Age": age.value,
        "UserName": getUserName(),
        "password": generatePassword(),
        "attandance": "0",
        "times": 0,
        "lates": 0,
        "absent": 0,
        "flage": false,
    }
    console.log(obj);
    obj.push(emp);
}
function SaveData(obj) {
    console.log(obj);
    var _StoreData = new Blob([JSON.stringify(obj, null, 2)], { type: "appliction/json" });
    var Linkelement = document.createElement("a");
    Linkelement.href = window.webkitURL.createObjectURL(_StoreData);
    Linkelement.setAttribute("download", "../JSON/employee.json");
    //append link
    document.body.appendChild(Linkelement);
    //click fire
    Linkelement.click();
    document.body.removeChild(Linkelement);

}
 //----------------sent email with js-------------------------------------//
function getUserName() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (fName.value) + Math.random().toString(36).substr(2, 4);
}

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function sendEmail() {
    getData()
    Email.send({
            Host: "smtp.elasticemail.com",
            Username: "aya.hassan.elsayed769@gmail.com",
            Password: "F5C5912BAEC909CC2971B2825C104A7BF600",
            To: email.value,
            From: "aya.hassan.elsayed769@gmail.com",
            Subject: "Sending Email using javascript",
            Body: ` Welcome ${fName.value}
          your UserName is:${getUserName() }
         and 
         your Password is:${generatePassword()}
         `
        })
        .then(function (message) {
            alert("mail sent successfully")

        });
        

}
