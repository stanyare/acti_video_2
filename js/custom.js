/*Start Browser Detect script */
browserDetect = {
	matchGroups: [
		[
			{uaString:'win', className:'win'},
			{uaString:'mac', className:'mac'},
			{uaString:['linux','x11'], className:'linux'}
		],
		[
			{uaString:'msie', className:'trident'},
			{uaString:'applewebkit', className:'webkit'},
			{uaString:'gecko', className:'gecko'},
			{uaString:'opera', className:'presto'}
		],
		[
			{uaString:'msie 9.0', className:'ie9'},
			{uaString:'msie 8.0', className:'ie8'},
			{uaString:'msie 7.0', className:'ie7'},
			{uaString:'msie 6.0', className:'ie6'},		
			{uaString:'firefox/2', className:'ff2'},
			{uaString:'firefox/3', className:'ff3'},
			{uaString:'firefox/4', className:'ff4'},
			{uaString:['opera','version/11'], className:'opera11'},
			{uaString:['opera','version/10'], className:'opera10'},
			{uaString:'opera/9', className:'opera9'},
			{uaString:['safari','version/3'], className:'safari3'},
			{uaString:['safari','version/4'], className:'safari4'},
			{uaString:['safari','version/5'], className:'safari5'},
			{uaString:'chrome', className:'chrome'},
			{uaString:'edge', className:'edge'},
			{uaString:'safari', className:'safari2'},
			{uaString:'unknown', className:'unknown'}
		]
	],
	init: function() {
		this.detect();
		return this;
	},
	addClass: function(className) {
		this.pageHolder = document.documentElement;
		document.documentElement.className += ' '+className;
	},
	detect: function() {
		for(var i = 0, curGroup; i < this.matchGroups.length; i++) {
			curGroup = this.matchGroups[i];
			for(var j = 0, curItem; j < curGroup.length; j++) {
				curItem = curGroup[j];
				if(typeof curItem.uaString === 'string') {
					if(this.uaMatch(curItem.uaString)) {
						this.addClass(curItem.className);
						break;
					}
				} else {
					for(var k = 0, allMatch = true; k < curItem.uaString.length; k++) {
						if(!this.uaMatch(curItem.uaString[k])) {
							allMatch = false;
							break;
						}
					}
					if(allMatch) {
						this.addClass(curItem.className);
						break;
					}
				}
			}
		}
	},
	uaMatch: function(s) {
		if(!this.ua) {
			this.ua = navigator.userAgent.toLowerCase();
		}
		return this.ua.indexOf(s) != -1;
	}
}.init();
/*End Browser Detect script */

$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	setTimeout(function() {
		$('body').removeClass('loaded'); 
	}, 1000);
		
	
});


$(function(){
	
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', ''); return false;});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder); 
			return false;
		});
	});
 
	
	var width_window = $(window).width();
	var height_window = $(window).height();
	$('.pulsar').css({'width':height_window, 'margin-left':(width_window-height_window)/2});
	
	$('.compare-col .line-check label').live('click',function(){
		$('.window-compare').addClass('opened');
		setTimeout(function () {
			$('.cross2-item h3').live('each',function(){
				var text = $(this).parent().find('img').attr('title');
			
				
				$(this).text('text');
			
			});
		}, 500)
		
	});
	$('.close-compare').live('click',function(){
		$('.window-compare').removeClass('opened');
		$('.window-gallery').removeClass('opened');
	});
	
	$('.choose-icon_minus').live("click", function () {
         var $input = $(this).parents('.box-field').find('input');
         var count = parseInt($input.val()) - 1;
         count = count < 1 ? 1 : count;
         $input.val(count);
         $input.change();
         return false;
    });
    $('.choose-icon_plus').live("click", function () {
         var $input = $(this).parents('.box-field').find('input');
         var count = parseInt($input.val()) + 1;
         count = count > ($input.attr("maxlength")) ? ($input.attr("maxlength")) : count;
         $input.val(count);
         $input.change();
         return false;
    });
	
	$('.main-nav-list__link').live('click',function(){
		$('.close-compare').click();
	});
	
	$('.open-gal').live('click',function(){
		$('.window-gallery').removeClass('opened');
		var id = $(this).attr('data-href');
		$(id).addClass('opened');
	});
	
	$('.list-small-img__item a').live('click',function(){
		var id = $(this).attr('data-href');
		$(this).parents('.window-gallery').css({'background-image':id});
		return false;
	});
	
	$('.link-write').live('click',function(){
		var id = $(this).attr('href');
		$(id).toggleClass('opened');
		return false;
	});
	$('.close-window').live('click',function(){
		$('.window-open').removeClass('opened');		
	});
	$('.close-gal').live('click',function(){
		$('.window-gallery').removeClass('opened');		
	});
	
	if($('#cross').length){
		$('#cross').cross2({
			clickEnabled: false,
			easing: 'swing',
			animationDuration: 1000,
			mousewheelEnabled: false,
			value: 0.50
		});
 	};
	
	
	

});

var handler2 = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.slide').css({'padding-bottom':height_footer+40, 'padding-top':height_header+32});
	$('.window-gal-cont').css({'padding-bottom':height_footer+40, 'padding-top':height_header+32});
	$('.window-open-cont').css({'padding-bottom':height_footer+40, 'padding-top':height_header+32});
	
	var width_window = $(window).width();
	var height_window = $(window).height();
	$('.pulsar').css({'width':height_window, 'margin-left':(width_window-height_window)/2});
	
	if($('#small_photo').length){
			
		$('#small_photo').carouFredSel({
			responsive: true,
			width: '100%',
			circular: true,	
			next: '#next',			
			scroll : { 
				fx : "crossfade",
				items:3,
				duration		: 800,
			},
			auto: false,
			items: {					
				visible: {
					min: 1,
					max: 3
				}
			}
		});
	};
	if($('#small_photo2').length){
			
		$('#small_photo2').carouFredSel({
			responsive: true,
			width: '100%',
			circular: true,	
			next: '#next2',				
			scroll : { 
				fx : "crossfade",
				items:3,
				duration		: 800,
			},
			auto: false,
			items: {					
				visible: {
					min: 1,
					max: 3
				}
			}
		});
	};
	
	
	
}
$(window).bind('load', handler2);
$(window).bind('resize', handler2);



