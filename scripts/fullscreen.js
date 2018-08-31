
(function ($) {
    var screen = function () {
        var that = this;
        document.isFullScreen = false;

        var doc = document;
        var docElm = doc.documentElement;
        var fullMethod = docElm.requestFullScreen || docElm.webkitRequestFullScreen || docElm.mozRequestFullScreen || docElm.msRequestFullscreen || fullScreen;
        var exitMethod = doc.cancelFullScreen || doc.webkitExitFullscreen || doc.mozCancelFullScreen || doc.exitFullscreen || doc.msExitFullscreen || exitfullScreen;

        var wscript = getWscript();

        this.full = function () {

            fullMethod.call(that.fullElement);

            if (!document.documentMode)
                document.isFullScreen = true;
        };
        this.exitfull = function () {

            if (document.documentMode == 11 && document.f11down) {
                ShowSuccessAlert("试试 F11 全屏/退出全屏！");
                return;
            }
            exitMethod.call(document);
            if (!document.documentMode)
                document.isFullScreen = false;
        };

        this.auto = function () {

            var isfull = getFullScreenState();
            if (isfull) {
                that.exitfull();
            } else {
                that.full();
            }
        };

        this.fullElement = document;

        function fullScreen() {
            if (wscript == null) {
                ShowSuccessAlert("试试 F11 全屏/退出全屏！");
            } else {
                wscript.SendKeys("{F11}");
            }
        }

        function exitfullScreen() {
            if (wscript == null) {
                ShowSuccessAlert("试试 F11 全屏/退出全屏！");
            } else {
                wscript.SendKeys("{F11}");
            }
        }

        document.onmsfullscreenchange = function () {
            document.isFullScreen = document.msFullscreenElement != null;
        }
        document.onfullscreenchange = function () {
            alert('onfullscreenchange');
            document.isFullScreen = document.mozFullScreen;
        }
        document.onmozfullscreenchange = function () {
            document.isFullScreen = document.mozFullScreen;
        }
        document.onwebkitfullscreenchange = function () {
            document.isFullScreen = document.webkitIsFullScreen;
        }

        document.onmsfullscreenerror = function (e) {

        }

        window.onkeydown = function (e) {
            if (e.keyCode == 122) {
                var ret = true;

                if (!document.documentMode) {
                    var isfull = getFullScreenState();
                    if (isfull) {
                        that.exitfull();
                    } else {
                        that.full();
                    }
                    ret = false;
                } else {
                    var isfull = getFullScreenState();
                    if (isfull) {
                        var hasElement = document.msFullscreenElement == null;

                        $(that.fullElement).removeClass('fullscreen');
                        if (document.documentMode == 11)
                            exitMethod.call(document);

                        document.isFullScreen = false;
                        document.f11down = false;
                        ret = hasElement;
                    } else {

                        $(that.fullElement).addClass('fullscreen');
                        if (document.documentMode == 11)
                            that.full();
                        document.f11down = true;
                        document.isFullScreen = true;
                        ret = true;
                    }
                }
                return ret;
            }
        }


        function getFullScreenState() {
            if (document.webkitIsFullScreen !== undefined) {
                return document.webkitIsFullScreen;
            }
            else if (document.mozFullScreen !== undefined) {
                return document.mozFullScreen;
            }
            else {
                return document.isFullScreen;
            }
        }

        function getWscript() {
            try {
                return new ActiveXObject("WScript.Shell");
            } catch (e) {
                return null;
            }
        }
    }

    $.extend({ screen: new screen() });
})(jQuery);