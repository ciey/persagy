/*导航*/
	$(function(){		
		var $navLi = $('#nav li'),$navLi1 = $('#nav>li');
		//nav_划过 add 离开 remove
		$navLi.mouseover(function(){
			if($(this).has('ul').length>0){
				$(this).children('ul').stop(true,true).show('fast');
				$(this).parent().css("overflow","visible");
			}else{
				$(this).children('ul').stop(true,true).hide('fast');
				return false;
			};
		}).mouseleave(function(){
			$(this).children('ul').stop(true).hide('fast');
		});

		$navLi1.mouseover(function(){
			$navLi.removeClass('nav_cur');
			$(this).addClass('nav_cur');
		}).mouseleave(function(){
			$navLi.removeClass('nav_cur');
		});
var $pageLast_A = $("body a:last");
		$pageLast_A.addClass("position_hidden");	
	});
		