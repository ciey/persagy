/*
 * isagy
 * Date 20150812
 */

var anchor_scrollArr = [0,1850,3210,4080,4780,5480];//锚点点击
var video_scrollArr = [0,1750,3100,4000,4750,5480];//鼠标滚动

var videoTag = !!document.createElement('video').canPlayType;

$(document).ready(function(event){
	if(!videoTag){
		anchor_scrollArr = [0,980,2340,3210,3910,5480];
		video_scrollArr = [0,880,2230,3130,3880,4590];
		$("#video-redpoint").hide();
	}
	var sagyArr = [".sagyA_main",".aHead_title",".aHead_jj",".persagy_head","#contAnchor"],
	head_timer;
	var $modelMessage_dataDIV = $("div.modelMessage_data>div"),
		model_timer;
	// 第四个动画 系统组成 arrImg	
		var s_arr = ["148px","115px","84px","45px","5px","-25px"],
			$s_leftDiv = $(".s_left div"),
			s_leftLen = $s_leftDiv.length;
		var sTimer;
	//第五个动画  产品功能
		var $f_optionDt = $("div.f_option ul dl dt"),
			product_timer;
	$(".video-cover").on("click",function(){
		$(this).hide();
		$(".video-media").css("visibility","visible");
	});
var isagyBasic = {
	oneAnimate:function(v){
			head_timer = setTimeout(function (){
				var max_head = 4;
					if (v < max_head){
						v++;
						$(sagyArr[v]).fadeIn(1500);					
					}else{
						clearTimeout(head_timer);					
						return false;
					};
					isagyBasic.oneAnimate(v);
			},500);
	},
	twoAnimate:function(m){
		// 第二个动画 建筑信息模型	
		//function showModel_linear(m){}
			model_timer = setTimeout(function (){
				var max_lineNum = 4;
					if (m < max_lineNum){
						m++;
						$modelMessage_dataDIV.eq(m).animate({
							width:"324px"
						},1000);
					}else{
						clearTimeout(model_timer);					
						return false;
					};				
					isagyBasic.twoAnimate(m);
			},500);
			
	},
	fourAnimate:function (a){
		//function arrImgMove(a){}
		sTimer = setTimeout(function (){
			var max_img = 6;
				if (a < max_img){
					a++;
					$s_leftDiv.eq(a).animate({				
						top:s_arr[a]
					},500,function(){
						var thisT = parseInt($s_leftDiv.eq(a).css("top")) -5;
						$s_leftDiv.eq(a).animate({top:thisT+"px"},300);
					});
				}else{
					clearTimeout(sTimer);					
					return false;
				};
				isagyBasic.fourAnimate(a);
		},500);
	},
	fiveAnimate:function(p){
	//function product_order(p){}
		product_timer = setTimeout(function (){
			var max_model = 4;
				if (p < max_model){
					p++;
					$f_optionDt.eq(p).animate({
						opacity:"1"
					},400);
				}else{
					clearTimeout(product_timer);					
					return false;
				};
				isagyBasic.fiveAnimate(p);
		},200);
	}
			
	}
	
	isagyBasic.oneAnimate(-1);
	
	//第六 视频显示
	var $video_static = $(".sagyF_video>div"),
		$mask_playVideo = $("#mask_playVideo"),
		$mask_playVideoDiv = $("#mask_playVideo>div") ;
	var video1_address = "videoIframe/videoAbout_01.html",
		video2_address = "videoIframe/videoAbout_02.html",
		isagy_view = "videoIframe/video_model.html";
	$video_static.bind("click",function(){
	 var vIndex = $(this).index();
		$mask_playVideo.show();
		$("body").css({
			overflow:"hidden",
			marginLeft:"-10px"
		});
		$mask_playVideoDiv.hide().eq(vIndex).show();
		
		if(ie789){
			if(vIndex == 0){
				$("#video_ie1").attr("src",video1_address);
			}else if(vIndex == 1){
				$("#video_ie2").attr("src",video2_address);
			};
		}else{
			//console.log(vIndex);
			if(vIndex == 0){
				document.getElementsByTagName("video")[0].play();	
			}else if(vIndex == 1){
				document.getElementsByTagName("video")[1].play();
			};
		};
	});
	
	$mask_playVideo.bind("click",function(e){
		thisClassName = e.target.className;
		if(thisClassName == "mask_playVideo" || thisClassName == "video_closeBtn"){
			$mask_playVideo.hide();
				$("body").css({
				overflow:"auto",
				marginLeft:"0px"
			});
			if(ie789){
				$("#video_ie1").attr("src","");
				$("#video_ie2").attr("src","");
			}else{
				document.getElementsByTagName("video")[0].pause();
				document.getElementsByTagName("video")[1].pause();
			}
		}
	});
	
	// anchor 锚点跳转
	var $AnchorPoint = $("#contAnchor li");	
		$AnchorPoint.bind("click",function(){
			var anchorNum = $(this).attr("data-num");
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			$('html,body').animate({scrollTop:anchor_scrollArr[anchorNum]}, 'slow');
		});
	function anchorSelect(index){
		$AnchorPoint.removeClass("anchorCur").eq(index).addClass("anchorCur");
	}
	var ie789 = false;
	if ($.browser.msie){
		var ieV = $.browser.version;
		if(ieV == "8.0" || ieV == "7.0" ||ieV == "9.0"){	
			ie789 =true;
			$("#mask_playVideo .false_ie").hide();
			$("#mask_playVideo .true_ie").show();
		}
	};
	
	var $viewMask = $("#viewMask");
	var secendAnimate =true,secendAnimate2 =true,thirdAnimate = true,fourthAnimate =true,fifthAnimate = true;
	
	
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		//console.log(scrollTop);
		if(scrollTop>video_scrollArr[5]){
			anchorSelect(5);
		}else if(scrollTop>video_scrollArr[4]){
			anchorSelect(4);
			if(fifthAnimate){
				isagyBasic.fiveAnimate(-1);
				fifthAnimate =false;
			}
		}else if(scrollTop>video_scrollArr[3]){
			anchorSelect(3);
			if(fourthAnimate){
				isagyBasic.fourAnimate(-1);
				fourthAnimate = false;
			};

		}else if(scrollTop>video_scrollArr[2]){
			anchorSelect(2);
			var modelSrc = $("#model_view").attr("src");
			if(modelSrc == ""){
				$("#model_view").attr("src",isagy_view);
			};
		}else if(scrollTop>video_scrollArr[1]){
			anchorSelect(1);
			$(".model_mask").css({"opacity":"0"});	
			if(secendAnimate){
				isagyBasic.twoAnimate(-1);		
				secendAnimate = false;
			}
			var modelSrc = $("#model_view").attr("src");
			if(modelSrc == ""){
				$("#model_view").attr("src",isagy_view);
			};
			$(".messMode1").animate({
				top:"200px",
				opacity:"1"
			},800);
			$(".messMode2").animate({
				bottom:"350px",
				opacity:"1"
			},800);
		}else if(scrollTop>=video_scrollArr[0]){			
			$(".model_mask").css({"opacity":".5"});		
			anchorSelect(0);
		}else{
			//console.log("else");
		};
	});

});














