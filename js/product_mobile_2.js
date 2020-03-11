/*
 *   data:20141216 
 * author:@web_杨涛	
*/

$(document).ready(function(){
	var canRoll = true,
		pageNum = 0;
	var canRollTimer;
	var ie789 = false,
		msie7 = $.browser.msie && $.browser.version == "7.0",
		msie8 = $.browser.msie && $.browser.version == "8.0", 
		msie9 = $.browser.msie && $.browser.version == "9.0";	
	if(msie7||msie8||msie9){
		ie789 = true;
	}

	var $optAnchor = $("#optAnchor"),
		$optAnchorLi = $("#optAnchor li");
		
	$optAnchorLi.on("click",function(){
		var thisIndex = parseInt($(this).attr("name"));
		ImplementWay.click(thisIndex);
	});
	$('#cont_warp').on('mousewheel', function(event) {
		event.preventDefault();
	   if(event.deltaY>0){
    		ImplementWay.pageUp();		
    	}else if(event.deltaY<0){
    		ImplementWay.pageDown();
    	}
	});
	var $goldPhone = $("#goldPhone"),
		$underlying = $(".underlying"),
		$header = $("#header"),
		$boxWrap = $("#boxWrap"),
		$viewMoreText = $("#viewMoreText"),
		$two_modelImg =  $(".p_two .modelImg"),
		$three_modelImg =  $(".p_three .modelImg"),
		$four_modelImg = $(".p_four .modelImg");
	var $two_morePic = $(".two_pic"),
		$three_morePic = $(".three_pic"),
		$four_morePic = $(".four_pic");
		/* ImplementWay 中有8个functoin，
		 * 第1个[click]为锚点点击function
		 * 第2个[rolling]为滚轮滚动执行function
		 * 第3个 上翻页
		 * 第4个 下翻页
		 * 第5个[BasicAnimation]为非ie789的function
		 * 第6个[BasicAnimation_poor]为ie789的function
		 * 第5、6个都是接收参数执行效果
		 * 第7个[setCurAnchor]设置锚点
		 * 第8个[model_introduce]为page[b,c,d]手机modle移动
		 * 第9个[loopPlay]焦点图循环播放 图片淡入淡出
		 * 第10个[resetAnimation]page[b,c,d]初始化动画 [元素设置默认值]
		 */
	var ImplementWay = {
			click:function(a){
				if(canRoll){
					canRoll = false;
					pageNum = a;
					if(ie789){
						ImplementWay.BasicAnimation_poor(a);//ie789
					}else{
						ImplementWay.BasicAnimation(a);//非ie789
					}
					if(pageNum>0&&pageNum<5){
						$optAnchor.fadeIn();
						ImplementWay.setCurAnchor(pageNum);
					}else{
						$optAnchor.fadeOut();
					}
					clearTimeout(canRollTimer);
					canRollTimer = setTimeout(function(){
						canRoll = true;
					},1200);
				}
			},
			rolling:function(a){
				if(ie789){
					ImplementWay.BasicAnimation_poor(a);//ie789
				}else{
	    			ImplementWay.BasicAnimation(a);//非ie789
	    		}
				if(pageNum>0&&pageNum<5){
					$optAnchor.fadeIn();
					ImplementWay.setCurAnchor(pageNum);
				}else{
					$optAnchor.fadeOut();
				}
			},
			pageUp:function(){
				if(canRoll){				
					canRoll = false;
		    		pageNum--;	    		
		    		if(pageNum<0){
		    			pageNum = 0;
		    		}else{
		    			ImplementWay.rolling(pageNum);
		    		}
		    		clearTimeout(canRollTimer);
		    		canRollTimer = setTimeout(function(){
		    			canRoll = true;
		    		},1200);
	    		}
			},
			pageDown:function(){
				if(canRoll){
					canRoll = false;
		    		pageNum++;
		    		if(pageNum>5){
		    			pageNum = 5;
		    		}else{
						ImplementWay.rolling(pageNum);
		    		}
		    		clearTimeout(canRollTimer);
		    		canRollTimer = setTimeout(function(){
		    			canRoll = true;
		    		},1200);
	    		}
			},
			BasicAnimation:function(a){
				switch(a){
					case 0: basic.headBasic();
					ImplementWay.resetAnimation(0);
					break;
					case 1: basic.oneBasic();
					ImplementWay.resetAnimation(1);
					break;
					case 2: basic.twoBasic();
					ImplementWay.resetAnimation(2);
					break;
					case 3: basic.threeBasic();
					ImplementWay.resetAnimation(3);
					break;
					case 4: basic.fourBasic();
					ImplementWay.resetAnimation(4);
					break;
					case 5: basic.footBasic();
					ImplementWay.resetAnimation(5);
					break;
				}
			},
			BasicAnimation_poor:function(a){
				switch(a){
					case 0: basic_poor.headBasic();
					break;
					case 1: basic_poor.oneBasic();
					break;
					case 2: basic_poor.twoBasic();
					break;
					case 3: basic_poor.threeBasic();
					break;
					case 4: basic_poor.fourBasic();
					break;
					case 5: basic_poor.footBasic();
					break;
				}
			},
			setCurAnchor:function(a){
				a = a-1;
				$optAnchorLi.removeClass().eq(a).addClass("cur");
			},
			model_introduce:function(ele,n,moveVal,opacityVal){
				var i_timer,
					$ele = $(ele);
				i_timer = setTimeout(function() {
					if (n < 3) {
						$ele.eq(n).show().animate({
							marginLeft: moveVal,
							opacity: opacityVal,
							filter: "alpha(opacity=100)"
						}, 400);
						n++;
						ImplementWay.model_introduce(ele,n,moveVal,opacityVal);
					} else {
						clearTimeout(i_timer);
						i_timer = null;
					};
				},150);
			},
			loopPlay:function(ele,n,len){
				var $ele = $(ele),
					pageModel_timer;
				if(n==len){
					n = 0;
				};
				$ele.eq(n).fadeIn("slow").siblings().fadeOut("slow");
				n++;
				pageModel_timer = setTimeout(function(){
					ImplementWay.loopPlay(ele,n,len);
				},3000);				
			},
			resetAnimation:function(a){
				switch(a){
					case 0:
						ImplementWay.model_introduce(".p_two .introduce li",0,-200,0);
						ImplementWay.model_introduce(".p_three .introduce li",0,200,0);
						ImplementWay.model_introduce(".p_four .introduce li",0,-200,0);
						
						$two_modelImg.animate({"right":"-50px"},600);
						$three_modelImg.animate({"bottom":"-350px"},600);
						
						$two_morePic.removeClass("picPlayer");
						$three_morePic.removeClass("picPlayer");
						$four_morePic.removeClass("picPlayer");
					
					break;
					case 1:
						ImplementWay.model_introduce(".p_two .introduce li",0,-200,0);
						ImplementWay.model_introduce(".p_three .introduce li",0,200,0);
						ImplementWay.model_introduce(".p_four .introduce li",0,-200,0);
						
						$two_modelImg.animate({"right":"-50px"},600);
						$three_modelImg.animate({"bottom":"-350px"},600);
						
						$two_morePic.removeClass("picPlayer");
						$three_morePic.removeClass("picPlayer");
						$four_morePic.removeClass("picPlayer");
					
					break;
					case 2:
						ImplementWay.model_introduce(".p_three .introduce li",0,200,0);
						ImplementWay.model_introduce(".p_four .introduce li",0,-200,0);
						
						$three_modelImg.animate({"bottom":"-350px"},600);
						
						$three_morePic.removeClass("picPlayer");
						$four_morePic.removeClass("picPlayer");
					
					break;
					case 3:
						ImplementWay.model_introduce(".p_two .introduce li",0,-200,0);
						ImplementWay.model_introduce(".p_four .introduce li",0,-200,0);
						
						$two_modelImg.animate({"right":"-50px"},600);
						
						$two_morePic.removeClass("picPlayer");
						$four_morePic.removeClass("picPlayer");
					
					break;
					case 4:
						ImplementWay.model_introduce(".p_two .introduce li",0,-200,0);
						ImplementWay.model_introduce(".p_three .introduce li",0,200,0);
						
						$two_modelImg.animate({"right":"-50px"},600);
						$three_modelImg.animate({"bottom":"-350px"},600);
						
						$two_morePic.removeClass("picPlayer");
						$three_morePic.removeClass("picPlayer");
					
					break;
					case 5:
						ImplementWay.model_introduce(".p_two .introduce li",0,-200,0);
						ImplementWay.model_introduce(".p_three .introduce li",0,200,0);
						//ImplementWay.model_introduce(".p_four .introduce li",0,-200,0);
						
						$two_modelImg.animate({"right":"-50px"},600);
						$three_modelImg.animate({"bottom":"-350px"},600);
						
						$two_morePic.removeClass("picPlayer");
						$three_morePic.removeClass("picPlayer");
						//$four_morePic.removeClass("picPlayer");
					
					break;
					
				}
			}
		}

	ImplementWay.loopPlay('#goldPhone>li',0,3);
	ImplementWay.loopPlay('.p_two .modelImg li',0,3);
	ImplementWay.loopPlay('.p_three .modelImg li',0,3);
	ImplementWay.loopPlay('.p_four .modelImg li',0,3);
/********************  webkit - moz -ms[ie9+] ***************************/	
	var noPlay_model = {
			two:true,
			three:true,
			four:true
		}
	//基本动画
	var basic = {
			headBasic: function() {
				$header.css("marginTop", "0px");
				$goldPhone.css("bottom", "0%");
				$underlying.attr("class", "underlying");
				setTimeout(function(){
					$("#oneTile").removeClass("oneTile_hide");
				},600)
			},
			oneBasic: function() {
				$("#oneTile").addClass("oneTile_hide");
				$header.css("marginTop", "-100px");
				$boxWrap.css("top", "0%");
				$viewMoreText.css("display","none");
				$underlying.addClass("percentage93");
				$goldPhone.css("bottom", "50%");
			},
			twoBasic: function() {
				$header.css("marginTop", "-100px");
				$boxWrap.css("top", "-100%");
				//if(noPlay_model.two){
				//	noPlay_model.two = false;		
				setTimeout(
					function(){
						ImplementWay.model_introduce(".p_two .introduce li",0,0,1);
						$(".p_two .modelImg").animate({"right":"140px"},600,function(){
							$two_morePic.addClass("picPlayer");
						});
					},800);
				//}
			},
			threeBasic: function() {
				$header.css("marginTop", "-100px");
				$boxWrap.css("top", "-200%");
				setTimeout(
					function(){
						ImplementWay.model_introduce(".p_three .introduce li",0,0,1);
						$three_modelImg.animate({"bottom":"-88px"},600,function(){
							$three_morePic.addClass("picPlayer");
						});
					},800);
				//};
			},
			fourBasic: function() {
				$boxWrap.css("top", "-300%");
				$header.css("marginTop", "-100px");
				$four_modelImg.css({"bottom":"-95px"});	
				setTimeout(
					function(){
						ImplementWay.model_introduce(".p_four .introduce li",0,0,1);
						setTimeout(function(){
							$four_morePic.addClass("picPlayer");
						},600);
					},800);
				//}
			},
			footBasic: function() {
				$boxWrap.css("top", "-300%");
				$header.css("marginTop", "-200px");
				$four_modelImg.css({"bottom":0});	
				
				
			}
		}
		
/******************** ie  7  8 ***************************/	
	//基本动画 [兼容]	
	
	var basic_poor = {
			headBasic: function() {
				$header.animate({"marginTop":"-1px"},600);
				$goldPhone.animate({"bottom":"0%"},600,function(){
					$("#oneTile").removeClass("oneTile_hide");
				});
				$underlying.attr("class", "underlying");
			},
			oneBasic: function() {
				$("#oneTile").addClass("oneTile_hide");
				$header.animate({"marginTop":"-101px"},600);
				$boxWrap.animate({"top":"0%"},600);
				$viewMoreText.css("display","none");
				$underlying.addClass("percentage93");
				$goldPhone.animate({"bottom":"50%"},600);
			},
			twoBasic: function() {
				$header.animate({"marginTop":"-101px"},600);
				$boxWrap.animate({"top":"-100%"},600);
				if(noPlay_model.two){
					noPlay_model.two = false;
				setTimeout(
					function(){
						ImplementWay.model_introduce(".p_two .introduce li",0,0,1);
						$two_modelImg.animate({"right":"140px"},600,function(){
							$two_morePic.addClass("picPlayer");
						});
					},800);
				}
			},
			threeBasic: function() {
				$header.animate({"marginTop":"-101px"},600);
				$boxWrap.animate({"top":"-200%"});
				
				if(noPlay_model.three){
					noPlay_model.three = false;
				setTimeout(
					function(){
						ImplementWay.model_introduce(".p_three .introduce li",0,0,1);
						$three_modelImg.animate({"bottom":"-88px"},600,function(){
							$three_morePic.addClass("picPlayer");
						});
					},800);
				}
			},
			fourBasic: function() {
				$boxWrap.animate({"top":"-300%"},600);
				$header.animate({"marginTop":"-101px"},600);
				$four_modelImg.animate({"bottom":-95},600);
				
				if(noPlay_model.four){
					noPlay_model.four = false;
				setTimeout(
					function(){
						ImplementWay.model_introduce(".p_four .introduce li",0,0,1);
						$four_morePic.addClass("picPlayer");
					},800);
				}
			},
			footBasic: function() {
				$header.animate({"marginTop":"-201px"},600);
				$boxWrap.animate({"top":"-300%"},600);
				$four_modelImg.animate({"bottom":0},600);
			}
		};
	
	
	
});