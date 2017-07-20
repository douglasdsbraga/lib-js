//onclick goToByScroll
function goToByScroll(id,offset){
	var off = offset;
	jQuery('html,body').animate({
		scrollTop: jQuery("#"+id).offset().top - off
	},'slow');
}
