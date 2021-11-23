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




            /* DATA-SCROLL */

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $this.data('scroll'),
    nav_links = $("#nav_links"),
    blockOffset = $(blockId).offset().top - document.querySelector('header').offsetHeight;

  if (nav.toggleClass("active")) {
    nav_toggle.removeClass("active");
    nav.removeClass("active");
    header.removeClass("active");
  }

  $("#nav a").removeClass("active");
  $this.addClass("active");

  $("html, body").animate ({
  scrollTop: blockOffset
  }, 900);
});




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





            /* SLIDER */

  if ($(window).width() <= 767) {
    $('.slider').slick( {
      slidesToShow: 1,
      slideToScroll: 1,
      arrows: false,
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 500,
      easing: 'ease',
      waitForAnimate: false,
  });

  }










})














