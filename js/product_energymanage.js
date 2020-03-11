;(function(window , $){

var publicFunction = {
		supportCss:function(a){
			var b, c, d, e, f, g;
			if (d = !1, b = "Webkit Moz ms O".split(" "), c = document.createElement("div"), e = null, a = a.toLowerCase(), void 0 !== c.style[a] && (d = !0), d === !1) {
				e = a.charAt(0).toUpperCase() + a.substr(1);
				for (f in b){
					if (g = b[f], void 0 !== c.style[g + e]) {
						d = true;
						break
					}
				}
			}
			return d;
		},
		support:function(){
			var a = this.supportCss("transform"),
				b = this.supportCss("transition"),
				c = false;
			if(a && b){
				c = true;
				//c = false;
			}
			return c;
		}
	};
function Energy(){}

Energy.prototype.two = function(){	
	$(".two-box .already-ele").addClass("normal");
};
Energy.prototype.three = function(){
	var _self = this;
	_self.orderNormal(".three-mac__container li","normal",200);
};
Energy.prototype.four = function(){
	var _self = this;
	$(".f-box span").addClass("normal");
	setTimeout(function(){
		$(".f-box b").addClass("normal");
		setTimeout(function(){
			_self.orderNormal(".four--cont__wrap li","normal",300);
		},700);
	},500);
}
Energy.prototype.five = function(){
	var _self = this;
	var $val = $(".five-mac .val"),num = 100,max_num = 205;
	var t;
	t = setInterval(function(){
		if(num<max_num){
			num += 14;
			$val.text(num);
		}else{
			$val.text(max_num);
			clearInterval(t);
		}
	},80);
	$(".five-mac .arrow").addClass("normal");
}
Energy.prototype.six = function(){
	//$(".six-pic").addClass("normal");
}
Energy.prototype.seven = function(){
	$(".page-seven .seven-mac").addClass("normal");
};
Energy.prototype.eight = function(){
	$(".eight-mac b").addClass("normal");
};
Energy.prototype.orderNormal = function(ele,classname,interval){
	//ele为元素,classname添加的类名,interval 为 遍历执行的间隔时间;
	var config = $.extend({},{ele:"body",classname:"normal",interval:50},{ele:ele,classname:classname,interval:interval});
	var step = 0,
		$ele = $(config.ele),
		len = $ele.length,
		timer;
		function pursue(i){
			if(len>0 && i<len){
				$ele.eq(i).addClass(config.classname);
				i++;
				timer = setTimeout(function(){
					pursue(i);
				},interval);
			}else{
				clearTimeout(timer);
			};
		};
		pursue(step);
};
Energy.prototype.onscroll = function(){
	var already3 = true,
		already4 = true
		already5 = true,
		already6 = true,
		already7 = true,
		already8 = true;
		scrollSign = [99999,99999,99999,950,1550,2600,3550,4500,5500];	//滚动条高度-数组
	var _self = this;
	var $wrap = $("#wrap");

	$("body").scroll(function(e){
		var scrollTop = -$wrap.offset().top;
		//console.log(scrollTop);
		if(scrollTop > scrollSign[8]){
			already8 ? (_self.eight(),already8 = false) : already8 = false;
		}else if(scrollTop > scrollSign[7]){
			already7 ? (_self.seven(),already7 = false) : already7 = false;
		}else if(scrollTop > scrollSign[6]){
			already6 ? (_self.six(),already6 = false) : already6 = false;
		}else if(scrollTop > scrollSign[5]){
			already5 ? (_self.five(),already5 = false) : already5 = false;
		}else if(scrollTop > scrollSign[4]){
			already4 ? (_self.four(),already4 = false) : already4 = false;
		}else if(scrollTop > scrollSign[3]){
			already3 ? (_self.three(),already3 = false) : already3 = false;
		}
	});
};


Energy.prototype.init = function(){
	var _self = this;
	var isSupport = publicFunction.support();
	if(isSupport){
		$("body").addClass("support");		
		
		_self.onscroll();

		setTimeout(function(){
			energy.two();
		},300);
	}else{
		$("body").addClass("poor");
	};
}
var energy = new Energy();

window.publicFunction = publicFunction;
window.energy = energy;

$(document).ready(function() {	
	energy.init();
});

})(window , jQuery);

