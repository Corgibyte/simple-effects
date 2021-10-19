$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
    
  });

  $("#clickable-life").click(function() {
    $("#answer-text-life").fadeToggle();    
  });

    $("#clickable-speed").click(function() {
      $("#answer-text-speed").fadeToggle();    
    });
});