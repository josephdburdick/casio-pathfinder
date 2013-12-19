
$(document).ready(function(){
	
	
	
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
	    
	    
		$('#series-list-aviation,#series-list-mastersg,#series-list-limited,#series-list-classic').hoverscroll({
				vertical: false,	// Display the list vertically or horizontally
				width:    981,		// Width of the list container
				height:   165,		// Height of the list container
				arrows:   false,		// Display direction indicator arrows or not
			    fixedArrows: true,  // Fixed arrows on the sides of the list (disables arrowsOpacity)
				debug:    false     // Debug output in the firebug console
			});

});

