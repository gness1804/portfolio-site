$(document).ready(function () {
  $(document).on("keydown", function(key) {
    if (key.which === 66) { // "B"
      $(".testing").toggleClass("border-test");
    }
  });
  $(".nav-bar-list").hover(function () {
      if (window.outerWidth > 875) {
        $(".dropdown-sub-menu").fadeIn(500);
      }
  });
  $(".nav-bar-list").mouseleave(function () {
    $(".dropdown-sub-menu").fadeOut(500);
  });
  // $(".dropdown-sub-menu").mouseleave(function () {
  //   $(".dropdown-sub-menu").hide();
  // });
  // $(".dropdown-super-menu").hover(function () {
  //   $(".dropdown-sub-menu").show();
  // });
}); //end of jQuery body
