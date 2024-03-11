/* Common */

$(function(){
  // header-include
  $('.header-include').load('../html/header.html',function(){
    $('.search').click(function(){
      $('.searchbox').animate({
        top: '10px'
      }, 1000)
    })
    $('.searchbox .close-btn').click(function(){
      $('.searchbox').animate({
        top : '100%'
      }, 1000)
    });
  });
  

  // Like
  $('.like, .alram, .toggle').click(function(){
    $(this).toggleClass('active')
  });

   // setting
   $('.setting').click(function(){
    $('.settingbox').animate({
      top: '0px'
    }, 1000)
  });
  $('.settingbox .close-btn').click(function(){
    $('.settingbox').animate({
      top: '100%'
    }, 1000)
  });

  // acordian
  $('.ssol_title').click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.ssol_title').removeClass('active')
    $(this).siblings('.ssol_list').slideUp()
    $(this).next('.ssol_list').stop().slideToggle()
  });

  // footer-include
  $('.footer-include').load('../html/footer.html')
});