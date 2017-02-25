$(document).ready(function() {
    $(".dropdown-button").dropdown({hover: false});

    $(".slider").slider({interval: 5000});

    var sr = ScrollReveal();
    sr.reveal("#news-div .card-panel", {viewFactor: 0.3, duration: 1000});

    var options = [
        {selector: "#news", offset: 150, callback: underline}
    ];
    Materialize.scrollFire(options);
});

function underline(el) {
    $(el).addClass("underline");
}
