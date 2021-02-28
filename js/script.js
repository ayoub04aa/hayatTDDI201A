$(function(){
	
	$('.menu ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	$(window).scroll(function(){
	if(($(window).scrollTop() > $('.info').offset().top) && ($(window).scrollTop() < $('.rooms').offset().top)){
		$('.list-infos').addClass('active').siblings().removeClass('active');
	}
	else{
		if($(window).scrollTop()+50 >= $('.rooms').offset().top){
		$('.list-rooms').addClass('active').siblings().removeClass('active');
	}
	}
	});
	
	//------------------------------------------------------------------------
	
	$('.down').click(function(){
		$('body , html').animate({
			scrollTop: $('.nav').offset().top
		},1000);
	});
	
	$('.list-infos').click(function(){
		$('body , html').animate({
			scrollTop: ($('.info').offset().top-50)
		},1000);
	});
	
	$('.logo').click(function(){
		$('body , html').animate({
			scrollTop:0
		},1000);
	});
	
	$('.list-rooms').click(function(){
		$('body , html').animate({
			scrollTop: $('.rooms').offset().top-50
		},1000);
	});
	
	//-----------------------------description-----------------------------
	
	$(".description").fadeOut();
	
	$(window).scroll(function(){
		if(($(window).scrollTop() < $('.fst-room').offset().top) && ($(window).scrollTop() > $('.fst-room').offset().top-100)) {
		$(".fst-room .description").fadeIn(1000);
		}
		else{
			$(".fst-room .description").fadeOut(1000);
		}
	});
	
	$(window).scroll(function(){
		if(($(window).scrollTop() < $('.snd-room').offset().top) && ($(window).scrollTop() > $('.snd-room').offset().top-100)) {
		$(".snd-room .description").fadeIn(1000);
		}
		else{
			$(".snd-room .description").fadeOut(1000);
		}
	});
	
	$(window).scroll(function(){
		if(($(window).scrollTop() < $('.thrd-room').offset().top) && ($(window).scrollTop() > $('.thrd-room').offset().top-100)) {
		$(".thrd-room .description").fadeIn(1000);
		}
		else{
			$(".thrd-room .description").fadeOut(1000);
		}
	});
	
	$(window).scroll(function(){
		if(($(window).scrollTop() < $('.frth-room').offset().top) && ($(window).scrollTop() > $('.frth-room').offset().top-100)) {
		$(".frth-room .description").fadeIn(1000);
		}
		else{
			$(".frth-room .description").fadeOut(1000);
		}
	});
	
	$(window).scroll(function(){
		if(($(window).scrollTop() < $('.ffth-room').offset().top) && ($(window).scrollTop() > $('.ffth-room').offset().top-100)) {
		$(".ffth-room .description").fadeIn(1000);
		}
		else{
			$(".ffth-room .description").fadeOut(1000);
		}
	});
	
	$(window).scroll(function(){
		if(($(window).scrollTop() < $('.sth-room').offset().top) && ($(window).scrollTop() > $('.sth-room').offset().top-100)) {
		$(".sth-room .description").fadeIn(1000);
		}
		else{
			$(".sth-room .description").fadeOut(1000);
		}
	});
	
	
	
	
	
	
	
	
	
	
});