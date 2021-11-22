const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
};




$(function () {





            /* SLICK-SLIDER */






            /* TOGGLE */

  var nav_toggle = $("#nav_toggle"),
      header = $("#header"),
      nav = $("#nav");

$("#nav_toggle").on("click", function(event) {
  event.preventDefault();

  nav_toggle.toggleClass("active");
  nav.toggleClass("active");
  header.toggleClass("active");

});




         /* DATA-COLLAPSE */

$("[data-collapse]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      blockId = $this.data('collapse'),
      link = $("#link");

  link.toggleClass("active");
  $this.toggleClass("active");
  $(blockId).slideToggle();

});





  /*    */







})














