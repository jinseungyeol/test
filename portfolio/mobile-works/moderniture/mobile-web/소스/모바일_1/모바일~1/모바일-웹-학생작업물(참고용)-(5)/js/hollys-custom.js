$(function(){
  
  $('.header-include').load('../header.html',function(){
    $('.submenu').eq(0).show()
    $(function(){
      $('.menu li label').click(function(){
          $(this).parent().siblings().children('.submenu').slideUp()
          $(this).next().stop().slideDown()
          $(this).addClass('active');
          $(this).parent().siblings().children('label').removeClass('active')
        })
    })
  })
  $('.footer-include').load('../footer.html')
  
});
