document.addEventListener('DOMContentLoaded', () => {


  /* BURGER */

  burgerActive();

  function burgerActive() {

    let nav_toggle = document.getElementById('nav_toggle'),
        header = document.getElementById('header'),
        nav = document.getElementById('nav'),
        links = document.getElementsByClassName('nav_links'),
        body = document.getElementsByTagName('body'),
        hide_back = document.getElementById('hide_back');


    nav_toggle.addEventListener ('click', (event) => {
      event.currentTarget.classList.toggle('active');
      header.classList.toggle('active');
      nav.classList.toggle('active');
      body[0].classList.toggle('block');
      hide_back.classList.toggle('active');
    });

    for (let i=0; links.length > i; ++i) {
      links[i].addEventListener('click', (event) => {
        for (let i=0; links.length > i; ++i) {
          links[i].classList.remove('active');
        };
        event.currentTarget.classList.add('active');
        nav_toggle.classList.remove('active');
        header.classList.remove('active');
        nav.classList.remove('active');
        body[0].classList.remove('block');
        hide_back.classList.remove('active');
      })
    }

  };




  clickOutside();

  function clickOutside() {

    let nav_toggle = document.getElementById('nav_toggle'),
        header = document.getElementById('header'),
        nav = document.getElementById('nav'),
        body = document.getElementsByTagName('body'),
        hide_back = document.getElementById('hide_back');

    hide_back.addEventListener('click', (event) => {
      event.currentTarget.classList.remove('active');
      header.classList.remove('active');
      nav_toggle.classList.remove('active');
      nav.classList.remove('active');
      body[0].classList.remove('block');
    })
  };




  /* ACCORDEON_COLLAPSE */

  accordeonCollapse();

  function accordeonCollapse() {

    let title = document.getElementsByClassName('accordeon_collapse_title'),
        text = document.getElementsByClassName('accordeon_collapse_text');

    for (let i=0; title.length > i; ++i) {
      title[i].addEventListener('click', (event) => {
        let currentTarget = event.currentTarget,
            activatedText = document.querySelector('.text.accordeon_collapse_text.active');
        if (currentTarget.classList.contains('active')) {
          currentTarget.classList.remove('active');
          activatedText.classList.remove('active');
        } else {
          for (let i=0; title.length > i; ++i) {
            title[i].classList.remove('active');
            text[i].classList.remove('active');
          }
          event.currentTarget.classList.toggle('active');
          text[i].classList.toggle('active');
        }
      })
    }
  }







})





$(function () {


            /* DATA-SCROLL */

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      nav_toggle = $('#nav_toggle'),
      nav = $('#nav'),
      header = $('#header'),
      blockId = $this.data('scroll'),
      links = $("#nav_links"),
      blockOffset = $(blockId).offset().top - document.querySelector('header').offsetHeight;

  if (nav.toggleClass("active")) {
    nav_toggle.removeClass("active");
    nav.removeClass("active");
    header.removeClass("active");
  }

  $("html, body").animate ({
  scrollTop: blockOffset
  }, 900);
});








         /* DATA-COLLAPSE */

$("[data-collapse]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      blockId = $this.data('collapse');

  if (window.innerWidth >= 768 && (blockId == '#footer_collapse1' || blockId == '#footer_collapse2' || blockId == '#footer_collapse3')) {
    return;
  }


  $this.toggleClass("active");
  $(blockId).slideToggle();

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

  $('.brands_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    easing: 'ease',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 769,
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














