document.addEventListener("DOMContentLoaded", function(){
    var HomeBtn= document.getElementById('HomeBtn');
    var NewContactBtn = document.getElementById('NewContactBtn');
    var UsersBtn = document.getElementById('UsersBtn');
    var LogoutBtn= document.getElementById('LogoutBtn');
    var HomePage= document.getElementById('home');
    var NewContactPage= document.getElementById('new-contact');
    var UsersPage = document.getElementById('users');
    var LogoutPage= document.getElementById('logout');
    var pages = document.getElementsByClassName('page');
    Array.from(pages).forEach(function(page){
        page.classList.add("hidden");});


    HomeBtn.addEventListener("click", function(){
        Array.from(pages).forEach(function(page){
            page.classList.add("hidden");});
    
    });

    NewContactBtn.addEventListener("click", function(){
        Array.from(pages).forEach(function(page){
            page.classList.add("hidden");});
        NewContactPage.classList.remove("hidden");
    
    });

    UsersBtn.addEventListener("click", function(){
        Array.from(pages).forEach(function(page){
            page.classList.add("hidden");});
        UsersPage.classList.remove("hidden");
    
    });

    LogoutBtn.addEventListener("click", function(){
        Array.from(pages).forEach(function(page){
            page.classList.add("hidden");});
        LogoutPage.classList.remove("hidden");
    
    });


});