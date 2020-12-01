// Editing some css using JQuery, more of a practice for COMP 1537

$(document).ready(function () {
    $(".btn-primary").css({
        "background": "#6351ce",
        "border-color": "#6351ce"
    });
    $("#searchButton").css("margin-left", "1rem");
    $(".searchContainer").css("justify-content", "center");
    $(".btn-primary").css({"background": "#6351ce","border-color": "#6351ce"});
    $("#searchButton").css("margin-left", "1rem");
    $(".searchContainer").css("justify-content", "center");

    
    $('#createButton').on("click", async function(){ 

        var threads = await db.collection('discussions');
        var name = document.getElementById("Habit").value;

        await threads.doc(name).set({
            views : 0,
            textInside : document.getElementById("TextArea").value,
            topic: document.getElementById("exampleInputName").value
        })

        location.href = "Board.html";

    })

    });