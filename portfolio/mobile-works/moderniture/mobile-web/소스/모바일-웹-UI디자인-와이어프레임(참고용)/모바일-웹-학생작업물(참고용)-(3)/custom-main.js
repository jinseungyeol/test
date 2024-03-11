$(function(){
	//Load Event
	$('.chart-item a').click(function(){
		var url = 'index-detail.html';
		$(location).attr('href', url);
	})
	//Header
	$('.gnb a').click(function(){
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
	})
	//Banner
	$('.banner').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});
	//Charts Slick
	$('.concept-chart-thum').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});
	$('.best-chart-thum').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
//		autoplay: true
	});
	//Popular-chart Tab
	$('.title div span').click(function(){
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
	})
	$('.title div span:first-child').click(function(){
		$('.popular-all').siblings().removeClass('active')
		$('.popular-all').addClass('active')
	})
	$('.title div span:nth-child(2)').click(function(){
		$('.popular-ko').siblings().removeClass('active')
		$('.popular-ko').addClass('active')
	})
	$('.title div span:last-child').click(function(){
		$('.popular-eng').siblings().removeClass('active')
		$('.popular-eng').addClass('active')
	})
})
	