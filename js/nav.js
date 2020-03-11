/*导航滚动*/
	$(function(){		
		
		//导航随滚轮上下显示隐藏
		var scrollTop =  $(document).scrollTop();
			$(window).scroll(function(){
				var newScollTop =  $(document).scrollTop();
				if(scrollTop < newScollTop){
					//console.log("隐藏了");
					if(newScollTop>99){
						$("#header").stop(true).animate({top:-110},150,function(){
							$(this).removeClass("headerShadow");
						})
					}else{
						return false;
					};					
					scrollTop = newScollTop;
				}else if(scrollTop > newScollTop){
					//console.log("显示了");
					if(newScollTop<100){
						$("#header").stop(true).animate({top:0},150).removeClass("headerShadow");
					}else{
						$("#header").stop(true).animate({top:0},150).addClass("headerShadow");
					};
					scrollTop = newScollTop;
				}else{}; 
			});
				
	});
		