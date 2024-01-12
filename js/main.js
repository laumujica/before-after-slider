$(function() {
    $("input.slider").on("input change", function(event) {
        var element = $(this).parents("div.container");
        var pos = event.target.value;

        element.find("div.before").css({ width: pos + "%", left: 0 });
        element.find("div.slider-button").css({ left: "calc(" + pos + "% - 18px)" });
    });
});
