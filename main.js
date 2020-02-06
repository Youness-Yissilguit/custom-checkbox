$(function () {
	
	$('.check-container .check').on('click', function () {
		
		$(this).toggleClass('checked');
		$(this).nextAll().toggleClass('checked');
	})
});