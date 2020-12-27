$(function () {
    var progressValue = 0;
    var progressTime = 50;

    //进度条方法
    function progressGo() {
        progressValue += 1;
        $("#pro-1").text(progressValue + "%");
        $("#pro-1").css("width", progressValue + "%")
        st = setTimeout(() => {
            progressGo();
        }, 1000);
    }


    //暂停,继续方法
    $("#pause").click(function () {
        if ("goon" == $("#pause").val()) {
            progressGo();
            $("#pause").val("pause");
            $("#pause").text("暂停");
        } else if ("pause" == $("#pause").val()) {
            if ("start" == $("#start").val()) {
                return;
            }
            clearTimeout(st);
            $("#pause").val("goon");
            $("#pause").text("继续");

        }
    })
    //开始，停止方法
    $("#start").click(function () {

        if ("start" == $("#start").val()) {
            progressGo();
            $("#start").val("stop");
            $("#start").text("停止");
         

        } else if ("stop" == $("#start").val()) {
            console.log(progressValue);
            progressReset();

            $("#start").val("start");
            $("#start").text("开始");
            if ("goon" == $("#pause").val()) {
                $("#pause").val("pause");
                $("#pause").text("暂停");
            }
        }

    })
    //进度条复位
    function progressReset() {
        progressValue = 0;
        clearTimeout(st);
        $("#pro-1").css("width", 0+ "%");
        console.log("hou" + progressValue);
    }

});