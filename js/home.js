window.onload = function() {
    var HomeBtn= document.getElementById('HomeBtn');
    var NewContactBtn = document.getElementById('NewContactBtn');
    var UsersBtn = document.getElementById('UsersBtn');
    var LogoutBtn= document.getElementById('LogoutBtn');
    var HomePage= document.getElementById('home');
    var NewContactPage= document.getElementById('new-contact');
    var UsersPage = document.getElementById('users');
    var LogoutPage= document.getElementById('logout');
    var divs = document.querySelectorAll('div');

    NewContactBtn.addEventListener("click", function(e){
        NewContactPage.classList.remove("hidden");
    
    });

}