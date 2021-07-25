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

// This tab will open by default //
document.getElementById("defaultOpen").click();

/*
$(function() {
    $('#tabNames').tabs();
});
*/