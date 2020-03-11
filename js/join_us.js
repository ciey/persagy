$(document).ready(function(){
	var $zhaopinxq =$("#zhaopinxinxi .zhaopinMessage .zhaopinxq"),
		$zhaopinxq_h4 = $("#zhaopinxinxi div h4"),
		$zhaopinmessage = $("#zhaopinxinxi .zhaopinMessage .zhaopinrequire");
	$("#zhaopinxinxi div ").on("click", "h4", function () {
		//console.log($(this));
		var thisNextdiv = $(this).parent().next("div")
		if(thisNextdiv.hasClass("zhaopinshow")){
			thisNextdiv.removeClass("zhaopinshow");				
		}else{
			thisNextdiv.addClass("zhaopinshow");
		};		
	});
	
	var $industry = $("#industry"),
		m_order = true,
		m_distance = 101,
		m_timer;
		cloudMove();
		function cloudMove(){
			if(m_distance>250){
				m_order =false;
			}else if(m_distance<120){
				m_order = true;
			};
			
			if(m_order){
				m_distance++;
			}else{
				m_distance--;
			}
			$industry.css("right",m_distance);
			m_timer = setTimeout(function(){
				cloudMove();
			},75);
			
		}
		
	
	var Bancount = 0,
		$BanPic = $(".join_slider_cont>div"),
		$BanNum = $(".join_point>li"),
		BanPicLen = $BanPic.length;
	var BannerTimer;	
		bannerFadeShow();
		function bannerFadeShow(){			
			if(Bancount == BanPicLen){
				Bancount = 0;
			};
			$BanPic.eq(Bancount).fadeIn("slow").siblings().fadeOut("slow");
			$BanNum.eq(Bancount).addClass('j_Cur').siblings().removeClass();
			
			Bancount++;		
			BannerTimer = setTimeout(function(){
				bannerFadeShow();
			}, 5000 );
		
		};
		
		/*鼠标点击后*/
		$BanNum.click(function( e ){
			e.preventDefault();
			var thisIndex = $(this).index();
			var NumCurIndex = $('ul.join_point li.j_Cur').index();//求当前展示的
			
			/*判断点击的num 是否为当前的索引	*/		
			if(NumCurIndex == thisIndex){}else{
				clearTimeout(BannerTimer);
				Bancount = thisIndex ;
				$BanPic.eq(Bancount).fadeIn("slow").siblings().fadeOut("slow");
				$BanNum.eq(Bancount).addClass('j_Cur').siblings().removeClass();
				bannerFadeShow();
			};		

		});
});