$(function(){
  // ######### Footer Include ########
  $('.include-footer').load('../include/footer.html', function(){
    $('.trigger').click(function(){
      $('.nav, body, .footer-overlay').toggleClass('active')
    })
    $('.nav-close').click(function(){
      $('.nav, body, .footer-overlay').removeClass('active')
    })
  });

  // // ######### FAQ ########
  // Section : FAQ Content
  $('.faq-title').click(function(){
    $(this).next().slideToggle()
    $(this).toggleClass('active')
    $(this).parent().siblings().children('.faq-content').slideUp()
    $(this).parent().siblings().children('.faq-title').removeClass('active')
  })

  // ######### Shopping Cart ########
  $('.cart-header span').click(function(){
    $('.cart-item, .cart-header em').addClass('active')
    $(this).addClass('active')
  })
  $('.cart-header em').click(function(){
    $('.cart-item').removeClass('active')
    $(this).removeClass('active')
    $('.cart-header span').removeClass('active')
  })

  // ######### main ########
  // Section : Header
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.main-header').addClass('active')
    }
    else {
      $('.main-header').removeClass('active')
    }
  });

  // Section : Welcome
  $('.welcome').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000
  });

  // Section : Best-Seller
  $('.best-items').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // Section : Review
  $('.review-photo').slick({
    infinite: true,
    slidesToShow: 1.2,
    slidesToScroll: 1
  });

  // ######### Detail Product ########
  $('.detail-photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.detail-heart span').click(function(){
    $(this).toggleClass('active')
  })
  $('.detail-name b').click(function(){
    $(this).toggleClass('active')
    $(this).siblings().removeClass('active')
  });


  // Section : Detail Together
  $('.together-items').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // Section : Detail Desc
  $('.detail-desc-title').click(function(){
    $(this).toggleClass('active')
    $(this).next().slideToggle()
    $(this).parent().siblings().children('.detail-desc-content').slideUp()
    $(this).parent().siblings().children('.detail-desc-title').removeClass('active')
  });

  // Section : Detail Similar
  $('.similar-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // Detail-Product Btn Buy
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.detail-btn-buy').addClass('active')
    }
    else {
      $('.detail-btn-buy').removeClass('active')
    }
  });

  $('.detail-btn-buy').click(function(){
    $('.detail-caption, .detail-overlay, body').addClass('active')
  });

  $('.detail-caption > a, .detail-caption-cart a').click(function(){
    $('.detail-caption, .detail-overlay, body').removeClass('active')
  });
})

