
window.onload = function() {
    var login = document.getElementById('login');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var result = document.getElementById('result');


    login.addEventListener("click", function(element){
        element.preventDefault();
    
        rhttp = new XMLHttpRequest();
        var url = "http://localhost:8888/info2180-finalproject/php/dolphin-crm.php?type=login&email="+email.value+"&password="+password.value;
        rhttp.onreadystatechange = toHome;
        rhttp.open('GET', url);
        rhttp.send();
    });


    function toHome(){
        if (rhttp.readyState == 4 && rhttp.status == 200){
            var response = rhttp.responseText.trim();
            console.log(response);
           if (response === 'success'){
                window.location.href = '../html/home.html';s
                // console.log(response);
           }
           else{
            result.innerHTML="<p>" + response + "</p>";
           }
        }
    }


}


