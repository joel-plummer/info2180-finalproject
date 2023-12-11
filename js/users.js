window.onload = function() {
    var result = document.getElementById('showUser');

    var xhttp = new XMLHttpRequest();  
    var url = "http://localhost/info2180-finalproject/php/dolphin-crm.php?type=showU";
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {  
            result.innerHTML = xhttp.responseText;  
        }
    };
    xhttp.open('GET', url); 
    xhttp.send();  
}
