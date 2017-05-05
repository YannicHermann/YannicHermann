//Warten bis der DOM-Content geladen ist
document.addEventListener('DOMContentLoaded', function () {
    var works = document.getElementsByTagName("div");
    document.getElementById("buttonMediaDesign").addEventListener("click", function () {
        for (var i = 0; i < works.length; i++) {
            var onlyMediaDesign = works[i].getElementsByClassName("MediaDesign");
            if (onlyMediaDesign.length != 0) {
                works[i].style.display = "block";
            }
            if (onlyMediaDesign.length != 1) {
                works[i].style.display = "none";
            }
        }
        ;
    });
    var works = document.getElementsByTagName("div");
    document.getElementById("buttonInteractiveMedia").addEventListener("click", function () {
        for (var i = 0; i < works.length; i++) {
            var onlyInteractiveMedia = works[i].getElementsByClassName("InteractiveMedia");
            if (onlyInteractiveMedia.length != 0) {
                works[i].style.display = "block";
            }
            if (onlyInteractiveMedia.length != 1) {
                works[i].style.display = "none";
            }
        }
        ;
    });
    var works = document.getElementsByTagName("div");
    document.getElementById("buttonPhotography").addEventListener("click", function () {
        for (var i = 0; i < works.length; i++) {
            var onlyPhotography = works[i].getElementsByClassName("Photography");
            if (onlyPhotography.length != 0) {
                works[i].style.display = "block";
            }
            if (onlyPhotography.length != 1) {
                works[i].style.display = "none";
            }
        }
        ;
    });
    var works = document.getElementsByTagName("div");
    document.getElementById("buttonAllWorks").addEventListener("click", function () {
        for (var i = 0; i < works.length; i++) {
            var allWorks = works[i].getElementsByClassName("works");
            if (allWorks.length != 1) {
                works[i].style.display = "block";
            }
        }
        ;
    });
});
//# sourceMappingURL=Filter.js.map