	$(document).ready(function() {

	    var Bancount = 0,
	        $BanPic = $("#index_banner .BanPic"),
	        $BanNum = $("#index_banner .bannerNum a"),
	        BanPicLen = $BanPic.length;
	    var BannerTimer;
	    var colorArr = ["#000a2c","#f1f1f1","#ffffff","#ffffff", "#ffffff",  "#e2e3e5", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff"];

	    bannerFadeShow();

	    function bannerFadeShow() {
	        if (Bancount == BanPicLen) {
	            Bancount = 0;
	        };

	        $BanPic.eq(Bancount).fadeIn("slow").siblings().fadeOut("slow");
	        $BanNum.eq(Bancount).addClass('banNumCur').siblings().removeClass();

	        $(".bannerPic>div.BanPic").eq(Bancount).css("backgroundColor", colorArr[Bancount]);
	        $(".bannerPic>div.BanPic").eq(Bancount).find("a").css("backgroundColor", colorArr[Bancount]);
	        Bancount++;

	        BannerTimer = setTimeout(function() {
	            bannerFadeShow();
	        }, 12000);
	    };

	    /*鼠标点击后*/
	    $BanNum.click(function(e) {
	        e.preventDefault();
	        var thisIndex = $(this).index();
	        var NumCurIndex = $('#index_banner .bannerNum a.banNumCur').index(); //求当前展示的

	        /*判断点击的num 是否为当前的索引	*/
	        if (NumCurIndex == thisIndex) {} else {
	            clearTimeout(BannerTimer);
	            Bancount = thisIndex;
	            $BanPic.eq(Bancount).fadeIn("slow").siblings().fadeOut("slow");
	            $BanNum.eq(Bancount).addClass('banNumCur').siblings().removeClass();
	            bannerFadeShow();
	        };

	    });






	});
