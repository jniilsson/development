$(document).ready(function(){
	
 	$('a.openbottom').click(function(){
 		
 		var target = $('.bottom');
 		
 		if(target.hasClass('open')){
 			
	 		$('.bottom').animate({
			    bottom: '-159px',
			 }, 300, function() {
	
			 });
			 target.removeClass('open');
		 }
		 else{
		 	$('.bottom').animate({
			    bottom: '0px',
			 }, 300, function() {
	
			 });
			 target.addClass('open');
		 }
		 
		 return false;
 	});
  
});
