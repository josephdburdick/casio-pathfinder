$(document).ready(function(){

	$('#ul-homecycle').after('<ul id="ul-homecyclepager">').cycle({ 
	    fx:     'scrollHorz', 
	    speed:  800,
	    easing: 'easeInOutExpo', 
	    timeout: 0,
		cleartypeNoBg:true,
	    prev:   '.btn-prevnext-xl.left', 
    	next:   '.btn-prevnext-xl.right', 
	    activePagerClass: 'active',
	    pager:  '#ul-homecyclepager', 
	     
	    // callback fn that creates a thumbnail to use as pager anchor 
	    pagerAnchorBuilder: function(idx, slide) { 
	        return '<li><a href="javascript:void(0);"></a></li>'; 
	    } 
	});

});
$(window).load(function(){	
	
					
});

