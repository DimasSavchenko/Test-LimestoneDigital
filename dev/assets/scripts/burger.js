'use strict';

$(document).ready(function () {

  $("a").click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
    return false;
  });

  $(".toggle").click(function () {
    $(".down").toggleClass('downstart');
    $(".fade").toggleClass("fadestart");
    $(".up").toggleClass("upstart");
    $(".burger").toggleClass('burger--active');
  });

  $(".burger__link").click(function () {
    $(".toggle").click();
  });
});