
$(document).ready(function(){
	
	//HOTSPOT ANIMATION
	$(".hotspot").animate({opacity: 0.65}, 5, 'easeInOutCubic');
	$('.hotspot').hover(function(){
		$(this).stop().animate({opacity:1},300,'easeInOutCubic');
	},function(){
		$(this).stop().animate({opacity:.65},600,'easeInOutCubic');
	});
	
	//HOTSPOT ACTIVATE
	$('.hotspot').live('mouseover', function() {
	   $(this).qtip({
		  content: $(this).html(),
		  style: 'ui-tooltip-dark ui-tooltip-rounded',
		    position: {
		        my: 'top center',
		        target: $(this), //'mouse',
		        //viewport: $('#MainDetail-BigSlide-xl'), // Keep it on-screen at all times if possible
		        adjust: {
		            x: -17,  y: 3
		        }
		    },
	
	      overwrite: false, // Make sure another tooltip can't override this one without it being explicitly destroyed
	      show: { ready: true } // Required so the tooltip shows on first mouseover
	   })
	});
			

	
	//PREVIOUS NEXT BUTTONS INTERACTION
	/*$('.btn-prevnext-xl').animate({textShadow: "#000 0px 2px 2px", opacity:.5}, 5);
	$(".btn-prevnext-xl").hover(function() { 
		$(this).stop().animate({textShadow: "#febf27 0px 0px 50px",opacity:1}, 300);
	}, function() { 
		$(this).stop().animate({textShadow: "#000 0px 2px 2px",opacity:.5}, 200);
	});*/
	
	
});


   
$(window).load(function(){
	//FOR THE FULLSCREEN BACKGROUND IMAGE
	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	
	function resizeBg() {
	
	if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
	    $bg
	        .removeClass()
	        .addClass('bgheight');
	} else {
	    $bg
	        .removeClass()
	        .addClass('bgwidth');
		}
	}
	    theWindow.resize(function() {
	            resizeBg();
	    }).trigger("resize");
	    
	    
	//$('.columnize').columnize({columns: 2,width:100,height:55});

});

