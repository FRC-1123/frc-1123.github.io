$(document).ready(function() {
    $(".dropdown-button").dropdown({hover: false});

    $(".slider").slider({interval: 5000, height: null});

    $("#hero-title.typed").typed({
        strings: ["AIM Robotics"],
        typeSpeed: 120,
    });

    $window = $(window);
    var height = Math.max($window.height(), $(".slider-text").height()+200);
    $(".slider").height(height - 40);
    $(".slider .slides").height(height - 40);


    $navbar = $(".fade-color-nav");
    $window.scroll(function() {
        var frac = $window.scrollTop() / height;
        if (frac > 1)
            frac = 1;
        $navbar.css("background-color", "rgb(" + Math.round(13*frac).toString() + ", " + Math.round(71*frac).toString() + ", " + Math.round(161*frac).toString() + ")");
    });

    var sr = ScrollReveal();
    sr.reveal(".news-div .card-panel", {scale: "0.95"});

    var options = [
        {selector: "#news.to-underline", offset: 100, callback: underline},
        {selector: "#sponsors.to-underline", offset: 100, callback: underline},
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
