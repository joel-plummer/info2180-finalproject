
window.onload = function() {
    var newUser = document.getElementById('addUser');
    var userError = document.getElementById('newUserError');
    var fname;
    var lname;
    var email;
    var pass;
    var role;


    newUser.addEventListener("click", function(element){
        element.preventDefault();

        fname = document.getElementById('u-first-name').value.trim();
        lname = document.getElementById('u-last-name').value.trim();
        email = document.getElementById('u-email').value.trim();
        pass = document.getElementById('u-pass').value.trim();
        role = document.getElementById('u-role').value.trim();

        var info = [fname, lname, email, pass, role];
        var check;
        check = validateForm(info);

        if (!check[0]){
            userError.textContent = check[1];
        }
        else{
            rhttp = new XMLHttpRequest();
            var url = "http://localhost/info2180-finalproject/php/dolphin-crm.php?type=addU&fname="+fname
                        +"&lname="+lname
                        +"&email="+email
                        +"&pass="+pass
                        +"&role="+role;
            rhttp.onreadystatechange = addUser;
            rhttp.open('GET', url);
            rhttp.send();
            // userError.textContent = "Success";
        }
    });


    function addUser(){
        if (rhttp.readyState == 4 && rhttp.status == 200){
            var response = rhttp.responseText.trim();
            userError.textContent = response;
        }
    }


    function validateForm(info) {
        for (var field of info) {
            if (field===""){
                return [false, 'Please do not leave any fielcds blank'];
            }
          }

        var email = info[2];
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailPattern.test(email);
        if (!isValidEmail) {
            return [false, 'Please enter a valid email address.']
        } 


        var pass = info[3];
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        const isValidPass = passwordPattern.test(pass);
        if (!isValidPass) {
            return [false, 'Please enter a valid password.']
        } 
        
        return [true,'']; 
    
      }

}


