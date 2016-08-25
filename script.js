$(document).ready(function () {
  $(document).on("keydown", function(key) {
    if (key.which === 66) { // "B"
      $(".testing").toggleClass("border-test");
    }
  });
  // $(".dropdown-super-menu").hover(function () {
  //   $(".dropdown-sub-menu").show();
  // });
  // $(".dropdown-sub-menu").mouseleave(function () {
  //   $(".dropdown-sub-menu").hide();
  // });
  // $(".dropdown-super-menu").mouseleave(function () {
  //   $(".dropdown-sub-menu").hide();
  // });
}); //end of jQuery body
