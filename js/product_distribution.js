; (function (window, $) {
    var publicFunction = {
        supportCss: function (a) {
            var b, c, d, e, f, g;
            if (d = !1, b = "Webkit Moz ms O".split(" "), c = document.createElement("div"), e = null, a = a.toLowerCase(), void 0 !== c.style[a] && (d = !0), d === !1) {
                e = a.charAt(0).toUpperCase() + a.substr(1);
                for (f in b) {
                    if (g = b[f], void 0 !== c.style[g + e]) {
                        d = true;
                        break
                    }
                }
            }
            return d;
        },
        support: function () {
            var a = this.supportCss("transform"),
				b = this.supportCss("transition"),
				c = false;
            if (a && b) {
                c = true;
                //c = false;
            }
            return c;
        }
    };
    var isSupport = publicFunction.support();

    $(document).ready(function () {
        if (isSupport) {
            $("body").addClass("support");
        } else {
            $("body").addClass("poor");
        };
        var $wrap = $("#wrap");
        //第一屏动画
        setTimeout(function () {
            $(".page-one .one-mac").addClass("animat");
            $(".page-one  .lipic_a dt").addClass("animat");
            setTimeout(function () {
                $(".page-one  .lipic_b dt").addClass("animat");
                setTimeout(function () {
                    $(".page-one  .lipic_c dt").addClass("animat");
                }, 300);
            }, 200);
        }, 100);
        $("body").scroll(function () {
            var scrollTop = -$wrap.offset().top;
               if (scrollTop > 1400 && scrollTop < 2100) {
                //第三屏
                setTimeout(function () {        	
	                $(".page_three .three_mac .three_mac_1").addClass("animat");
		              setTimeout(function () {
		                $(".page_three .three_mac .three_mac_2").addClass("animat");
				           setTimeout(function () {
			                $(".page_three .three_mac .three_mac_3").addClass("animat"); 
		                },450);  
	                }, 350);
                }, 300);
            }else if (scrollTop > 2200 && scrollTop <2800) {
                //第四屏动画
				var i = 0;
				var arr = [170,126,189,193]
				var m_timer = setInterval(function(){ 
				if(i<4){
				 $(".four_mac>span").eq(i).animate({width:arr[i]},600)
				i++;
				}else{
				clearInterval(m_timer)
				}  
				},400)		      
            }else if (scrollTop > 3000 && scrollTop < 3700) {
            	//第五屏动画
            	 setTimeout(function () {
                    $(".page_five .five_mac_1").addClass("animat");
	                  setTimeout(function () {
	                    $(".page_five .five_mac_2").addClass("animat");
		                  setTimeout(function () {
		                    $(".page_five .five_mac_3").addClass("animat");
							  setTimeout(function () {
			                    $(".page_five .five_mac_4").addClass("animat");
								  setTimeout(function () {
				                    $(".page_five .five_mac_5").addClass("animat1");
									  setTimeout(function () {
					                    $(".page_five .five_mac_6").addClass("animat");
										 setTimeout(function () {
						                    $(".page_five .five_mac_7").addClass("animat");
											 setTimeout(function () {
							                    $(".page_five .five_mac_8").addClass("animat");
												 setTimeout(function () {
								                    $(".page_five .five_mac_9").addClass("animat");
													 setTimeout(function () {
									                    $(".page_five .five_mac_10").addClass("animat");
														 setTimeout(function () {
										                    $(".page_five .five_mac_11").addClass("animat");
															 setTimeout(function () {
											                    $(".page_five .five_mac_12").addClass("animat");
																//duang					                    
											                }, 520);						                    
										                }, 280);					                    
									                }, 260);					                    
								                }, 240);					                    
							                }, 220);				                    
						                }, 200);					                    
					                }, 1000);			                    
				                }, 260);				                    
			                }, 220);			                    
		                }, 180);
	                }, 340);
                }, 100);
            } else if (scrollTop > 4200 && scrollTop < 4900) {
                //第六屏动画
                setTimeout(function () {
                 $(".page_six .six_mac span").addClass("animat");    
                }, 200);
            } else if (scrollTop > 5800 && scrollTop < 6600) {
                //第八屏动画
                setTimeout(function () {
                 $(".page_eight .eight_mac h6").addClass("animat");    
		            setTimeout(function () {
	                 $(".page_eight .eight_mac_01").addClass("animat");    
				       setTimeout(function () {
		                 $(".page_eight .eight_mac_02").addClass("animat");    
						   setTimeout(function () {
			                 $(".page_eight .eight_mac_03").addClass("animat");    
					           setTimeout(function () {
				                 $(".page_eight .eight_mac_04").addClass("animat");    
				                }, 450);
			                }, 350);    
		                }, 250);   
	                }, 200);
                }, 150);
            } 
        });
    });
})(window, jQuery);

