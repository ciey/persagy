;(function(window , $){
	
    $(document).ready(function(){
		var $jslEffect = $("#jsl .thereServer_Effect"),$jslSpan = $("#jsl span.EffectJsl"),$jslA =$("#jsl h1 a");
		var $fxnhEffect = $("#fxnh .thereServer_Effect"),$fxnhLi = $("#fxnh ul.EffectFxnh li"),$fxnhA = $("#fxnh h1 a");
		var	$fengli = $("#fengli .thereServer_Effect"),$fengA =$("#fengli h1 a"),
			$EffectFengli = $("#fengli .EffectFengli"),$EffectFlLine = $("#fengli .EffectFlLine");
		var jslTimer,fxnhTimer,fengliTimer;
		var jslNum=0,fxnhNum=0,fengliNum=0;
			
		$jslEffect.add($jslA).hover(function(){											
			$jslSpan.addClass("jslActive");
			$jslA.css("color","#6fb62b");		
		},function(){			
			$jslA.css("color","#264e75");
			$jslSpan.removeClass("jslActive");
		});
		
		
		$fxnhEffect.add($fxnhA).hover(function(){
			var i,FxLen =$fxnhLi.length;
			for(i=0;i<FxLen;i++){
				$fxnhLi.eq(i).addClass("EffectFxnh_"+i);
			};
			$fxnhA.css("color","#6fb62b");
			
		},function(){	
			$fxnhLi.removeClass();
			$fxnhA.css("color","#264e75");
		});
		
		
		$fengli.add($fengA).hover(function(){
			$EffectFengli.addClass('fengActive');
			$fengA.css("color","#6fb62b");
			
		},function(){			
			$EffectFengli.removeClass("fengActive");		
			$fengA.css("color","#264e75");
		});
		
		
	});
	
})(window , jQuery);