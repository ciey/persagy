;(function(window , $){
	$(document).ready(function(){
		abc();
		function abc(con) {
            var $container = $('#persagy_cases_show')
				,$main =$(".persagy_cases_cont")
                , $imgs = $container.find('div.hero')
            , $leftBtn = $main.find('span.next')
            , $rightBtn = $main.find('span.prev')
            , config = {
                interval: con && con.interval || 3500,
                animateTime: con && con.animateTime || 500,
                direction: con && (con.direction === 'left'),
                _imgLen: $imgs.length
            }
            , i = 0
            , getNextIndex = function (y) { return i + y >= config._imgLen ? i + y - config._imgLen : i + y; }
            , getPrevIndex = function (y) { return i - y < 0 ? config._imgLen + i - y : i - y; }
            , silde = function (d) {
                $imgs.eq((d ? getPrevIndex(2) : getNextIndex(2))).css('left', (d ? '-1776px' : '1776px'))
                $imgs.animate({
                    'left': (d ? '+' : '-') + '=888px'
                }, config.animateTime);
                i = d ? getPrevIndex(1) : getNextIndex(1);
            }
            , s = setInterval(function () { silde(config.direction); }, config.interval);
            $imgs.eq(i).css('left', 0).end().eq(i + 1).css('left', '888px').end().eq(i - 1).css('left', '-888px');
            $container.find('.hero-wrap').add($leftBtn).add($rightBtn).hover(function () { clearInterval(s); }, function () { s = setInterval(function () { silde(config.direction); }, config.interval); });
            $leftBtn.click(function () {
                if ($(':animated').length === 0) {
                    silde(false);
                }
            });
            $rightBtn.click(function () {
                if ($(':animated').length === 0) {
                    silde(true);
                }
            });
        }
	});
})(window , jQuery);/* 
; (function ($) {
    $.extend({
        'foucs': function (con) {
            var $container = $('#persagy_cases_show')
				,$main =$(".persagy_cases_cont")
                , $imgs = $container.find('div.hero')
            , $leftBtn = $main.find('span.prev')
            , $rightBtn = $main.find('span.next')
            , config = {
                interval: con && con.interval || 3500,
                animateTime: con && con.animateTime || 500,
                direction: con && (con.direction === 'left'),
                _imgLen: $imgs.length
            }
            , i = 0
            , getNextIndex = function (y) { return i + y >= config._imgLen ? i + y - config._imgLen : i + y; }
            , getPrevIndex = function (y) { return i - y < 0 ? config._imgLen + i - y : i - y; }
            , silde = function (d) {
                $imgs.eq((d ? getPrevIndex(2) : getNextIndex(2))).css('right', (d ? '-1776px' : '1776px'))
                $imgs.animate({
                    'right': (d ? '+' : '-') + '=888px'
                }, config.animateTime);
                i = d ? getPrevIndex(1) : getNextIndex(1);
            }
            , s = setInterval(function () { silde(config.direction); }, config.interval);
            $imgs.eq(i).css('right', 0).end().eq(i + 1).css('right', '888px').end().eq(i - 1).css('right', '-888px');
            $container.find('.hero-wrap').add($leftBtn).add($rightBtn).hover(function () { clearInterval(s); }, function () { s = setInterval(function () { silde(config.direction); }, config.interval); });
            $leftBtn.click(function () {
                if ($(':animated').length === 0) {
                    silde(false);
                }
            });
            $rightBtn.click(function () {
                if ($(':animated').length === 0) {
                    silde(true);
                }
            });
        }
    });
}(jQuery)); */