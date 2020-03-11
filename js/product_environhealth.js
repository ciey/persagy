$(function () {
    if (featureSign()) {
        $("#wrap").addClass("support");
        setTimeout(function () {
            $(".fir_detail dt,.fir_detail dd").addClass("move status");
            $(".fir_text").children().addClass("move");
        }, 100);
        $("#wrap").on("mousewheel", function (event) {

        });
        $("body").scroll(function () {
            var scrollTop = -$("#wrap").offset().top;
            var secSign = true, thiSign = true, forSign = true, fifSign = true,
                sixSign = true, sevSign = true, eigSign = true, ninSign = true;
            if (scrollTop > 700 && scrollTop < 1400 && secSign) {//第二个
                $(".sec_build").children().addClass("move status");
                $(".sec_text").children().addClass("move");
                secSign = false;
            } else if (scrollTop > 1400 && scrollTop < 2300 && thiSign) {//第三个
                thiSign = false;
            } else if (scrollTop > 2300 && scrollTop < 3200 && forSign) {//第四个
                $(".for_pc").children().addClass("move status");
                $(".for_text").children().addClass("move");
                forSign = false;
            } else if (scrollTop > 3200 && scrollTop < 4100 && fifSign) {//第五个
                fifSign = false;
            } else if (scrollTop > 4100 && scrollTop < 4900 && sixSign) {//第六个
                $(".six_project").children().addClass("move status");
                $(".six_text").children().addClass("move");
                sixSign = false;
            } else if (scrollTop > 4900 && scrollTop < 5800 && sevSign) {//第七个
                sevSign = false;
            } else if (scrollTop > 5800 && scrollTop < 6700 && eigSign) {//第八个
                $(".eig_text").children().addClass("move");
                $(".eig_design").children().addClass("move");
                $(".eig_cont p").addClass("move");
                //eightLiShow();
                eigSign = false;
            } else if (scrollTop > 6700 && ninSign) {//第九个
                $(".nin_text").children().addClass("move");
                $(".nin_analyse").children().addClass("move");
                ninSign = false;
            }
        });
    } else {
        $("#wrap").addClass("poor");
    }
});

function supportCss(a) { //判断兼容css3 style
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
}
//这个方法能用来判断浏览器是不是支持transform transition animation
function featureSign() {
    var support = false;
    var a = supportCss("transform"),
        b = supportCss("transition"),
        c = supportCss("animation");

    if (a && b && c) {
        support = true;
    }
    return support;
}

var lnum = 0;
var timesign;
function eightLiShow() {
    var arr = [2, 0, 6, 1, 3, 5, 8, 4, 9, 7];
    $(".eig_design li").eq(arr[lnum]).addClass("move status");
    lnum = lnum + 1;
    if (lnum < 10) {
        timesign = setTimeout('eightLiShow()', 360);
    } else {
        $(".eig_cont p").addClass("move status");
        clearTimeout(timesign);
    }
}