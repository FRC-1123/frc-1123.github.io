$(document).ready(function() {
    $(".dropdown-button").dropdown({hover: false});

    $(".to-underline").addClass("underline");

    $(".parallax").parallax();

    var sr = ScrollReveal();
    sr.reveal("#members .card", {rotate: {z: 4}, easing: "ease-out", duration: 500});
});
