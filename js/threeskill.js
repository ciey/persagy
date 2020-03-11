;(function(window , $){
	
    $(document).ready(function(){
		//console.log( "三大技术");
		
	/*三大技术 轮换*/
		var count = 0;
		var	showTwo = -1;
		var shun = 0,ni = 0,shun1 = 0,ni1 = 0;
		var orHover = 0;//是否hover
		var threeTime,showTwoTimer,ThreeSkill3_ni1Timer,ThreeSkill3_shun1Timer,
			ThreeSkill3_niTimer,ThreeSkill3_shunTimer,threeTime1,threeTime2,threeTime3;
		mouseoutCount = 0;
		//三大技术 num 划过 计时器;
		var DivHoverTimer;
			
		
		//启动定时三大技术 函数
		threeSkillFade();
			var threeSkillTimer;
			function threeSkillFade(){
				var $threeSkillPageDiv = $('#persagy_three_skill_page>div'),
					$threeSkillPageDivChild = $('#persagy_three_skill_page>div>div'),
					$threeSkillNum = $('#persagy_three_skill_num>span');
					SkillDivlen = $threeSkillPageDiv.length;	
					
					function threeSkillFadeShow(){					
						if(count == SkillDivlen){
							count = 0;
						};	
							$threeSkillPageDiv.eq(count).fadeIn().siblings().fadeOut();
							$threeSkillNum.eq(count).addClass('persagy_three_cur').siblings().removeClass();
							if(orHover == 1){
								orHover = 0;
							}else{
								yesOFno();
							}
							//console.log("第 "+count+" 个即将在3秒后显示");
							count++;						
						threeSkillTimer = setTimeout(function(){
							threeSkillFadeShow();
						}, 6000 );
					};
					threeSkillFadeShow();
					
					/*鼠标点击后*/
					 $threeSkillNum.click(function(){
						var thisIndex = $(this).index();
						var $threeSkillCur = $('#persagy_three_skill_num span.persagy_three_cur').index();//求当前展示的
	
						/*判断点击的num 是否为当前的索引	*/		
						if($threeSkillCur == thisIndex){}else{
							clearTimeout(threeSkillTimer);
							count = thisIndex ;
							stopAll();
							yesOFno();//将所有动画隐藏
							$threeSkillPageDiv.eq(count).fadeIn().siblings().fadeOut();
							$threeSkillNum.eq(count).addClass('persagy_three_cur').siblings().removeClass();
							threeSkillFadeShow();
						};		
						
					});
					
					$threeSkillPageDivChild.hover(function(){

						DivHoverTimer = setTimeout(function(){
							mouseoutCount = 1;
							if(mouseoutCount == 1){
							clearTimeout(threeSkillTimer);	
							clearTimeout(DivHoverTimer);
							}else{
								mouseoutCount = 0;
								return false;
							}
						},300);
					},function(){		
						if(mouseoutCount == 1){						
							mouseoutCount = 0;
							
						var thisIndex = $(this).parent().index();
						//console.log("离开索引为"+thisIndex);	
							count = thisIndex;							
							orHover = 1;							
							threeSkillFadeShow();
						}else{
							clearTimeout(DivHoverTimer);
							return false;
						} 
					});
					
			};
			
			/*判断是否ie 启动 旋转 */
			if(!$.browser.msie){
				threeSkill3_shun(shun);
				threeSkill3_ni(ni);
				threeSkill3_shun1(shun1);
				threeSkill3_ni1(ni1);	
			};	
			/*判断是否应该显示*/
			function yesOFno(){
				//console.log(count);
				if(count == 0){
					/*第一个 是否为displaynone;*/
					$('.persagy_three_one h3').width(0);
					
					threeSkillOne(0);
					
				}else if(count == 1){
					$('.persagy_three_two .persagy_three_cont_pic>div').hide();
					showTwo = -1;	
					threeSkill_showTwo(showTwo);
				}else{return false;}
			}
		/*手动是停止*/
		function stopAll(){
			
		//清除 第一个动画所有			
			showTwo = -1;
			clearTimeout(threeTime1);
			clearTimeout(threeTime2);
			clearTimeout(threeTime3);			
			clearTimeout(showTwoTimer);
		}
		
		/* 第一个  渐入*/
		function threeSkillOne(threeCount1){
			var $threeSkill_Pic = $('.persagy_three_one h3:first');
				$threeSkill_Pic.show("fast");
			threeTime1 = setTimeout(function(){
				threeCount1+=5;		
				if(threeCount1 < 200 ){
					$threeSkill_Pic.width(threeCount1); 	
					threeSkillOne(threeCount1);
				}else{
					clearTimeout(threeTime1);
					threeCount1 = 0;
					threeSkillTwo(0);
					return false;
				};
			},20);
		};
		function threeSkillTwo(threeCount2){
			var $threeSkill_Pic = $('.persagy_three_one h3').eq(1);
			threeTime2 = setTimeout(function(){
				threeCount2+=5;	
				if(threeCount2 < 200 ){
					$threeSkill_Pic.width(threeCount2).show(); 	
					threeSkillTwo(threeCount2);
				}else{
					clearTimeout(threeTime2);
					threeCount2 = 0;
					threeSkillThree(0)
					return false;
				};
			},20);
		};
		function threeSkillThree(threeCount3){
			var $threeSkill_Pic = $('.persagy_three_one h3').eq(2);
			threeTime3 = setTimeout(function(){
				threeCount3+=5;	
				if(threeCount3 < 200 ){
					$threeSkill_Pic.width(threeCount3).show(); 	
					threeSkillThree(threeCount3);
				}else{
					clearTimeout(threeTime3);
					threeCount3 = 0;
					return false;
				};
			},20);			
		};
		
		/*第二个依次fade*/
		function threeSkill_showTwo(showTwo) {
			var $showTwoDiv = $('.persagy_three_two .persagy_three_cont_pic>div');
		//	console.log($showTwoDiv.length);
			showTwoTimer = setTimeout(function () {		
				var max_show = $showTwoDiv.length;
					if (showTwo < max_show){
						showTwo++;
						$showTwoDiv.eq(showTwo).fadeIn(300);
					}else{
						clearTimeout(showTwoTimer);
						
						showTwo = -1;
						
						return false;
					};					
					threeSkill_showTwo(showTwo);
			},100);
		};
		
		/* 三大平台 第三个一次 轮转*/	
		/*内环*/
		function threeSkill3_shun(shun){
			var $ThreeSkill3_shun = $('#persagy_three_skill_page .shun');
			
			ThreeSkill3_shunTimer = setTimeout(function(){
				if( shun < 720){
					shun+=1;threeSkill3_shun(shun);
					$ThreeSkill3_shun.css({
						"transform": "rotate("+shun+"deg)",
						"-webkit-transform": "rotate("+shun+"deg)",
						"-moz-transform": "rotate("+shun+"deg)",
						"-o-transform": "rotate("+shun+"deg)",
						"-ms-transform": "rotate("+shun+"deg)"
					});
					return false;
				}else{
					clearTimeout(ThreeSkill3_shunTimer);
					shun = 0;
					threeSkill3_shun(shun);
					return false;
				};
			},20);
		};
		function threeSkill3_ni(ni){
			var $ThreeSkill3_ni = $('.persagy_three_cont_pic .ni');
			ThreeSkill3_niTimer = setTimeout(function(){				
				if( ni > -720){
					ni-= 1;
					threeSkill3_ni(ni);
				//console.log(ni);
					$ThreeSkill3_ni.css({
						"transform": "rotate("+ni+"deg)",
						"-webkit-transform": "rotate("+ni+"deg)",
						"-moz-transform": "rotate("+ni+"deg)",
						"-o-transform": "rotate("+ni+"deg)",
						"-ms-transform": "rotate("+ni+"deg)"
					});
					return false;
				}else{
					clearTimeout(ThreeSkill3_niTimer);
					ni = 0;
					threeSkill3_ni(ni);
					return false;
				};
			},20);
		}
		/*外环*/
		function threeSkill3_shun1(shun1){ 
			var $ThreeSkill3_shun1 = $('#persagy_three_skill_page .shun1');
			ThreeSkill3_shun1Timer = setTimeout(function(){
				if( shun1 < 360){
					shun1+=1;threeSkill3_shun1(shun1);
					$ThreeSkill3_shun1.css({
						"transform": "rotate("+shun1+"deg)",
						"-webkit-transform": "rotate("+shun1+"deg)",
						"-moz-transform": "rotate("+shun1+"deg)",
						"-o-transform": "rotate("+shun1+"deg)",
						"-ms-transform": "rotate("+shun1+"deg)"
					});
					return false;
				}else{
					clearTimeout(ThreeSkill3_shun1Timer);
					shun1 = 0;
					threeSkill3_shun1(shun1);
					return false;
				};
			},40);		
		};		
		function threeSkill3_ni1(ni1){
			var $ThreeSkill3_ni1 = $('.persagy_three_cont_pic .ni1');
			ThreeSkill3_ni1Timer = setTimeout(function(){
				
				if( ni1 > -360){
					ni1 -= 1;
					threeSkill3_ni1(ni1);
				//console.log(ni);
					$ThreeSkill3_ni1.css({
						"transform": "rotate("+ni1+"deg)",
						"-webkit-transform": "rotate("+ni1+"deg)",
						"-moz-transform": "rotate("+ni1+"deg)",
						"-o-transform": "rotate("+ni1+"deg)",
						"-ms-transform": "rotate("+ni1+"deg)"
					});
					return false;
				}else{
					clearTimeout(ThreeSkill3_ni1Timer);
					ni1 = 0;
					threeSkill3_ni1(ni1);
					return false;
				};
			},40);
		};	
		
		});	
	
})(window , jQuery);