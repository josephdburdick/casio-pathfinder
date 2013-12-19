//THAT SEARCH BOX
function search(){

    var input = $('input#s');
    var divInput = $('div.input');
    var width = divInput.width();
    var outerWidth = 240-28; //divInput.parent().width() - (divInput.outerWidth() - width) - 28;
    var submit = $('#searchSubmit');
    var txt = input.val();
    
    input.bind('focus', function() {
        if(input.val() === txt) {
            input.val('');
        }
        $(this).animate({color: '#3b3b3b'}, 300); // text color
        $(this).parent().animate({
            backgroundColor: '#fff'//, // background color
        }, 300, function() {
            if(!(input.val() === '' || input.val() === txt)) {
                if(!($.browser.msie && $.browser.version < 9)) {
                    submit.fadeTo(300,1);
                } else {
                    submit.css({display: 'block'});
                }
            }
        }).addClass('focus');
    }).bind('blur', function() {
    	
        $(this).animate({color: '#3b3b3b'}, 300); // text color
        $(this).parent().animate({
            backgroundColor: '#f1f1f1'//, // background color
        }, 300, function() {
            if(input.val() === '') {
                input.val(txt)
            }
        }).removeClass('focus');
        if(!($.browser.msie && $.browser.version < 9)) {
            submit.fadeTo(300,.25);
        } else {
            submit.css({display: 'none'});
        }
    }).keyup(function() {
        if(input.val() === '') {
            if(!($.browser.msie && $.browser.version < 9)) {
                submit.fadeTo(300,.25);
            } else {
                submit.css({display: 'none'});
            }
        } else {
            if(!($.browser.msie && $.browser.version < 9)) {
                submit.fadeTo(300,1);
            } else {
                submit.css({display: 'block'});
            }
        }
    });
}
// PRIMARY NAVIGATION DROPDOWN
function dropdown(){
	
	//IF PRIMARY NAV HAS A SUBMENU WITH AN ACTIVE CLASS THEN SHOW THAT
	if ($('ul.dd li a').hasClass('active')){
		var thismenu = $('.dd a.active').parent().parent().attr('id');
		//$('#'+thismenu).animate({opacity:'1'},300,'easeInOutExpo');
		$('#'+thismenu).fadeIn(300,'easeInOutExpo');
		var mnuactive = $('#'+thismenu).attr('id').replace('dropdown','primary');
		$('#'+mnuactive).addClass('active');
	}
	if ($('.dd').hasClass('active')){
		var thismenu = $('.dd.active').attr('id');
		$('#'+thismenu).fadeIn(300);
	}
	
	//CLICK TO SHOW DROPDOWN
	$('ul#nav-primary li a.nav-dd').click(function(e){
		if (!$(this).hasClass('active')){
			$('ul#nav-primary li a').not(this).removeClass('active');
			var dd = "#"+$(this).addClass('active').attr('id').replace('primary', 'dropdown');
			$('nav .dd').stop().fadeOut(500,'easeInOutExpo');
			$(dd).fadeIn(300,'easeInOutExpo');
		}
		else {
			var dd = "#"+$(this).addClass('active').attr('id').replace('primary', 'dropdown');
			$(dd).stop().fadeOut(300,'easeInOutExpo');
			$(this).removeClass('active');
		}
	});
	
	$("#nav-dropdown-ambassadors ul").carouFredSel({
		circular: true,
		infinite: true,
		auto 	: false,
		width: 840,
		//height: 65,
		padding: [0, 0, 0, 5],
		items: {
			visible: 7, //"variable",
			width: 115,
			height: 68
		},
		scroll: {
			mousewheel: true,
			fx: "crossfade",
			items: 1,
			easing: "swing"//,
			//conditions: function( carousel ) {
				//alert("If # of items reach 12 or more.")
			//}
		},
		prev: {
			button: "#nav-dropdown-ambassadors a.prev",
			key: "left",
			fx: "directscroll"
		},
		next: {
			button: "#nav-dropdown-ambassadors a.next",
			key: "right",
			fx: "directscroll"
		}/*,
		onCreate: function()
			{
				if($('html').hasClass('ie9')){
					$(this).find('.caroufredsel_wrapper').style('marginLeft:'0px!important',left:'0px'});
				}
			}*/
	});
	
}


//EXE IMMEDIATELY
$(document).ready(function(){
	//Fix issue with header on FF7, knocking search to new line
	if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
	 var ffversion=new Number(RegExp.$1) // capture x.x portion and store as a number
	 if (ffversion>=7)
	  $('ul#nav-primary > li').css('marginLeft', '27px');
	}
	
	search();
	dropdown();
	
    $('img.checkered').wrap('<div class="checkeredborder">');
});


//ALL ELEMENTS READY
$(window).load(function(){
	
	
	
});
