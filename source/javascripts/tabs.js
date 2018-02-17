$(document).ready(function(){
		$('ul.menu-tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.menu-tabs li').removeClass('is-active');
		$('.tab-content').removeClass('is-active');
		$(this).addClass('is-active');
		$("#"+tab_id).addClass('is-active');
		});
});