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
function Smart(){}

Smart.prototype.two = function(){
	var _self = this;
	$("#two-mac .cen-mac").addClass("normal");
	
	setTimeout(function(){
		_self.orderNormal("#two-mac .right-audio","normal",50);
		_self.orderNormal("#two-mac .left-audio","normal",50);
		
		$("#two-point dl").addClass("normal");
		$(".two-text>*").addClass("normal");

		setTimeout(function(){},500)

	},150);
};
Smart.prototype.three = function(){
	var _self = this;
	_self.orderNormal(".three-box .ready-ele","normal",50);
};
Smart.prototype.four = function(){
	var _self = this;
	_self.orderNormal(".four-text .ready-ele","normal",50);
}
Smart.prototype.five = function(){
	var _self = this;
	//_self.orderNormal(".five-text .ready-ele","normal",50);
}
Smart.prototype.six = function(){
	$(".six-pic").addClass("normal");
}
Smart.prototype.seven = function(){
	var _self = this;
	_self.orderNormal(".seven-box .ready-ele","normal",50);
};
Smart.prototype.orderNormal = function(ele,classname,interval){
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
Smart.prototype.onscroll = function(){
	var already3 = true,
		already4 = true
		already5 = true,
		already6 = true,
		already7 = true;
		scrollSign = [9999,9999,9999,800,1600,9999,3200,3900];	//滚动条高度-数组
	var _self = this;
	var $wrap = $("#wrap");

	$("body").scroll(function(e){
		var scrollTop = -$wrap.offset().top;
		//console.log(scrollTop);
		if(scrollTop > scrollSign[7]){
			already7 ? (_self.seven(),already7 = false) : already7 = false;
		}else if(scrollTop > scrollSign[6]){
			already6 ? (_self.six(),already6 = false) : already6 = false;
		}else if(scrollTop > scrollSign[4]){
			already4 ? (_self.four(),already4 = false) : already4 = false;
		}else if(scrollTop > scrollSign[3]){
			already3 ? (_self.three(),already3 = false) : already3 = false;
		}
	});
};


Smart.prototype.init = function(){
	var _self = this;
	var isSupport = publicFunction.support();
	if(isSupport){
		$("body").addClass("support");		
		_self.onscroll();//滚动条
		//first animation
		setTimeout(function(){
			smart.two();
		},0);
	}else{
		$("body").addClass("poor");
	};
}
var smart = new Smart();

window.publicFunction = publicFunction;
window.smart = smart;

$(document).ready(function() {	
	smart.init();
});

})(window , jQuery);

