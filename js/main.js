var menu = $('.web-header-section');
$(window).scroll(function() {
	if ($(this).scrollTop() > 0 && menu.hasClass('web-header-section')) {
		menu.addClass('web-header-fixed');
	} else if ($(this).scrollTop() <= 0 && menu.hasClass('web-header-fixed')) {
		menu.removeClass('web-header-fixed');
	}
});
