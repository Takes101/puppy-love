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
//document.getElementById("defaultOpen").click();

// Full Page Tabs Ends //

// Add Event Listener for adding post
var buttonEl = document.querySelector("#btn-add");

buttonEl.addEventListener("click", function() {
    //alert("button clicked");
});

var buttonEl = document.querySelector("#btn-2-add");

buttonEl.addEventListener("click", function() {
    //alert("button clicked");
});

var buttonEl = document.querySelector("#btn-3-add");

buttonEl.addEventListener("click", function() {
    //alert("button clicked");
});

//Puppy Diaries Begins

var post = {};

var savePost = function() {
    localStorage.setItem("post", JSON.stringify("post"));
}

var loadPost = function() {
    post = JSON.parse(localStorage.getItem("post"));
    if (!post) {
        post = {
            today: [],
            tomorrow: [],
            future: []
        };
    }

}












// Create Journal Entry Starts Here //
var postItemEl = document.createElement("li");
var addPost1El = document.querySelector("#add-today");

postItemEl.textContent = "hello";
addPost1El.appendChild(postItemEl);
// Create Journal Entry Ends Here //


// Load Journal Entry Starts Here //
// Load Journal Entry Ends Here //


// Save Journal Entry Starts Here //
// Save Journal Entry Ends Here //

// Delete Journal Entry Starts Here //
// Delete Journal Entry Ends Here //

// Modal Functions Starts Here //
// Modal Functions End Here //