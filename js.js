$(function() {

  var toggle = $("#toggle");

  $("#toggle").on("click", function(event) {
    event.preventDefault();

    toggle.toggleClass("active");
  });



})
