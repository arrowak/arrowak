$(document).ready(function(){
	$('.nav-bar ul li').click(function(){
		var name = $(this).data('name');
		var elem = $('.'+name);
		// console.log($('.'+name).position().top);
		$('html, body').animate({
			scrollTop: elem.offset().top
		}, 500);

	});
});