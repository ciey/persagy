
$(function () {
    //aboutJoinUs.json属性说明
    // jobName    href      jobType   jobExperience     edu     issueTime   jobDescribe   jobRequire   weAreAdvantage
    // 职位名称  招聘连接  职位类型      工作经验     学历要求    发布时间     职位描述     任职要求     我们的优势
    $.ajax({
        url: "../js/aboutJoinUs.json",
        success: function (rst) {
            var html = "";
            for (var i = 0; i < rst.job.length; i++) {
                var jobName = rst.job[i].jobName;
                var href = rst.job[i].href;
                var jobType = rst.job[i].jobType == undefined ? "" : rst.job[i].jobType;
                var jobExperience = rst.job[i].jobExperience == undefined ? "" : rst.job[i].jobExperience;
                var edu = rst.job[i].edu == undefined ? "" : rst.job[i].edu;
                var issueTime = rst.job[i].issueTime == undefined ? "" : rst.job[i].issueTime;
                var jobDescribe = rst.job[i].jobDescribe == undefined ? "" : rst.job[i].jobDescribe;
                var jobRequire = rst.job[i].jobRequire == undefined ? "" : rst.job[i].jobRequire;
                var weAreAdvantage = rst.job[i].weAreAdvantage == undefined ? "" : rst.job[i].weAreAdvantage;
                var str = "<div class='zhaopinMessage'><div class='clearfix'><span class='zhaopinxq'><a href='" + href + "'target='_blank'>投递</a></span><h4>" + jobName + "</h4></div><div class='zhaopinrequire clearfix'><ul><li><b>职位类型&nbsp;:</b><span>&nbsp;" + jobType + "</span></li><li><b>工作经验&nbsp;:</b><span>&nbsp;" + jobExperience + "</span></li><li><b>学历要求&nbsp;:</b><span>&nbsp;" + edu + "</span></li><li><b>发布时间&nbsp;:</b><span>&nbsp;" + issueTime + "</span></li><li><b>职位描述&nbsp;:</b><p>" + jobDescribe + "</p></li><li><b>任职要求&nbsp;(必备能力):</b><p>" + jobRequire + "</p></li><li><b>我们的优势&nbsp;:</b><p>" + weAreAdvantage + "</p></li></ul></div><div class='clearfix'></div></div>";
                html += str;
            }
            $("#zp_information").append(html);
        },error:function(){
			console.error('招聘json读取错误');
		}
    });

});
