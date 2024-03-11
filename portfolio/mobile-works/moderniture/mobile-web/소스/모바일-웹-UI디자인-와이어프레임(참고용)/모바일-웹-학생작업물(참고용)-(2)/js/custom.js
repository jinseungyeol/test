$(function(){
  /* slick slider */
  $('.welcome-cotent').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false
  });
  $('.event-banner-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false
  });

  //trigger
  $('.trigger').click(function(){
    $('header, body').toggleClass('active')
  })
  $('.overlay').click(function(){
    $('header, body').removeClass('active')
  })
  
})