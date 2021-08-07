//Puppy Diaries Begins

var posts = {};

$('#btn-post-today').on('click', function() {
    //alert("clicked");
    var input = document.querySelector("#postDescription");
    localStorage.setItem("#btn-post-today", input.value)
    $("#postDescription").append(input);
    localStorage.getItem("#btn-post-today");
    return input.value
})

$('#btn-post-tomorrow').on('click', function() {
    //alert("clicked");
    var input2 = document.querySelector("#postDescription2");
    localStorage.setItem("#btn-post-tomorrow", input2.value)
    $("#postDescription2").append(input2);
    localStorage.getItem("#btn-post-tomorrow");
    return input2.value
})

$('#btn-post-future').on('click', function() {
    //alert("clicked");
    var input3 = document.querySelector("#postDescription3");
    localStorage.setItem("#btn-post-future", input3.value)
    $("#postDescription3").append(input);
    localStorage.getItem("#btn-post-future");
    return input3.value
})


// Create Post



var savePosts = function() {
    localStorage.setItem("posts", JSON.stringify("posts"));
};

// Post for Today 

    // Add Event Listener for Add Post button
    var buttonEl = document.querySelector("#btn-add");

    buttonEl.addEventListener("click", function() {
        //alert("button clicked");
    });

    // Add Event Listener for Tell 'em! button

    var buttonEl = document.querySelector("#btn-post-today");

    buttonEl.addEventListener("click", function() {
        //alert("button clicked");
    });

    // Add Event Listener for Just Kidding. button

    var buttonEl = document.querySelector("#btn-cancel-today");

    buttonEl.addEventListener("click", function() {
        //alert("button clicked");
    });

//Post for Tomorrow

    //Add Event Listener for Add Post button
    var buttonEl = document.querySelector("#btn-2-add");

    buttonEl.addEventListener("click", function() {
        //alert("button clicked");
    });

    // Add Event Listener for Tell 'em! button

    var buttonEl = document.querySelector("#btn-post-tomorrow");

    buttonEl.addEventListener("click", function() {
        //alert("button clicked");
    });

    // Add Event Listener for Just Kidding. button

    var buttonEl = document.querySelector("#btn-cancel-tomorrow");

    buttonEl.addEventListener("click", function() {
        //alert("button clicked");
    });

// Post for Bucket List!(Future)
    
    //Add Event Listener for Add Post button 
    var buttonEl = document.querySelector("#btn-3-add");

    buttonEl.addEventListener("click", function() {
        //alert("button clicked");
    });

    // Add Event Listener for Tell 'em! button

    var buttonEl = document.querySelector("#btn-post-future");

    buttonEl.addEventListener("click", function() {
        //alert("button clicked");
    });

    // Add Event Listener for Just Kidding. button

    var buttonEl = document.querySelector("#btn-cancel-future");

    buttonEl.addEventListener("click", function() {
        //alert("button clicked");
    });

// Modal Date

    // Activate Date Picker for Today
    $(function() {
        $("datepicker").datepicker();
    });
    
    // Convert to Date Picker for Today
    $("#dateOfPost").datepicker({
        minDate: 0
    });

    // Activate Date Picker for Tomorrow
    $(function() {
        $("datepicker2").datepicker();
    });

    // Convert to Date Picker for Tomorrow
    $("#dateOfPost2").datepicker({
        minDate: 1
    });

    // Activate Date Picker for Future
    $(function() {
        $("datepicker3").datepicker();
    });

    // Convert to Date Picker for Future
    $("#dateOfPost3").datepicker({
        minDate: 2
    });


// Full Page Tabs Start //
function openPage(tabName, elmnt, color) {
    var i, content, tab;

    content = document.getElementsByClassName("content");
    for(i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    tab = document.getElementsByClassName("tab");
    for(i = 0; i < tab.length; i++) {
        tab[i].style.backgroundColor = "";
    }

    document.getElementById(tabName).style.display = "block";
    elmnt.style.backgroundColor = color;

};

// This tab will open by default 
document.getElementById("defaultOpen").click();

// Full Page Tabs Ends //
















// Modal Starts Here //






    //Modal Triggered
  //  $("#postModal").on("show.bs.modal", function() {
        //clear values
   //     $("#postDescription, #dateOfPost").val("");
  //  });

      // Modal becomes Visible
   // $("postModal").on("shown.bs.modal", function() {
   //     $("#postDescription").trigger("focus");
   // });

    // Close Modal
    //$("#postModal").modal("hide");




// Create Journal Entry Starts Here //

/*var postItemEl = document.createElement("li");
var addPost1El = document.querySelector("#add-today");

postItemEl.textContent = "hello";
addPost1El.appendChild(postItemEl); */
// Create Journal Entry Ends Here //