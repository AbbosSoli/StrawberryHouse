$(document).ready(function () {
  $(".as-similar-products-slide").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow:
      '<button class="slick-prev slick-arrow as-white" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.7793 11.62L4.97596 7.81667C4.5268 7.3675 4.5268 6.63251 4.97596 6.18334L8.7793 2.38" stroke="#ED2024" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow as-white" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.2207 11.62L9.02404 7.81667C9.4732 7.3675 9.4732 6.63251 9.02404 6.18334L5.2207 2.38" stroke="#ED2024" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  $(".as-main-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    asNavFor: ".as-mini-slider",
    prevArrow:
      '<button class="slick-prev slick-arrow as-white" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.7793 11.62L4.97596 7.81667C4.5268 7.3675 4.5268 6.63251 4.97596 6.18334L8.7793 2.38" stroke="#ED2024" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow as-white" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.2207 11.62L9.02404 7.81667C9.4732 7.3675 9.4732 6.63251 9.02404 6.18334L5.2207 2.38" stroke="#ED2024" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    });

  $(".as-mini-slider").slick({
    
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    asNavFor: ".as-main-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });

  let t = $("#back-top");
  $(window).on("scroll", function () {
    ($scrollTop = $(window).scrollTop()),
      (t = $("#back-top")),
      $scrollTop > 350 ? t.addClass("visible") : t.removeClass("visible");

    $scrollTop > 0
      ? $(".es-navbar").addClass("es-navbar-fixed")
      : $(".es-navbar").removeClass("es-navbar-fixed");
  });
  ($htmlBody = $("html, body")),
    t.length &&
      t.on("click", function (t) {
        $htmlBody.animate({ scrollTop: 0 }, 200), t.preventDefault();
      });
  $("input[data-plugin='phone-mask']").inputmask({
    mask: "+\\9\\9\\8 99 999-99-99",
  });
  $("input[data-plugin='birthday-mask']").inputmask({ mask: "99.99.9999" });
});
