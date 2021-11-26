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


$("[data-coll]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      blockId = $this.data('collapse');

  if (window.innerWidth < 768) {
    $(blockId).slideToggle();
  }
});




            /* SLIDER */

  if($(window).width() < 768 ) {
    $('.services_slider').slick( {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      easing: 'ease',
      centerMode: true,
      waitForAnimate: false,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        },
      ]
  });
  };

  $(".brands_slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    easing: 'ease',
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
});













})














