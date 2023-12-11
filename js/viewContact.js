document.addEventListener('DOMContentLoaded', function() {
    
    function viewContact(id){
        var result = document.getElementById('sel_contact');
        var xhttp = new XMLHttpRequest();  
        var url = "http://localhost/info2180-finalproject/php/dolphin-crm.php?type=viewC&sel_id="+id;
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {  
                result.innerHTML = xhttp.responseText;  
            }
        };
        xhttp.open('GET', url); 
        xhttp.send();
    }

});