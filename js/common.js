(function() {

	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	var	cnzz_init = function(){
			document.write(unescape("%3Cspan id='cnzz_stat_icon_1000350775'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1000350775' type='text/javascript'%3E%3C/script%3E"));
		};

	window.cnzz_init = cnzz_init;
})();

(function(){
//pc端 -> 移动微信跳转
	var isMobile = function(){
			var userAgentInfo = navigator.userAgent;
			var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
			var flag = false;
			for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }
			};
			return flag;
		}();
	
	function product_MOBILE(link){
		if(link===undefined){
			var urlStr = window.location.href,
				htmlStr = urlStr.substring(urlStr.indexOf("page/") + 5),
		    	htmlEnd = htmlStr.indexOf(".html"),
		    	valArr = htmlStr.split("", htmlEnd);
		    var urlKey = valArr.join("");

		    window.location.href = "http://m.persagy.com/pages/" + urlKey;
		}else{
			window.location.href = "http://m.persagy.com/pages/"+ link;
		};
	}
    function mobileLink(link) {
    	//移动端访问PC 端连接，跳转对应移动端link
		if(isMobile){
			product_MOBILE(link);
		}
	};

	window.mobileLink = mobileLink;

})();