$(document).ready(function() {
    $(".dropdown-button").dropdown({hover: false});

    $(".slider").slider({interval: 5000});

    $("#hero-title.typed").typed({
        strings: ["AIM Robotics"],
        typeSpeed: 120,
    });

    $(".parallax").parallax();

    $window = $(window);
    $navbar = $(".fade-color-nav");
    $window.scroll(function() {
        var frac = $window.scrollTop() / $window.height();
        $navbar.css("background-color", "rgb(" + Math.round(13*frac).toString() + ", " + Math.round(71*frac).toString() + ", " + Math.round(161*frac).toString() + ")");
    });

    var sr = ScrollReveal();
    sr.reveal("#news-div .card-panel", {viewFactor: 0.3, duration: 1000});

    var options = [
        {selector: "#intro.to-underline", offset: 100, callback: underline},
        {selector: "#news.to-underline", offset: 100, callback: underline}
    ];
    Materialize.scrollFire(options);
});

function underline(el) {
    $(el).addClass("underline");
}
