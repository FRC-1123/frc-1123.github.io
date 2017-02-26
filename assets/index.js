$(document).ready(function() {
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
        if (frac > 1)
            frac = 1;
        $navbar.css("background-color", "rgb(" + Math.round(13*frac).toString() + ", " + Math.round(71*frac).toString() + ", " + Math.round(161*frac).toString() + ")");
    });

    var sr = ScrollReveal();
    sr.reveal("#news-div .card-panel", {viewFactor: 0.3, duration: 1000});

    var options = [
        {selector: "#intro.to-underline", offset: 100, callback: underline},
        {selector: "#news.to-underline", offset: 100, callback: underline},
        {selector: ".promo-table", offset: 100, callback: zoomPromo},
    ];
    Materialize.scrollFire(options);
});

function underline(el) {
    $(el).addClass("underline");
}

function zoomPromo(el) {
    $(".promo-table .col").velocity("transition.slideUpIn", {stagger: 200});
}
