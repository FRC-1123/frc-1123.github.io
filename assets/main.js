$(document).ready(function() {
    $(".dropdown-button").dropdown({hover: false});

    $(".to-underline").addClass("underline");

    var $window = $(window);
    $(".parallax").parallax();
    $window.resize(function() {
        var width = $window.width();
        $(".parallax-container").width(width);
        if (width <= 600)
            $(".parallax-container").css("left", -width*0.05 + "px");
        else if (width <= 992)
            $(".parallax-container").css("left", -width*0.075 + "px");
        else
            $(".parallax-container").css("left", -width*0.15 + "px");
    });
    $(".parallax-container").css("position", "relative");
    $window.resize();

    var sr = ScrollReveal();
    sr.reveal("#members .card", {rotate: {z: 4}, easing: "ease-out", duration: 500});
});
