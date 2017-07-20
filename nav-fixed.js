// nav Fixed
var controlador = true;
jQuery(window).scroll(function() {
	if(jQuery(window).width() > 250){

		if(jQuery(window).scrollTop() > 105){
			if(controlador){
				controlador = false;
				jQuery("#headerMain").addClass('fixScroll');
			}
		}else if(jQuery(window).scrollTop() < 105){
			controlador = true;
			jQuery("#headerMain").removeClass('fixScroll');
		}

	}
	else {
		jQuery("#headerMain").removeClass('fixScroll');
	}
});
