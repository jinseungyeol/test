$(function(){
  // Section : Header
  $('.navi').click(function(){
    $('.overlay').fadeToggle()
    $('.header-inner span').toggleClass('active')
    $('body').toggleClass('active')
  })

  // GNB
  $('.gnb a').click(function(){
    $('.overlay').fadeOut()
    $('body').removeClass('active')
    $('.header-inner span').removeClass('active')
  })

  // Section : Practical Slick Slider
  $('.practical-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  // WOW JS
  wow = new WOW({
    boxClass: 'wow', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  })
  wow.init();
})