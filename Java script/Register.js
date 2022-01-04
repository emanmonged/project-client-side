
    //Go to profile page 
    (function () {
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    else {
                       
                            // Save data to sessionStorage 

                        if (this.id == 'logForm' ) {
                            if(checkUser()){
                                window.localStorage.setItem('username',UserName.value);
                            if (Pass.value == "" && UserName.value=="") {
                                this.action =" ../Html/admin.html";
                                this.submit();
                            }
                            else if (pass.value == "" && UserName.value=="" ) {

                                this.action = ".";
                                alert('Welcome Back')
                                this.submit();

                            }
                            else{
                                this.action = "#";
                                alert('Welcome Back')
                                this.submit();
                            }
                        }

                            else {
                                alert('This user name or password not right ,plz try again')
                            }

                        }
                        else {
                            getData();
                        }
                        
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()

function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8);
}
function validEmail(event) {
    var key = event.keyCode;
    return email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
}
