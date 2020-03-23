$("#msg").fadeIn("slow");
setTimeout(function() { $("#msg").fadeOut("slow") }, 2000);

setTimeout(function() { $("#mainContainer").fadeIn("slow") }, 2500);

function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

}

var activeClass = 1;
$(".button").hover(function() {
    $(this).addClass("highlighted");
}, function() {
    $(this).removeClass("highlighted");
})

$(".button").click(function() {
    $(this).toggleClass("active");
    var id = "#" + $(this).attr("id") + "Panel";
    $(id).toggleClass("hidden");
    if ($(id).attr("class") == "panel hidden") {
        activeClass -= 1;
    } else {
        activeClass += 1;
    };
    $(".panel").width($(window).width() / activeClass - 4);
})

$(".panel").height($(window).height() - $("#div1").height() - 8);
$(".panel").width($(window).width() / activeClass - 4);

updateOutput();

$("textarea").on('change keyup paste', function() {

    updateOutput();


});