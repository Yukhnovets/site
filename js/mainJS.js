 new WOW().init();
 window.onscroll = function () {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("myBtn").style.display = "block";
     }
     else {
         document.getElementById("myBtn").style.display = "none";
     }
 }

 function topFunction() {
     if (window.pageYOffset > 0) {
         window.scrollBy(0, -50);
         setTimeout(topFunction, 0);
     }
 }

 function openPage(evt, pageName) {
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(pageName).style.display = "flex";
     evt.currentTarget.className += " active";
 }
