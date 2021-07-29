//Google Place Handling 


//Chat Feature Modal??

//Error Modal js
var blModal = document.getElementById("b/lMod");
var blBtn = document.getElementById("search-button");
var modal = document.getElementById("eSearch");
var btn = document.getElementById("search-button");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span = document.getElementsByClassName("close")[0];
    if (searchTerm.text) {
       if (searchTerm.byBand) {
           searchByBand();
       } else if (searchTerm.byLocation) {
           searchByLocation();
       } else {
       // When the user clicks on the button, open the modal
           blModal.style.display = "block";
       // When the user clicks on <span> (x), close the modal
           span1.onclick = function() {
            blModal.style.display = "none";
           }
       // When the user clicks anywhere outside of the modal, close it
           window.onclick = function(event) {
               if (event.target == blModal) {
                   blModal.style.display = "none";
               }
           }
           console.log("error, please choose band or location");
       }
   } else {
       // When the user clicks on the button, open the modal
           modal.style.display = "block";
       // When the user clicks on <span> (x), close the modal
           span.onclick = function() {
           modal.style.display = "none";
           }
       // When the user clicks anywhere outside of the modal, close it
           window.onclick = function(event) {
               if (event.target == modal) {
                   modal.style.display = "none";
               }
           }
       console.log("error, please enter a search term");
   }