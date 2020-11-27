// Editing some css using JQuery, more of a practice for COMP 1537

$(document).ready(function () {
    setTimeout(function () {
        $("#exampleModal").modal('show');
    }, 2000);

    $("#exampleModalLong").click(function () {
        $("#exampleModalLong").modal('show');
    });

    $("#exampleModalLong2").click(function () {
        $("#exampleModalLong2").modal('show');
    });

    $("#exampleModalLong3").click(function () {
        $("#exampleModalLong3").modal('show');
    });
});

$(function () {
    $('[data-toggle="popover"]').popover()
})

// object-fit polyfill run
objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));

jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
});

jarallax(document.querySelectorAll('.jarallax-keep-img'), {
    keepImg: true,
});