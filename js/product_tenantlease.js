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
        //第一屏
        setTimeout(function () {
            $(".page_a .box_pic").addClass("animat");
            $(".page_a  .lipic_a span").addClass("animat");
            setTimeout(function () {
                $(".page_a  .lipic_b span").addClass("animat");
                setTimeout(function () {
                    $(".page_a  .lipic_c span").addClass("animat");
                }, 300);
            }, 200);
        }, 100);
        $("body").scroll(function () {
            var scrollTop = -$wrap.offset().top;
            if (scrollTop > 500 && scrollTop < 950) {
                //第二屏
                $(".page_b .box_a .box_a_bg").addClass("animat");
                setTimeout(function () {
                    $(".page_b .box_a .box_a_con").addClass("animat");
                }, 100);
            } else if (scrollTop > 1200 && scrollTop < 1800) {
                //第二屏
                $(".page_b .box_b .box_b_bg").addClass("animat");
                setTimeout(function () {
                    $(".page_b .box_b .box_b_con").addClass("animat");
                }, 100);
            } else if (scrollTop > 1700 && scrollTop <2800) {
                $(".page_c .box_con").addClass("animat");
            }else if (scrollTop > 2800 && scrollTop < 3400) {
                //第四屏
                $(".page_d .li_a>span").addClass("animat");
                $(".page_d .li_a>em").addClass("animat");
                setTimeout(function () {
                    $(".page_d .li_b>span").addClass("animat");
                    $(".page_d .li_b>em").addClass("animat");
                    setTimeout(function () {
                        $(".page_d .li_c>span").addClass("animat");
                        $(".page_d .li_c>em").addClass("animat");
                        setTimeout(function () {
                            $(".page_d .li_d>span").addClass("animat");
                            $(".page_d .li_d>em").addClass("animat");
                            setTimeout(function () {
                                $(".page_d .li_e>span").addClass("animat");
                                $(".page_d .li_e>em").addClass("animat");
                                setTimeout(function () {
                                    $(".page_d .box_d_line").addClass("animat");
                                    setTimeout(function () {
                                        $(".page_d .box_d_display").addClass("animat");
                                        setTimeout(function () {
                                            $(".page_d .box_d_arrow").addClass("animat");
                                            setTimeout(function () {
                                                $(".page_d .box_d_iphone").addClass("animat");
                                            }, 480);
                                        }, 440);
                                    }, 400);
                                }, 360);
                            }, 320);
                        }, 300);
                    }, 200);
                }, 100);
            } else if (scrollTop > 3700 && scrollTop < 4600) {
                //第五屏
                $(".page_e .li3").addClass("animat");
                setTimeout(function () {
                    $(".page_e .li2").addClass("animat");
                    setTimeout(function () {
                        $(".page_e .li1").addClass("animat");
                    }, 400);
                }, 200);

            } else if (scrollTop > 4600) {
                //第七屏
                $(".page_f .li1").addClass("animat");
                setTimeout(function () {
                    $(".page_f .li2").addClass("animat");
                    setTimeout(function () {
                        $(".page_f .li3").addClass("animat");
                        setTimeout(function () {
                            $(".page_f .li4").addClass("animat");
                        }, 600);
                    }, 400);
                }, 200);
            } else {
            }

        });

    });


})(window, jQuery);

