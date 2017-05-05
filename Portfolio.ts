//Warten bis der DOM-Content geladen ist
document.addEventListener('DOMContentLoaded', function() {

    
    var menu: boolean=false;
    

    
    document.getElementById("hamburger").addEventListener("click", function () {
        if (menu == true) {
            document.getElementById("headernav").style.display ="none";
            menu=false;
        }
        
        else {
            document.getElementById("headernav").style.display = "inline"; 
            menu=true;
        }
    });
});