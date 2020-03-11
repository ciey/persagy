;
(function(window, $) {

    $(document).ready(function() {
        var doing = 0,
            imgCount = -1,
            DivCount = -1;
        /*滚动条 高度 变量*/
        scroll1400 = 0, scroll900 = 0, scroll300 = 0;
        //导航动画
        head_nav();

        //返回顶部
        returnTop();
        $(window).scroll(function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //console.log("滚动条高度是---"+scrollTop);
            if (scrollTop > 1850) {
                $("#returnTop").fadeIn();
                if (scroll1400 == 0) {
                    scroll1400 = 1;
                    //六大解决方案 div 展示;	
                    show_Div(DivCount);
                } else {
                    return false;
                };
            } else if (scrollTop > 1350) {
                $("#returnTop").fadeIn();
                if (scroll900 == 0) {
                    scroll900 = 1;
                    doing1(doing); /*doing 1 */
                    setTimeout(function() {
                        doing2(doing);
                    }, 1000); /*doing 2 */
                    setTimeout(function() {
                        doing3(doing);
                    }, 2800); /*doing 3 */
                } else {
                    return false;
                }
            } else if (scrollTop > 1150) {
                $("#returnTop").fadeIn();
            } else if (scrollTop > 1050) {
                $("#returnTop").fadeIn();
            } else if (scrollTop > 750) {
                $("#returnTop").fadeOut();
                if (scroll300 == 0) {
                    scroll300 = 1;
                    show_img(imgCount); //我们是谁图片展示;	
                } else {
                    return false;
                }
            } else if (scrollTop < 700) {
                $("#returnTop").fadeOut();
            } else if (scrollTop < 80 && scrollTop > 110) {
                $("#header").stop().animate({
                    top: -110
                }, 200).removeClass("hearderShadow");
            } else {
                return false;
            };
        });

        //返回顶部
        function returnTop() {
            $("#returnTop").click(function(e) {
                e.preventDefault();
                $(document).scrollTop(0);
                $("#header").stop().animate({
                    top: 0
                }, 10).removeClass("headerShadow");
            });
        };
        /* 头部导航 head nav */
        function head_nav() {
            var $navLi = $('#nav li'),
                $navLi1 = $('#nav>li');
            //nav_划过 add 离开 remove
            $navLi.mouseover(function() {
                if ($(this).has('ul').length > 0) {
                    $(this).children('ul').stop(true, true).show('fast');
                    $(this).parent().css("overflow", "visible");
                } else {
                    $(this).children('ul').stop(true, true).hide('fast');
                    return false;
                };
            }).mouseleave(function() {
                $(this).children('ul').stop(true).hide('fast');
            });

            $navLi1.mouseover(function() {
                $navLi.removeClass('nav_cur');
                $(this).addClass('nav_cur');
            }).mouseleave(function() {
                $navLi.removeClass('nav_cur');
            });
        };


        /*********  三大技术平台  ***********/
        /* 第一个  渐入*/
        function threeSkillOne(threeCount, a, speed) {
            var $threeSkill_Pic = $('.persagy_three_one h3'),
                threeTime;
            //console.log(threeCount);
            threeTime = setTimeout(function() {
                threeCount++;
                if (threeCount < 200) {
                    $threeSkill_Pic.eq(a).width(threeCount).show();
                    threeSkillOne(threeCount, a);
                } else {
                    clearTimeout(threeTime);
                    $threeSkill_Pic.css('width', 0);
                    setTimeout(function() {
                        threeSkillOne(0, 0, 5);
                    }, 3000);
                };
            }, speed);

        }


    });


    /*我们是谁 who show  */
    function show_img(a) {
        var $WhoRightPic = $('.persagy_who_right_pic img');
        var whoTimer;
        whoTimer = setTimeout(function() {
            var max_img = 15;
            if (a < max_img) {
                a++;
                $WhoRightPic.eq(a).fadeIn(300);
            } else {
                clearTimeout(whoTimer);
                return false;
            };
            show_img(a, $WhoRightPic);
        }, 60);
    };

    /*我们在做什么 doing   one */
    function doing1(doing) {
        var doing1Timer,
            $doing1_point = $('div.doing_1_pointer');

        doing1Timer = setTimeout(function() {
            if (doing < 360) {
                doing += 4;
                doing1(doing);
                $doing1_point.css({
                    "transform": "rotate(" + doing + "deg)",
                    "-webkit-transform": "rotate(" + doing + "deg)",
                    "-moz-transform": "rotate(" + doing + "deg)",
                    "-o-transform": "rotate(" + doing + "deg)",
                    "-ms-transform": "rotate(" + doing + "deg)"
                });
                return false;
            } else {
                clearTimeout(doing1Timer);
                return false;
            };
        }, 10);

    };

    /*我们在做什么 doing  two 	*/
    function doing2(doing) {
        var $dcp_3 = $(".dcp_3"),
            $dcp_4 = $('.dcp_4'),
            doing2Timer;
        doing2Timer = setTimeout(function() {
            if (doing < 100) {
                doing += 2;
                doing2(doing);
                $dcp_3.css("left", doing);
            } else {
                $dcp_4.fadeOut('slow', function() {
                    $(this).fadeIn(); //doing2(0);
                });
                clearTimeout(doing2Timer);
                return false;
            };
        }, 20);
    };

    /*我们在做什么 doing three */
    function doing3(doing) {
        doing3Top1(doing);
        doing3Top2(doing);
        doing3Top3(doing);
    }

    function doing3Top1(doing) {
        var $dch_1 = $('.dch_1'),
            doing3Timer1;
        doing3Timer1 = setTimeout(function() {
            if (doing < 10) {
                doing++;
                $dch_1.css("top", doing);
                doing3Top1(doing);
            } else {
                clearTimeout(doing3Timer1); //doing3Top1(0);				
                return false;
            }
        }, 25);
    };

    function doing3Top2(doing) {
        var $dch_2 = $('.dch_2'),
            doing3Timer2;
        doing3Timer2 = setTimeout(function() {
            if (doing < 35) {
                doing++;
                $dch_2.css("top", doing);
                doing3Top2(doing);
            } else {
                clearTimeout(doing3Timer2); //doing3Top1(0);
                return false;
            }
        }, 20);
    };

    function doing3Top3(doing) {
        var $dch_3 = $('.dch_3'),
            $dch_4 = $('.dch_4'),
            doing3Timer3;
        doing3Timer3 = setTimeout(function() {
            if (doing < 70) {
                doing++;
                $dch_3.css("top", doing);
                doing3Top3(doing);
            } else {
                $dch_4.fadeIn();
                clearTimeout(doing3Timer3);
                return false;
            }
        }, 18);
    };

    /*  六大解决方案 */

    function show_Div(a) {
        var $SixSolution = $('.persagy_project_cont>div');
        var SixTimer;
        SixTimer = setTimeout(function() {
            var maxDiv = 15;
            if (a < maxDiv) {
                a++;
                $SixSolution.eq(a).fadeIn("slow");
            } else {
                clearTimeout(SixTimer);
                return false;
            };
            show_Div(a);
        }, 40);
    };
})(window, jQuery);
