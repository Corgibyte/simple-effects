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

    $(".to-dark").click(function() {
      $(".toggle-button").removeClass("to-dark");
      $(".toggle-button").addClass("to-light");
      $("body").removeClass();
      $("body").addClass("dark");
    });

    $(".to-light").click(function() {
      $(".toggle-button").removeClass("to-light");
      $(".toggle-button").addClass("to-dark");
      $("body").removeClass();
      $("body").addClass("light");
    });
});