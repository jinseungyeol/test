$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header').addClass('active')
      $('.lnb-outer').slideUp()
    }
    else {
      $('header').removeClass('active')
      $('.lnb-outer').slideDown()
    }
  })

  /* Slick Slider - Section : Welcome */
  $('.welcome-items').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  /* Slick Slider - Section : Trend & Review */
  $('.trend-items').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('.review-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  /* Section : Etc */ 
  $('.etc-left, .etc-right-tl, .etc-right-tr, .etc-right-bl, .etc-right-br').mouseenter(function(){
    $(this).addClass('active')
  })
  $('.etc-left, .etc-right-tl, .etc-right-tr, .etc-right-bl, .etc-right-br').mouseleave(function(){
    $(this).removeClass('active')
  })

  /* Trigger Function */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.navi, .overlay, body').toggleClass('active')
  })
  $('.navi a').click(function(){
    $('.trigger, .navi, .overlay, body').removeClass('active')
  })
})