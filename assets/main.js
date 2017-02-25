$(document).ready(function() {
    $(".dropdown-button").dropdown({hover: false});

    $(".slider").slider({interval: 5000});

    var options = [
        {selector: "#news", offset: 200, callback: underline}
    ];
    Materialize.scrollFire(options);
});

function underline(el) {
    $(el).addClass("underline");
}
