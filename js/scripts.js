$(document).ready(function(){
	jQuery.fn.exists = function(){return this.length>0;}
		if ($('.bottom-info li').exists()){
			$('.bottom-info li:last-child').addClass('last-child');
		}
});