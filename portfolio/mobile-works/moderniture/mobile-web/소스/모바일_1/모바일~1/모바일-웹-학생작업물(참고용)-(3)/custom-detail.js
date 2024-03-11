$(function(){
	//Overlay
	$('.overlay').click(function(){
		$(this).removeClass('active')
		$('.ban-modal').removeClass('active')
		$('body').removeClass('active')
		$('.detail-info-modal').removeClass('active')
	})
	//Ban-Modal
	$('.ban-btn span:first-child').click(function(){
		$('.overlay').removeClass('active')
		$('.ban-modal').removeClass('active')
		$('body').removeClass('active')
	})
	$('.ban-btn span:last-child').click(function(){
		$('.overlay').removeClass('active')
		$('.ban-modal').removeClass('active')
		$('body').removeClass('active')
	})
	//Detail-modal
	$('.detail-btn div').click(function(){
		$(this).toggleClass('active')
	})
	$('.detail-btn > i').click(function(){
		$('.ban-modal').addClass('active')
		$('.overlay').addClass('active')
		$('body').addClass('active')
	})
	$('.detail-info').click(function(){
		$('.detail-info-modal').addClass('active')
		$('.overlay').addClass('active')
		$('body').addClass('active')
	})
	$('.close-btn').click(function(){
		$('.detail-info-modal').removeClass('active')
		$('.overlay').removeClass('active')
		$('body').removeClass('active')
		$('.detail-info').removeClass('active')
	})
	// Custom audio
	var audio, playbtn, seek_bar;
	function initAudioPlayer() {
		audio = new Audio();	
		audio.src = "images/detail/videoplayback.mp4";
		audio.loop = true;
//		audio.play();
		playbtn = document.getElementById('playpausebtn');
		playbtn.addEventListener("click", platPause);
		function platPause(){
			if(audio.paused) {
				audio.play();
				playbtn.style.background = "url(images/detail/play.png) no-repeat";
			} else {
				audio.pause();
				playbtn.style.background = "url(images/detail/stop.png) no-repeat";
			}
		}
	}
	window.addEventListener("load", initAudioPlayer);
})