window.addEventListener('load',function(){
    var btn = document.getElementById("logi");
    let username= document.getElementById("UserName");
    let password= document.getElementById("pass");
    console.log(btn);
    btn.addEventListener('click',function(){
        console.log("Hello");
        var xhr = new XMLHttpRequest();
        xhr.open("get", '../JSON/employee.json');
        xhr.onload = function() {
            console.log("from on load xhr");
            arr = JSON.parse(xhr.responseText);
            console.log(arr);
           for (let i = 0; i < arr.length; i++) {
               console.log(username.value);
            if ((username.value) == "ayaovsh" && (password.value) == "rLza9h8F") {
                console.log("hello")
                window.location.href ='admin.html';
                return;
            } else if ((username.value) == "supadminsupr" && (password.value) == "xhpeBVBm") {
                console.log("hello")
                window.location.replace ('subadmin.html');
                return;
            } else if ((username.value) == arr[i].UserName && (password.value) == arr[i].Password) {
                if (arr[i].flag == "true") {
                    localStorage.clear();
                    localStorage.setItem('username', [i].UserName);
                    window.location.replace('Employee.html');
                }
            }
        }
    }
    xhr.send();
});
});