$(document).ready(function() {

  $("form").submit(function(event) {
    var inputName = $("input#name").val();
    var inputDate = $("input#date").val();
    var inputStart = $("input#start").val();
    var inputEnd = $("input#end").val();

    $(".name").text(inputName);
    $(".date").text(inputDate);
    $(".start").text(inputStart);
    $(".end").text(inputEnd);

    $(".confirmation").show();
    $("span").addClass("fancy");
    event.preventDefault();

  });

});
