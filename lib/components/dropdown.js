const $ = require('jquery');

$(document).ready(() => {
  $(".dropdown-menu-actual").hide();
  $(".dropdown-menu-container").hover(function () {
    if (window.outerWidth > 920) {
      $(this).children().fadeIn(500);
    }
  });
  $(".dropdown-menu-container").mouseleave(function () {
    $(".dropdown-menu-actual").fadeOut(500);
  });
});
