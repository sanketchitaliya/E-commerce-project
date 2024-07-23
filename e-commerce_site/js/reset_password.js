email = document.getElementById("emaillogin");
oldpass = document.getElementById("passwordold");
newPassword =  document.getElementById("passwordlogin");
confirmPassword =   document.getElementById("passwordconfirm");


function resetPasswordUser() {
    pureVedaUsers = JSON.parse(localStorage.getItem("login"));
    email = email.value;
    oldpass  = oldpass.value;
    newPassword = newPassword.value;
    confirmPassword = confirmPassword.value;
    
    let indexUser = pureVedaUsers.find(user => user.email === email);
    if (indexUser >= 0) {
        if (pureVedaUsers.password === oldpass) {
            if (newPassword === confirmPassword) {
                pureVedaUsers.password = newPassword;
                localStorage.setItem("register", JSON.stringify(pureVedaUsers));
                location.href ='index.html';          
              }
            else {
                alert("Username and password Are Not matched.");
                
            }
        }
    }
    else {
        alert("User not found.");
       
    }
}