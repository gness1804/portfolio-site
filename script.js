$(document).ready(function () {
  $(document).on("keydown", function(key) {
    if (key.which === 66) { // "B"
      $(".testing").toggleClass("border-test");
    }
  });
  $(".dropdown-menu-actual").hide();
  $(".dropdown-menu-container").hover(function () {
    if (window.outerWidth > 875) {
      $(this).children().fadeIn(500);
    }
  });
  $(".dropdown-menu-container").mouseleave(function () {
    $(".dropdown-menu-actual").fadeOut(500);
  });
}); //end of jQuery body
