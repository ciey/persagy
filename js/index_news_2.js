$(function() {
//官网主页 加载新闻
    function appendNews(_ele, _url) {
        $.ajax({
            url: _url,
            type: "get",
            success: function(res) {
                var strI = res.indexOf("pageContMessage") + 19,
                    endI = res.indexOf("pagenavi");
                res = res.substring(strI, endI);
                var $news1 = $(res);
                $(_ele).html("");
                $news1.find("span").remove();
                $news1.find("li").each(function(a, b) {
                    if (a < 5) {
                        var tagA = $(b).find("a");
                        var name = tagA.attr("name");
                        tagA.attr("href", name);
                        $(_ele).append(b);
                    }
                });
            }
        });
    }
    appendNews(".ournews_left>ul", "/news?sort=1");
    appendNews(".ournews_right>ul", "/news?sort=2");
});
