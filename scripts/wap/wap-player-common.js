function getObjClass(n) {
    if (n && n.constructor) {
        var i = n.constructor.toString(), t = i.substr(0, i.indexOf("("));
        return t = t.replace("function", ""), t.replace(/(^\s*)|(\s*$)/ig, "")
    }
    return typeof n
}

function getBigFactor(n, t) {
    return t == 0 ? n : getBigFactor(t, n % t)
}

function displaySwitch(n) {
    var t = require("child_process");
    try {
        return n ? t.execSync("DisplaySwitch.exe /extend") : t.execSync("DisplaySwitch.exe /clone"), !0
    } catch (i) {
        return !1
    }
}

function computePoint1(n, t, i, r, u) {
    var f = -(t - r) * Math.sin(u) + (n - i) * Math.cos(u) + i, e = (t - r) * Math.cos(u) + (n - i) * Math.sin(u) + r;
    return {x: f, y: e}
}

function computePoint2() {
}

function getClass(n) {
    return classArr[n]
}

function loadingFinish() {
    if (preloadResourceCount--, preloadResourceCount == 0) {
        var n = Player.PlayerCommon.getInstance();
        n && n.loadComplete()
    }
}

function loopAudio(n) {
    n.play()
}

var impressEvent, Common, __extends, classArr, Core, Player, SoftWare;
window.TrackTransform = function () {
    var t = document.createElementNS("http://www.w3.org/2000/svg", "svg"), n = t.createSVGMatrix(), i = [];
    this.trackTransform = function (r) {
        var e, o, s, h, c, l, a, u, f, v;
        r.getTransform = function () {
            return n
        }, e = r.save, r.save = function () {
            return i.push(n.translate(0, 0)), e.call(r)
        }, o = r.restore, r.restore = function () {
            return n = i.pop(), o.call(r)
        }, s = r.scale, r.scale = function (t, i) {
            return n = n.scaleNonUniform(t, i), s.call(r, t, i)
        }, h = r.rotate, r.rotate = function (t) {
            var i = t * Math.PI / 180;
            return n = n.rotate(t), h.call(r, i)
        }, c = r.translate, r.translate = function (t, i) {
            return n = n.translate(t, i), c.call(r, t, i)
        }, l = r.transform, r.transform = function (i, u, f, e, o, s) {
            var h = t.createSVGMatrix();
            return h.a = i, h.b = u, h.c = f, h.d = e, h.e = o, h.f = s, n = n.multiply(h), l.call(r, i, u, f, e, o, s)
        }, a = r.setTransform, r.setTransform = function (t, i, u, f, e, o) {
            return n.a = t, n.b = i, n.c = u, n.d = f, n.e = e, n.f = o, a.call(r, t, i, u, f, e, o)
        }, u = t.createSVGPoint(), r.transformedPoint = function (t, i) {
            return u.x = t, u.y = i, u.matrixTransform(n.inverse())
        }, f = t.createSVGPoint(), r.transformedPoint2 = function (t, i) {
            return f.x = t, f.y = i, f.matrixTransform(n)
        }, v = r.clearRect, r.clearRect = function (n, t, i, u) {
            r.save(), r.setTransform(1, 0, 0, 1, 0, 0), v.call(r, n, t, i, u), r.restore()
        }
    }
}, function (n) {
    var t, i;
    (function (n) {
        n[n.leftTop = 0] = "leftTop", n[n.rightTop = 1] = "rightTop", n[n.leftBottom = 2] = "leftBottom", n[n.rightBottom = 3] = "rightBottom", n[n.left = 4] = "left", n[n.top = 5] = "top", n[n.right = 6] = "right", n[n.bottom = 7] = "bottom", n[n.rotate = 9] = "rotate", n[n.start = 10] = "start", n[n.end = 11] = "end", n[n.control = 12] = "control", n[n.crosshair = 13] = "crosshair", n[n.center = 14] = "center", n[n.middle = 15] = "middle", n[n.horizontal = 16] = "horizontal", n[n.vertical = 17] = "vertical", n[n.sameWidth = 18] = "sameWidth", n[n.sameHeight = 19] = "sameHeight"
    })(n.DirectionType || (n.DirectionType = {})), t = n.DirectionType, function (n) {
        n[n.canvas = 1] = "canvas", n[n.ghostCanvas = 2] = "ghostCanvas", n[n.previewPanel = 3] = "previewPanel", n[n.Logo = 4] = "Logo", n[n.animation = 5] = "animation", n[n.textControl = 6] = "textControl", n[n.customPath = 7] = "customPath", n[n.editRight = 8] = "editRight", n[n.setBgLi = 9] = "setBgLi", n[n.frameShape = 10] = "frameShape", n[n.warpShape = 11] = "warpShape", n[n.none = 0] = "none"
    }(n.EventBelongType || (n.EventBelongType = {})), i = n.EventBelongType
}(Common || (Common = {})), impressEvent = {
    on: function (n, t, i) {
        n.addEventListener ? n.addEventListener(t, i) : n.attachEvent && n.attachEvent(t, i)
    }
}, function (n) {
    var i = function () {
        function n(n, t, i, r, u, f, e, o) {
            this.el = n, this.onmouseDown = t || null, this.ondragMove = i || null, this.ondragUp = r || null, this.onmouseMove = u || null, this.onmouseUp = f || null, this.mouseWheel = e || null, this.onContextMenu = o
        }

        return n
    }(), t;
    n.MouseEventInfo = i, t = function () {
        function n(n) {
            this.mousedownHandler = function (n) {
                this.moveCount = 1, this.down = !0, this.startX = n.pageX, this.startY = n.pageY, this.dragging = !1, this.eventInfo.el && this.eventInfo.onmouseDown && this.eventInfo.onmouseDown({
                    evt: n,
                    target: this.eventInfo.el,
                    mouseX: this.startX - leftWidth,
                    mouseY: this.startY - topHeight - topAnimaitonHeight,
                    buttonCode: n.button
                }), this.lastX = n.pageX, this.lastY = n.pageY
            }, this.mousemoveHandler = function (n) {
                this.moveCount++, this.x = n.pageX, this.y = n.pageY, this.down && (this.x - this.startX != 0 || this.y - this.startY != 0) && (this.dragging = !0), this.dragging ? this.eventInfo.ondragMove && this.eventInfo.ondragMove({
                    evt: n,
                    isFirstMove: this.moveCount == 1 ? !0 : !1,
                    mouseX: this.x - leftWidth,
                    mouseY: this.y - topHeight - topAnimaitonHeight,
                    downX: this.startX - leftWidth,
                    downY: this.startY - topHeight - topAnimaitonHeight,
                    lastX: this.lastX - leftWidth,
                    lastY: this.lastY - topHeight - topAnimaitonHeight,
                    noRoteDiffX: this.x - this.lastX,
                    noRoteDiffY: this.y - this.lastY,
                    totalX: this.x - this.startX,
                    totalY: this.y - this.startY
                }) : this.eventInfo.onmouseMove && this.eventInfo.onmouseMove({
                    evt: n,
                    mouseX: this.x - leftWidth,
                    mouseY: this.y - topHeight - topAnimaitonHeight,
                    downX: this.startX - leftWidth,
                    downY: this.startY - topHeight - topAnimaitonHeight,
                    lastX: this.lastX - leftWidth,
                    lastY: this.lastY - topHeight - topAnimaitonHeight,
                    noRoteDiffX: this.x - this.lastX,
                    noRoteDiffY: this.y - this.lastY,
                    totalX: this.x - this.startX,
                    totalY: this.y - this.startY
                }), this.lastX = n.pageX, this.lastY = n.pageY
            }, this.mouseupHandler = function (n) {
                if (this.x = n.pageX, this.y = n.pageY, this.lastX = n.pageX, this.lastY = n.pageY, this.dragging && this.eventInfo.ondragUp) this.eventInfo.ondragUp({
                    evt: n,
                    mouseX: this.x - leftWidth,
                    mouseY: this.y - topHeight - topAnimaitonHeight,
                    downX: this.startX - leftWidth,
                    downY: this.startY - topHeight - topAnimaitonHeight,
                    noRoteDiffX: this.lastX - this.startX,
                    noRoteDiffY: this.lastY - this.startY,
                    totalX: this.x - this.startX,
                    totalY: this.y - this.startY
                });
                if (this.click = this.dragging ? !1 : !0, this.click && this.eventInfo.onmouseUp) this.eventInfo.onmouseUp({
                    evt: n,
                    mouseX: this.x - leftWidth,
                    mouseY: this.y - topHeight - topAnimaitonHeight,
                    downX: this.startX - leftWidth,
                    downY: this.startY - topHeight - topAnimaitonHeight,
                    noRoteDiffX: this.lastX - this.startX,
                    noRoteDiffY: this.lastY - this.startY,
                    totalX: this.x - this.startX,
                    totalY: this.y - this.startY
                });
                this.down = !1, this.dragging = !1, this.click = !1
            }, this.contextMenuHandler = function (n) {
                if (n.ctrlKey) return !1;
                if (this.x = n.pageX, this.y = n.pageY, this.lastX = n.pageX, this.lastY = n.pageY, this.down = !1, this.dragging = !1, this.click = !1, this.eventInfo.onContextMenu) this.eventInfo.onContextMenu({
                    evt: n,
                    mouseX: this.x,
                    mouseY: this.y
                })
            }, this.mouseWheelHandler = function (n) {
                this.x = n.pageX, this.y = n.pageY, this.down = !1, this.dragging = !1, this.scroll = !0;
                var t = n.wheelDelta ? n.wheelDelta / 40 : n.detail ? -n.detail : 0;
                t && this.eventInfo.mouseWheel && this.eventInfo.mouseWheel({
                    evt: n,
                    delta: t,
                    mouseX: this.x - leftWidth,
                    mouseY: this.y - topHeight - topAnimaitonHeight
                }), this.scroll = !1
            }, this.moveCount = 0, this.x = 0, this.y = 0, this.lastX = 0, this.lastY = 0, this.startX = 0, this.startY = 0, this.down = !1, this.eventInfo = n, this.dragging = !1, this.scroll = !1;
            var t = impressEvent.on, i = this;
            this.eventInfo.el && (t(this.eventInfo.el, "mousedown", function (n) {
                if (n.button == 1 || n.button == 2) return n.preventDefault(), !1;
                i.mousedownHandler(n)
            }), (this.eventInfo.ondragMove || this.eventInfo.onmouseMove) && t(this.eventInfo.el, "mousemove", function (n) {
                if (n.button == 1 || n.button == 2) return n.preventDefault(), !1;
                i.mousemoveHandler(n)
            }), (this.eventInfo.ondragUp || this.eventInfo.onmouseUp) && t(this.eventInfo.el, "mouseup", function (n) {
                if (n.button == 1 || n.button == 2) return n.preventDefault(), !1;
                i.mouseupHandler(n)
            }), this.eventInfo.mouseWheel && t(this.eventInfo.el, "mousewheel", function (n) {
                if (n.button == 1 || n.button == 2) return n.preventDefault(), !1;
                i.mouseWheelHandler(n)
            }), this.eventInfo.onContextMenu && t(this.eventInfo.el, "contextmenu", function (n) {
                if (n.button == 1) return n.preventDefault(), !1;
                n.preventDefault(), i.contextMenuHandler(n)
            }))
        }

        return n
    }(), n.MouseEventClass = t
}(Common || (Common = {})), function (n) {
    var t = function () {
        function n() {
        }

        return n
    }(), i, r, u;
    n.HashValue = t, i = function () {
        function n() {
            this.items = {}, this.itemList = []
        }

        return n.prototype.set = function (n, i) {
            var r = new t, u;
            r.key = n, r.value = i, u = this.itemList.length, this.has(n) && (u = this.items[n].index), r.index = u, this.itemList[u] = i, this.items[n] = r
        }, n.prototype.del = function (n) {
            if (this.has(n)) {
                var t = this.items[n].index;
                t > -1 && this.itemList.splice(t, 1), delete this.items[n], this.resetIndex()
            }
        }, n.prototype.resetIndex = function () {
            var n = this;
            this.foreach(function (t, i) {
                var r = n.itemList.indexOf(i);
                n.items[t].index = r
            })
        }, n.prototype.has = function (n) {
            return n in this.items
        }, n.prototype.get = function (n) {
            return this.has(n) ? this.items[n].value : null
        }, n.prototype.count = function () {
            return this.itemList.length
        }, n.prototype.all = function () {
            return this.itemList
        }, n.prototype.foreach = function (n) {
            for (var t in this.items) n(t, this.items[t].value)
        }, n.prototype.indexOf = function (n) {
            if (this.has(n)) return this.items[n].index
        }, n.prototype.insertAt = function (n, i, r) {
            this.itemList.splice(n, 0, i);
            var u = new t;
            u.index = n, u.key = r, u.value = i, this.items[r] = u, this.resetIndex()
        }, n.prototype.sort = function (n) {
            this.itemList.sort(function (t, i) {
                return n(t, i)
            })
        }, n
    }(), n.HashTable = i, r = function () {
        function n() {
            this.items = []
        }

        return n.prototype.checkIndex = function (n) {
            return !(n < 0 || isNaN(n) || n >= this.items.length)
        }, n.prototype.length = function () {
            return this.items.length
        }, n.prototype.add = function (n) {
            this.items.push(n)
        }, n.prototype.pop = function () {
            return this.items.pop()
        }, n.prototype.shift = function () {
            this.items.shift()
        }, n.prototype.remove = function (n) {
            if (this.checkIndex(n)) {
                for (var t = 0, i = 0; t < this.items.length; t++) this.items[t] != this.items[n] && (this.items[i++] = this.items[t]);
                this.items.pop()
            }
        }, n.prototype.clear = function () {
            this.items = []
        }, n.prototype.contains = function (n) {
            for (var t in this.items) return n == this.items[t];
            return !1
        }, n.prototype.indexOf = function (n) {
            return this.items.indexOf(n)
        }, n.prototype.insert = function (n, t) {
            this.items.splice(n, 0, t)
        }, n.prototype.get = function (n) {
            return this.items[n]
        }, n.prototype.all = function () {
            return this.items
        }, n.prototype.foreach = function (n) {
            for (var i = this.items.length, t = 0; t < i; t++) if (n(t, this.items[t]) === !1) break
        }, n.prototype.reverseForeach = function (n) {
            for (var i = this.items.length, t = i - 1; t >= 0; t--) if (n(t, this.items[t]) === !1) break
        }, n.prototype.sort = function (n) {
            this.items.sort(function (t, i) {
                return n(t, i)
            })
        }, n
    }(), n.List = r, u = function () {
        function t() {
        }

        return t.getFontUrl = function (t) {
            return n.Util.fontStyles[t] ? n.Util.fontStyles[t].url : null
        }, t.getSystemFontDir = function () {
            var i, u, r, t;
            if (osType.toLowerCase() == "darwin") {
                if (n.FileSytem.existsSync("/Library/Fonts")) return "/Library/Fonts"
            } else {
                for (i = process.env, u = ["C:/Windows/Fonts", i.windir + "\\Fonts", i.SystemRoot + "\\Fonts", i.SystemDrive + "/Windows/Fonts", i.HOMEDRIVE + "/Windows/Fonts", "D:/Windows/Fonts"], r = 0; r < u.length; r++) if (n.FileSytem.existsSync(u[r])) return u[r];
                return (t = n.Os.getTmpdir(), t = t.substr(0, t.indexOf("\\")), t = t + "/Windows/Fonts", n.FileSytem.existsSync(t)) ? t : null
            }
        }, t.objectToString = function (n) {
            return Object.prototype.toString.call(n)
        }, t.isArray = function (n) {
            return Array.isArray(n) || typeof n == "object" && t.objectToString(n) === "[object Array]"
        }, t.isDate = function (n) {
            return typeof n == "object" && t.objectToString(n) === "[object Date]"
        }, t.isRegExp = function (n) {
            return typeof n == "object" && t.objectToString(n) === "[object RegExp]"
        }, t.getRegExpFlags = function (n) {
            var t = "";
            return n.global && (t += "g"), n.ignoreCase && (t += "i"), n.multiline && (t += "m"), t
        }, t.getGenerate = function () {
            var n = require("shortid");
            return n.generate()
        }, t.isAnimatedGif = function (t) {
            var i = n.FileSytem.read(t, "binary"), r = new n.Stream(i);
            return r.read(3) == "GIF"
        }, t.getGifDelayTime = function (t) {
            var r = n.FileSytem.read(t, "binary"), i = new n.Stream(r);
            return alert(i.readByte()), i.readUnsigned()
        }, t.translate = function (n) {
            return " translate3d(" + n.x + "px," + n.y + "px," + n.z + "px) "
        }, t.rotate = function (n, t) {
            var i = " rotateX(" + n.x + "deg) ", r = " rotateY(" + n.y + "deg) ", u = " rotateZ(" + n.z + "deg) ";
            return t ? u + r + i : i + r + u
        }, t.pfx = function (n) {
            var f = document.createElement("dummy").style, e = "Webkit Moz O ms Khtml".split(" "), t = {}, r, i, u;
            if (typeof t[n] == "undefined") {
                r = n.charAt(0).toUpperCase() + n.substr(1), i = (n + " " + e.join(r + " ") + r).split(" "), t[n] = null;
                for (u in i) if (f[i[u]] !== undefined) {
                    t[n] = i[u];
                    break
                }
            }
            return t[n]
        }, t.css = function (n, t) {
            var i, r;
            for (i in t) t.hasOwnProperty(i) && (r = this.pfx(i), r !== null && (n.style[r] = t[i]));
            return n
        }, t.rgbToHex = function (n, t, i) {
            return (16777216 + (n << 16) + (t << 8) + i).toString(16).slice(1)
        }, t.makeRGBA = function (n, t) {
            var i = /#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})/.exec(n);
            if (i !== null) {
                var r = parseInt(i[1], 16), u = parseInt(i[2], 16), f = parseInt(i[3], 16);
                return "rgba(" + r + ", " + u + ", " + f + ", " + t + ")"
            }
            if (n = n.replace(/\s/g, ""), i = /rgb\(([0-9]+),([0-9]+),([0-9]+)\)/i.exec(n), i !== null) {
                var r = parseInt(i[1], 10), u = parseInt(i[2], 10), f = parseInt(i[3], 10);
                return "rgba(" + r + ", " + u + ", " + f + ", " + t + ")"
            }
            return null
        }, t.getRandomColor = function () {
            for (var n = (Math.random() * 16777215 << 0).toString(16); n.length < 6;) n = "0" + n;
            return "#" + n
        }, t.gifToPng = function (t, i, r) {
            var h = require("gif-explode"), s = require("fs"), u = 0, o = 0, f = 0,
                e = document.createElement("canvas"), c = e.getContext("2d");
            try {
                s.createReadStream(t).pipe(h(function (t) {
                    t && t.pipe(s.createWriteStream(n.FileSytem.imageDir + i + u + ".jpg").on("finish", function () {
                        var t = document.createElement("img"), s = n.FileSytem.imageDir + i + o + ".jpg";
                        t.id = o.toString(), t.src = s, t.onload = function () {
                            if (f == 0 && (e.width = t.width * u, e.height = t.height), c.drawImage(t, t.width * Number(t.id), 0, t.width, t.height), n.FileSytem.remove(s, null), f++, u == f) {
                                var h = new Buffer(e.toDataURL("image/png").replace(/^data:image\/\w+;base64,/, ""), "base64"),
                                    o = n.FileSytem.imageDir + i + ".png";
                                n.FileSytem.fileSaveSync(o, h), r(o, t.width, t.height, f)
                            }
                        }, o++
                    })), u++
                }))
            } catch (l) {
                n.Logger.setErrLog(n.LogCode.image, "文件:Util,方法:gifToPng,异常信息：" + l)
            }
        }, t.textToSvg = function (t, i, r, u, f, e, o) {
            var s = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x ="0px" y="0px" width="' + u.width + 'px" height="' + u.height + 'px"><text x="0" y="' + f + '" fill= "' + o + '" font-size="' + f + '" font-family="' + e + '">' + r + "</text></svg>";
            n.FileSytem.fileSaveSync(t + i + ".svg", s)
        }, t.getOS = function () {
            var n = navigator.platform;
            return n.indexOf("Win") == 0 ? "Win" : n.indexOf("Mac") == 0 ? "Mac" : void 0
        }, t.degreesToRadians = function (n) {
            return n * (Math.PI / 180)
        }, t.extend = function (n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }, t.clone = function (n) {
            return t.extend({}, n)
        }, t.fomatFloat = function (n, t) {
            return Math.round(n * Math.pow(10, t)) / Math.pow(10, t)
        }, t.isNumber = function (n) {
            return Object.prototype.toString.call(n) === "[object Number]"
        }, t.getRegionColorKey = function (t, i) {
            var r = i.getImageData(t.mouseX, t.mouseY, 1, 1).data;
            return r[3] == 255 ? n.Util.rgbToHex(r[0], r[1], r[2]) : ""
        }, t.isMobile = function () {
            return navigator.userAgent.match(/(AppleWebKit.*Mobile.*)|(Linux; Android)|(Windows Phone)/i) ? !0 : !1
        }, t.isPad = function () {
            var n = navigator.userAgent;
            return /iPad/i.test(n) || /iPhone OS 3_1_2/i.test(n) || /iPhone OS 3_2_2/i.test(n)
        }, t.isFireFox = function () {
            return navigator.userAgent.indexOf("Firefox") > 0 ? !0 : !1
        }, t.isIE = function () {
            return document.documentMode ? !0 : !1
        }, t.isSafari = function () {
            var n = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            return n ? !0 : !1
        }, t.isHasChineseStr = function (n) {
            return /[^\x00-\xff]/g.test(n) ? !0 : !1
        }, t.pageHtml = function (n, t) {
            var l = t <= 2 ? 1 : t - 1, a = t >= n - 1 ? n : t + 1, h = t > 1, c = t < n, r = "", o = "", s = "",
                e = "<span>...</span>", f, u, i;
            if (h && (o = '<a title="上一页" data-page="' + (t - 1) + '"> < </a>'), c && (s = '<a title="下一页" data-page="' + (t + 1) + '"> > </a>'), n <= 8) for (i = 1; i <= n; i++) r += t == i ? "<span>" + i + "</span>" : '<a title="第' + i + '页" data-page="' + i + '">' + i + "</a>"; else if (t <= 5) {
                for (i = 1; i <= 7; i++) r += t == i ? "<span>" + i + "</span>" : '<a title="第' + i + '页" data-page="' + i + '">' + i + "</a>";
                r += e
            } else {
                for (r += '<a title="第1页" data-page="1">1</a>', r += '<a title="第2页" data-page="2">2</a>', r += e, f = t - 2, u = t + 2, u > n ? (u = n, f = u - 4, t - f < 2 && (f = f - 1)) : u + 1 == n && (u = n), i = f; i <= u; i++) r += t == i ? "<span>" + i + "</span>" : '<a title="第' + i + '页" data-page="' + i + '">' + i + "</a>";
                u != n && (r += e)
            }
            return o + r + s
        }, t.compareVersion = function (n, t) {
            for (var i = n.split("."), r = t.split("."), u = 0; u <= 2; u++) (!i[u] || isNaN(parseInt(i[u]))) && (i[u] = "0"), (!r[u] || isNaN(parseInt(r[u]))) && (r[u] = "0");
            return i[0] > r[0] || i[0] == r[0] && i[1] > r[1] || i[0] == r[0] && i[1] == r[1] && i[2] > r[2] ? 1 : i[0] == r[0] && i[0] == r[0] && i[2] == r[2] ? 0 : -1
        }, t.toMMSS = function (n, t) {
            var r, u, f, e, i;
            return t === void 0 && (t = !1), n |= 0, n < 0 && (n = -n), u = Math.floor(n / 3600), f = Math.floor(n % 3600 / 60), e = Math.floor(n % 3600 % 60), i = function (n) {
                return n < 10 ? "0" + n : n.toString()
            }, r = u != 0 || t ? i(u) + ":" + i(f) + ":" + i(e) : i(f) + ":" + i(e)
        }, t.fromMMSS = function (n) {
            var e = n.length, i, r, u = 0, t, f;
            if (typeof n != "string" || n == "") return null;
            for (i = 0; i < e; i++) {
                if (r = n[i], r == ":") {
                    u++;
                    continue
                }
                if (!(r >= "0") || !(r <= "9")) return null
            }
            if (u == 0) return parseInt(n);
            if (u > 2) return null;
            for (t = n.split(":"), i = 0; i < t.length; i++) if ((f = parseInt(t[i]), isNaN(f)) || f > 59) return null;
            return t.length == 2 ? parseInt(t[0]) * 60 + parseInt(t[1]) : t.length == 3 ? parseInt(t[0]) * 3600 + parseInt(t[1]) * 60 + parseInt(t[2]) : null
        }, t.date2YYYYMMDDhhmmss = function (n) {
            function t(n) {
                return n < 10 ? "0" + n : String(n)
            }

            var i = n.getFullYear(), r = n.getMonth() + 1, u = n.getDate(), f = n.getHours(), e = n.getMinutes(),
                o = n.getSeconds();
            return t(i) + t(r) + t(u) + t(f) + t(e) + t(o)
        }, t.fontStyles = {
            arial: {
                str: "@font-face {font-family: 'arial';src: url('resources/fonts/arial.ttf') format('truetype');}",
                url: "resources/fonts/arial.ttf"
            },
            Arial: {
                str: "@font-face {font-family: 'Arial';src: url('resources/fonts/arial.ttf') format('truetype');}",
                url: "resources/fonts/arial.ttf"
            },
            BuxtonSketch: {
                str: "@font-face{font-family:'BuxtonSketch';src:url('resources/fonts/BuxtonSketch.ttf') format('truetype');}",
                url: "resources/fonts/BuxtonSketch.ttf"
            },
            georgia: {
                str: "@font-face{font-family:'georgia';src:url('resources/fonts/Georgia.ttf') format('truetype');}",
                url: "resources/fonts/Georgia.ttf"
            },
            Georgia: {
                str: "@font-face{font-family:'georgia';src:url('resources/fonts/Georgia.ttf') format('truetype');}",
                url: "resources/fonts/Georgia.ttf"
            },
            mvboli: {
                str: "@font-face{font-family:'mvboli';src:url('resources/fonts/mvboli.ttf') format('truetype');}",
                url: "resources/fonts/mvboli.ttf"
            },
            MVBoli: {
                str: "@font-face{font-family:'mvboli';src:url('resources/fonts/mvboli.ttf') format('truetype');}",
                url: "resources/fonts/mvboli.ttf"
            },
            optima: {
                str: "@font-face{font-family:'optima';src:url('resources/fonts/optimaregular.ttf') format('truetype');}",
                url: "resources/fonts/optimaregular.ttf"
            },
            Optima: {
                str: "@font-face{font-family:'optima';src:url('resources/fonts/optimaregular.ttf') format('truetype');}",
                url: "resources/fonts/optimaregular.ttf"
            },
            times: {
                str: "@font-face{font-family:'times';src:url('resources/fonts/times.ttf') format('truetype');}",
                url: "resources/fonts/times.ttf"
            },
            TimesNewRoman: {
                str: "@font-face{font-family:'times';src:url('resources/fonts/times.ttf') format('truetype');}",
                url: "resources/fonts/times.ttf"
            },
            fzcyjt: {
                str: "@font-face{font-family:'fzcyjt';src:url('resources/fonts/fzcyjt.ttf') format('truetype');}",
                url: "resources/fonts/fzcyjt.ttf"
            },
            "华文彩云": {
                str: "@font-face{font-family:'华文彩云';src:url('resources/fonts/fzcyjt.ttf') format('truetype');}",
                url: "resources/fonts/fzcyjt.ttf"
            },
            kt: {
                str: "@font-face{font-family:'kt'; src: url('resources/fonts/kt.ttf') format('truetype'); }",
                url: "resources/fonts/kt.ttf"
            },
            "华文楷体": {
                str: "@font-face{font-family:'华文楷体'; src: url('resources/fonts/kt.ttf') format('truetype'); }",
                url: "resources/fonts/kt.ttf"
            },
            wrjxk: {
                str: "@font-face{font-family:'wrjxk';src:url('resources/fonts/wrjxk.ttf') format('truetype');}",
                url: "resources/fonts/wrjxk.ttf"
            },
            "华文行楷": {
                str: "@font-face{font-family:'华文行楷';src:url('resources/fonts/wrjxk.ttf') format('truetype');}",
                url: "resources/fonts/wrjxk.ttf"
            },
            wrjls: {
                str: "@font-face{font-family:'wrjls';src:url('resources/fonts/SIMLI.TTF') format('truetype');}",
                url: "resources/fonts/SIMLI.TTF"
            },
            "隶书": {
                str: "@font-face{font-family:'隶书';src:url('resources/fonts/SIMLI.TTF') format('truetype');}",
                url: "resources/fonts/SIMLI.TTF"
            },
            wrjzy: {
                str: "@font-face{font-family:'wrjzy';src:url('resources/fonts/wrjzy.ttf') format('truetype');}",
                url: "resources/fonts/wrjzy.ttf"
            },
            "汉仪综艺体简": {
                str: "@font-face{font-family:'汉仪综艺体简';src:url('resources/fonts/wrjzy.ttf') format('truetype');}",
                url: "resources/fonts/wrjzy.ttf"
            },
            wryh: {
                str: "@font-face{font-family:'wryh';src:url('resources/fonts/wryh.ttf') format('truetype');}",
                url: "resources/fonts/wryh.ttf"
            },
            "微软雅黑": {
                str: "@font-face{font-family:'微软雅黑';src:url('resources/fonts/wryh.ttf') format('truetype');}",
                url: "resources/fonts/wryh.ttf"
            },
            "苹方中等": {
                str: "@font-face{font-family:'平方中等';src:url('resources/fonts/wryh.ttf') format('truetype');}",
                url: "resources/fonts/wryh.ttf"
            },
            yy: {
                str: "@font-face{font-family:'yy';src:url('resources/fonts/yy.TTF') format('truetype');}",
                url: "resources/fonts/yy.TTF"
            },
            "幼圆": {
                str: "@font-face{font-family:'幼圆';src:url('resources/fonts/yy.TTF') format('truetype');}",
                url: "resources/fonts/yy.TTF"
            }
        }, t
    }(), n.Util = u
}(Common || (Common = {}));
var getWindow = function () {
    return {
        width: document.getElementById("canvas").clientWidth,
        height: document.getElementById("canvas").clientHeight
    }
}, fomatFloat = function (n, t) {
    return Math.round(n * Math.pow(10, t)) / Math.pow(10, t)
}, interPointToLine = function (n, t, i) {
    var f = (n.y - t.y) / (n.x - t.x), s = n.y - f * n.x, h = i.x + f * i.y, r = f, u = -1, e = s,
        o = -(e * r + h * u) / (r * r + u * u), c = (-r * o - e) / u;
    return {x: o, y: c}
}, pointMove = function (n, t, i) {
    var r = n / Math.sqrt(1 + n * n), u = 1 / Math.sqrt(1 + n * n);
    return {x: i.x + t * u, y: i.y + t * r}
};
String.prototype.format = function () {
    for (var t = arguments[0], i, n = 1; n < arguments.length; n++) i = new RegExp("\\{" + (n - 1) + "\\}", "gm"), t = t.replace(i, arguments[n]);
    return t
}, String.prototype.replaceAll = function (n, t, i) {
    return RegExp.prototype.isPrototypeOf(n) ? this.replace(n, t) : this.replace(new RegExp(n, i ? "gi" : "g"), t)
};
var clone = function (n, t, i, r) {
    function e(n, i) {
        var s, h, c;
        if (n === null) return null;
        if (i == 0 || typeof n != "object") return n;
        if (Common.Util.isArray(n)) s = []; else if (Common.Util.isRegExp(n)) s = new RegExp(n.source, Common.Util.getRegExpFlags(n)), n.lastIndex && (s.lastIndex = n.lastIndex); else if (Common.Util.isDate(n)) s = new Date(n.getTime()); else {
            if (o && Buffer.isBuffer(n)) return s = new Buffer(n.length), n.copy(s), s;
            s = typeof r == "undefined" ? Object.create(Object.getPrototypeOf(n)) : Object.create(r)
        }
        if (t) {
            if (h = u.indexOf(n), h != -1) return f[h];
            u.push(n), f.push(s)
        }
        for (c in n) s[c] = e(n[c], i - 1);
        return s
    }

    var u = [], f = [], o = typeof Buffer != "undefined";
    return typeof t == "undefined" && (t = !0), typeof i == "undefined" && (i = Infinity), e(n, i)
}, JTrim = function (n) {
    return n.replace(/(^\s*)|(\s*$)/g, "")
}, CheckUrl = function (n) {
    for (var r = Array("http", "www", "ｈｔｔｐ", "ｗｗｗ", "。ｃｏｍ", "。ｃｎ", "。ｎｅｔ", "。ｏｒｇ", "。ｍｅ", ".com", ".cn", ".net", ".org", ".me", ".info", "。ｉｎｆｏ", ".am", ".gd", ".ly", ".gl", ".co", "。ａｍ", "。ｇｄ", "。ｌｙ", "。ｇｌ", "。ｃｏ"), i, t = 0; t < r.length; t++) if (i = r[t], n.indexOf(i) > -1) return i;
    return ""
}, checkIp = function (n) {
    var t = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    return t.test(n) ? !0 : !1
}, checkPort = function (n) {
    return typeof n != "number" ? !1 : n >= 65536 ? !1 : !0
};
window.requestAnimFrame = function () {
    return function (n) {
        Common.Util.isMobile() || Common.Util.isPad() ? window.setTimeout(n, 1e3 / 30) : window.setTimeout(n, 25)
    }
}(), function (n) {
    var t = function () {
        function n() {
            this._MAP = {
                8: "backspace",
                9: "tab",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "ins",
                46: "del",
                91: "meta",
                93: "meta",
                224: "meta"
            }, this._KEYCODE_MAP = {
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                112: "f1",
                113: "f2",
                114: "f3",
                115: "f4",
                116: "f5",
                117: "f6",
                118: "f7",
                119: "f8",
                120: "f9",
                121: "f10",
                122: "f11",
                123: "f12",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            }, this._SHIFT_MAP = {
                "~": "`",
                "!": "1",
                "@": "2",
                "#": "3",
                $: "4",
                "%": "5",
                "^": "6",
                "&": "7",
                "*": "8",
                "(": "9",
                ")": "0",
                _: "-",
                "+": "=",
                ":": ";",
                '"': "'",
                "<": ",",
                ">": ".",
                "?": "/",
                "|": "\\"
            }, this._SPECIAL_ALIASES = {
                option: "alt",
                command: "meta",
                "return": "enter",
                escape: "esc",
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
            }, this._callbacks = {}, this._directMap = {}, this._sequenceLevels = {}, this._ignoreNextKeyup = !1, this._ignoreNextKeypress = !1, this._nextExpectedAction = !1, this.handleKey = this._handleKey
        }

        return n.prototype._characterFromEvent = function (n) {
            if (n.type == "keypress") {
                var t = String.fromCharCode(n.which);
                return n.shiftKey || (t = t.toLowerCase()), t
            }
            return this._MAP[n.which] ? this._MAP[n.which] : this._KEYCODE_MAP[n.which] ? this._KEYCODE_MAP[n.which] : String.fromCharCode(n.which).toLowerCase()
        }, n.prototype._modifiersMatch = function (n, t) {
            return n.sort().join(",") === t.sort().join(",")
        }, n.prototype._resetSequences = function (n) {
            n = n || {};
            var i = !1, t;
            for (t in this._sequenceLevels) {
                if (n[t]) {
                    i = !0;
                    continue
                }
                this._sequenceLevels[t] = 0
            }
            i || (this._nextExpectedAction = !1)
        }, n.prototype._isModifier = function (n) {
            return n == "shift" || n == "ctrl" || n == "alt" || n == "meta"
        }, n.prototype._getMatches = function (n, t, i, r, u, f) {
            var o, e, h = [], s = i.type, c, l;
            if (!this._callbacks[n]) return [];
            for (s == "keyup" && this._isModifier(n) && (t = [n]), o = 0; o < this._callbacks[n].length; ++o) (e = this._callbacks[n][o], r || !e.seq || this._sequenceLevels[e.seq] == e.level) && s == e.action && ((s != "keypress" || i.metaKey || i.ctrlKey) && !this._modifiersMatch(t, e.modifiers) || (c = !r && e.combo == u, l = r && e.seq == r && e.level == f, (c || l) && this._callbacks[n].splice(o, 1), h.push(e)));
            return h
        }, n.prototype._eventModifiers = function (n) {
            var t = [];
            return n.shiftKey && t.push("shift"), n.altKey && t.push("alt"), n.ctrlKey && t.push("ctrl"), n.metaKey && t.push("meta"), t
        }, n.prototype._preventDefault = function (n) {
            if (n.preventDefault) {
                n.preventDefault();
                return
            }
            n.returnValue = !1
        }, n.prototype._stopPropagation = function (n) {
            if (n.stopPropagation) {
                n.stopPropagation();
                return
            }
            n.cancelBubble = !0
        }, n.prototype._fireCallback = function (n, t, i) {
            this.stopCallback(t, t.target || t.srcElement) || n(t, i) === !1 && (this._preventDefault(t), this._stopPropagation(t))
        }, n.prototype._handleKey = function (n, t, i) {
            for (var u = this._getMatches(n, t, i), o = {}, f = 0, e = !1, s, r = 0; r < u.length; ++r) u[r].seq && (f = Math.max(f, u[r].level));
            for (r = 0; r < u.length; ++r) {
                if (u[r].seq) {
                    if (u[r].level != f) continue;
                    e = !0, o[u[r].seq] = 1, this._fireCallback(u[r].callback, i, u[r].combo, u[r].seq);
                    continue
                }
                e || this._fireCallback(u[r].callback, i, u[r].combo)
            }
            s = i.type == "keypress" && this._ignoreNextKeypress, i.type != this._nextExpectedAction || this._isModifier(n) || s || this._resetSequences(o), this._ignoreNextKeypress = e && i.type == "keydown"
        }, n.prototype._handleKeyEvent = function (n) {
            typeof n.which != "number" && (n.which = n.keyCode);
            var t = this._characterFromEvent(n);
            if (t) {
                if (n.type == "keyup" && this._ignoreNextKeyup === t) {
                    this._ignoreNextKeyup = !1;
                    return
                }
                this.handleKey(t, this._eventModifiers(n), n)
            }
        }, n.prototype._resetSequenceTimer = function () {
            clearTimeout(this._resetTimer), this._resetTimer = window.setTimeout(this._resetSequences, 1e3)
        }, n.prototype._getReverseMap = function () {
            if (!this._REVERSE_MAP) {
                this._REVERSE_MAP = {};
                for (var n in this._MAP) Number(n) > 95 && Number(n) < 112 || this._MAP.hasOwnProperty(n) && (this._REVERSE_MAP[this._MAP[n]] = n)
            }
            return this._REVERSE_MAP
        }, n.prototype._pickBestAction = function (n, t, i) {
            return i || (i = this._getReverseMap()[n] ? "keydown" : "keypress"), i == "keypress" && t.length && (i = "keydown"), i
        }, n.prototype._bindSequence = function (n, t, i, r) {
            function o(t) {
                return function () {
                    this._nextExpectedAction = t, ++this._sequenceLevels[n], this._resetSequenceTimer()
                }
            }

            function s(t) {
                this._fireCallback(i, t, n), r !== "keyup" && (this._ignoreNextKeyup = this._characterFromEvent(t)), setTimeout(this._resetSequences, 10)
            }

            var u, f, e;
            for (this._sequenceLevels[n] = 0, u = 0; u < t.length; ++u) f = u + 1 === t.length, e = f ? s : o(r || this._getKeyInfo(t[u + 1]).action), this._bindSingle(t[u], e, r, n, u)
        }, n.prototype._keysFromString = function (n) {
            return n === "+" ? ["+"] : n.split("+")
        }, n.prototype._getKeyInfo = function (n, t) {
            for (var i, u = [], f = this._keysFromString(n), r = 0; r < f.length; ++r) i = f[r], this._SPECIAL_ALIASES[i] && (i = this._SPECIAL_ALIASES[i]), t && t != "keypress" && this._SHIFT_MAP[i] && (i = this._SHIFT_MAP[i], u.push("shift")), this._isModifier(i) && u.push(i);
            return t = this._pickBestAction(i, u, t), {key: i, modifiers: u, action: t}
        }, n.prototype._bindSingle = function (n, t, i, r, u) {
            this._directMap[n + ":" + i] = t, n = n.replace(/\s+/g, " ");
            var e = n.split(" "), f;
            if (e.length > 1) {
                this._bindSequence(n, e, t, i);
                return
            }
            f = this._getKeyInfo(n, i), this._callbacks[f.key] = this._callbacks[f.key] || [], this._getMatches(f.key, f.modifiers, {type: f.action}, r, n, u), this._callbacks[f.key][r ? "unshift" : "push"]({
                callback: t,
                modifiers: f.modifiers,
                action: f.action,
                seq: r,
                level: u,
                combo: n
            })
        }, n.prototype._bindMultiple = function (n, t, i) {
            for (var r = 0; r < n.length; ++r) this._bindSingle(n[r], t, i)
        }, n.prototype.initMap = function () {
            for (var n = 1; n < 20; ++n) this._MAP[111 + n] = "f" + n;
            for (n = 0; n <= 9; ++n) this._MAP[n + 96] = n
        }, n.prototype.trigger = function (n, t) {
            return this._directMap[n + ":" + t] && this._directMap[n + ":" + t]({}, n), this
        }, n.prototype.reset = function () {
            return this._callbacks = {}, this._directMap = {}, this
        }, n.prototype.stopCallback = function (n, t) {
            return (" " + t.className + " ").indexOf(" mousetrap ") > -1 ? !1 : t.tagName == "INPUT" || t.tagName == "SELECT" || t.tagName == "TEXTAREA" || t.isContentEditable
        }, n
    }(), i;
    n.KeyBoard = t, i = function () {
        function n(n) {
            var i = this;
            this.keyBoard = new t, this.keyBoard.initMap(), n.addEventListener("keypress", function (n) {
                i.keyBoard._handleKeyEvent(n)
            }), n.addEventListener("keyup", function (n) {
                i.keyBoard._handleKeyEvent(n)
            }), n.addEventListener("keydown", function (n) {
                i.keyBoard._handleKeyEvent(n)
            })
        }

        return n.prototype.bind = function (n, t, i) {
            return n = n instanceof Array ? n : [n], this.keyBoard._bindMultiple(n, t, i), this
        }, n.prototype.bindAll = function () {
        }, n.prototype.unbind = function (n, t) {
            return this.bind(n, function () {
            }, t)
        }, n
    }(), n.KeyBoardEvent = i
}(Common || (Common = {})), function (n) {
    var t = function () {
        function t() {
        }

        return t.prototype.getFourLines = function (n) {
            var t = n.get(0), i = n.get(1), r = n.get(2), u = n.get(3), f = [[t.x, t.y], [i.x, i.y]],
                e = [[i.x, i.y], [r.x, r.y]], o = [[r.x, r.y], [u.x, u.y]], s = [[u.x, u.y], [t.x, t.y]];
            return [f, e, o, s]
        }, t.prototype.getTYPoing = function (n, t) {
            var i = (n[0] * t[0] + n[1] * t[1]) / (t[0] * t[0] + t[1] * t[1]) * t[0],
                r = (n[0] * t[0] + n[1] * t[1]) / (t[0] * t[0] + t[1] * t[1]) * t[1];
            return [i, r]
        }, t.prototype.getLineTYToAxis = function (n, t) {
            var i = [t[1][0] - t[0][0], t[1][1] - t[0][1]], r = n[0], u = n[1], f = this.getTYPoing(r, i),
                e = this.getTYPoing(u, i);
            return [f, e]
        }, t.prototype.isLineOverlap = function (n, t) {
            var i = n[0], u = n[1], r = t[0], f = t[1];
            if (i[0] != r[0]) {
                if ((i[0] - r[0]) * (i[0] - f[0]) < 0 || (u[0] - r[0]) * (u[0] - f[0]) < 0 || (r[0] - i[0]) * (r[0] - u[0]) < 0 || (f[0] - i[0]) * (f[0] - u[0]) < 0) return !0
            } else if ((i[1] - r[1]) * (i[1] - f[1]) < 0 || (u[1] - r[1]) * (u[1] - f[1]) < 0 || (r[1] - i[1]) * (r[1] - u[1]) < 0 || (f[1] - i[1]) * (f[1] - u[1]) < 0) return !0;
            return !1
        }, t.prototype.detectAxisCollision = function (n, t) {
            for (var u, f, i = 0, r = t.length; i < r; i++) if (u = this.getLineTYToAxis(t[i], n), f = this.getLineTYToAxis(n, n), this.isLineOverlap(u, f)) return !0;
            return !1
        }, t.prototype.RectToRectCollisionDec = function (n, t) {
            var i = this.getFourLines(n), r = this.getFourLines(t);
            return this.detectAxisCollision(r[0], i) && this.detectAxisCollision(r[1], i) && this.detectAxisCollision(i[0], r) && this.detectAxisCollision(i[1], r) ? !0 : !1
        }, t.prototype.RectRoArcCollisionDec = function (t, i) {
            for (var e = i.length(), f = !1, u, r = 0; r < e; r++) if (u = new n.List, u.add(i.get(r)), u.add(i.get((r + 1) % 4)), f = this.LineToArcCollisionDec(u, t), f) break;
            return f
        }, t.prototype.RectRoLineCollisionDec = function (n, t) {
            for (var u = t.length(), r = !1, i = 0; i < u; i++) if (r = this.LineToLineCollisionDec(n.get(0), n.get(1), t.get(i), t.get((i + 1) % 4)), r) break;
            return r
        }, t.prototype.CCW = function (n, t, i) {
            return (i.y - n.y) * (t.x - n.x) > (t.y - n.y) * (i.x - n.x)
        }, t.prototype.LineToLineCollisionDec = function (n, t, i, r) {
            return this.CCW(n, i, r) != this.CCW(t, i, r) && this.CCW(n, t, i) != this.CCW(n, t, r)
        }, t.prototype.ArcToArcCollisionDec = function (n, t) {
            var f = this.LineToLineCollisionDec(n.get(0), n.get(2), t.get(0), t.get(2)), i, r, u;
            return f ? !0 : (i = this.LineToLineCollisionDec(n.get(0), n.get(2), t.get(2), t.get(1)), i) ? !0 : (r = this.LineToLineCollisionDec(n.get(2), n.get(1), t.get(2), t.get(1)), r) ? !0 : (u = this.LineToLineCollisionDec(n.get(2), n.get(0), t.get(0), t.get(2)), u) ? !0 : !1
        }, t.prototype.LineToArcCollisionDec = function (n, t) {
            var r = this.LineToLineCollisionDec(n.get(0), n.get(1), t.get(0), t.get(2)), i;
            return r ? !0 : (i = this.LineToLineCollisionDec(n.get(0), n.get(1), t.get(2), t.get(1)), i) ? !0 : !1
        }, t._instance = new t, t
    }();
    n.CollisiionDetector = t
}(Common || (Common = {})), function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n(n) {
                this.htmlEl = document.getElementById(n)
            }

            return n
        }();
        n.editorHtmlElement = t
    })(t = n.Html || (n.Html = {}))
}(Common || (Common = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (n) {
        var t = function (n) {
            function t(t) {
                var i = this;
                n.call(this, t), this.onclickBackup = function () {
                }, this.htmlEl.onclick = function (n) {
                    i.onclick(n)
                }, this.htmlEl.onblur = function (n) {
                    i.onblur(n)
                }, this.htmlEl.onmousedown = function (n) {
                    i.onmousedown(n)
                }, this.htmlEl.onmouseup = function (n) {
                    i.onmouseup(n)
                }, this.htmlEl.onmousemove = function (n) {
                    i.onmousemove(n)
                }, this.htmlEl.onmouseout = function (n) {
                    i.onmouseout(n)
                }
            }

            return __extends(t, n), t.prototype.onclick = function () {
            }, t.prototype.onmousedown = function () {
            }, t.prototype.onmouseup = function () {
            }, t.prototype.onmousemove = function () {
            }, t.prototype.onmouseout = function () {
            }, t.prototype.onblur = function () {
            }, t.prototype.disableClick = function () {
                this.onclickBackup = this.onclick, this.onclick = function () {
                }
            }, t.prototype.resumeClick = function () {
                this.onclick = this.onclickBackup
            }, t.disableClick = function (n) {
                n.forEach(function (n) {
                    n.disableClick()
                })
            }, t.resumeClick = function (n) {
                n.forEach(function (n) {
                    n.resumeClick()
                })
            }, t
        }(n.editorHtmlElement), i;
        n.FacadeItem = t, function () {
        }(n.FacadeItemType || (n.FacadeItemType = {})), i = n.FacadeItemType
    })(t = n.Html || (n.Html = {}))
}(Common || (Common = {})), function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n(n, t, i, r) {
                this.element = document.createElement("div"), n && (this.element.id = n), this.element.className = t, i && (this.element.style.width = i), r && (this.element.style.height = r)
            }

            return n.prototype.appendChild = function (n) {
                if (n instanceof Node) this.element.appendChild(n); else {
                    var t = document.createElement("div");
                    t.innerHTML = n, this.element.appendChild(t.firstChild)
                }
            }, Object.defineProperty(n.prototype, "innerHtml", {
                set: function (n) {
                    this.element.innerHTML = n
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(n.prototype, "style", {
                get: function () {
                    return this.element.style
                }, enumerable: !0, configurable: !0
            }), n
        }();
        n.Div = t
    })(t = n.Html || (n.Html = {}))
}(Common || (Common = {})), function (n) {
    var i = function () {
        function n(n, t, i) {
            this.rou = Math.SQRT2, this.rou2 = 2, this.rou4 = 4, i != null && i != undefined && (this.rou = i, this.rou2 = Math.pow(this.rou, 2), this.rou4 = Math.pow(this.rou, 4)), this.p0 = n, this.p1 = t, this.ux0 = n[0], this.uy0 = n[1], this.w0 = n[2], this.ux1 = t[0], this.uy1 = t[1], this.w1 = t[2], this.dx = this.ux1 - this.ux0, this.dy = this.uy1 - this.uy0, this.d2 = this.dx * this.dx + this.dy * this.dy, this.d1 = Math.sqrt(this.d2), this.b0 = (this.w1 * this.w1 - this.w0 * this.w0 + this.rou4 * this.d2) / (2 * this.w0 * this.rou2 * this.d1), this.b1 = (this.w1 * this.w1 - this.w0 * this.w0 - this.rou4 * this.d2) / (2 * this.w1 * this.rou2 * this.d1), this.r0 = Math.log(Math.sqrt(this.b0 * this.b0 + 1) - this.b0), this.r1 = Math.log(Math.sqrt(this.b1 * this.b1 + 1) - this.b1), this.dr = this.r1 - this.r0, this.S = (this.dr || Math.log(this.w1 / this.w0)) / this.rou, this.duration = this.S * 1e3 / 1.2
        }

        return n.prototype.interpolate = function (n) {
            var t = n * this.S, i, r;
            return this.dr ? (i = this.cosh(this.r0), r = this.w0 / (this.rou2 * this.d1) * (i * this.tanh(this.rou * t + this.r0) - this.sinh(this.r0)), [this.ux0 + r * this.dx, this.uy0 + r * this.dy, this.w0 * i / this.cosh(this.rou * t + this.r0)]) : [this.ux0 + n * this.dx, this.uy0 + n * this.dy, this.w0 * Math.exp(this.rou * t)]
        }, n.prototype.cosh = function (n) {
            return (Math.exp(n) + Math.exp(-n)) / 2
        }, n.prototype.sinh = function (n) {
            return (Math.exp(n) - Math.exp(-n)) / 2
        }, n.prototype.tanh = function (n) {
            return this.sinh(n) / this.cosh(n)
        }, n
    }(), t;
    n.interpolateZoom = i, t = function () {
        function n() {
        }

        return n.Linear = function (n, t, i, r) {
            return i * n / r + t
        }, n.Quad = {
            easeIn: function (n, t, i, r) {
                return i * (n /= r) * n + t
            }, easeOut: function (n, t, i, r) {
                return -i * (n /= r) * (n - 2) + t
            }, easeInOut: function (n, t, i, r) {
                return (n /= r / 2) < 1 ? i / 2 * n * n + t : -i / 2 * (--n * (n - 2) - 1) + t
            }
        }, n.Cubic = {
            easeIn: function (n, t, i, r) {
                return i * (n /= r) * n * n + t
            }, easeOut: function (n, t, i, r) {
                return i * ((n = n / r - 1) * n * n + 1) + t
            }, easeInOut: function (n, t, i, r) {
                return (n /= r / 2) < 1 ? i / 2 * n * n * n + t : i / 2 * ((n -= 2) * n * n + 2) + t
            }
        }, n.Quart = {
            easeIn: function (n, t, i, r) {
                return i * (n /= r) * n * n * n + t
            }, easeOut: function (n, t, i, r) {
                return -i * ((n = n / r - 1) * n * n * n - 1) + t
            }, easeInOut: function (n, t, i, r) {
                return (n /= r / 2) < 1 ? i / 2 * n * n * n * n + t : -i / 2 * ((n -= 2) * n * n * n - 2) + t
            }
        }, n.Quint = {
            easeIn: function (n, t, i, r) {
                return i * (n /= r) * n * n * n * n + t
            }, easeOut: function (n, t, i, r) {
                return i * ((n = n / r - 1) * n * n * n * n + 1) + t
            }, easeInOut: function (n, t, i, r) {
                return (n /= r / 2) < 1 ? i / 2 * n * n * n * n * n + t : i / 2 * ((n -= 2) * n * n * n * n + 2) + t
            }
        }, n.Sine = {
            easeIn: function (n, t, i, r) {
                return -i * Math.cos(n / r * (Math.PI / 2)) + i + t
            }, easeOut: function (n, t, i, r) {
                return i * Math.sin(n / r * (Math.PI / 2)) + t
            }, easeInOut: function (n, t, i, r) {
                return -i / 2 * (Math.cos(Math.PI * n / r) - 1) + t
            }
        }, n.Expo = {
            easeIn: function (n, t, i, r) {
                return n == 0 ? t : i * Math.pow(2, 10 * (n / r - 1)) + t
            }, easeOut: function (n, t, i, r) {
                return n == r ? t + i : i * (-Math.pow(2, -10 * n / r) + 1) + t
            }, easeInOut: function (n, t, i, r) {
                return n == 0 ? t : n == r ? t + i : (n /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (n - 1)) + t : i / 2 * (-Math.pow(2, -10 * --n) + 2) + t
            }
        }, n.Circ = {
            easeIn: function (n, t, i, r) {
                return -i * (Math.sqrt(1 - (n /= r) * n) - 1) + t
            }, easeOut: function (n, t, i, r) {
                return i * Math.sqrt(1 - (n = n / r - 1) * n) + t
            }, easeInOut: function (n, t, i, r) {
                return (n /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - n * n) - 1) + t : i / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1) + t
            }
        }, n.Elastic = {
            easeIn: function (n, t, i, r, u, f) {
                var e;
                return n == 0 ? t : (n /= r) == 1 ? t + i : (typeof f == "undefined" && (f = r * .3), !u || u < Math.abs(i) ? (e = f / 4, u = i) : e = f / (2 * Math.PI) * Math.asin(i / u), -(u * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * r - e) * 2 * Math.PI / f)) + t)
            }, easeOut: function (n, t, i, r, u, f) {
                var e;
                return n == 0 ? t : (n /= r) == 1 ? t + i : (typeof f == "undefined" && (f = r * .3), !u || u < Math.abs(i) ? (u = i, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(i / u), u * Math.pow(2, -10 * n) * Math.sin((n * r - e) * 2 * Math.PI / f) + i + t)
            }, easeInOut: function (n, t, i, r, u, f) {
                var e;
                return n == 0 ? t : (n /= r / 2) == 2 ? t + i : (typeof f == "undefined" && (f = r * .3 * 1.5), !u || u < Math.abs(i) ? (u = i, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(i / u), n < 1) ? -.5 * u * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * r - e) * 2 * Math.PI / f) + t : u * Math.pow(2, -10 * (n -= 1)) * Math.sin((n * r - e) * 2 * Math.PI / f) * .5 + i + t
            }
        }, n.Back = {
            easeIn: function (n, t, i, r, u) {
                return typeof u == "undefined" && (u = 1.70158), i * (n /= r) * n * ((u + 1) * n - u) + t
            }, easeOut: function (n, t, i, r, u) {
                return typeof u == "undefined" && (u = 1.70158), i * ((n = n / r - 1) * n * ((u + 1) * n + u) + 1) + t
            }, easeInOut: function (n, t, i, r, u) {
                return (typeof u == "undefined" && (u = 1.70158), (n /= r / 2) < 1) ? i / 2 * n * n * (((u *= 1.525) + 1) * n - u) + t : i / 2 * ((n -= 2) * n * (((u *= 1.525) + 1) * n + u) + 2) + t
            }
        }, n.Bounce = {
            easeIn: function (t, i, r, u) {
                return r - n.Bounce.easeOut(u - t, 0, r, u) + i
            }, easeOut: function (n, t, i, r) {
                return (n /= r) < 1 / 2.75 ? i * 7.5625 * n * n + t : n < 2 / 2.75 ? i * (7.5625 * (n -= 1.5 / 2.75) * n + .75) + t : n < 2.5 / 2.75 ? i * (7.5625 * (n -= 2.25 / 2.75) * n + .9375) + t : i * (7.5625 * (n -= 2.625 / 2.75) * n + .984375) + t
            }, easeInOut: function (t, i, r, u) {
                return t < u / 2 ? n.Bounce.easeIn(t * 2, 0, r, u) * .5 + i : n.Bounce.easeOut(t * 2 - u, 0, r, u) * .5 + r * .5 + i
            }
        }, n
    }(), n.Animation = t
}(Core || (Core = {})), function (n) {
    var t = function () {
        function n(n, t) {
            this.x = n, this.y = t
        }

        return n.prototype.setXY = function (n, t) {
            this.x = n, this.y = t
        }, n.prototype.addEquals = function (n) {
            return this.x += n.x, this.y += n.y, this
        }, n.prototype.subtractEquals = function (n) {
            return this.x -= n.x, this.y -= n.y, this
        }, n
    }();
    n.Point = t
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var r = function () {
        function n() {
        }

        return n
    }(), t, i, u, f;
    n.Translate = r, t = function () {
        function n(n, t, i) {
            this.x = n, this.y = t, this.z = i
        }

        return n
    }(), n.Rotate = t, i = function () {
        function n(n, t, i, r, u, f, e, o) {
            this.isStraight = !0, this.width = Math.abs(n), this.height = Math.abs(t), this.translate = i, this.rotate = r, o != null && o != undefined && (this.isStraight = o), this.scale = u, this.zIndex = f, this.type = e
        }

        return n.GetDefaultConfig = function () {
            return new n(200, 200, new r, new t(0, 0, 0), 1, 1, "chart")
        }, n.fitRatio = function (n, t) {
            t === void 0 && (t = editor.slideRatio);
            var i = n.translate.x + n.width / 2;
            t == "4:3" ? n.width = n.height * 4 / 3 : t == "16:9" && (n.width = n.height * 16 / 9), n.translate.x = i - n.width / 2
        }, n
    }(), n.Config = i, u = function (t) {
        function i(n, i, r, u, f, e, o, s) {
            t.call(this, n, i, r, u, f, e, "image"), this.cropData = s, this.needMirrorHor = !1, this.needMirrorVer = !1, this.horMirrorState = !1, this.verMirrorState = !1
        }

        return __extends(i, t), i.assignBy = function (t, i) {
            t.translate.cx = i.translate.cx, t.translate.cy = i.translate.cy, t.translate.ex = i.translate.ex, t.translate.ey = i.translate.ey, t.translate.sx = i.translate.sx, t.translate.sy = i.translate.sy, t.translate.x = i.translate.x, t.translate.y = i.translate.y, t.width = i.width, t.height = i.height, t.horMirrorState = i.horMirrorState, t.verMirrorState = i.verMirrorState, t.isStraight = i.isStraight, t.needMirrorHor = i.needMirrorHor, t.needMirrorVer = i.needMirrorVer, i.cropData && (t.cropData = new n.CropData, t.cropData.x = i.cropData.x, t.cropData.y = i.cropData.y, t.cropData.width = i.cropData.width, t.cropData.height = i.cropData.height, t.cropData.type = i.cropData.type), t.rotate = i.rotate, t.scale = i.scale, t.type = i.type, t.zIndex = i.zIndex
        }, i
    }(i), n.ImageConfig = u, f = function () {
        function n() {
        }

        return n
    }(), n.CropData = f
}(Core || (Core = {})), function (n) {
    var t = function () {
        function n(n, t) {
            this.id = n, this.config = t, this.element = this.setElement(), this.muteBtn = this.element.querySelector(".video-voice b"), this.playBtn = this.element.querySelector(".play-audit b"), this.current = this.element.querySelector(".current"), this.duration = this.element.querySelector(".duration"), this.line = this.element.querySelector(".line"), this.progressBar = this.element.querySelector(".drag-line")
        }

        return n.prototype.setElement = function () {
            var n = new Common.Html.Div("", "mycontrols no_select"), r = new Common.Html.Div("", "play-audit"), t, i;
            r.appendChild('<a><b id="' + this.id + 'play" class="iconfont icon-thinpaused font-size-normal dark-gray"></b></a>'), n.appendChild(r.element);
            var u = new Common.Html.Div("", "map-slider-video"),
                f = new Common.Html.Div(this.id + "dragline", "drag-line"),
                e = new Common.Html.Div(this.id + "line", "line");
            return f.appendChild(e.element), u.appendChild(f.element), n.appendChild(u.element), t = new Common.Html.Div("", "video-voice"), t.appendChild('<a><b id="' + this.id + 'voice" class="iconfont icon-voice font-size-normal dark-gray"></b></a>'), n.appendChild(t.element), i = new Common.Html.Div("", "schedule"), i.appendChild("<p><span class='current'>00</span>/<span class='duration'>00</span></p>"), n.appendChild(i.element), n.element
        }, n.prototype.drawControl = function (n, t, i, r) {
            var f = n, u = this.getRoatePoint(f, t, i);
            this.config.translate.x = u.x, this.config.translate.y = u.y, this.config.rotate.z = f.rotate.x + r, this.element.style.width = this.config.width * i + "px", this.element.dataset.offsetX = u.x, this.element.dataset.offsetY = u.y, this.element.dataset.rotateZ = this.config.rotate.z.toString()
        }, n.prototype.getRoatePoint = function (n, t, i) {
            var e = n.translate.x, o = n.translate.y + n.height - 21 / i, r = n.rotate.z / 180 * Math.PI,
                u = n.translate.x + n.width / 2, f = n.translate.y + n.height / 2,
                s = -(o - f) * Math.sin(r) + (e - u) * Math.cos(r) + u,
                h = (o - f) * Math.cos(r) + (e - u) * Math.sin(r) + f;
            return t.transformedPoint2(s, h)
        }, n.prototype.timeFormat = function (n) {
            var t = Math.floor(n / 60) < 10 ? "0" + Math.floor(n / 60) : Math.floor(n / 60).toString(),
                i = Math.floor(n - Number(t) * 60) < 10 ? "0" + Math.floor(n - Number(t) * 60) : Math.floor(n - Number(t) * 60).toString();
            return t + ":" + i
        }, n.prototype.update = function (n, t) {
            var i = 100 * n / t;
            this.line.style.width = i + "%", this.current.innerHTML = this.timeFormat(n), this.duration.innerHTML = this.timeFormat(t)
        }, n.prototype.show = function () {
            this.element.style.display = "table"
        }, n.prototype.hide = function () {
            this.element.style.display = "none"
        }, n
    }();
    n.VideoControl = t
}(Core || (Core = {})), function (n) {
    var r, t, i;
    (function (n) {
        n[n.None = 0] = "None", n[n.FadeIn = 1] = "FadeIn", n[n.FadeOut = 2] = "FadeOut", n[n.SpeedFall = 3] = "SpeedFall", n[n.SpiralInto = 4] = "SpiralInto"
    })(n.EffectType || (n.EffectType = {})), r = n.EffectType, t = function () {
        function n(n) {
            this.id = "effect_" + n, this.frameId = n, this.effectStepList = new Common.List
        }

        return n.prototype.addEffectStep = function (n) {
            this.effectStepList.add(n)
        }, n.prototype.removeEffectStep = function (n) {
            this.effectStepList.remove(n)
        }, n.prototype.setEffectStepAppearDelay = function (n, t) {
            this.effectStepList.get(n).appearDelay = t
        }, n
    }(), n.Effect = t, i = function () {
        function n(n, t, i, r, u, f) {
            u === void 0 && (u = 2), f === void 0 && (f = null), this.id = f || "step_" + Common.Util.getGenerate(), this.effectId = n, this.elementColorKey = t, this.effectType = i, this.appearDelay = u !== undefined ? u : 2, this.order = r
        }

        return n
    }(), n.EffectStep = i
}(Core || (Core = {})), function (n) {
    var u = function () {
        function n() {
            this.cachedImages = new Common.HashTable
        }

        return n.prototype.createCacheObj = function (n, t, i, u) {
            var u;
            return u = i ? u : document.createElement("canvas"), new r(u, n, t, i)
        }, n.prototype.addToCache = function (n, r, u, f) {
            var y, p, a, w, v;
            if (!this.cachedImages.has(n.src)) {
                var s = u, h = f, c = 0, l = 0;
                r && (y = s > h ? 1400 / s : 1400 / h, c = s * y, l = h * y), p = this.createCacheObj(s, h, r, n), a = null, c != 0 && l != 0 && (a = this.createCacheObj(c, l, !1, n)), w = new i(0, 0, s, h, 0, 0, c, l), v = new t(p, w, n.src, r, a), r || v.cacheObj.cacheContex.drawImage(n, 0, 0, s, h, 0, 0, s, h), a && v.smallCacheObj.cacheContex.drawImage(n, 0, 0, s, h, 0, 0, c, l), this.cachedImages.set(n.src, v)
            }
        }, n.prototype.deleteFromCache = function (n) {
            var t = this.cachedImages.get(n);
            t && (t.cacheObj.cacheContex = null, t.cacheObj.cacheEl.src && (t.cacheObj.cacheEl.src = null), t.cacheObj.cacheEl = null), this.cachedImages.del(n), t = null
        }, n.prototype.deleteAllCache = function () {
            var n = this;
            this.cachedImages.foreach(function (t) {
                n.deleteFromCache(t)
            })
        }, n.prototype.getCacheInfo = function (n, t, i, r, u) {
            return (!this.cachedImages.has(n.src) || u) && this.addToCache(n, t, i, r), this.cachedImages.get(n.src)
        }, n.prototype.updateCacheInfo = function (n, t, i, r, u) {
            return this.deleteFromCache(n.src), this.addToCache(n, t, i, r, u), this.cachedImages.get(n.src)
        }, n.prototype.updateCancheInfoForFilter = function (n, t) {
            if (n) {
                var i = this.cachedImages.get(t), r = i.cacheObj.cacheEl.width, u = i.cacheObj.cacheEl.height,
                    f = i.cacheObj.cacheContex.getImageData(0, 0, r, u), e = f.data, o = r * u * 4;
                n.indexOf("color") > -1 ? Common.Filter[n](e, o) : Common.Filter[n](i.cacheObj.cacheContex, f), i.cacheObj.cacheContex.putImageData(f, 0, 0, 0, 0, r, u)
            }
        }, n.prototype.updateCacheInfoForCrop = function (n) {
            var f = n.config, t = n.cacheInfo.cacheObj.cacheContex, i = n.width, r = n.height, u;
            f.cropData ? (n.cacheInfo.cropCache || (n.cacheInfo.cropCache = document.createElement("canvas"), n.cacheInfo.cropCache.width = i, n.cacheInfo.cropCache.height = r, u = n.cacheInfo.cropCache.getContext("2d"), u.clearRect(0, 0, i, r), u.drawImage(n.cacheInfo.cacheObj.cacheEl, 0, 0, i, r)), n.adjustCacheCanvasSize()) : n.cacheInfo.cropCache && (t.globalCompositeOperation = "copy", t.clearRect(0, 0, t.canvas.width, t.canvas.height), t.drawImage(n.cacheInfo.cropCache, 0, 0, t.canvas.width, t.canvas.height))
        }, n
    }(), r, t, i;
    n.ImageCachePool = u, r = function () {
        function n(n, t, i, r) {
            if (this.cacheEl = n, n.width = t, n.height = i, !r) {
                var u = n.getContext("2d");
                this.cacheContex = u
            }
        }

        return n
    }(), t = function () {
        function n(n, t, i, r, u) {
            this.cacheObj = n, this.offset = t, this.url = i, this.isSvg = r, this.smallCacheObj = u
        }

        return n.prototype.getCacheEl = function (n) {
            return n && this.smallCacheObj && this.isSvg ? this.smallCacheObj.cacheEl : this.cacheObj.cacheEl
        }, n
    }(), n.ImageCachInfo = t, i = function () {
        function n(n, t, i, r, u, f, e, o) {
            this.x = n, this.y = t, this.width = i, this.height = r, this.sx = u, this.sy = f, this.swidth = e, this.sheight = o
        }

        return n
    }(), n.CacheOffset = i
}(Core || (Core = {})), function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n() {
                this.left = "1%", this.width = 51, this.height = 51;
                var n = getWindow().height;
                this.top = fomatFloat((1 - this.height / n) * 100, 2) - 1 + "%", this.src = "resources/img/logo1-06.svg"
            }

            return n
        }();
        n.DtoLogo = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), function (n) {
    var t = function () {
        function n(n, t, i, r, u, f, e) {
            this.bgColor = n, this.shapeColor = u, this.circleColor = i, this.dashRectangleColor = r, this.squareBracketsColor = t, this.textColor = f, this.textFontFamily = e
        }

        return n
    }(), i;
    n.Theme = t, i = function () {
        function n() {
            n.themes.add(new t("rgb(255,255,255)", "rgb(0,102,204)", "rgb(0,102,204)", "rgb(179,179,179)", "rgb(0,128,237)", "rgb(0,0,0)", "wryh"))
        }

        return n.themes = new Common.List, n
    }(), n.Themes = i
}(Core || (Core = {})), function (n) {
    var t = function () {
        function n(n, t) {
            this.hyperlink_type = n, this.hyperlink_path = t
        }

        return n
    }(), i;
    n.Hyperlink = t, function (n) {
        n[n.none = 0] = "none", n[n.url_addr = 1] = "url_addr", n[n.file_location = 2] = "file_location", n[n.document_step = 3] = "document_step"
    }(n.HyperlinkType || (n.HyperlinkType = {})), i = n.HyperlinkType
}(Core || (Core = {})), function (n) {
    var t = function () {
        function n(n, t, i, r, u) {
            u === void 0 && (u = 1), this.frameNum = n, this.toFrameNum = t, this.musicName = i, this.musicPath = r, this.isLoop = u
        }

        return n
    }();
    n.MusicShowInfo = t
}(Core || (Core = {})), function (n) {
    var t;
    (function (t) {
        var i = function () {
            function t(n, t, i, r) {
                this.effectGlobalAlpha = 1, this.id = n, this.config = i, this.context = r, this.colorKey = t, this.effectId = "", this.frameNum = "", this.isDraw = !0
            }

            return t.prototype.translate = function (n, t) {
                this.config.translate.x += n, this.config.translate.y += t, this.config.translate.sx != null && this.config.translate.sx != undefined && (this.config.translate.sx += n, this.config.translate.sy += t, this.config.translate.ex += n, this.config.translate.ey += t), this.config.translate.cx != null && this.config.translate.cy != undefined && (this.config.translate.cx += n, this.config.translate.cy += t)
            }, t.prototype.rotate = function () {
                if (this.config.rotate.z = this.config.rotate.z % 360, this.config.rotate.z != 0) {
                    var n = this.getCenterCoordinate();
                    this.context.translate(n.x, n.y), this.context.rotate(this.config.rotate.z), this.context.translate(-n.x, -n.y)
                }
            }, t.prototype.zoom = function () {
            }, t.prototype.reDraw = function () {
            }, t.prototype.draw = function (t) {
                var s, u, i, r, f, e, o;
                if (t === void 0 && (t = !0), s = this, this.effectGlobalAlpha <= .0001 && (this.isDraw = !1), u = Player.PlayerCommon.getInstance(), u) {
                    if (i = u.playCanvasCore.frames, !i.frames.get(i.currentFrameNum) || !i.isLastNext) return;
                    r = i.frames.get(i.currentFrameNum).effectObj.effectStepList.get(i.currentEffectNum), r && (f = !1, r.elementColorKey == this.colorKey ? f = !0 : (e = u.playCanvasCore.getCombinationElementByColorKey(r.elementColorKey), e && (o = u.playCanvasCore.getCombinationById(e.id), o && o.items.foreach(function (n, t) {
                        t.colorKey == s.colorKey && (f = !0)
                    }))), this.effectGlobalAlpha < 1 && f && r.effectType == n.EffectType.FadeIn ? (this.context.globalAlpha = this.effectGlobalAlpha, this.effectGlobalAlpha += .1) : this.effectGlobalAlpha > 0 && f && r.effectType == n.EffectType.FadeOut && (this.context.globalAlpha = this.effectGlobalAlpha, this.effectGlobalAlpha -= .1))
                }
            }, t.prototype.update = function () {
            }, t.prototype.onChangeControl = function () {
            }, t.prototype.onChangeStart = function () {
            }, t.prototype.onChangeEnd = function () {
            }, t.prototype.sizeChangeExtend = function () {
            }, t.prototype.sizeChangeForGoto = function (n) {
                var t = Player.PlayerCommon.getInstance().playCanvasCore.scale, i = this.config.width / t * n,
                    r = this.config.height / t * n;
                this.config.translate.x = (this.config.translate.x + this.config.width / 2) / t * n - i / 2, this.config.translate.y = (this.config.translate.y + this.config.height / 2) / t * n - r / 2, this.config.translate.sx = this.config.translate.sx / t * n, this.config.translate.sy = this.config.translate.sy / t * n, this.config.width = i, this.config.height = r
            }, t.prototype.sizeChange = function (n, t, i, r, u) {
                var y = this.typeName, s, h, c, l;
                if (r != null && r != undefined && u != null && u != undefined) {
                    var o = Math.max(n, t), f = this.config.width * (1 + o * 2), e = this.config.height * (1 + o * 2);
                    if (f <= 0 || e <= 0) return;
                    this.config.width = f, this.config.height = e, s = this.config.translate.x, h = this.config.translate.y, s = (s - r) * (1 + o * 2) + r, h = (h - u) * (1 + o * 2) + u, this.config.translate.x = s, this.config.translate.y = h, c = this.config.translate.sx, l = this.config.translate.sy, c = (c - r) * (1 + o * 2) + r, l = (l - u) * (1 + o * 2) + u, this.config.translate.sx = c, this.config.translate.sy = l
                } else if (i == Common.DirectionType.left || i == Common.DirectionType.right || i == Common.DirectionType.bottom || i == Common.DirectionType.top) {
                    var a = this.config.width, v = this.config.height, f = this.config.width, e = this.config.height;
                    if (i == Common.DirectionType.right ? f = this.config.width * (1 + n) : i == Common.DirectionType.left ? (f = this.config.width * (1 + n), this.config.translate.x -= f - this.config.width) : i == Common.DirectionType.top ? (e = this.config.height * (1 + t), this.config.translate.y -= e - this.config.height) : i == Common.DirectionType.bottom && (e = this.config.height * (1 + t)), f <= 0 || e <= 0) return;
                    this.config.width = f, this.config.height = e, this.sizeChangeExtend(f - a, e - v, i)
                } else {
                    var o = Math.max(n, t), f = this.config.width * (1 + o * 2), e = this.config.height * (1 + o * 2);
                    if (f <= 0 || e <= 0) return;
                    this.config.translate.x -= (f - this.config.width) / 2, this.config.translate.y -= (e - this.config.height) / 2, this.config.width = f, this.config.height = e
                }
            }, t.prototype.getCenterCoordinate = function (t) {
                var i;
                if (t === void 0 && (t = !1), this.config.cropData) {
                    if (i = new n.Point(this.config.cropData.x + this.config.cropData.width / 2, this.config.cropData.y + this.config.cropData.height / 2), t) {
                        var u = new n.Point(this.config.translate.x + this.config.width / 2, this.config.translate.y + this.config.height / 2),
                            f = u.x - i.x, e = u.y - i.y, r = this.config.rotate.z * Math.PI / 180, o = {
                                x: f * Math.cos(r) - e * Math.sin(r) + i.x,
                                y: f * Math.sin(r) + e * Math.cos(r) + i.y
                            };
                        return new n.Point(o.x, o.y)
                    }
                    return i
                }
                return i = new n.Point(this.config.translate.x + this.config.width / 2, this.config.translate.y + this.config.height / 2)
            }, t.prototype.getAllPoints = function () {
                var t = this.config.rotate.z / 180 * Math.PI, f = new Common.List, u, it;
                f.add(new n.Point(this.config.translate.x, this.config.translate.y)), f.add(new n.Point(this.config.translate.x + this.config.width, this.config.translate.y)), f.add(new n.Point(this.config.translate.x + this.config.width, this.config.translate.y + this.config.height)), f.add(new n.Point(this.config.translate.x, this.config.translate.y + this.config.height));
                var e = new Common.List, i = this.config.translate.x + this.config.width / 2,
                    r = this.config.translate.y + this.config.height / 2, nt = this.config.translate.x,
                    g = this.config.translate.y, d = this.config.translate.x + this.config.width,
                    k = this.config.translate.y, b = this.config.translate.x + this.config.width,
                    w = this.config.translate.y + this.config.height, y = this.config.translate.x,
                    p = this.config.translate.y + this.config.height,
                    tt = -(g - r) * Math.sin(t) + (nt - i) * Math.cos(t) + i,
                    v = (g - r) * Math.cos(t) + (nt - i) * Math.sin(t) + r,
                    a = -(k - r) * Math.sin(t) + (d - i) * Math.cos(t) + i,
                    l = (k - r) * Math.cos(t) + (d - i) * Math.sin(t) + r,
                    c = -(w - r) * Math.sin(t) + (b - i) * Math.cos(t) + i,
                    h = (w - r) * Math.cos(t) + (b - i) * Math.sin(t) + r,
                    s = -(p - r) * Math.sin(t) + (y - i) * Math.cos(t) + i,
                    o = (p - r) * Math.cos(t) + (y - i) * Math.sin(t) + r;
                return e.add(new n.Point(tt, v)), e.add(new n.Point(a, l)), e.add(new n.Point(c, h)), e.add(new n.Point(s, o)), u = new Common.List, u.add(this.context.transformedPoint2(tt, v)), u.add(this.context.transformedPoint2(a, l)), u.add(this.context.transformedPoint2(c, h)), u.add(this.context.transformedPoint2(s, o)), it = {
                    points: f,
                    truePoints: e,
                    viewTruePoints: u
                }
            }, t.prototype.getChildren = function () {
                var r = this, n = this.getAllPoints().truePoints, t, i, u;
                for (this.context.beginPath(), this.context.moveTo(n.get(0).x, n.get(0).y), t = 1; t < n.length(); ++t) this.context.lineTo(n.get(t).x, n.get(t).y);
                return this.context.closePath(), i = new Common.List, u = Player.PlayerCommon.getInstance().playCanvasCore.commonElements, u.foreach(function (n, t) {
                    if (t.colorKey != r.colorKey) {
                        var f = t.getAllPoints().viewTruePoints, u = !0;
                        f.foreach(function (n, t) {
                            if (!r.context.isPointInPath(t.x, t.y)) {
                                u = !1;
                                return
                            }
                        }), u && i.add(t)
                    }
                }), i
            }, t.prototype.setIsDraw = function (n, t) {
                var u, i, r;
                t === void 0 && (t = !1), this.typeName == "group" ? (this.isDraw = n, u = Player.PlayerCommon.getInstance().playCanvasCore.getCombinationById(this.id), u.items.foreach(function (i, r) {
                    var u = Player.PlayerCommon.getInstance().playCanvasCore.commonElements.get(r.colorKey);
                    u && (n == !0 ? (u.effectGlobalAlpha = t ? 1 : .1, u.isDraw = !0) : (t && (u.isDraw = !1), u.effectGlobalAlpha = 1))
                })) : (n == !0 ? (this.effectGlobalAlpha = t ? 1 : .1, this.isDraw = !0) : (t && (this.isDraw = !1), this.effectGlobalAlpha = 1), i = Player.PlayerCommon.getInstance().playCanvasCore.version, i && Common.Util.compareVersion(i.split(",")[0], "2.2.7") < 0 && (r = this.getChildren(), r && r.foreach(function (t, i) {
                    i.effectId || (i.isDraw == !1 && n == !0 && (i.effectGlobalAlpha = .1), i.isDraw = n)
                })))
            }, t.prototype.getLineWidthWH = function () {
                var t = 0, i = 0, r, n, u;
                return this.config.type == "shape" && (r = Player.PlayerCommon.getInstance().playCanvasCore.scale, n = this.shapeParameter.lineWidth, this.shapeParameter.lineWidth == 2 && (n = Math.min(this.config.width * r, this.config.height * r) / this.shapeParameter.lineWidthScale), u = this.typeName, u == "DtoStar" ? this.shapeParameter.isStroke && (t = i = n / Math.sin(18 / 180 * Math.PI)) : u == "DtoTriangle" ? this.shapeParameter.isStroke && (t = n * Math.sqrt(3), i = n * 1.5) : this.shapeParameter.isStroke && (t = i = n)), {
                    lineWidthW: t,
                    lineWidthH: i
                }
            }, t
        }();
        t.DtoCommonElement = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (n) {
        var i = function () {
            function n() {
                this.lineWidth = 1, this.isStroke = !0, this.isFill = !1, this.fillStyle = "rgb(0,204,204)", this.strokeStyle = "rgb(0,204,204)", this.lineWidthScale = lineWidthScale, this.isAutiClockwise = !1, this.computeLineWidth = !0, this.alpha = 1, this.lineDash = [10, 15]
            }

            return n
        }(), t;
        n.DtoShapeParameter = i, t = function (n) {
            function t(t, i, r, u, f) {
                n.call(this, t, i, r, u), this.shapeParameter = f
            }

            return __extends(t, n), t.prototype.prepareStyle = function () {
                this.shapeParameter.computeLineWidth && this.shapeParameter.isStroke && (this.shapeParameter.lineWidth = Math.max(2, Math.min(this.config.width * Player.PlayerCommon.getInstance().playCanvasCore.scale, this.config.height * Player.PlayerCommon.getInstance().playCanvasCore.scale) / this.shapeParameter.lineWidthScale));
                var n = this.context;
                n.fillStyle = Common.Util.makeRGBA(this.shapeParameter.fillStyle, this.shapeParameter.alpha), n.strokeStyle = Common.Util.makeRGBA(this.shapeParameter.strokeStyle, this.shapeParameter.alpha), n.lineWidth = this.shapeParameter.lineWidth / Player.PlayerCommon.getInstance().playCanvasCore.scale
            }, t.prototype.changeStyleForHit = function () {
                this.tempFill = this.shapeParameter.isFill, this.tempStroke = this.shapeParameter.isStroke, this.context.canvas.id == "hitCanvas" && (this.context.fillStyle = this.colorKey, this.context.strokeStyle = this.colorKey, this.shapeParameter.isStroke = !0)
            }, t.prototype.correctChangeStyleForHit = function () {
                this.shapeParameter.isFill = this.tempFill, this.shapeParameter.isStroke = this.tempStroke
            }, t.prototype.drawPath = function () {
            }, t.prototype.setPro = function () {
            }, t.prototype.draw = function () {
                this.context.save(), n.prototype.draw.call(this), this.rotate(), this.setPro(), this.prepareStyle(), this.changeStyleForHit(), this.drawPath(), this.correctChangeStyleForHit(), this.context.restore()
            }, t
        }(n.DtoCommonElement), n.DtoShape = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (n) {
        var t = function (n) {
            function t(t, i, r, u, f) {
                n.call(this, t, i, r, u, f)
            }

            return __extends(t, n), t.prototype.setPro = function () {
            }, t.prototype.drawPath = function () {
                this.context.save(), this.context.translate(this.config.translate.x, this.config.translate.y);
                var t = 0, r = 0, o = this.config.width, f = this.config.height, e = f * 3 / 4, n = f / 4, u = t + o,
                    i = r + e;
                this.context.beginPath(), this.context.lineTo(u - n, r), this.context.quadraticCurveTo(u, r, u, r + n), this.context.lineTo(u, r + e - n), this.context.quadraticCurveTo(u, i, u - n, i), this.context.lineTo(t + n, i), this.context.quadraticCurveTo(t, i, t, i - n), this.context.lineTo(t, r + n), this.context.quadraticCurveTo(t, r, t + n, r), this.context.moveTo(t + n, i), this.context.lineTo(t + n * 2, i), this.context.lineTo(t, i + n), this.context.lineTo(t + n, i), this.context.closePath(), this.context.fill(), this.context.restore()
            }, t
        }(n.DtoShape);
        n.DtoAnnotationBox = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (i) {
            function r(r, u, f, e, o) {
                i.call(this, r, u, f, e, o), this.curveArc = new t.DtoPartsCurveArc(new n.Point(this.config.translate.cx, this.config.translate.cy), new n.Point(this.config.translate.sx, this.config.translate.sy), new n.Point(this.config.translate.ex, this.config.translate.ey), this.shapeParameter.isAutiClockwise), this.line = new t.DtoPartsPolyline, this.arrowHead = new t.DtoArrowHead(1.5 * Math.PI, !1, new n.Point(this.config.translate.ex, this.config.translate.ey), 40 / initScale)
            }

            return __extends(r, i), r.prototype.prepareStyle = function () {
                var t = Math.sqrt(Math.pow(this.config.translate.sx - this.config.translate.ex, 2) + Math.pow(this.config.translate.sy - this.config.translate.ey, 2)),
                    n;
                this.shapeParameter.computeLineWidth && (this.shapeParameter.lineWidth = t / this.shapeParameter.lineWidthScale / 2), n = this.context, n.fillStyle = Common.Util.makeRGBA(this.shapeParameter.fillStyle, this.shapeParameter.alpha), n.strokeStyle = Common.Util.makeRGBA(this.shapeParameter.strokeStyle, this.shapeParameter.alpha), n.lineWidth = this.shapeParameter.lineWidth / Player.PlayerCommon.getInstance().playCanvasCore.scale
            }, r.prototype.setPro = function () {
                var i, t, r;
                this.curveArc.setPro(new n.Point(this.config.translate.cx, this.config.translate.cy), new n.Point(this.config.translate.sx, this.config.translate.sy), new n.Point(this.config.translate.ex, this.config.translate.ey)), i = new Common.List, i.add(new n.Point(this.config.translate.sx, this.config.translate.sy)), i.add(new n.Point(this.config.translate.ex, this.config.translate.ey)), this.line.points = i, this.curveArc.isAutiClockwise = this.shapeParameter.isAutiClockwise, this.arrowHead.triangleSide = this.shapeParameter.lineWidth * 4, this.arrowHead.basePoint.x = this.config.translate.ex, this.arrowHead.basePoint.y = this.config.translate.ey, t = new n.Point((this.config.translate.sx + this.config.translate.ex) / 2, (this.config.translate.sy + this.config.translate.ey) / 2), r = Math.sqrt(Math.pow(this.config.translate.cx - t.x, 2) + Math.pow(this.config.translate.cy - t.y, 2)), this.config.isStraight && r <= 1 / Player.PlayerCommon.getInstance().playCanvasCore.scale || r <= 0 ? (this.config.translate.cx = t.x, this.config.translate.cy = t.y, this.config.isStraight = !0) : this.config.isStraight = !1
            }, r.prototype.rotate = function () {
                if (this.config.rotate.z = this.config.rotate.z % 360, this.config.rotate.z != 0) {
                    var n = this.config.translate.cx, t = this.config.translate.cy;
                    this.context.translate(n, t), this.context.rotate(this.config.rotate.z), this.context.translate(-n, -t)
                }
            }, r.prototype.drawPath = function () {
                if (this.context.beginPath(), this.config.isStraight) {
                    this.line.drawPath(this.context);
                    var n = t.DtoPartsCurveArc.computeAng(this.config.translate.sx, this.config.translate.sy, this.config.translate.ex, this.config.translate.ey);
                    this.arrowHead.centerAngle = 1.5 * Math.PI + n, this.arrowHead.drawPath(this.context)
                } else this.curveArc.drawPath(this.context), this.arrowHead.centerAngle = this.curveArc.endAng, this.shapeParameter.isAutiClockwise && (this.arrowHead.centerAngle = Math.PI + this.curveArc.endAng), this.arrowHead.drawPath(this.context);
                this.context.closePath()
            }, r.prototype.sizeChange = function (n, t, i, r, u) {
                if (r != null && r != undefined && u != null && u != undefined) {
                    var f = Math.max(n, t);
                    this.shapeParameter.lineWidth *= 1 + f * 2
                }
            }, r.prototype.sizeChangeForGoto = function (n) {
                this.shapeParameter.lineWidth *= n / Player.PlayerCommon.getInstance().playCanvasCore.scale
            }, r.prototype.getAllPoints = function () {
                var t = this.config.rotate.z / 180 * Math.PI, f = new Common.List, u, d;
                f.add(new n.Point(this.config.translate.sx, this.config.translate.sy)), f.add(new n.Point(this.config.translate.ex, this.config.translate.ey)), f.add(new n.Point(this.config.translate.cx, this.config.translate.cy));
                var e = new Common.List, i = this.config.translate.cx, r = this.config.translate.cy,
                    b = this.config.translate.sx, w = this.config.translate.sy, p = this.config.translate.ex,
                    y = this.config.translate.ey, a = this.config.translate.cx, v = this.config.translate.cy,
                    k = -(w - r) * Math.sin(t) + (b - i) * Math.cos(t) + i,
                    l = (w - r) * Math.cos(t) + (b - i) * Math.sin(t) + r,
                    c = -(y - r) * Math.sin(t) + (p - i) * Math.cos(t) + i,
                    h = (y - r) * Math.cos(t) + (p - i) * Math.sin(t) + r,
                    s = -(v - r) * Math.sin(t) + (a - i) * Math.cos(t) + i,
                    o = (v - r) * Math.cos(t) + (a - i) * Math.sin(t) + r;
                return e.add(new n.Point(k, l)), e.add(new n.Point(c, h)), e.add(new n.Point(s, o)), u = new Common.List, u.add(this.context.transformedPoint2(k, l)), u.add(this.context.transformedPoint2(c, h)), u.add(this.context.transformedPoint2(s, o)), d = {
                    points: f,
                    truePoints: e,
                    viewTruePoints: u
                }
            }, r.prototype.getChildren = function () {
                return null
            }, r
        }(t.DtoShape);
        t.DtoArrow = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n(n, t, i, r) {
                this.centerAngle = n, this.isStraight = t, this.basePoint = i, this.triangleSide = r
            }

            return n.prototype.drawPath = function (n) {
                this.isStraight ? this.drawIsosceles(n) : this.drawEquilateral(n)
            }, n.prototype.drawEquilateral = function (n) {
                var t = this.triangleSide,
                    i = this.basePoint.x - Math.sqrt(3) / 4 * t * Math.sin(-this.centerAngle) / Player.PlayerCommon.getInstance().playCanvasCore.scale,
                    r = this.basePoint.y - Math.sqrt(3) / 4 * t * Math.cos(-this.centerAngle) / Player.PlayerCommon.getInstance().playCanvasCore.scale,
                    u = i + t / 2 * Math.cos(this.centerAngle) / Player.PlayerCommon.getInstance().playCanvasCore.scale,
                    f = r + t / 2 * Math.sin(this.centerAngle) / Player.PlayerCommon.getInstance().playCanvasCore.scale,
                    e = i + Math.sqrt(3) / 2 * t * Math.sin(-this.centerAngle) / Player.PlayerCommon.getInstance().playCanvasCore.scale,
                    o = r + Math.sqrt(3) / 2 * t * Math.cos(-this.centerAngle) / Player.PlayerCommon.getInstance().playCanvasCore.scale,
                    s = i - t / 2 * Math.cos(this.centerAngle) / Player.PlayerCommon.getInstance().playCanvasCore.scale,
                    h = r - t / 2 * Math.sin(this.centerAngle) / Player.PlayerCommon.getInstance().playCanvasCore.scale,
                    c = (u + e + s) / 3, l = (f + o + h) / 3;
                n.beginPath(), n.moveTo(c, l), n.lineTo(u, f), n.lineTo(e, o), n.lineTo(s, h), n.lineTo(c, l), n.fill()
            }, n.prototype.drawIsosceles = function (n) {
                var t = this.triangleSide, i = this.basePoint.x, r = this.basePoint.y,
                    u = i + t / 2 * Math.cos(this.centerAngle), f = r + t / 2 * Math.sin(this.centerAngle),
                    e = i + 1 / 2 / Math.sqrt(3) * t * Math.sin(-this.centerAngle),
                    o = r + 1 / 2 / Math.sqrt(3) * t * Math.cos(-this.centerAngle),
                    s = i - t / 2 * Math.cos(this.centerAngle), h = r - t / 2 * Math.sin(this.centerAngle),
                    c = (u + e + s) / 3, l = (f + o + h) / 3;
                n.beginPath(), n.moveTo(i, r), n.lineTo(u, f), n.lineTo(e, o), n.lineTo(s, h), n.lineTo(i, r), n.fill()
            }, n
        }();
        n.DtoArrowHead = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (n) {
        var t = function (n) {
            function t(t, i, r, u, f, e) {
                if (e === void 0 && (e = !1), n.call(this, t, i, r, u), this.currentColor = "", this.src = f, this.config = r, !e) {
                    this.element = document.createElement("img"), this.element.id = this.id;
                    var o = this;
                    this.context && (this.element.src = f);
                    try {
                        this.element.onload = function () {
                            var n = f.split(".");
                            o.isSvg = !1, n[n.length - 1] == "svg" && (o.isSvg = !0), o.width = o.element.width, o.height = o.element.height, Player.PlayerCommon.getInstance() && (o.cacheInfo = Player.PlayerCommon.getInstance().imageCachePool.getCacheInfo(o.element, o.isSvg, o.width, o.height)), o.isSvg || (o.element = null), o.mirrorImage(), loadingFinish()
                        }, this.element.onerror = function () {
                            console.log("Load Error: Src=", o.src)
                        }
                    } catch (s) {
                        Common.Logger.setErrLog(Common.LogCode.normal, "文件:DtoImage,方法:constructor,异常信息：" + s)
                    }
                }
            }

            return __extends(t, n), t.prototype.reSize = function (n, t) {
                if (n > 500 || t > 500) {
                    var i, r, u = n >= t ? !0 : !1;
                    return u ? (i = 500, r = t / n * i) : (r = 500, i = n / t * r), {w: i, h: r}
                }
                return {w: n, h: t}
            }, t.prototype.translate = function (t, i) {
                n.prototype.translate.call(this, t, i), this.config.cropData && (this.config.cropData.x += t, this.config.cropData.y += i)
            }, t.prototype.sizeChangeForGoto = function (t) {
                var i = Player.PlayerCommon.getInstance().playCanvasCore.scale, r, u;
                if (n.prototype.sizeChangeForGoto.call(this, t), this.config.cropData) {
                    if (r = this.config.cropData.width / i * t, u = this.config.cropData.height / i * t, r <= 0 || u <= 0) return;
                    this.config.cropData.x = (this.config.cropData.x + this.config.cropData.width / 2) / i * t - r / 2, this.config.cropData.y = (this.config.cropData.y + this.config.cropData.height / 2) / i * t - u / 2, this.config.cropData.width = r, this.config.cropData.height = u
                }
            }, t.prototype.sizeChange = function (t, i, r, u, f) {
                var s, e, o, h, c, l, a;
                if (n.prototype.sizeChange.call(this, t, i, r, u, f), this.config.cropData) if (u != null && u != undefined && f != null && f != undefined) {
                    if (s = Math.max(t, i), e = this.config.cropData.width * (1 + s * 2), o = this.config.cropData.height * (1 + s * 2), e <= 0 || o <= 0) return;
                    this.config.cropData.width = e, this.config.cropData.height = o, h = this.config.cropData.x, c = this.config.cropData.y, h = (h - u) * (1 + s * 2) + u, c = (c - f) * (1 + s * 2) + f, this.config.cropData.x = h, this.config.cropData.y = c
                } else if (r == Common.DirectionType.left || r == Common.DirectionType.right || r == Common.DirectionType.bottom || r == Common.DirectionType.top) {
                    if (l = this.config.cropData.width, a = this.config.cropData.height, e = this.config.cropData.width, o = this.config.cropData.height, r == Common.DirectionType.right ? e = this.config.cropData.width * (1 + t) : r == Common.DirectionType.left ? (e = this.config.cropData.width * (1 + t), this.config.cropData.x -= e - this.config.cropData.width) : r == Common.DirectionType.top ? (o = this.config.cropData.height * (1 + i), this.config.cropData.y -= o - this.config.cropData.height) : r == Common.DirectionType.bottom && (o = this.config.cropData.height * (1 + i)), e <= 0 || o <= 0) return;
                    this.config.cropData.width = e, this.config.cropData.height = o, this.sizeChangeExtend(e - l, o - a, r)
                } else {
                    if (s = Math.max(t, i), e = this.config.cropData.width * (1 + s * 2), o = this.config.cropData.height * (1 + s * 2), e <= 0 || o <= 0) return;
                    this.config.cropData.x -= (e - this.config.cropData.width) / 2, this.config.cropData.y -= (o - this.config.cropData.height) / 2, this.config.cropData.width = e, this.config.cropData.height = o
                }
            }, t.prototype.reverseCanvas = function (n, t, i) {
                if ((t === void 0 && (t = !0), i === void 0 && (i = !0), n) && (t || i)) {
                    var r = n.getContext("2d"), s = n.width, h = n.height;
                    r.save(), r.globalCompositeOperation = "copy";
                    var u = 1, f = 1, e = 0, o = 0;
                    t && (u = -1, e = s), i && (f = -1, o = h), r.save(), r.translate(e, o), r.scale(u, f), r.drawImage(n, 0, 0, s, h), r.translate(e, o), r.scale(u, f), r.restore()
                }
            }, t.prototype.mirrorImage = function () {
                var t = this.config.horMirrorState, i = this.config.verMirrorState, n, r;
                if (!this.isSvg && this.cacheInfo.cacheObj && (t || i) && (n = this.cacheInfo.cacheObj.cacheEl, n)) {
                    if (!this.config.cropData) {
                        this.reverseCanvas(n, t, i);
                        return
                    }
                    r = n.getContext("2d"), this.reverseCanvas(n, t, i)
                }
            }, t.prototype.draw = function (t) {
                var i, r, u;
                t === void 0 && (t = !0), i = this, this.config.type != "ThreeDBackGroundImg" && this.config.type != "GifImage" && this.cacheInfo && (i.context.save(), n.prototype.draw.call(this), i.rotate(), this.isSvg ? (r = 1, u = 1, this.config.horMirrorState && (r = -1, this.config.translate.x = this.context.canvas.width - this.config.width - this.config.translate.x, i.context.translate(i.context.canvas.width, 0)), this.config.verMirrorState && (u = -1, this.config.translate.y = this.context.canvas.height - this.config.height - this.config.translate.y, i.context.translate(0, i.context.canvas.height)), this.context.scale(r, u), this.drawImage(t), this.config.horMirrorState && (this.config.translate.x = this.context.canvas.width - this.config.width - this.config.translate.x), this.config.verMirrorState && (this.config.translate.y = this.context.canvas.height - this.config.height - this.config.translate.y)) : this.drawImage(t), i.context.restore())
            }, t.prototype.drawImage = function (n) {
                var l, a;
                if (n === void 0 && (n = !0), !(this.config.width <= 20 / Player.PlayerCommon.getInstance().playCanvasCore.scale) || !(this.config.height <= 20 / Player.PlayerCommon.getInstance().playCanvasCore.scale)) {
                    var t = this.config, s = Common.Util.isIE(), h = Common.Util.isSafari(), c = Common.Util.isMobile(),
                        v = Math.max(this.config.width * Player.PlayerCommon.getInstance().playCanvasCore.scale, this.config.height * Player.PlayerCommon.getInstance().playCanvasCore.scale),
                        i = !c && !h && !s && !n;
                    i || c || h || s || !(v <= 500) || (i = !0, Player.PlayerCommon.getInstance().playCanvasCore.avgDrawTime < 50 && this.cacheInfo.isSvg && (i = !1));
                    var r = this.cacheInfo.getCacheEl(i), e = 0, o = 0, u = this.cacheInfo.offset.width,
                        f = this.cacheInfo.offset.height;
                    i && this.cacheInfo.isSvg && (e = this.cacheInfo.offset.sx, o = this.cacheInfo.offset.sy, u = this.cacheInfo.offset.swidth, f = this.cacheInfo.offset.sheight), t.cropData ? (this.context.save(), this.context.beginPath(), t.cropData.type == "clipCricle" ? (l = t.translate.sx, a = t.translate.sy, this.context.arc(l, a, t.width / 2, 0, 2 * Math.PI)) : t.cropData.type == "clipRect" && this.context.rect(t.translate.x, t.translate.y, t.width, t.height), this.context.clip(), this.context.drawImage(r, t.cropData.x, t.cropData.y, t.cropData.width, t.cropData.height), this.context.closePath(), this.context.restore()) : u == 0 || f == 0 ? this.context.drawImage(r, t.translate.x, t.translate.y, t.width, t.height) : Player.PlayerCommon.getInstance().isFireFox ? this.context.drawImage(r, e, o, Math.floor(u), Math.floor(f), Math.floor(t.translate.x), Math.floor(t.translate.y), Math.floor(t.width), Math.floor(t.height)) : this.context.drawImage(r, e, o, u, f, t.translate.x, t.translate.y, t.width, t.height)
                }
            }, t.prototype.getChildren = function () {
                return null
            }, t
        }(n.DtoCommonElement);
        n.DtoImage = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var u = function () {
            function n() {
            }

            return n
        }(), i, r;
        t.DtoGifFrame = u, i = function () {
            function n() {
            }

            return n
        }(), t.DtoGifImageInfo = i, r = function (t) {
            function i(n, i, r, u, f, e, o, s) {
                s === void 0 && (s = !1), t.call(this, n, i, r, u, f), this.currentFrame = 0, this.gifInfo = e, this.lastDrawTime = Date.now(), this.totalWidth = o;
                var h = this;
                s || (this.element.src = f, this.element.onload = function () {
                    loadingFinish()
                })
            }

            return __extends(i, t), i.prototype.draw = function () {
                var n = this;
                this.element.complete && this.drawGif()
            }, i.prototype.drawGif = function () {
                var n, t;
                if ((!(this.config.width <= 20 / Player.PlayerCommon.getInstance().playCanvasCore.scale) || !(this.config.height <= 20 / Player.PlayerCommon.getInstance().playCanvasCore.scale)) && this.element && this.context) {
                    n = this.gifInfo.images[this.currentFrame % this.gifInfo.images.length], Date.now() - this.lastDrawTime >= n.delay && (this.currentFrame++, this.lastDrawTime = Date.now()), t = this.currentFrame % this.gifInfo.images.length, this.context.save(), this.drawAnimation(), this.rotate();
                    var i = this.gifInfo.width * t, r = i % this.totalWidth,
                        u = (i / this.totalWidth | 0) * this.gifInfo.height;
                    this.context.drawImage(this.element, r, u, this.gifInfo.width, this.gifInfo.height, this.config.translate.x, this.config.translate.y, this.config.width, this.config.height), this.context.restore()
                }
            }, i.prototype.drawAnimation = function () {
                var o = this, r, t, i, u, f, e;
                if (this.effectGlobalAlpha <= .0001 && (this.isDraw = !1), r = Player.PlayerCommon.getInstance(), r) {
                    if (t = r.playCanvasCore.frames, !t.frames.get(t.currentFrameNum) || !t.isLastNext) return;
                    i = t.frames.get(t.currentFrameNum).effectObj.effectStepList.get(t.currentEffectNum), i && (u = !1, i.elementColorKey == this.colorKey ? u = !0 : (f = r.playCanvasCore.getCombinationElementByColorKey(i.elementColorKey), f && (e = r.playCanvasCore.getCombinationById(f.id), e && e.items.foreach(function (n, t) {
                        t.colorKey == o.colorKey && (u = !0)
                    }))), this.effectGlobalAlpha < 1 && u && i.effectType == n.EffectType.FadeIn ? (this.context.globalAlpha = this.effectGlobalAlpha, this.effectGlobalAlpha += .1) : this.effectGlobalAlpha > 0 && u && i.effectType == n.EffectType.FadeOut && (this.context.globalAlpha = this.effectGlobalAlpha, this.effectGlobalAlpha -= .1))
                }
            }, i.prototype.resetHasGif = function (n) {
                var t, i;
                if (n) Player.PlayerCommon.getInstance().playCanvasCore.isHasGif = !0; else {
                    t = Player.PlayerCommon.getInstance().playCanvasCore.commonElements;
                    for (i in t) if (t[i].typeName == "DtoGifImage" && t[i].colorKey != this.colorKey) {
                        Player.PlayerCommon.getInstance().playCanvasCore.isHasGif = !0;
                        return
                    }
                    Player.PlayerCommon.getInstance().playCanvasCore.isHasGif = !1
                }
            }, i
        }(t.DtoImage), t.DtoGifImage = r
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (n) {
        var u = function () {
            function n() {
            }

            return n
        }(), t, i, r;
        n.DtoBackGround = u, t = function () {
            function n() {
            }

            return n
        }(), n.DtoScaleLevelInfo = t, i = function (n) {
            function t(t, i, r, u, f, e) {
                n.call(this, t, i, r, u, f), this.opacity = 1, this.scalInfo = e, this.element.src = f;
                var o = this;
                this.element.onload = function () {
                    var i = o.element.width, r = o.element.height, n, t;
                    o.config.width >= o.config.height ? (n = r / i * o.config.width, o.config.translate.y -= (n - o.config.height) / 2, o.config.height = n) : (t = i / r * o.config.height, o.config.translate.x -= (t - o.config.width) / 2, o.config.width = t), Player.PlayerCommon.getInstance() && (o.cacheInfo = Player.PlayerCommon.getInstance().imageCachePool.getCacheInfo(o.element, !1, o.element.width, o.element.height)), o.element.src = null, o.element = null, loadingFinish()
                }
            }

            return __extends(t, n), t.prototype.sizeChange = function (n, t, i) {
                var f = this.config.width * (1 + n * 2), e = this.config.height * (1 + n * 2), r, u;
                return f <= 0 || e <= 0 ? !1 : (this.config.width = f, this.config.height = e, r = this.config.translate.x, u = this.config.translate.y, r = (r - t) * (1 + n * 2) + t, u = (u - i) * (1 + n * 2) + i, this.config.translate.x = r, this.config.translate.y = u, !0)
            }, t.prototype.draw = function () {
                var t = this.opacity, i = this.context.globalAlpha;
                this.context.globalAlpha = t, n.prototype.draw.call(this), this.context.globalAlpha = i
            }, t.prototype.drawHit = function () {
            }, t
        }(n.DtoImage), n.DtoThreeDBackGroundImg = i, r = function () {
            function n() {
                this.scaleLevels = new Common.List, this.images = new Common.HashTable
            }

            return n.prototype.draw = function () {
                var f = 20, l = Math.pow(n.scrollMultibples, f),
                    t = Player.PlayerCommon.getInstance().playCanvasCore.scale, a = this.images.count(), i = null,
                    r = null, e = null, o = null;
                if (a > 1 && (i = this.images.get("1").scalInfo.scaleValue, e = i / l), a > 2 && (r = this.images.get("2").scalInfo.scaleValue, o = r / l), i && !r) if (t < e) this.images.get("0").opacity = 1, this.images.get("1").opacity = 0; else if (t > i) this.images.get("0").opacity = 0, this.images.get("1").opacity = 1; else {
                    var s = i / t, h = Math.log(s) / Math.log(n.scrollMultibples), u = h / f, c = 1 - u;
                    this.images.get("0").opacity = u, this.images.get("1").opacity = c
                }
                if (i && r) if (t <= e) this.images.get("0").opacity = 1, this.images.get("1").opacity = 0, this.images.get("2").opacity = 0; else if (t > e && t < i) {
                    var s = i / t, h = Math.log(s) / Math.log(n.scrollMultibples), u = h / f, c = 1 - u;
                    this.images.get("0").opacity = u, this.images.get("1").opacity = c, this.images.get("2").opacity = 0
                } else if (t >= i && t <= o) this.images.get("0").opacity = 0, this.images.get("1").opacity = 1, this.images.get("2").opacity = 0; else if (t > o && t < r) {
                    var s = r / t, h = Math.log(s) / Math.log(n.scrollMultibples), u = h / f, c = 1 - u;
                    this.images.get("0").opacity = 0, this.images.get("1").opacity = u, this.images.get("2").opacity = c
                } else t >= r && (this.images.get("0").opacity = 0, this.images.get("1").opacity = 0, this.images.get("2").opacity = 1);
                this.drawAll()
            }, n.prototype.drawAll = function () {
                var n = this;
                this.scaleLevels && this.scaleLevels.foreach(function (t, i) {
                    var r = i.level.toString();
                    n.images.has(r) && n.images.get(r).draw()
                })
            }, n.scrollMultibples = 1.05, n
        }(), n.DtoThreeDBackGround = r
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (n) {
        var t = function (n) {
            function t(t, i, r, u, f, e, o) {
                if (o === void 0 && (o = !1), n.call(this, t, i, r, u), this.chartConfig = e, this.src = f, !o) {
                    this.element = document.createElement("img"), this.element.id = this.id;
                    var s = this;
                    this.context && (this.element.src = f);
                    try {
                        this.element.onload = function () {
                            var n = Player.PlayerCommon.getInstance();
                            s.width = s.element.width, s.height = s.element.height, n && (s.cacheInfo = n.imageCachePool.getCacheInfo(s.element, !0, s.width, s.height)), loadingFinish()
                        }, this.element.onerror = function () {
                            console.log("Load Error, Src=", s.src)
                        }
                    } catch (h) {
                        Common.Logger.setErrLog(Common.LogCode.normal, "文件:DtoCharts,方法:constructor,异常信息：" + h)
                    }
                }
            }

            return __extends(t, n), t.prototype.draw = function (t) {
                t === void 0 && (t = !0);
                var i = this;
                this.cacheInfo && (i.context.save(), n.prototype.draw.call(this), i.rotate(), this.drawImage(t), i.context.restore())
            }, t.prototype.drawImage = function (n) {
                n === void 0 && (n = !0);
                var r = Player.PlayerCommon.getInstance(), i = r.playCanvasCore.scale, t = this.config;
                if (!(t.width <= 20 / i) || !(t.height <= 20 / i)) {
                    var e = Common.Util.isIE(), o = Common.Util.isSafari(), s = Common.Util.isMobile(),
                        h = Math.max(this.config.width * i, this.config.height * i),
                        u = !s && !o && !e && (!n || h <= 500), f = this.cacheInfo.getCacheEl(u),
                        c = this.cacheInfo.offset.x, l = this.cacheInfo.offset.y, a = this.cacheInfo.offset.width,
                        v = this.cacheInfo.offset.height;
                    u && (c = this.cacheInfo.offset.sx, l = this.cacheInfo.offset.sy, a = this.cacheInfo.offset.swidth, v = this.cacheInfo.offset.sheight), r.isFireFox ? this.context.drawImage(f, Math.floor(t.translate.x), Math.floor(t.translate.y), Math.floor(t.width), Math.floor(t.height)) : this.context.drawImage(f, t.translate.x, t.translate.y, t.width, t.height)
                }
            }, t.prototype.getChildren = function () {
                return null
            }, t
        }(n.DtoCommonElement);
        n.DtoChart = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (n) {
        var t = function (n) {
            function t() {
                n.apply(this, arguments)
            }

            return __extends(t, n), t.prototype.setPro = function () {
                this.radius = this.config.width / 2, this.centerX = this.config.translate.sx, this.centerY = this.config.translate.sy
            }, t.prototype.drawPath = function () {
                this.context.beginPath(), this.context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, !1), this.shapeParameter.isStroke && this.context.stroke(), this.shapeParameter.isFill && this.context.fill(), this.context.closePath()
            }, t.prototype.sizeChangeExtend = function (n, t, i) {
                i == Common.DirectionType.right && (this.config.translate.sx += n / 2, this.config.translate.y -= n / 2, this.config.height += n), i == Common.DirectionType.left && (this.config.translate.sx -= n / 2, this.config.translate.y -= n / 2, this.config.height += n), i == Common.DirectionType.top && (this.config.translate.sy -= t / 2, this.config.translate.x -= t / 2, this.config.width += t), i == Common.DirectionType.bottom && (this.config.translate.sy += t / 2, this.config.translate.x -= t / 2, this.config.width += t)
            }, t
        }(n.DtoShape);
        n.DtoCircle = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (n) {
        var t = function (n) {
            function t(t, i, r, u, f) {
                n.call(this, t, i, r, u, f), this.shapeParameter.lineWidth = 0, this.shapeParameter.computeLineWidth = !1
            }

            return __extends(t, n), t.prototype.drawPath = function () {
                this.context.beginPath(), this.context.rect(this.config.translate.x, this.config.translate.y, this.config.width, this.config.height), this.context.closePath()
            }, t
        }(n.DtoShape);
        n.DtoDashRectangle = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), function (n) {
    var t;
    (function (n) {
        var t = function () {
            function t() {
            }

            return t.prototype.createShapeGen = function (n, t, i, r, u, f) {
                return new n(t, i, r, u, f)
            }, t.prototype.createImageOrVideo = function (n, t, i, r, u, f, e) {
                e === void 0 && (e = !1);
                return new n(t, i, r, u, f, e, e)
            }, t.prototype.createChart = function (n, t, i, r, u, f, e, o) {
                o === void 0 && (o = !1);
                return new n(t, i, r, u, f, e, o)
            }, t.prototype.createGif = function (t, i, r, u, f, e, o, s, h) {
                h === void 0 && (h = !1);
                var c = new n.DtoGifImage(t, i, e, o, r, f, s, h);
                return c.originSrc = u, c
            }, t
        }();
        n.DtoElementFactory = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (i) {
            function r(r, u, f, e, o) {
                i.call(this, r, u, f, e, o), this.polygon = new t.DtoPolygon(new n.Point(this.config.translate.sx, this.config.translate.sy), 4, this.config.width / (2 + Math.sqrt(2)) * Math.sqrt(2), 0)
            }

            return __extends(r, i), r.prototype.setPro = function () {
                this.polygon.radius = this.config.width / (2 + Math.sqrt(2)) * Math.sqrt(2), this.polygon.centerPoint.setXY(this.config.translate.sx, this.config.translate.sy), this.config.height = this.polygon.radius / Math.sqrt(2) * (1 + 3 * Math.sqrt(2) / 2), this.config.translate.y = this.config.translate.sy - this.polygon.radius / Math.sqrt(2) * (1 + 1 / Math.sqrt(2))
            }, r.prototype.drawPath = function () {
                this.context.beginPath(), this.polygon.drawPath(this.context), this.context.arc(this.config.translate.sx - this.polygon.radius / 2, this.config.translate.sy - this.polygon.radius / 2, this.polygon.radius / Math.sqrt(2), 135 / 180 * Math.PI, 315 / 180 * Math.PI, !1), this.context.arc(this.config.translate.sx + this.polygon.radius / 2, this.config.translate.sy - this.polygon.radius / 2, this.polygon.radius / Math.sqrt(2), 225 / 180 * Math.PI, 45 / 180 * Math.PI, !1), this.context.closePath(), this.shapeParameter.isStroke && this.context.stroke(), this.shapeParameter.isFill && this.context.fill()
            }, r.prototype.sizeChangeExtend = function (n, t, i) {
                i == Common.DirectionType.right && (this.config.translate.sx += n / 2, this.config.translate.y -= n / 2, this.config.height += n), i == Common.DirectionType.left && (this.config.translate.sx -= n / 2, this.config.translate.y -= n / 2, this.config.height += n), i == Common.DirectionType.top && (this.config.translate.sy -= t / 2, this.config.translate.x -= t / 2, this.config.width += t), i == Common.DirectionType.bottom && (this.config.translate.sy += t / 2, this.config.translate.x -= t / 2, this.config.width += t)
            }, r
        }(t.DtoShape);
        t.DtoHeart = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (i) {
            function r(n, r, u, f, e) {
                i.call(this, n, r, u, f, e), this.partsPolyline = new t.DtoPartsPolyline
            }

            return __extends(r, i), r.prototype.setPro = function () {
                var i = this.config.translate.x, r = this.config.translate.y, u = this.config.width,
                    f = this.config.height, t = new Common.List;
                t.add(new n.Point(i, r)), t.add(new n.Point(i, r + f)), t.add(new n.Point(i + u, r + f)), t.add(new n.Point(i + u, r + f / 3)), t.add(new n.Point(i + 2 * u / 3, r)), t.add(new n.Point(i, r)), this.partsPolyline.points = t
            }, r.prototype.drawPath = function () {
                this.context.beginPath(), this.partsPolyline.drawPath(this.context), this.shapeParameter.isStroke && this.context.stroke(), this.shapeParameter.isFill && this.context.fill(), this.context.closePath()
            }, r
        }(t.DtoShape);
        t.DtoNotchRectangle = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (i) {
            function r(r, u, f, e, o) {
                i.call(this, r, u, f, e, o), this.curveArc = new t.DtoPartsCurveArc(new n.Point(this.config.translate.cx, this.config.translate.cy), new n.Point(this.config.translate.sx, this.config.translate.sy), new n.Point(this.config.translate.ex, this.config.translate.ey), this.shapeParameter.isAutiClockwise), this.line = new t.DtoPartsPolyline
            }

            return __extends(r, i), r.prototype.prepareStyle = function () {
                var t = Math.sqrt(Math.pow(this.config.translate.sx - this.config.translate.ex, 2) + Math.pow(this.config.translate.sy - this.config.translate.ey, 2)),
                    n;
                this.shapeParameter.computeLineWidth && (this.shapeParameter.lineWidth = t / this.shapeParameter.lineWidthScale / 2), n = this.context, n.fillStyle = Common.Util.makeRGBA(this.shapeParameter.fillStyle, this.shapeParameter.alpha), n.strokeStyle = Common.Util.makeRGBA(this.shapeParameter.strokeStyle, this.shapeParameter.alpha), n.lineWidth = this.shapeParameter.lineWidth / Player.PlayerCommon.getInstance().playCanvasCore.scale, n.setLineDash([this.shapeParameter.lineDash[0] / Player.PlayerCommon.getInstance().playCanvasCore.scale, this.shapeParameter.lineDash[1] / Player.PlayerCommon.getInstance().playCanvasCore.scale])
            }, r.prototype.setPro = function () {
                var i, t, r;
                this.curveArc.setPro(new n.Point(this.config.translate.cx, this.config.translate.cy), new n.Point(this.config.translate.sx, this.config.translate.sy), new n.Point(this.config.translate.ex, this.config.translate.ey)), i = new Common.List, i.add(new n.Point(this.config.translate.sx, this.config.translate.sy)), i.add(new n.Point(this.config.translate.ex, this.config.translate.ey)), this.line.points = i, this.curveArc.isAutiClockwise = this.shapeParameter.isAutiClockwise, t = new n.Point((this.config.translate.sx + this.config.translate.ex) / 2, (this.config.translate.sy + this.config.translate.ey) / 2), r = Math.sqrt(Math.pow(this.config.translate.cx - t.x, 2) + Math.pow(this.config.translate.cy - t.y, 2)), this.config.isStraight && r <= 1 / Player.PlayerCommon.getInstance().playCanvasCore.scale || r <= 0 ? (this.config.translate.cx = t.x, this.config.translate.cy = t.y, this.config.isStraight = !0) : this.config.isStraight = !1
            }, r.prototype.rotate = function () {
                if (this.config.rotate.z = this.config.rotate.z % 360, this.config.rotate.z != 0) {
                    var n = this.config.translate.cx, t = this.config.translate.cy;
                    this.context.translate(n, t), this.context.rotate(this.config.rotate.z), this.context.translate(-n, -t)
                }
            }, r.prototype.drawPath = function () {
                this.context.beginPath(), this.config.isStraight ? this.line.drawPath(this.context) : this.curveArc.drawPath(this.context), this.context.closePath()
            }, r.prototype.onChangeEnd = function (n) {
                var f, e, u;
                this.shapeParameter.computeLineWidth = !1;
                var i = {x: this.config.translate.sx, y: this.config.translate.sy},
                    t = {x: this.config.translate.ex, y: this.config.translate.ey},
                    o = {x: this.config.translate.cx, y: this.config.translate.cy}, r = this.curveArc.curveHeight;
                this.config.translate.ex += n.mouseX - n.lastX, this.config.translate.ey += n.mouseY - n.lastY, t.x += n.mouseX - n.lastX, t.y += n.mouseY - n.lastY, f = (i.x + t.x) / 2, e = (i.y + t.y) / 2, (t.x - i.x <= 0 && t.y - i.y < 0 || t.x - i.x > 0 && t.y - i.y <= 0) && (r = -r), u = t.y - i.y == 0 ? {
                    x: f,
                    y: e + r
                } : pointMove(-(t.x - i.x) / (t.y - i.y), r, {
                    x: f,
                    y: e
                }), this.config.translate.cx = u.x, this.config.translate.cy = u.y, this.context.clearRect(0, 0, Player.PlayerCommon.getInstance().canvasWidth, Player.PlayerCommon.getInstance().canvasHeight), this.draw()
            }, r.prototype.sizeChange = function (n, t, i, r, u) {
                if (r != null && r != undefined && u != null && u != undefined) {
                    var f = Math.max(n, t);
                    this.shapeParameter.lineWidth *= 1 + f * 2, this.shapeParameter.lineDash[0] *= 1 + f * 2, this.shapeParameter.lineDash[1] *= 1 + f * 2
                }
            }, r.prototype.sizeChangeForGoto = function (n) {
                this.shapeParameter.lineWidth *= n / Player.PlayerCommon.getInstance().playCanvasCore.scale, this.shapeParameter.lineDash[0] *= n / Player.PlayerCommon.getInstance().playCanvasCore.scale, this.shapeParameter.lineDash[1] *= n / Player.PlayerCommon.getInstance().playCanvasCore.scale
            }, r.prototype.getAllPoints = function () {
                var t = this.config.rotate.z / 180 * Math.PI, f = new Common.List, u, d;
                f.add(new n.Point(this.config.translate.sx, this.config.translate.sy)), f.add(new n.Point(this.config.translate.ex, this.config.translate.ey)), f.add(new n.Point(this.config.translate.cx, this.config.translate.cy));
                var e = new Common.List, i = this.config.translate.cx, r = this.config.translate.cy,
                    b = this.config.translate.sx, w = this.config.translate.sy, p = this.config.translate.ex,
                    y = this.config.translate.ey, a = this.config.translate.cx, v = this.config.translate.cy,
                    k = -(w - r) * Math.sin(t) + (b - i) * Math.cos(t) + i,
                    l = (w - r) * Math.cos(t) + (b - i) * Math.sin(t) + r,
                    c = -(y - r) * Math.sin(t) + (p - i) * Math.cos(t) + i,
                    h = (y - r) * Math.cos(t) + (p - i) * Math.sin(t) + r,
                    s = -(v - r) * Math.sin(t) + (a - i) * Math.cos(t) + i,
                    o = (v - r) * Math.cos(t) + (a - i) * Math.sin(t) + r;
                return e.add(new n.Point(k, l)), e.add(new n.Point(c, h)), e.add(new n.Point(s, o)), u = new Common.List, u.add(this.context.transformedPoint2(k, l)), u.add(this.context.transformedPoint2(c, h)), u.add(this.context.transformedPoint2(s, o)), d = {
                    points: f,
                    truePoints: e,
                    viewTruePoints: u
                }
            }, r.prototype.getChildren = function () {
                return null
            }, r
        }(t.DtoShape);
        t.DtoDashLine = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (i) {
            function r(r, u, f, e, o) {
                i.call(this, r, u, f, e, o), this.curveArc = new t.DtoPartsCurveArc(new n.Point(this.config.translate.cx, this.config.translate.cy), new n.Point(this.config.translate.sx, this.config.translate.sy), new n.Point(this.config.translate.ex, this.config.translate.ey), this.shapeParameter.isAutiClockwise), this.line = new t.DtoPartsPolyline
            }

            return __extends(r, i), r.prototype.prepareStyle = function () {
                var t = Math.sqrt(Math.pow(this.config.translate.sx - this.config.translate.ex, 2) + Math.pow(this.config.translate.sy - this.config.translate.ey, 2)),
                    n;
                this.shapeParameter.computeLineWidth && (this.shapeParameter.lineWidth = t / this.shapeParameter.lineWidthScale / 2), n = this.context, n.fillStyle = Common.Util.makeRGBA(this.shapeParameter.fillStyle, this.shapeParameter.alpha), n.strokeStyle = Common.Util.makeRGBA(this.shapeParameter.strokeStyle, this.shapeParameter.alpha), n.lineWidth = this.shapeParameter.lineWidth / Player.PlayerCommon.getInstance().playCanvasCore.scale, n.lineCap = "round"
            }, r.prototype.setPro = function () {
                var i, t, r;
                this.curveArc.setPro(new n.Point(this.config.translate.cx, this.config.translate.cy), new n.Point(this.config.translate.sx, this.config.translate.sy), new n.Point(this.config.translate.ex, this.config.translate.ey)), i = new Common.List, i.add(new n.Point(this.config.translate.sx, this.config.translate.sy)), i.add(new n.Point(this.config.translate.ex, this.config.translate.ey)), this.line.points = i, this.curveArc.isAutiClockwise = this.shapeParameter.isAutiClockwise, t = new n.Point((this.config.translate.sx + this.config.translate.ex) / 2, (this.config.translate.sy + this.config.translate.ey) / 2), r = Math.sqrt(Math.pow(this.config.translate.cx - t.x, 2) + Math.pow(this.config.translate.cy - t.y, 2)), this.config.isStraight && r <= 1 / Player.PlayerCommon.getInstance().playCanvasCore.scale || r <= 0 ? (this.config.translate.cx = t.x, this.config.translate.cy = t.y, this.config.isStraight = !0) : this.config.isStraight = !1
            }, r.prototype.rotate = function () {
                if (this.config.rotate.z = this.config.rotate.z % 360, this.config.rotate.z != 0) {
                    var n = this.config.translate.cx, t = this.config.translate.cy;
                    this.context.translate(n, t), this.context.rotate(this.config.rotate.z), this.context.translate(-n, -t)
                }
            }, r.prototype.drawPath = function () {
                this.context.beginPath(), this.config.isStraight ? this.line.drawPath(this.context) : this.curveArc.drawPath(this.context), this.context.closePath()
            }, r.prototype.onChangeEnd = function (n) {
                var f, e, u;
                this.shapeParameter.computeLineWidth = !1;
                var i = {x: this.config.translate.sx, y: this.config.translate.sy},
                    t = {x: this.config.translate.ex, y: this.config.translate.ey},
                    o = {x: this.config.translate.cx, y: this.config.translate.cy}, r = this.curveArc.curveHeight;
                this.config.translate.ex += n.mouseX - n.lastX, this.config.translate.ey += n.mouseY - n.lastY, t.x += n.mouseX - n.lastX, t.y += n.mouseY - n.lastY, f = (i.x + t.x) / 2, e = (i.y + t.y) / 2, (t.x - i.x <= 0 && t.y - i.y < 0 || t.x - i.x > 0 && t.y - i.y <= 0) && (r = -r), u = t.y - i.y == 0 ? {
                    x: f,
                    y: e + r
                } : pointMove(-(t.x - i.x) / (t.y - i.y), r, {
                    x: f,
                    y: e
                }), this.config.translate.cx = u.x, this.config.translate.cy = u.y, this.context.clearRect(0, 0, Player.PlayerCommon.getInstance().canvasWidth, Player.PlayerCommon.getInstance().canvasHeight), this.draw()
            }, r.prototype.sizeChange = function (n, t, i, r, u) {
                if (r != null && r != undefined && u != null && u != undefined) {
                    var f = Math.max(n, t);
                    this.shapeParameter.lineWidth *= 1 + f * 2
                }
            }, r.prototype.sizeChangeForGoto = function (n) {
                this.shapeParameter.lineWidth *= n / Player.PlayerCommon.getInstance().playCanvasCore.scale
            }, r.prototype.getAllPoints = function () {
                var t = this.config.rotate.z / 180 * Math.PI, f = new Common.List, u, d;
                f.add(new n.Point(this.config.translate.sx, this.config.translate.sy)), f.add(new n.Point(this.config.translate.ex, this.config.translate.ey)), f.add(new n.Point(this.config.translate.cx, this.config.translate.cy));
                var e = new Common.List, i = this.config.translate.cx, r = this.config.translate.cy,
                    b = this.config.translate.sx, w = this.config.translate.sy, p = this.config.translate.ex,
                    y = this.config.translate.ey, a = this.config.translate.cx, v = this.config.translate.cy,
                    k = -(w - r) * Math.sin(t) + (b - i) * Math.cos(t) + i,
                    l = (w - r) * Math.cos(t) + (b - i) * Math.sin(t) + r,
                    c = -(y - r) * Math.sin(t) + (p - i) * Math.cos(t) + i,
                    h = (y - r) * Math.cos(t) + (p - i) * Math.sin(t) + r,
                    s = -(v - r) * Math.sin(t) + (a - i) * Math.cos(t) + i,
                    o = (v - r) * Math.cos(t) + (a - i) * Math.sin(t) + r;
                return e.add(new n.Point(k, l)), e.add(new n.Point(c, h)), e.add(new n.Point(s, o)), u = new Common.List, u.add(this.context.transformedPoint2(k, l)), u.add(this.context.transformedPoint2(c, h)), u.add(this.context.transformedPoint2(s, o)), d = {
                    points: f,
                    truePoints: e,
                    viewTruePoints: u
                }
            }, r.prototype.getChildren = function () {
                return null
            }, r
        }(t.DtoShape);
        t.DtoLine = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), function (n) {
    var t;
    (function (t) {
        var i = function () {
            function t(n, i, r, u) {
                this.controlPoint = n, this.startPoint = i, this.endPoint = r, this.centerPoint = this.GetCenter(), this.isAutiClockwise = u, this.curveHeight = 0, this.centerPoint && (this.radius = this.getRadius(), this.startAng = t.computeAng(this.centerPoint.x, this.centerPoint.y, this.startPoint.x, this.startPoint.y), this.endAng = t.computeAng(this.centerPoint.x, this.centerPoint.y, this.endPoint.x, this.endPoint.y))
            }

            return t.prototype.setPro = function (n, i, r) {
                this.controlPoint = n, this.startPoint = i, this.endPoint = r, this.centerPoint = this.GetCenter(), this.centerPoint && (this.radius = this.getRadius(), this.startAng = t.computeAng(this.centerPoint.x, this.centerPoint.y, this.startPoint.x, this.startPoint.y), this.endAng = t.computeAng(this.centerPoint.x, this.centerPoint.y, this.endPoint.x, this.endPoint.y))
            }, t.prototype.drawPath = function (n) {
                this.centerPoint && (n.arc(this.centerPoint.x, this.centerPoint.y, this.radius, this.startAng, this.endAng, this.isAutiClockwise), n.stroke())
            }, t.prototype.getRadius = function () {
                return Math.sqrt(Math.pow(this.centerPoint.x - this.startPoint.x, 2) + Math.pow(this.centerPoint.y - this.startPoint.y, 2))
            }, t.prototype.GetCenter = function () {
                var o = this.startPoint, t = this.controlPoint, r = this.endPoint,
                    u = new n.Point((o.x + t.x) / 2, (o.y + t.y) / 2),
                    s = new n.Point((t.x + r.x) / 2, (t.y + r.y) / 2), i = new n.Point(0, 0), f, e;
                if (t.y - o.y == 0) {
                    if (r.y - t.y == 0) return null;
                    e = -1 * (r.x - t.x) / (r.y - t.y), i.x = u.x, i.y = e * (i.x - s.x) + s.y
                } else if (f = -1 * (t.x - o.x) / (t.y - o.y), r.y - t.y == 0) i.x = s.x, i.y = f * (i.x - u.x) + u.y; else {
                    if (e = -1 * (r.x - t.x) / (r.y - t.y), f == e) return null;
                    i.x = (s.y - u.y + f * u.x - e * s.x) / (f - e), i.y = f * (i.x - u.x) + u.y
                }
                return i
            }, t.computeAng = function (n, t, i, r) {
                var u = (n - i) / (t - r);
                return (u = Math.atan(u), n == i && r > t) ? .5 * Math.PI : n == i && r < t ? 1.5 * Math.PI : t == r && i > n ? 0 : t == r && i < n ? Math.PI : i > n && r > t ? Math.PI / 2 - u : i < n && r > t ? Math.PI / 2 - u : i < n && r < t || i > n && r < t ? 3 * Math.PI / 2 - u : void 0
            }, t.prototype.computeLength = function () {
                return this.isAutiClockwise ? (2 * Math.PI - (this.endAng - this.startAng)) * this.radius : Math.abs(this.endAng - this.startAng) * this.radius
            }, t
        }();
        t.DtoPartsCurveArc = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n() {
            }

            return n.prototype.drawPath = function (n) {
                var i, t, r;
                if (this.points) {
                    for (i = this.points.get(0), n.moveTo(i.x, i.y), t = 1; t < this.points.length(); t++) r = this.points.get(t), n.lineTo(r.x, r.y);
                    n.stroke()
                }
            }, n
        }();
        n.DtoPartsPolyline = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n(n, t, i, r) {
                this.centerPoint = n, this.nPoints = t, this.outerRadius = i, this.innerRadius = r
            }

            return n.prototype.drawPath = function (n) {
                for (var i, r, t = 0; t <= 2 * this.nPoints; ++t) i = t * Math.PI / this.nPoints - Math.PI / 2, r = t % 2 == 0 ? this.outerRadius : this.innerRadius, n.lineTo(this.centerPoint.x + r * Math.cos(i), this.centerPoint.y + r * Math.sin(i))
            }, n
        }();
        n.DtoPartsStar = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), function (n) {
    var t;
    (function (t) {
        var i = function () {
            function t(n, t, i, r) {
                this.centerPoint = n, this.nPoints = t, this.radius = i, this.startAngle = r
            }

            return t.prototype.drawPath = function (t) {
                for (var r, u, i = 0; i <= this.nPoints; ++i) r = i * 2 * Math.PI / this.nPoints - this.startAngle, u = new n.Point(this.centerPoint.x + this.radius * Math.cos(r), this.centerPoint.y + this.radius * Math.sin(r)), t.lineTo(u.x, u.y)
            }, t
        }();
        t.DtoPolygon = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (n) {
        var t = function (n) {
            function t() {
                n.apply(this, arguments)
            }

            return __extends(t, n), t.prototype.drawPath = function () {
                this.context.beginPath(), this.context.rect(this.config.translate.x, this.config.translate.y, this.config.width, this.config.height), this.shapeParameter.isFill && this.context.fill(), this.shapeParameter.isStroke && this.context.stroke(), this.context.closePath()
            }, t
        }(n.DtoShape);
        n.DtoRectangle = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (i) {
            function r(r, u, f, e, o) {
                i.call(this, r, u, f, e, o), this.polygon = new t.DtoPolygon(new n.Point(this.config.translate.sx, this.config.translate.sy), 6, this.config.width / 2, 0)
            }

            return __extends(r, i), r.prototype.setPro = function () {
                this.polygon.radius = this.config.width / 2, this.polygon.centerPoint.setXY(this.config.translate.sx, this.config.translate.sy)
            }, r.prototype.drawPath = function () {
                this.context.beginPath(), this.polygon.drawPath(this.context), this.context.closePath(), this.shapeParameter.isStroke && this.context.stroke(), this.shapeParameter.isFill && this.context.fill()
            }, r.prototype.sizeChangeExtend = function (n, t, i) {
                i == Common.DirectionType.right && (this.config.translate.sx += n / 2, this.config.translate.y -= n / 2, this.config.height += n), i == Common.DirectionType.left && (this.config.translate.sx -= n / 2, this.config.translate.y -= n / 2, this.config.height += n), i == Common.DirectionType.top && (this.config.translate.sy -= t / 2, this.config.translate.x -= t / 2, this.config.width += t), i == Common.DirectionType.bottom && (this.config.translate.sy += t / 2, this.config.translate.x -= t / 2, this.config.width += t)
            }, r
        }(t.DtoShape);
        t.DtoSexangle = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (i) {
            function r(n, r, u, f, e) {
                i.call(this, n, r, u, f, e), this.polylineLeft = new t.DtoPartsPolyline, this.polylineRight = new t.DtoPartsPolyline
            }

            return __extends(r, i), r.prototype.setPro = function () {
                var i = new Common.List, t;
                i.add(new n.Point(this.config.translate.x + this.config.width / 7, this.config.translate.y)), i.add(new n.Point(this.config.translate.x, this.config.translate.y)), i.add(new n.Point(this.config.translate.x, this.config.translate.y + this.config.height)), i.add(new n.Point(this.config.translate.x + this.config.width / 7, this.config.translate.y + this.config.height)), this.polylineLeft.points = i, t = new Common.List, t.add(new n.Point(this.config.translate.x + this.config.width * 6 / 7, this.config.translate.y)), t.add(new n.Point(this.config.translate.x + this.config.width, this.config.translate.y)), t.add(new n.Point(this.config.translate.x + this.config.width, this.config.translate.y + this.config.height)), t.add(new n.Point(this.config.translate.x + this.config.width * 6 / 7, this.config.translate.y + this.config.height)), this.polylineRight.points = t
            }, r.prototype.drawPath = function () {
                this.context.beginPath(), this.context.canvas.id == "hitCanvas" ? this.context.rect(this.config.translate.x, this.config.translate.y, this.config.width, this.config.height) : (this.polylineLeft.drawPath(this.context), this.polylineRight.drawPath(this.context)), this.shapeParameter.isFill && this.context.fill(), this.shapeParameter.isStroke && this.context.stroke(), this.context.closePath()
            }, r
        }(t.DtoShape);
        t.DtoSquareBrackets = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (i) {
            function r(r, u, f, e, o) {
                i.call(this, r, u, f, e, o), this.star = new t.DtoPartsStar(new n.Point(this.config.translate.sx, this.config.translate.sy), 5, this.config.width / 2, this.config.width / 4)
            }

            return __extends(r, i), r.prototype.setPro = function () {
                this.star.centerPoint.setXY(this.config.translate.sx, this.config.translate.sy), this.star.outerRadius = this.config.width / 2, this.star.innerRadius = this.config.width / 2 * .38
            }, r.prototype.drawPath = function () {
                this.context.beginPath(), this.star.drawPath(this.context), this.context.closePath(), this.shapeParameter.isStroke && this.context.stroke(), this.shapeParameter.isFill && this.context.fill()
            }, r.prototype.sizeChangeExtend = function (n, t, i) {
                i == Common.DirectionType.right && (this.config.translate.sx += n / 2, this.config.translate.y -= n / 2, this.config.height += n), i == Common.DirectionType.left && (this.config.translate.sx -= n / 2, this.config.translate.y -= n / 2, this.config.height += n), i == Common.DirectionType.top && (this.config.translate.sy -= t / 2, this.config.translate.x -= t / 2, this.config.width += t), i == Common.DirectionType.bottom && (this.config.translate.sy += t / 2, this.config.translate.x -= t / 2, this.config.width += t)
            }, r
        }(t.DtoShape);
        t.DtoStar = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (i) {
            function r(r, u, f, e, o) {
                i.call(this, r, u, f, e, o), this.startPoint = new n.Point(this.config.translate.sx, this.config.translate.sy), this.endPoint = new n.Point(this.config.translate.ex, this.config.translate.ey), this.line = new t.DtoPartsPolyline, this.arrowHead = new t.DtoArrowHead(1.5 * Math.PI, !0, this.endPoint, this.shapeParameter.lineWidth * 2)
            }

            return __extends(r, i), r.prototype.prepareStyle = function () {
                var t = Math.sqrt(Math.pow(this.startPoint.x - this.endPoint.x, 2) + Math.pow(this.startPoint.y - this.endPoint.y, 2)),
                    n;
                this.shapeParameter.computeLineWidth && (this.shapeParameter.lineWidth = t / 10), n = this.context, n.fillStyle = this.shapeParameter.fillStyle, n.strokeStyle = this.shapeParameter.strokeStyle, n.lineWidth = this.shapeParameter.lineWidth
            }, r.prototype.setPro = function () {
                var n, i;
                this.shapeParameter.lineWidth = Math.max(this.config.width, this.config.height) / 5, this.startPoint.setXY(this.config.translate.sx, this.config.translate.sy), this.endPoint.setXY(this.config.translate.ex, this.config.translate.ey), n = new Common.List, n.add(this.startPoint), n.add(this.endPoint), this.line.points = n, this.arrowHead.triangleSide = this.shapeParameter.lineWidth * 1.5, i = t.DtoPartsCurveArc.computeAng(this.startPoint.x, this.startPoint.y, this.endPoint.x, this.endPoint.y), this.arrowHead.centerAngle = 1.5 * Math.PI + i
            }, r.prototype.drawPath = function () {
                this.context.beginPath(), this.line.drawPath(this.context), this.arrowHead.drawPath(this.context), this.context.closePath()
            }, r
        }(t.DtoShape);
        t.DtoStraightArrow = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (t) {
            function i(n, i, r, u, f, e, o, s, h, c, l, a, v) {
                t.call(this, n, i, r, u), this.isModifyFont = !1, this.charCodeNum = 256, this.text = l, this.textLines = f, this.styles = c, this.fontSize = o, this.minSize = this.getMinFontSize(), this.maxSize = this.getMaxFontSize(), this.fontWeight = "normal", this.textDecoration = "", this.fontStyle = "", this.fill = e, this.fontSizeFraction = .25, this.fontSizeMult = s, this.textAlign = h, this.lineHeight = 1.16, this.lineWidths = {}, this.lineHeights = {}, this.changeScale = 1, this.isModifyFont = a, this.isVertical = v
            }

            return __extends(i, t), i.prototype.draw = function () {
                this.context.save(), t.prototype.draw.call(this), this.rotate(), this.drawText(), this.context.restore()
            }, i.prototype.drawText = function () {
                this.clearCache();
                var n = this.textLines;
                this.isVertical ? this.renderTextV(n) : DBK.isNativePlay() ? this.renderText2(n) : this.renderText(n)
            }, i.prototype.renderText = function (n) {
                var r = 0, u, f, t, e, i;
                for (this.beforeRender(), u = this.getLeftOffset(), f = this.getTopOffset(), t = 0, e = n.length; t < e; t++) i = this.getLineHeight(t), this.renderTextLine(this.context, n[t], u, f + r / this.changeScale, t, i), r += i;
                this.afterRender()
            }, i.prototype.renderText2 = function (n) {
                var r = 0, u, f, t, e, i;
                for (this.beforeRender(), u = this.getLeftOffset(), f = this.getTopOffset(), t = 0, e = n.length; t < e; t++) i = this.getLineHeight(t), this.renderTextLine2(this.context, n[t], u + this.getLineLeftOffset(t), f + r / this.changeScale, t, i), r += i;
                this.afterRender()
            }, i.prototype.renderTextV = function (n) {
                var r = 0, t, i;
                this.beforeRender();
                var u = this.getLeftOffset(), f = this.getTopOffset(), e = this.getHeightOfChar(0) * 1.13;
                for (t = n.length - 1; t >= 0; t--) i = this.getWidthOfLine(t), this.renderTextLineV(this.context, n[t], u + r, f, t, e, i), r += i / this.changeScale;
                this.afterRender()
            }, i.prototype.renderTextLine = function (n, t, i, r, u, f) {
                r += f / this.lineHeight * (1 - this.fontSizeFraction) / this.changeScale + this.fontSize / this.changeScale * .03, t = this.trimSpaceAndNewLine(t), this.renderChars(n, t, i, r, u, f)
            }, i.prototype.trimEndLF = function (n) {
                return n.endsWith("\n") ? {str: n.slice(0, -1), trimmed: !0} : {str: n, trimmed: !1}
            }, i.prototype.renderTextLine2 = function (n, t, i, r, u, f) {
                r += f / this.lineHeight * (1 - this.fontSizeFraction) / this.changeScale + this.fontSize / this.changeScale * .03;
                var s = this.renderCache[u], h = this.trimEndLF(t).str, e, y = s.length, c = 0;
                for (s.forEach(function (n) {
                    n.style.fontSize > c && (c = n.style.fontSize)
                }), e = 0; e < y; e++) {
                    var l = s[e], o = l.style, a = l.width / this.changeScale, v = l.charLength;
                    n.fillStyle = o.fill || "#000000", n.font = this.getFontDeclaration.call(o, this), n.fillText(h.slice(0, v), i, r), this.renderCharDecoration(n, o, i, r, 0, a, o.fontSize, c), h = h.slice(v), i += a
                }
            }, i.prototype.renderTextLineV = function (n, t, i, r, u, f, e) {
                r += f * (1 - this.fontSizeFraction) / this.changeScale + this.fontSize / this.changeScale * .03, t = this.trimSpaceAndNewLine(t), this.renderCharsV(n, t, i, r, u, e, f)
            }, i.prototype.renderChars = function (n, t, i, r, u, f) {
                var s = t.split(""), h = 0, l, c, e, o;
                for (i += this.getLineLeftOffset(u), e = 0, o = s.length; e < o; e++) l = this.getStyleIndex(u, e), c = this.getHeightOfChar(l), c > h && (h = c);
                for (e = 0, o = s.length; e < o; e++) i = this.renderChar(n, u, e, s[e], i, r, f, h)
            }, i.prototype.renderCharsV = function (n, t, i, r, u, f, e) {
                var s = t.split(""), c = 0, l, a, o, h;
                for (r += this.getLineTopOffset(u), o = 0, h = s.length; o < h; o++) r = this.renderCharV(n, u, o, s[o], i, r, f, e)
            }, i.prototype.renderChar = function (n, t, i, r, u, f, e, o) {
                var h, c, s = this.getStyleIndex(t, i), l = this.fontSizeFraction * e / this.lineHeight,
                    a = this.styles[s] ? Common.Util.clone(this.styles[s]) : {};
                return h = this.applyCharStylesGetWidth(n, r, s), c = this.getHeightOfChar(s), this.customFillText(n, u, f, r, s), this.renderCharDecoration(n, a, u, f, l, h, c, o), u + h
            }, i.prototype.renderCharV = function (t, i, r, u, f, e, o, s) {
                var c, h, l = this.getStyleIndex(i, r), y = this.styles[l] ? Common.Util.clone(this.styles[l]) : {}, v,
                    a;
                return u.charCodeAt(0) < this.charCodeNum ? (h = this.applyCharStylesGetWidth(t, u, l), c = this.getHeightOfChar(l), a = e + (h * this.changeScale - s / 1.13) * (1.13 - this.fontSizeFraction - .03) / this.changeScale, v = new n.Point(f + o / 2 / this.changeScale, a - (c / 2 - h / 2)), t.save(), t.translate(v.x, v.y), t.rotate(90), t.translate(-v.x, -v.y), this.customFillText(t, f + o / 2 / this.changeScale + (c / 2 - h / 2) - h * (1.13 - this.fontSizeFraction - .03), a - (c / 2 - h / 2) + c / 4 / this.changeScale, u, l), t.restore(), this.renderCharDecorationV(t, y, f, e, c, h, o, s, !0), e + h) : (c = this.applyCharStylesGetWidth(t, u, l), this.minSize < 12 ? c = y.width : this.maxSize > 1e3 && (c = y.width), h = this.getHeightOfChar(l), a = e + (h - s / 1.13) * (1.13 - this.fontSizeFraction - .03) / this.changeScale, this.customFillText(t, f + o / 2 / this.changeScale - c / 2, a, u, l), this.renderCharDecorationV(t, y, f, e, c, h, o, s, !1), e + h / this.changeScale)
            }, i.prototype.renderCharDecoration = function (n, t, i, r, u, f, e, o) {
                var s = t ? t.textDecoration : this.textDecoration;
                s && (e /= this.changeScale, o /= this.changeScale, s.indexOf("underline") > -1 && n.fillRect(i, r + o / 10, f, o / 15), s.indexOf("line-through") > -1 && n.fillRect(i, r - e * .38 + e / 15, f, e / 15))
            }, i.prototype.renderCharDecorationV = function (n, t, i, r, u, f, e, o, s) {
                var h = t ? t.textDecoration : this.textDecoration;
                h && (u /= this.changeScale, e /= this.changeScale, r -= o * (1 - this.fontSizeFraction) / this.changeScale + this.fontSize / this.changeScale * .03, h.indexOf("underline") > -1 && n.fillRect(i + (e - e / this.fontSizeMult) / 2, r, e / 15 / this.fontSizeMult / (this.fontSizeMult / 1.13), f / (s ? 1 : this.changeScale)), h.indexOf("line-through") > -1 && n.fillRect(i + e / 2 - e / 30, r, e / 15 / this.fontSizeMult / (this.fontSizeMult / 1.13), f / (s ? 1 : this.changeScale)))
            }, i.prototype.getLineWidth = function (n) {
                for (var f = this.textLines[n], i = 0, r, u = f ? this.trimSpaceAndNewLine(this.textLines[n]) : "", t = 0; t < u.length; t++) r = this.getStyleIndex(n, t), i += this.applyCharStylesGetWidth(this.context, u[t], r);
                return this.lineWidths[n] = i
            }, i.prototype.getWidthOfLine = function (n) {
                var t, e;
                if (this.lineWidths[n]) return this.lineWidths[n];
                var o = this.textLines[n], r = o.split(""), u, f = this.fontSize * this.fontSizeMult, i;
                for (t = 0, e = r.length; t < e; t++) u = this.getStyleIndex(n, t), i = r[t].charCodeAt(0) < this.charCodeNum ? this.getHeightOfChar(u) : this.applyCharStylesGetWidth(this.context, r[t], u), i > f && (f = i);
                return this.lineWidths[n] = f * this.fontSizeMult
            }, i.prototype.getLineHeight = function (n) {
                var t, f;
                if (this.lineHeights[n]) return this.lineHeights[n];
                var e = this.textLines[n], o = e.split(""), i = this.getStyleIndex(n, 0), r = this.getHeightOfChar(i),
                    u;
                for (t = 1, f = o.length; t < f; t++) i = this.getStyleIndex(n, t), u = this.getHeightOfChar(i), u > r && (r = u);
                return this.lineHeights[n] = r * this.lineHeight * this.fontSizeMult
            }, i.prototype.getHeightOfLine = function (n, t) {
                var r;
                if (this.lineHeights[n]) return this.lineHeights[n];
                var o = this.textLines[n], u = 0, i, f, e = o ? this.trimSpaceAndNewLine(this.textLines[n]) : "";
                for (r = 0; r < e.length; r++) i = this.getStyleIndex(n, r), e.charCodeAt(r) < this.charCodeNum ? (f = this.applyCharStylesGetWidth(this.context, e[r], i), this.changeScale != 1 && (this.styles[i].fontSize < 12 || this.styles[i].fontSize > 1e3) && (f *= this.styles[i].fontSize < 12 ? this.styles[i].fontSize / 12 : this.styles[i].fontSize / 60), u += f) : u += this.getHeightOfChar(i);
                return !t && (this.lineHeights[n] = u), u
            }, i.prototype.trimSpaceAndNewLine = function (n) {
                return n.substring(n.length - 1, n.length) === " " ? n = n.substring(0, n.length - 1) : n.substring(n.length - 1, n.length) === "\n" && (n = n.substring(0, n.length - 1)), n
            }, i.prototype.getStyleIndex = function (n, t) {
                for (var f = this.textLines, r = t, u, i = 0; i < n; i++) u = f[i], r += u.length;
                return r
            }, i.prototype.clearCache = function () {
                this.lineWidths = {}, this.lineHeights = {}
            }, i.prototype.getLineLeftOffset = function (n) {
                var t = this.getLineWidth(n);
                return this.textAlign === "center" ? (this.config.width - t) / 2 - this.fontSize / 8 / this.changeScale : this.textAlign === "right" ? this.config.width - t - this.fontSize / 4 / this.changeScale : 0
            }, i.prototype.getLineTopOffset = function (n) {
                var t = this.getHeightOfLine(n);
                return this.textAlign === "center" ? (this.config.height - t / this.changeScale) / 2 - this.fontSize / 8 / this.changeScale : this.textAlign === "right" ? this.config.height - t / this.changeScale - this.fontSize / 4 / this.changeScale : 0
            }, i.prototype.getTopOffset = function () {
                return this.config.translate.y + this.fontSize / 8 / this.changeScale
            }, i.prototype.getLeftOffset = function () {
                return this.config.translate.x + this.fontSize / 8 / this.changeScale
            }, i.prototype.beforeRender = function () {
                (this.minSize < 12 || this.maxSize > 1e3) && (this.changeScale = this.minSize < 12 ? this.minSize / 12 : this.maxSize / 60, this.config.width /= this.changeScale, this.config.height /= this.changeScale, this.config.translate.x /= this.changeScale, this.config.translate.y /= this.changeScale, this.context.scale(this.changeScale, this.changeScale))
            }, i.prototype.afterRender = function () {
                if ((this.minSize < 12 || this.maxSize > 1e3) && this.changeScale != 1) {
                    var n = 1 / this.changeScale;
                    this.context.scale(n, n), this.config.width /= n, this.config.height /= n, this.config.translate.x /= n, this.config.translate.y /= n, this.changeScale = 1
                }
            }, i.prototype.getMinFontSize = function () {
                var t = this.fontSize, n;
                for (n in this.styles) this.styles[n] && this.styles[n].fontSize && this.styles[n].fontSize < t && (t = this.styles[n].fontSize);
                return t
            }, i.prototype.getMaxFontSize = function () {
                var t = this.fontSize, n;
                for (n in this.styles) this.styles[n] && this.styles[n].fontSize && this.styles[n].fontSize > t && (t = this.styles[n].fontSize);
                return t
            }, i.prototype.applyFontStyles = function (n) {
                n.fontFamily || (n.fontFamily = this.fontFamily), n.fontSize || (n.fontSize = this.fontSize), n.fontWeight || (n.fontWeight = this.fontWeight), n.fontStyle || (n.fontStyle = this.fontStyle)
            }, i.prototype.customFillText = function (n, t, i, r, u) {
                var o = r.split(""), s = o.length - 1, e = u - s, h = 0, f;
                if (!this.styles[e] || !this.styles[e].width) {
                    n.fillText(r, t, i);
                    return
                }
                for (f = 0; f <= s; f++) n.fillText(o[f], parseFloat(t) + h, i), h += parseFloat(this.styles[e + f].width)
            }, i.prototype.applyCharStylesGetWidth = function (n, t, i) {
                var u = this.styles[i] ? Common.Util.clone(this.styles[i]) : {}, r;
                if (this.applyFontStyles(u), n.fillStyle = u.fill || this.fill, n.font = this.getFontDeclaration.call(u, this), r = 0, this.styles[i] && this.styles[i].width) {
                    if (r = parseFloat(this.styles[i].width), this.isModifyFont && this.minSize < 12) {
                        var f = this.fontSize / 12, e = this.changeScale, o = u.fontSize / f, s = u.fontSize / e;
                        r = r * s / o
                    }
                    this.maxSize > 1e3 && !this.isVertical && t.charCodeAt(0) >= this.charCodeNum && (r = u.fontSize / this.changeScale), this.minSize < 12 && this.isVertical && t.charCodeAt(0) >= this.charCodeNum && (r = u.fontSize), this.minSize > 1e3 && this.isVertical && t.charCodeAt(0) >= this.charCodeNum && (r = u.fontSize)
                } else r = n.measureText(t).width;
                return r
            }, i.prototype.getHeightOfChar = function (n) {
                var t = this.fontSize;
                return this.styles[n] && (t = this.styles[n].fontSize || this.fontSize), t
            }, i.prototype.getFontDeclaration = function (n) {
                return [this.fontStyle, this.fontWeight, this.fontSize / n.changeScale + "px", this.fontFamily].join(" ")
            }, i.prototype.getChildren = function () {
                return null
            }, i.prototype.applyCharStylesGetWidth2 = function (n, t, i) {
                var r = this.styles[i] ? Common.Util.clone(this.styles[i]) : {}, u;
                return this.applyFontStyles(r), n.fillStyle = r.fill || this.fill, n.font = this.getFontDeclaration.call(r, this), u = n.measureText(t).width, (r.fontSize < 12 || r.fontSize > 1e3) && this.changeScale == 1 && (u *= r.fontSize < 12 ? r.fontSize / 12 : r.fontSize / 60), u
            }, i.prototype.stylesEqu = function (n, t) {
                var i = clone(n, undefined, undefined, undefined), r = clone(t, undefined, undefined, undefined),
                    f = ["fill", "fontFamily", "fontSize", "fontStyle", "fontWeight", "textDecoration"], u;
                return i.fill = i.fill || "#000000", r.fill = r.fill || "#000000", u = !0, u = f.every(function (n) {
                    return i[n] === undefined && (i[n] = ""), r[n] === undefined && (r[n] = ""), i[n] === r[n]
                })
            }, i.prototype.updateRenderCache = function (n) {
                var u, s, v, t, h, f, e;
                n = n || this.context;
                var y = this.styles, r = 0, w = this.text.length, a = this.textLines, l, o = [], c = [], b = {},
                    i = null, p = this;
                for (u = 0; u < a.length; u++) {
                    for (s = this.trimEndLF(a[u]), l = s.str, v = l.length, t = {
                        style: null,
                        charLength: 0,
                        width: 0
                    }, i = null, o = [], h = 0; h < v; h++) f = p.applyCharStylesGetWidth2(n, this.text[r], r), i == null ? (i = y[r++], o.push(t), t.style = i, t.charLength = 1, t.width = f) : (e = y[r++], this.stylesEqu(i, e) ? (t.charLength++, t.width += f) : (t = {
                        style: e,
                        charLength: 1,
                        width: f
                    }, o.push(t), i = e));
                    s.trimmed && r++, c.push(o)
                }
                this.renderCache = c
            }, i
        }(t.DtoCommonElement);
        t.DtoText = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (i) {
            function r(r, u, f, e, o) {
                i.call(this, r, u, f, e, o), this.polygon = new t.DtoPolygon(new n.Point(this.config.translate.sx, this.config.translate.sy), 3, this.config.width / 2, 1 / 2 * Math.PI)
            }

            return __extends(r, i), r.prototype.setPro = function () {
                this.polygon.radius = this.config.width / 2, this.polygon.centerPoint.setXY(this.config.translate.sx, this.config.translate.sy)
            }, r.prototype.drawPath = function () {
                this.context.beginPath(), this.polygon.drawPath(this.context), this.context.closePath(), this.shapeParameter.isStroke && this.context.stroke(), this.shapeParameter.isFill && this.context.fill()
            }, r.prototype.getCenterCoordinate = function () {
                var i = 0, t = Player.PlayerCommon.getInstance().playCanvasCore.scale,
                    r = this.shapeParameter.lineWidth, u;
                return this.shapeParameter.lineWidth == 2 && (r = Math.min(this.config.width * t, this.config.height * t) / this.shapeParameter.lineWidthScale), this.shapeParameter.isStroke && (i = r * (Math.sqrt(2) - 1) / 2 / t), u = new n.Point(this.config.translate.x + this.config.width / 2, this.config.translate.y + this.config.height / 2 - i)
            }, r.prototype.sizeChangeExtend = function (n, t, i) {
                i == Common.DirectionType.right && (this.config.translate.sx += n / 2, this.config.translate.y -= n / 2, this.config.height += n), i == Common.DirectionType.left && (this.config.translate.sx -= n / 2, this.config.translate.y -= n / 2, this.config.height += n), i == Common.DirectionType.top && (this.config.translate.sy -= t / 2, this.config.translate.x -= t / 2, this.config.width += t), i == Common.DirectionType.bottom && (this.config.translate.sy += t / 2, this.config.translate.x -= t / 2, this.config.width += t)
            }, r
        }(t.DtoShape);
        t.DtoTriangle = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), __extends = this && this.__extends || function (n, t) {
    function r() {
        this.constructor = n
    }

    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}, function (n) {
    var t;
    (function (t) {
        var i = function (t) {
            function i(n, i, r, u, f) {
                r.type = "video", t.call(this, n, i, r, u), this.frameCounter = 0, this.isPause = !1, this.src = f, this.element = document.createElement("video"), this.element.loop = !1, this.element.id = n, this.context && this.initControl()
            }

            return __extends(i, t), i.prototype.initControl = function () {
                var t = this, f = this.config.width, e = 20, i = new n.Translate,
                    r = this.context.transformedPoint2(this.config.translate.x, this.config.translate.y + this.config.height - 21 / initScale),
                    u;
                i.x = r.x, i.y = r.y, u = new n.Rotate(0, 0, 0), this.control = new n.VideoControl("videoControl" + t.colorKey, new n.Config(f, e, i, u, 4, 1, "")), this.addControlToCanvas(), this.control.hide(), this.element.ontimeupdate = function () {
                    t.element.currentTime >= t.element.duration && t.pause(), t.element.paused || t.control.update(t.element.currentTime, t.element.duration)
                }, this.control.muteBtn.onclick = function () {
                    t.element.muted ? (t.element.muted = !1, t.control.muteBtn.classList.remove("icon-disabledvoice"), t.control.muteBtn.classList.add("icon-voice")) : (t.element.muted = !0, t.control.muteBtn.classList.add("icon-disabledvoice"), t.control.muteBtn.classList.remove("icon-voice"))
                }, this.control.progressBar.onclick = function (n) {
                    t.updateView(n.offsetX, function (n) {
                        var i = Player.PlayerCommon.getInstance().playCanvasCore.getCommonElByKey(t.colorKey);
                        i.element.currentTime = n
                    })
                }, this.control.playBtn.onclick = function () {
                    t.element.paused ? (t.isPause = !1, t.element && t.element.play(), t.control.playBtn.classList.remove("icon-pause"), t.control.playBtn.classList.add("icon-thinpaused"), Player.PlayerCommon.getInstance().playCanvasCore.isRunVideoOrGif = !0) : t.pause()
                }
            }, i.prototype.addControlToCanvas = function () {
                Player.PlayerCommon.getInstance().canvasContainer.appendChild(this.control.element)
            }, i.prototype.removeControlFromCanvas = function () {
                delete Player.PlayerCommon.getInstance().canvasContainer.removeChild(this.control.element)
            }, i.prototype.play = function () {
                !this.isPause && this.isDraw && this.effectGlobalAlpha >= 1 ? (this.element && this.element.play(), this.control.playBtn.classList.remove("icon-pause"), this.control.playBtn.classList.add("icon-thinpaused")) : (this.isDraw == !1 || this.effectGlobalAlpha <= 1e-6) && this.pause()
            }, i.prototype.pause = function () {
                this.isPause = !0, this.element && this.element.pause(), this.control.playBtn.classList.add("icon-pause"), this.control.playBtn.classList.remove("icon-thinpaused")
            }, i.prototype.showControl = function () {
                this.control.show()
            }, i.prototype.hideControl = function () {
                this.control.hide()
            }, i.prototype.updateView = function (n, t) {
                var r = this.control.progressBar, u = n, i = 100 * u / r.clientWidth;
                i > 100 && (i = 100), i < 0 && (i = 0), this.control.line.style.width = i + "%", this.element.currentTime = this.element.duration * i / 100, t(this.element.currentTime)
            }, i.prototype.draw = function () {
                !this.element || this.config.width < 20 / Player.PlayerCommon.getInstance().playCanvasCore.scale && this.config.height < 20 / Player.PlayerCommon.getInstance().playCanvasCore.scale || (!this.element.src && (this.element.src = this.src), this.play(), this.context.save(), t.prototype.draw.call(this), this.rotate(), this.context.drawImage(this.element, this.config.translate.x, this.config.translate.y, this.config.width, this.config.height), this.context.restore(), this.control.drawControl(this.config, this.context, Player.PlayerCommon.getInstance().playCanvasCore.scale, Player.PlayerCommon.getInstance().playCanvasCore.rotateDeg), this.frameCounter == 5 && this.pause(), this.frameCounter++)
            }, i.prototype.getChildren = function () {
                return null
            }, i
        }(t.DtoCommonElement);
        t.DtoVideo = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), function (n) {
    var t;
    (function (t) {
        var i = function () {
            function t() {
                this.remark = "", this.actualDuration = 4
            }

            return t.prototype.resetAnimationDisplay = function () {
                for (var e = this.effectObj.effectStepList.length(), o = this.effectObj.effectStepList, r = "", f = Player.PlayerCommon.getInstance().playCanvasCore, t, i, u = 0; u < e; u++) t = o.get(u), i = f.commonElements.get(t.elementColorKey), i || (i = f.getCombinationElementByColorKey(t.elementColorKey)), i && r.indexOf(t.elementColorKey) == -1 && t.effectType == n.EffectType.FadeIn ? i.setIsDraw(!1, !0) : i && r.indexOf(t.elementColorKey) == -1 && t.effectType == n.EffectType.FadeOut && i.setIsDraw(!0, !0), r.indexOf(t.elementColorKey) == -1 && (r += "," + t.elementColorKey)
            }, t.prototype.initDuration = function (n, t) {
                var i, r, u;
                if (t !== undefined) {
                    this.actualDuration = t;
                    return
                }
                if (n !== undefined && (this.actualDuration = n, i = this.effectObj.effectStepList.length(), i > 0)) {
                    for (r = [], u = 0; u < i + 1; u++) r.push(n);
                    this.setDuration({total: n * i + 1, subAnimation: r})
                }
            }, t.prototype.setDuration = function (n) {
                var f = n.total, i = n.subAnimation, t, r, u;
                if (i) if (r = this.effectObj.effectStepList, r) {
                    for (u = r.length(), t = 0; t < u; t++) r.get(t).appearDelay = i[t + 1] ? i[t + 1] : 2;
                    this.actualDuration = i[0] && (i[0] >= 2 || u > 0) ? i[0] : 2
                } else this.actualDuration = f
            }, t.prototype.getMusic = function () {
                var n = this, t = null, i = Player.PlayerCommon.getInstance().playCanvasCore.musics;
                return i.foreach(function (i, r) {
                    if (r.frameNum <= n.order + 1 && n.order + 1 <= r.toFrameNum) {
                        t = r;
                        return
                    }
                }), t
            }, t
        }();
        t.DtoFrame = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n(n, t) {
                this.id = n.id, this.element = n, this.items = t
            }

            return n
        }();
        n.DtoCombination = t
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), function (n) {
    var t;
    (function (t) {
        var i = function () {
            function t(n, t, i, r) {
                this.context = document.getElementById("hitCanvas").getContext("2d"), this.element = document.getElementById("hitCanvas");
                var u = new TrackTransform;
                u.trackTransform(this.context), this.setTransform(r), this.canvasWidth = n, this.canvasHeight = t, this.hitElements = new Common.HashTable, this.initData = i, this.initHitElementsData()
            }

            return t.prototype.setTransform = function (n) {
                this.context.setTransform(n.a, n.b, n.c, n.d, n.e, n.f)
            }, t.prototype.initHitElementsData = function () {
                var e = new n.Dto.DtoElementFactory, o = this, r = new Common.HashTable, u, t, i;
                for (u in this.initData.itemList) {
                    t = this.initData.itemList[u], i = t.typeName ? t.typeName.replace("Dto", "") : t.typeName;
                    var s = new n.Config(t.config.width, t.config.height, clone(t.config.translate, undefined, undefined, undefined), clone(t.config.rotate, undefined, undefined, undefined), t.config.scale, t.config.zIndex, t.config.type),
                        h = getClass(i),
                        f = e.createShapeGen(h, t.id, t.colorKey, s, o.context, clone(t.shapeParameter, undefined, undefined, undefined));
                    f.typeName = t.typeName, r.set(t.colorKey, f)
                }
                this.hitElements = r
            }, t.prototype.clear = function () {
                this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
            }, t.prototype.translate = function (n, t) {
                this.context.translate(n, t)
            }, t.prototype.rotate = function (n, t, i) {
                this.context.translate(t, i), this.context.rotate(n), this.context.translate(-t, -i)
            }, t.prototype.redrawHit = function () {
                var n, r, t, i;
                this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight), n = this.hitElements.all();
                for (r in n) t = n[r], i = Player.PlayerCommon.getInstance().playCanvasCore.commonElements.get(t.colorKey), i && i.isDraw && t.draw()
            }, t.prototype.changeWidthHeight = function (n, t) {
                this.canvasWidth = n, this.canvasHeight = t, this.element.width = n, this.element.height = t
            }, t
        }();
        t.DtoHitCanvasCore = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {})), classArr = {}, classArr.AnnotationBox = Core.Dto.DtoAnnotationBox, classArr.Arrow = Core.Dto.DtoArrow, classArr.ArrowHead = Core.Dto.DtoArrowHead, classArr.Circle = Core.Dto.DtoCircle, classArr.DashRectangle = Core.Dto.DtoDashRectangle, classArr.Heart = Core.Dto.DtoHeart, classArr.DashLine = Core.Dto.DtoDashLine, classArr.Line = Core.Dto.DtoLine, classArr.NotchRectangle = Core.Dto.DtoNotchRectangle, classArr.Polygon = Core.Dto.DtoPolygon, classArr.Rectangle = Core.Dto.DtoRectangle, classArr.Sexangle = Core.Dto.DtoSexangle, classArr.SquareBrackets = Core.Dto.DtoSquareBrackets, classArr.Star = Core.Dto.DtoStar, classArr.StraightArrow = Core.Dto.DtoStraightArrow, classArr.Triangle = Core.Dto.DtoTriangle, classArr.Video = Core.Dto.DtoVideo, classArr.Image = Core.Dto.DtoImage, classArr.GifImage = Core.Dto.DtoGifImage, classArr.Chart = Core.Dto.DtoChart, function (n) {
    var t;
    (function (t) {
        var i = function () {
            function t(t, i, r, u, f, e, o, s) {
                if (this.isForSave = !0, this.isForEditorPlay = !1, this.coverPng = "", this.textContent = "", this.version = "", this.isRunVideoOrGif = !1, this.modifyParams = null, this.startFrom = 0, this.isMuted = !1, this.isPlay = !0, this.gotoElement = null, this.isRehearseMode = !1, this.isModifyFont = !1, this.fontErrorVersion = ["2.2.7,win64", "2.2.7,win32", "2.2.7,mac64", "2.2.8,win64", "2.2.8,win32", "2.2.8,mac64", "2.2.9,win64", "2.2.9,win32", "2.2.9,mac64"], this.drawTimeList = [100, 100, 100, 100, 100], this.avgDrawTime = 100, this.oldVersions = ["Beta 1.0", "Beta 1.0,win32", "Beta 1.0,win64", "1.0", "Beta 1.1", "Beta 1.1,win32", "Beta 1.1,win64", "1.1", "Beta 1.1.2", "Beta 1.1.2,win32", "Beta 1.1.2,win64", "1.1.2", "Beta 1.2.3", "Beta 1.2.3,win32", "Beta 1.2.3,win64", "1.2.3", "Beta 1.2.3,mac64"], this.fontImgList = new Common.List, this.context2d = t, this.canvasHeight = r, this.canvasWidth = i, this.isForSave = s.isForSave, this.isExportPortable = s.isExportPortable, this.isGoto = !1, this.isHasGif = !1, this.isHasVideo = !1, this.isRunVideoOrGif = !1, this.path = s.path, this.hitElementData = o, this.commonElements = new Common.HashTable, this.combinations = new Common.List, this.musics = new Common.List, this.initData = u, this.initMusicData = e, this.isForEditorPlay = s.isForEditorPlay, this.startFrom = s.startFrom, this.fontsUsed = new Common.HashTable, this.textsUsed = new Common.HashTable, this.saveDate = (new Date).toString(), this.isForSave || (this.modifyParams = this.GetModifyParams(this.initData)), this.context2d) {
                    var h = new TrackTransform;
                    h.trackTransform(this.context2d), this.setTransform(), this.hitCanvasCore = new n.Dto.DtoHitCanvasCore(this.canvasWidth, this.canvasHeight, o, this.initForm)
                }
                this.initData.version && this.fontErrorVersion.indexOf(this.initData.version) >= 0 && (this.isModifyFont = !0), this.initCanvasCoreData(), this.initMusic(), this.isForSave && this.setTransform(), this.frames = new n.Dto.DtoFrames(f), this.frames.initFramesData(this.commonElements, s.path, s.isForSave, this), this.frames.currentFrameNum = u.startFrom == undefined || u.startFrom == null || u.startFrom < 0 ? 0 : u.startFrom, typeof preloadResourceCount != "undefined" && preloadResourceCount > 0 && (isHasPreloadResource = !0)
            }

            return t.prototype.initDraw = function () {
                this.drawBgimg(Player.PlayerCommon.getInstance().canvasContainer), this.redraw(), this.run()
            }, t.prototype.setTransform = function () {
                if (this.initData.initForm) this.initForm = clone(this.initData.initForm, undefined, undefined, undefined); else {
                    var n = this.initData.context2d.getTransform();
                    this.initForm = n
                }
                this.isForSave || (this.modifyParams ? this.context2d.setTransform(this.modifyParams.newScale, this.initForm.b, this.initForm.c, this.modifyParams.newScale, this.initForm.e / this.modifyParams.newScale, this.initForm.f / this.modifyParams.newScale) : this.context2d.setTransform(this.initForm.a, this.initForm.b, this.initForm.c, this.initForm.d, this.initForm.e, this.initForm.f))
            }, t.prototype.GetModifyParams = function (n) {
                if (!n.version || this.oldVersions.indexOf(n.version) >= 0) {
                    var i = n.scale, r = Math.pow(1.05, Math.log(n.scale) / Math.log(1.05) / 1.5), t = r / i;
                    return t = t > 1 ? t : 1 / t, {oldScale: i, newScale: r, scaleMultiples: t}
                }
                return null
            }, t.prototype.modifyImportConfig = function (n, t, i) {
                var u = n.width / i * 10, f = n.height / i * 10;
                n.translate.x = (n.translate.x + n.width / 2) / i * 10 - u / 2, n.translate.y = (n.translate.y + n.height / 2) / i * 10 - f / 2, n.translate.sx = n.translate.sx / i * 10, n.translate.sy = n.translate.sy / i * 10, n.width = u, n.height = f
            }, t.prototype.initCanvasCoreData = function () {
                var i = this, et = this.initData.version.split(",")[0], r, e, g, l, it, b, f, t, u, d, s, y, p, k, w,
                    rt;
                if (this.initData.commonElements) for (f in this.initData.commonElements.itemList) if (t = this.initData.commonElements.itemList[f], (t.config.type == "image" || t.config.type == "GifImage" || t.config.type == "chart") && typeof preloadResourceCount != "undefined" && preloadResourceCount++, r = t, r.config.type == "image" && r.config.cropData && Common.Util.compareVersion("2.3.2", et) > 0) {
                    var h = r.config.cropData, o = {x: h.x + h.width / 2, y: h.y + h.height / 2}, c = {
                        x: r.config.translate.x + r.config.width / 2,
                        y: r.config.translate.y + r.config.height / 2
                    }, tt = o.x - c.x, nt = o.y - c.y, a = r.config.rotate.z * Math.PI / 180, v = {
                        x: tt * Math.cos(a) - nt * Math.sin(a) + c.x,
                        y: tt * Math.sin(a) + nt * Math.cos(a) + c.y
                    };
                    r.config.translate.x += v.x - o.x, r.config.translate.y += v.y - o.y, r.config.cropData.x += v.x - o.x, r.config.cropData.y += v.y - o.y
                }
                if (this.initData.threeDBkGround && this.initData.threeDBkGround.images && typeof preloadResourceCount != "undefined" && (preloadResourceCount += this.initData.threeDBkGround.images.itemList.length), this.initData.scale && (this.scale = !this.isForSave && this.modifyParams ? this.initData.scale = this.modifyParams.newScale : this.initData.scale), this.initData.framePath && (this.framePath = this.initData.framePath.replace("slideview/", "")), this.scale = this.initData.scale, initScale = this.scale, this.rotateDeg = this.initData.rotateDeg, this.isRunVideoOrGif = this.initData.isRunVideoOrGif, this.isRehearseMode = this.initData.isRehearseMode, this.initData.logo && (e = new n.Dto.DtoLogo, e.top = this.initData.logo.top, e.left = this.initData.logo.left, e.src = this.path + this.initData.logo.src.replace("slideview/", ""), e.height = this.initData.logo.height, e.width = this.initData.logo.width, i.logo = e), this.initData.background && (i.background = clone(JSON.decycle(this.initData.background, !0), undefined, undefined, undefined), i.background.bgImage && (i.background.bgImage = i.background.bgImage.replace("slideview/", "")), i.background.gifBgImage && (i.background.gifBgImage = i.background.gifBgImage.replace("slideview/", "")), i.background.gifImage && (i.background.gifImage.src = i.background.gifImage.src.replace("slideview/", ""))), this.initData.bgMusic && (g = new n.MusicShowInfo(this.initData.bgMusic.frameNum, this.initData.bgMusic.frameNum, this.initData.bgMusic.musicName, this.initData.bgMusic.musicPath || "work/music/" + this.initData.bgMusic.musicName), this.musics.add(g), this.isForSave || (this.bgmusicAudio = document.createElement("audio"), this.bgmusicAudio.id = "music_frame_0", this.bgmusicAudio.addEventListener("ended", function () {
                        loopAudio(i.bgmusicAudio)
                    }, !1), typeof preloadResourceCount != "undefined" && preloadResourceCount++, this.bgmusicAudio.addEventListener("canplaythrough", loadingFinish, !1), this.bgmusicAudio.src = this.path + (this.initData.bgMusic.musicPath || "work/music/" + this.initData.bgMusic.musicName), Player.PlayerCommon.getInstance().canvasContainer.appendChild(this.bgmusicAudio))), this.initData.theme && (this.theme = clone(this.initData.theme, undefined, undefined, undefined)), this.initData.threeDBkGround) {
                    l = new n.Dto.DtoThreeDBackGround, l.maxScale = this.initData.threeDBkGround.maxScale, l.minScale = this.initData.threeDBkGround.minScale, i.threeDBkGround = l;
                    for (f in this.initData.threeDBkGround.images.items) {
                        var t = this.initData.threeDBkGround.images.items[f].value,
                            ft = new n.ImageConfig(t.config.width, t.config.height, clone(t.config.translate, undefined, undefined, undefined), clone(t.config.rotate, undefined, undefined, undefined), t.config.scale, t.config.zIndex, t.config.type),
                            ut = new n.Dto.DtoThreeDBackGroundImg(t.id, t.colorKey, ft, i.context2d, this.path + t.src, clone(t.scalInfo, undefined, undefined, undefined));
                        i.threeDBkGround.images.set(f, ut)
                    }
                    for (f in this.initData.threeDBkGround.scaleLevels.items) t = this.initData.threeDBkGround.scaleLevels.items[f], it = clone(t, undefined, undefined, undefined), i.threeDBkGround.scaleLevels.add(it)
                }
                if (this.initData.commonElements) for (f in this.initData.commonElements.itemList) t = this.initData.commonElements.itemList[f], b = this.commonElementToDto(t, this.modifyParams, i.isForSave), b && i.commonElements.set(t.colorKey, b);
                if (this.initData.combinations) for (f in this.initData.combinations.items) {
                    t = this.initData.combinations.items[f], u = t.element, this.modifyParams && this.modifyImportConfig(u.config, this.modifyParams.oldScale, this.modifyParams.newScale, this.modifyParams.scaleMultiples), d = new n.Config(u.config.width, u.config.height, clone(u.config.translate, undefined, undefined, undefined), clone(u.config.rotate, undefined, undefined, undefined), u.config.scale, u.config.zIndex, u.config.type), s = new n.Dto.DtoCommonElement(u.id, u.colorKey, d, i.context2d), s.typeName = "group", s.effectId = u.effectId, y = new Common.List, p = t.items;
                    for (k in p.items) w = this.commonElements.get(p.items[k].colorKey), w && y.add(w);
                    rt = new n.Dto.DtoCombination(s, y), i.combinations.add(rt)
                }
                this.isForSave || this.fontsUsed.foreach(function (n, t) {
                    i.createFontLoadImg(t)
                }), this.version = this.initData.version
            }, t.prototype.initMusic = function () {
                var u = this, f, r, i, t;
                if (this.initMusicData) for (f in this.initMusicData.items) r = this.initMusicData.items[f], i = new n.MusicShowInfo(r.frameNum, r.toFrameNum, r.musicName, r.musicPath.replace("slideview/", ""), r.isLoop), u.musics.add(i), u.isForSave || (t = document.createElement("audio"), t.id = "music_frame_" + i.frameNum, t.addEventListener("ended", function (n, t) {
                    return function () {
                        n && loopAudio(t)
                    }
                }(i.isLoop, t), !1), preloadResourceCount++, t.addEventListener("canplaythrough", loadingFinish, !1), t.addEventListener("error", loadingFinish, !1), t.src = u.path + (i.musicPath || "work/music/" + i.musicName), Player.PlayerCommon.getInstance().canvasContainer.appendChild(t), i.frameNum == 0 && (u.bgmusicAudio = t))
            }, t.prototype.commonElementToDto = function (t, i, r) {
                var h, u, b, p, a, w, v, l, e;
                r === void 0 && (r = !1);
                var o = this, c = new n.Dto.DtoElementFactory, s = t.typeName.replace("Dto", "");
                if (i && this.modifyImportConfig(t.config, i.oldScale, i.newScale, i.scaleMultiples), h = new n.Config(t.config.width, t.config.height, clone(t.config.translate, undefined, undefined, undefined), clone(t.config.rotate, undefined, undefined, undefined), t.config.scale, t.config.zIndex, t.config.type, t.config.isStraight), u = null, t.config.type == "shape") b = t, e = getClass(s), u = c.createShapeGen(e, t.id, t.colorKey, h, o.context2d, clone(b.shapeParameter, undefined, undefined, undefined)), s == "Arrow" && (u.curveArc.curveHeight = t.curveArc.curveHeight); else if (t.config.type == "text") if (u = new n.Dto.DtoText(t.id, t.colorKey, h, o.context2d, t.textLines, t.fill, t.fontSize, t.fontSizeMult, t.textAlign, t.styles, t.text, this.isModifyFont, t.isVertical), i && (u.fontSize = t.fontSize / i.newScale * 10), u.isVertical || (u.renderCache = t.renderCache, u.renderCache || u.updateRenderCache()), u.fixedWidth = t.fixedWidth, u.fontFamily = t.fontFamily, this.textContent += u.text + ";", p = this.initData.version.split(",")[0], Common.Util.compareVersion(p, "2.2.6") > 0) {
                    a = u.styles, w = t.text.split("");
                    for (v in a) a[v] && a[v].fontFamily && this.getFontUsed(a[v].fontFamily, w[v])
                } else t.fontFamily && this.getFontUsed(t.fontFamily, t.text); else if (t.config.type == "image" || t.config.type == "video") e = getClass(s), t.config.type == "image" ? (l = h, l.cropData = clone(t.config.cropData, undefined, undefined, undefined), l.horMirrorState = t.config.horMirrorState, l.verMirrorState = t.config.verMirrorState, u = c.createImageOrVideo(e, t.id, t.colorKey, l, o.context2d, this.path + t.src.replace("slideview/", ""), r), u.currentColor = t.currentColor) : u = c.createImageOrVideo(e, t.id, t.colorKey, h, o.context2d, this.path + t.src.replace("slideview/", ""), r); else if (t.config.type == "GifImage") {
                    var e = getClass(s), f = t, y = null;
                    y = f.originSrc ? this.path + f.originSrc : "", u = c.createGif(f.id, f.colorKey, this.path + f.src.replace("slideview/", ""), y.replace("slideview/", ""), clone(f.gifInfo, undefined, undefined, undefined), clone(f.config, undefined, undefined, undefined), o.context2d, t.totalWidth, r)
                } else t.config.type == "chart" && (e = getClass(s), u = c.createChart(e, t.id, t.colorKey, h, o.context2d, this.path + (t.src.replace("slideview/", "") || t.config.src.replace("slideview/", "")), t.chartConfig, r));
                return u ? (u.effectId = t.effectId, u.frameNum = t.frameNum, u.typeName = "Dto" + s, u.hyperlink = clone(t.hyperlink, undefined, undefined, undefined), u) : null
            }, t.prototype.getFontUsed = function (n, t) {
                var i, r;
                t && (i = n.split(",")[0], Common.Util.fontStyles[i] && !this.fontsUsed.has(i) ? (this.fontsUsed.set(i, i), this.textsUsed.set(i, t), typeof preloadResourceCount != "undefined" && preloadResourceCount++) : (r = this.textsUsed.get(i), this.textsUsed.set(i, r + t)))
            }, t.prototype.createFontLoadImg = function (n) {
                var i, t;
                this.context2d && (i = Common.Util.getFontUrl(n), i && (t = new XMLHttpRequest, t.open("GET", i, !0), t.responseType = "arraybuffer", t.onload = function () {
                    var i = t.response;
                    loadingFinish()
                }, t.onerror = function () {
                    loadingFinish()
                }, t.send(null)))
            }, t.prototype.initEffectStep = function () {
                this.frames.frames.foreach(function (n, t) {
                    t.resetAnimationDisplay()
                })
            }, t.prototype.getActiveElement = function (n, t) {
                var i, r, u;
                try {
                    if (i = t.getImageData(n.mouseX, n.mouseY, 1, 1).data, i[3] == 255) return r = "#" + Common.Util.rgbToHex(i[0], i[1], i[2]), u = this.commonElements.get(r), u
                } catch (n) {
                    return null
                }
                return null
            }, t.prototype.getCommonElements = function () {
                return this.commonElements
            }, t.prototype.getCommonElementsCout = function () {
                return this.commonElements.count()
            }, t.prototype.getCommonElByKey = function (n) {
                return this.commonElements.get(n)
            }, t.prototype.getScalLevel = function () {
                return this.scale
            }, t.prototype.redraw = function () {
                var h, i, l, a, r, f;
                this.avgDrawTime = (this.drawTimeList[0] + this.drawTimeList[1] + this.drawTimeList[2] + this.drawTimeList[3] + this.drawTimeList[4]) / 5;
                var b = Date.now(), u = this, s = Player.PlayerCommon.getInstance();
                if (this.isRunVideoOrGif || this.isGoto || Player.PlayerCommon.getInstance().screenStatus) {
                    Player.PlayerCommon.getInstance().screenStatus && s && s.inkMarkInstance && (this.context2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight), s.inkMarkInstance.drawBlackScreenTracks());
                    return
                }
                this.context2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight), this.hitCanvasCore.redrawHit(), this.threeDBkGround.draw();
                var t = this.commonElements.all(), p = Player.PlayerCommon.getInstance().getWidthHeightWidthRatio(),
                    y = 0, v = 0, w = p.width, c = p.height, e = !1, o = new Common.List;
                o.add(new n.Point(y, v)), o.add(new n.Point(w, c)), o.add(new n.Point(y, c)), o.add(new n.Point(w, v)), h = 0;
                for (i in t) t[i].isDraw && (t[i].config.type == "text" ? (l = t[i].fontSize, r = t[i].config, (l * u.scale > 5 || r.width * u.scale > 20 && r.height * u.scale > 15) && (f = t[i].getAllPoints().viewTruePoints, f = t[i].getAllPoints().viewTruePoints, e = Common.CollisiionDetector._instance.RectToRectCollisionDec(o, f), e && t[i].draw())) : t[i].config.type == "GifImage" ? (r = t[i].config, (r.width * u.scale > 20 || r.height * u.scale > 20) && (f = t[i].getAllPoints().viewTruePoints, e = Common.CollisiionDetector._instance.RectToRectCollisionDec(o, f), e && (h++, t[i].draw()))) : t[i].config.type == "video" ? (r = t[i].config, (r.width * u.scale > 20 || r.height * u.scale > 20) && (f = t[i].getAllPoints().viewTruePoints, e = Common.CollisiionDetector._instance.RectToRectCollisionDec(o, f), e && (t[i].draw(), t[i].isPause || h++))) : t[i].typeName == "DtoDashLine" || t[i].typeName == "DtoLine" || t[i].typeName == "DtoArrow" ? (r = t[i].config, a = Math.sqrt(Math.pow(r.translate.sx - r.translate.cx, 2) + Math.pow(r.translate.sy - r.translate.cy, 2)), a * u.scale > 10 && t[i].draw()) : (r = t[i].config, (r.width * u.scale > 20 || r.height * u.scale > 20) && (f = t[i].getAllPoints().viewTruePoints, e = Common.CollisiionDetector._instance.RectToRectCollisionDec(o, f), e && t[i].draw())));
                s && s.inkMarkInstance && s.inkMarkInstance.drawAllTracks(), u.isRunVideoOrGif = h == 0 ? !1 : !0, this.setDrawTimeList(Date.now() - b)
            }, t.prototype.drawBgimg = function (n) {
                n.style.backgroundImage = this.background.bgImage != null && this.background.bgImage != undefined ? "url(" + this.path + this.background.bgImage + ")" : "none", n.style.backgroundColor = this.background.bgColor, n.style.backgroundPosition = "center center", n.style.backgroundSize = "cover"
            }, t.prototype.computeScale = function (n) {
                var r = n.config.width, u = n.config.height, t, i, f;
                return n.config.type == "shape" && (t = n, t.shapeParameter.isStroke && (r += t.shapeParameter.lineWidth, u += t.shapeParameter.lineWidth)), i = Player.PlayerCommon.getInstance().getWidthHeightWidthRatio(), f = Math.min((i.width - 10) / r, (i.height - 10) / u), f
            }, t.prototype.playVideo = function (n, t) {
                Player.PlayerCommon.getInstance().currentVideo && (Player.PlayerCommon.getInstance().currentVideo.hideControl(), Player.PlayerCommon.getInstance().currentVideo.pause()), n.typeName == "DtoVideo" ? (Player.PlayerCommon.getInstance().currentVideo = n, navigator.userAgent.match(/Windows NT/i) || navigator.userAgent.match(/Macintosh/i) ? Player.PlayerCommon.getInstance().currentVideo.isPause = t : n.pause(), t && Player.PlayerCommon.getInstance().currentVideo.pause(), Player.PlayerCommon.getInstance().currentVideo.frameCounter++, Player.PlayerCommon.getInstance().currentVideo.frameCounter <= 5 && (Player.PlayerCommon.getInstance().currentVideo.frameCounter = 6), Player.PlayerCommon.getInstance().playCanvasCore.frames.playMusic(!1, Player.PlayerCommon.getInstance().playCanvasCore.isMuted)) : (Player.PlayerCommon.getInstance().currentVideo = null, n.frameNum && Player.PlayerCommon.getInstance().playCanvasCore.frames.playMusic(!0, Player.PlayerCommon.getInstance().playCanvasCore.isMuted))
            }, t.prototype.goto = function (n) {
                var t = this.commonElements.get(n);
                if (t) {
                    this.isGoto = !0, this.gotoElement = t, t.frameNum && this.frames.playMusic(!0, Player.PlayerCommon.getInstance().playCanvasCore.isMuted), this.playVideo(t, !1, !1);
                    var i = t.getCenterCoordinate(!0), e = i.x, o = i.y, s = -t.config.rotate.z, r = t.config.width,
                        u = t.config.height, f = t.getLineWidthWH();
                    r += f.lineWidthW / this.scale, u += f.lineWidthH / this.scale, this.configGoto(s, e, o, r, u)
                }
            }, t.prototype.configGoto = function (t, i, r, u, f) {
                var c = this.getCenterCoordinate(), nt = c.divToCanvasTransform.x - i, g = c.divToCanvasTransform.y - r,
                    b = Math.sqrt(Math.pow(nt, 2) + Math.pow(g, 2)) * this.scale,
                    l = Player.PlayerCommon.getInstance().getWidthHeightWidthRatio(), a, p, h, s, o, e, w, d;
                this.gotoStartRotate = this.rotateDeg, this.gotoRotate = t - this.rotateDeg, Math.abs(this.gotoRotate) > 180 && (this.gotoRotate = -(Math.abs(this.gotoRotate) / this.gotoRotate) * (360 - Math.abs(this.gotoRotate)));
                var v = l.height / this.scale, y = l.width / this.scale, k = l.height / this.scale;
                if (a = u / f > y / k ? u / y * k : f, p = v / a, this.gotoTargetX = i, this.gotoTargetY = r, h = [c.divToCanvasTransform.x, c.divToCanvasTransform.y, v], s = [i, r, v / p], Math.abs(h[0] - s[0]) * this.scale < 5 && Math.abs(h[1] - s[1]) * this.scale < 5 && Math.abs(h[2] - s[2]) * this.scale < 1 && Math.abs(this.gotoRotate) <= 1) return this.isGoto = !1, !1;
                this.lastTranslateX = null, this.lastTranslateY = null, o = null, e = h[2] / s[2], e > 1 && (b *= e), b < l.width * 2 ? (o = .64, e < 1 && (e = 1 / e), o += .1 * (e - 1)) : o = 1.2, o = Math.min(1.6, Math.max(.6, o)), this.gotoStartTime = Date.now(), this.interpolateZoom = new n.interpolateZoom(h, s, o), w = this.frames.frames.get(this.frames.currentFrameNum), d = this.frames.loopId > 0 ? w.actualDuration * 1e3 - 0 : 5e3, this.totalDuration = Math.max(1e3, Math.min(d, this.interpolateZoom.duration))
            }, t.prototype.translate = function (n, t) {
                this.context2d.translate(n, t), this.hitCanvasCore.translate(n, t), this.threeDBkGroundTranslate(n, t)
            }, t.prototype.scaleContext = function (n, t, i) {
                if ((t != 0 || i != 0) && this.context2d.translate(t, i), window.navigator.userAgent.indexOf("MQQBrowser") > 0) {
                    var r = this.context2d.getTransform();
                    this.context2d.setTransform(n * r.a, r.b, r.c, n * r.a, r.e, r.f)
                } else this.context2d.scale(n, n);
                (t != 0 || i != 0) && this.context2d.translate(-t, -i), (t != 0 || i != 0) && this.hitCanvasCore.context.translate(t, i), this.hitCanvasCore.context.scale(n, n), (t != 0 || i != 0) && this.hitCanvasCore.context.translate(-t, -i)
            }, t.prototype.zoom = function (n, t, i) {
                this.scaleContext(n, t, i), this.changeSizeAll(n, t, i), this.threeDBkGroundZoom(n, t, i), this.scale *= n
            }, t.prototype.changeSizeAll = function (n, t, i) {
                this.commonElements.foreach(function (r, u) {
                    (u.typeName == "DtoArrow" || u.typeName == "DtoLine" || u.typeName == "DtoDashLine") && u.sizeChange((n - 1) / 2, (n - 1) / 2, null, t, i)
                })
            }, t.prototype.rotateAll = function (n, t, i) {
                this.context2d.translate(t, i), this.context2d.rotate(n), this.context2d.translate(-t, -i), this.hitCanvasCore.rotate(n, t, i)
            }, t.prototype.getCenterCoordinate = function () {
                var t = new n.Point(this.canvasWidth / 2, this.canvasHeight / 2),
                    i = this.context2d.transformedPoint(t.x, t.y);
                return {center: t, divToCanvasTransform: i}
            }, t.prototype.getAllElementPonit = function () {
                var t = [], i = [], u = this.commonElements.all(), f;
                for (f in u) {
                    var e = u[f], n = e.getAllPoints().truePoints, r = e.typeName;
                    if (r == "DtoDashLine" || r == "DtoLine" || r == "DtoArrow") {
                        var o = n.get(0).x, s = n.get(1).x, h = n.get(2).x, c = n.get(0).y, l = n.get(1).y,
                            a = n.get(2).y;
                        t.push(o, s, h), i.push(c, l, a)
                    } else {
                        var o = n.get(0).x, s = n.get(1).x, h = n.get(2).x, v = n.get(3).x, c = n.get(0).y,
                            l = n.get(1).y, a = n.get(2).y, y = n.get(3).y;
                        t.push(o, s, h, v), i.push(c, l, a, y)
                    }
                }
                return {allX: t, allY: i}
            }, t.prototype.overview = function () {
                var n;
                if (this.isGoto = !0, n = this.getAllElementPonit(), n.allX.length != 0) {
                    var r = n.allX, u = n.allY, f = Math.max.apply(null, r), t = Math.min.apply(null, r),
                        e = Math.max.apply(null, u), i = Math.min.apply(null, u), o = f - t, s = e - i, h = t + o / 2,
                        c = i + s / 2;
                    this.configGoto(0, h, c, f - t, e - i)
                }
            }, t.prototype.run = function () {
                var n = this, r = 40, u = 1e3 / r, t = Date.now(), i = function () {
                    (n.isRunVideoOrGif || n.isGoto || Player.PlayerCommon.getInstance().extendIntervalId >= 0) && Date.now() >= t && Player.PlayerCommon.getInstance().screenStatus == 0 && (t = Date.now(), Player.PlayerCommon.getInstance().extendIntervalId > 0 ? n.draw(!1) : Player.PlayerCommon.getInstance().extendIntervalId == 0 ? (Player.PlayerCommon.getInstance().extendIntervalId = -1, n.draw(!0)) : n.draw(n.update()), t += u), window.requestAnimFrame(i)
                };
                window.requestAnimFrame(i)
            }, t.prototype.update = function () {
                return this.isGoto ? this.gotoUpdate() : !0
            }, t.prototype.draw = function (t) {
                var b, f, h, r, p, k, a, u, e, c;
                t === void 0 && (t = !1), t && (this.avgDrawTime = (this.drawTimeList[0] + this.drawTimeList[1] + this.drawTimeList[2] + this.drawTimeList[3] + this.drawTimeList[4]) / 5), b = Date.now(), f = this, this.context2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight), !f.isGoto && f.hitCanvasCore.redrawHit(), this.threeDBkGround.draw();
                var i = this.commonElements.all(), w = Player.PlayerCommon.getInstance().getWidthHeightWidthRatio(),
                    y = 0, v = 0, d = w.width, l = w.height, s = !1, o = new Common.List;
                o.add(new n.Point(y, v)), o.add(new n.Point(d, l)), o.add(new n.Point(y, l)), o.add(new n.Point(d, v)), h = 0;
                for (r in i) i[r].isDraw && (i[r].config.type == "text" ? (p = i[r].fontSize, u = i[r].config, (p * f.scale > 5 || u.width * f.scale > 20 && u.height * f.scale > 15) && (e = i[r].getAllPoints().viewTruePoints, e = i[r].getAllPoints().viewTruePoints, s = Common.CollisiionDetector._instance.RectToRectCollisionDec(o, e), s && i[r].draw(t))) : i[r].config.type == "GifImage" ? (u = i[r].config, (u.width * f.scale > 20 || u.height * f.scale > 20) && (e = i[r].getAllPoints().viewTruePoints, s = Common.CollisiionDetector._instance.RectToRectCollisionDec(o, e), s && (h++, i[r].draw(t)))) : i[r].config.type == "video" ? (u = i[r].config, u.width * f.scale > 20 || u.height * f.scale > 20 ? (e = i[r].getAllPoints().viewTruePoints, s = Common.CollisiionDetector._instance.RectToRectCollisionDec(o, e), s ? (i[r].draw(t), i[r].isPause ? this.gotoElement && this.isGoto && this.gotoElement.colorKey == i[r].colorKey && (navigator.userAgent.match(/Windows NT/i) || navigator.userAgent.match(/Macintosh/i) ? (i[r].isPause = !1, i[r].play()) : i[r].pause()) : h++, this.isGoto && (k = i[r], k.control.element.style.display = "none")) : i[r].pause()) : i[r].pause()) : i[r].typeName == "DtoDashLine" || i[r].typeName == "DtoLine" || i[r].typeName == "DtoArrow" ? (u = i[r].config, a = Math.sqrt(Math.pow(u.translate.sx - u.translate.cx, 2) + Math.pow(u.translate.sy - u.translate.cy, 2)), a * f.scale > 10 && i[r].draw(t)) : (u = i[r].config, (u.width * f.scale > 20 || u.height * f.scale > 20) && (e = i[r].getAllPoints().viewTruePoints, s = Common.CollisiionDetector._instance.RectToRectCollisionDec(o, e), s && i[r].draw(t))));
                c = Player.PlayerCommon.getInstance(), c && c.inkMarkInstance && c.inkMarkInstance.drawAllTracks(), f.isRunVideoOrGif = h == 0 ? !1 : !0, this.setDrawTimeList(Date.now() - b)
            }, t.prototype.gotoUpdate = function () {
                var i, r, o, e;
                if ((this.totalDuration || this.totalDuration == 0) && this.isGoto) {
                    var v = Date.now(), t = v - this.gotoStartTime,
                        u = Player.PlayerCommon.getInstance().getWidthHeightWidthRatio(),
                        f = n.Animation.Quart.easeInOut(t, 0, 1, this.totalDuration),
                        e = n.Animation.Cubic.easeInOut(t, this.gotoStartRotate, this.gotoRotate, this.totalDuration) % 360;
                    if (f < 0 || f >= 1 || t >= this.totalDuration) return this.isGoto = !1, this.hitCanvasCore.redrawHit(), !0;
                    i = this.interpolateZoom.interpolate(f), r = u.height / i[2], this.context2d.setTransform(1, 0, 0, 1, 0, 0), this.hitCanvasCore.context.setTransform(1, 0, 0, 1, 0, 0), this.translateForGoto(u.width / 2 - i[0] * r, u.height / 2 - i[1] * r), this.sizeChangeForGoto(r);
                    var s = this.context2d.transformedPoint2(this.gotoTargetX, this.gotoTargetY), h = s.x, c = s.y;
                    if (this.lastTranslateX || this.lastTranslateY) {
                        var y = h - this.lastTranslateX, p = c - this.lastTranslateY,
                            l = this.context2d.transformedPoint(0, 0), a = this.context2d.transformedPoint(y, p);
                        this.threeDBkGroundTranslate(a.x - l.x, a.y - l.y)
                    }
                    return this.lastTranslateX = h, this.lastTranslateY = c, this.gotoStartRotate == 0 && this.gotoRotate == 0 || (o = this.getCenterCoordinate().divToCanvasTransform, e = n.Animation.Cubic.easeInOut(t, this.gotoStartRotate, this.gotoRotate, this.totalDuration) % 360, this.rotateAllForGoto(e, o.x, o.y), this.rotateDeg = e), !0
                }
                return !1
            }, t.prototype.sizeChangeForGoto = function (n) {
                this.scaleContext(n, 0, 0), this.commonElements.foreach(function (t, i) {
                    (i.typeName == "DtoArrow" || i.typeName == "DtoLine" || i.typeName == "DtoDashLine") && i.sizeChangeForGoto(n)
                }), this.threeDBkGroundZoom(n / this.scale, this.gotoTargetX, this.gotoTargetY), this.scale = n
            }, t.prototype.rotateAllForGoto = function (n, t, i) {
                this.context2d.translate(t, i), this.context2d.rotate(n), this.context2d.translate(-t, -i), this.hitCanvasCore.context.translate(t, i), this.hitCanvasCore.context.rotate(n), this.hitCanvasCore.context.translate(-t, -i)
            }, t.prototype.translateForGoto = function (n, t) {
                this.context2d.translate(n, t), this.hitCanvasCore.translate(n, t)
            }, t.prototype.checkTranslateXY = function () {
                var n = this.context2d.getTransform(), t = n.e, i = n.f;
                (Math.abs(t) > 1e7 || Math.abs(i) > 1e7) && this.resetTransXY()
            }, t.prototype.resetTransXY = function () {
                var n = this.context2d.getTransform(), i = n.e, r = n.f, t;
                this.context2d.setTransform(n.a, n.b, n.c, n.d, 0, 0), this.context2d.setTransform(n.a, n.b, n.c, n.d, 0, 0), t = this.context2d.transformedPoint(i, r), this.commonElements.foreach(function (n, i) {
                    i.translate(t.x, t.y)
                }), this.combinations.foreach(function (n, i) {
                    i.element.translate(t.x, t.y)
                }), this.threeDBkGround.images.foreach(function (n, i) {
                    i.translate(t.x, t.y)
                }), this.redraw()
            }, t.prototype.getTextContent = function () {
            }, t.prototype.getCombinationById = function (n) {
                var t = null;
                return this.combinations.foreach(function (i, r) {
                    if (r.id == n) {
                        t = r;
                        return
                    }
                }), t
            }, t.prototype.getCombinationElementByColorKey = function (n) {
                var t = null;
                return this.combinations.foreach(function (i, r) {
                    if (r.element.colorKey == n) {
                        t = r.element;
                        return
                    }
                }), t
            }, t.prototype.threeDBkGroundTranslate = function (i, r) {
                var e = this.scale, v = !0, y = !0, o = .1, s = .8, u, h, a;
                if (this.threeDBkGround.minScale == t.MinScale && (v = !1, o = 0), this.threeDBkGround.maxScale == t.MaxScale && (y = !1, s = 1), u = 1.002, e >= this.threeDBkGround.minScale && e <= this.threeDBkGround.maxScale) var c = Math.log(e / this.threeDBkGround.minScale) / Math.log(u),
                    l = Math.log(this.threeDBkGround.maxScale / this.threeDBkGround.minScale) / Math.log(u),
                    f = n.Animation.Linear(c, o, s - o, l); else if (e > this.threeDBkGround.maxScale) var c = Math.log(e / this.threeDBkGround.maxScale) / Math.log(u),
                    l = Math.log(t.MaxScale / this.threeDBkGround.maxScale) / Math.log(u),
                    f = n.Animation.Linear(c, s, 1 - s, l); else if (this.scale < this.threeDBkGround.minScale) if (this.scale < t.MinScale) f = 0; else var c = Math.log(this.scale / t.MinScale) / Math.log(u),
                    l = Math.log(this.threeDBkGround.minScale / t.MinScale) / Math.log(u),
                    f = n.Animation.Linear(c, 0, o, l);
                f = Math.min(1, f), h = Math.min(1, f * 13 / 10), a = Math.min(1, h * 12 / 10), this.threeDBkGround.images.foreach(function (n, t) {
                    t.scalInfo.level == 0 ? t.translate(-i * f, -r * f) : t.scalInfo.level == 1 ? t.translate(-i * h, -r * h) : t.translate(-i * a, -r * a)
                })
            }, t.prototype.threeDBkGroundZoom = function (i, r, u) {
                var v = !0, y = !0, o = .1, s = .8, f;
                if (this.threeDBkGround.minScale == t.MinScale && (v = !1, o = 0), this.threeDBkGround.maxScale == t.MaxScale && (y = !1, s = 1), f = 1.002, this.scale >= this.threeDBkGround.minScale && this.scale <= this.threeDBkGround.maxScale) var h = Math.log(this.scale / this.threeDBkGround.minScale) / Math.log(f),
                    c = Math.log(this.threeDBkGround.maxScale / this.threeDBkGround.minScale) / Math.log(f),
                    e = n.Animation.Linear(h, o, s - o, c); else if (this.scale > this.threeDBkGround.maxScale) var h = Math.log(this.scale / this.threeDBkGround.maxScale) / Math.log(f),
                    c = Math.log(t.MaxScale / this.threeDBkGround.maxScale) / Math.log(f),
                    e = n.Animation.Linear(h, s, 1 - s, c); else if (this.scale < this.threeDBkGround.minScale) if (this.scale < t.MinScale) e = 0; else var h = Math.log(this.scale / t.MinScale) / Math.log(f),
                    c = Math.log(this.threeDBkGround.minScale / t.MinScale) / Math.log(f),
                    e = n.Animation.Linear(h, 0, o, c);
                e = Math.min(1, e);
                var a = Math.min(1, e * 13 / 10), p = Math.min(1, a * 12 / 10), l = 1 / i;
                this.threeDBkGround.images.foreach(function (n, t) {
                    var i, f, o;
                    t.scalInfo.level == 0 ? (i = Math.pow(l, e), t.sizeChange((i - 1) / 2, r, u)) : t.scalInfo.level == 1 ? (f = Math.pow(l, a), t.sizeChange((f - 1) / 2, r, u)) : (o = Math.pow(l, p), t.sizeChange((o - 1) / 2, r, u))
                })
            }, t.prototype.setDrawTimeList = function (n) {
                this.drawTimeList.shift(), this.drawTimeList.push(n)
            }, t.ScrollMultiples = 1.05, t.MaxScale = 100, t.MinScale = 1 / 100, t
        }();
        t.PlayCanvasCore = i
    })(t = n.Play || (n.Play = {}))
}(Core || (Core = {})), function (n) {
    var t;
    (function (t) {
        var i = function () {
            function t(n) {
                this.intervalId = 0, this.loopId = 0, this.autoPlayTime = 0, this.playRatio = "off", this.currentFrameNum = -1, this.currentEffectNum = -1, this.isLastNext = !0, this.isGoFrame = !1, this.initData = n
            }

            return t.prototype.initFramesData = function (t, i, r, u) {
                var s = new Common.List, l, h, f, e, c, o;
                if (this.initData && this.initData.frames && this.initData.frames.items) {
                    l = this.initData.frames.items.length;
                    for (h in this.initData.frames.items) try {
                        f = this.initData.frames.items[h], e = new n.Dto.DtoFrame, e.effectObj = this.getEffectObj(f.effectObj), e.id = f.id, e.order = f.order, e.clipImage = f.clipImage, e.initDuration(f.durationSeconds, f.actualDuration), e.remark = f.remark || "", e.element = t.get(f.element.colorKey), s.add(e), f.musicObj && (c = new n.MusicShowInfo(f.musicObj.frameNum, f.musicObj.frameNum, f.musicObj.frameNum.musicName, f.musicObj.frameNum.musicPath || "work/music/" + f.musicObj.frameNum.musicName), u.musics.add(c)), f.musicObj && !r && (o = document.createElement("audio"), o.id = "music_frame_" + f.musicObj.frameNum, o.addEventListener("ended", function (n) {
                            loopAudio(n.currentTarget)
                        }, !1), preloadResourceCount++, o.addEventListener("canplaythrough", loadingFinish, !1), o.src = i + (f.musicObj.musicPath || "work/music/" + f.musicObj.musicName), Player.PlayerCommon.getInstance().canvasContainer.appendChild(o))
                    } catch (a) {
                        Common.Logger.setErrLog(Common.LogCode.normal, "文件:Dtoframes,方法:initFramesData,异常信息：" + a);
                        continue
                    }
                }
                this.frames = s
            }, t.prototype.getEffectObj = function (t) {
                var u = new n.Effect(t.frameId), i;
                for (i in t.effectStepList.items) {
                    var r = t.effectStepList.items[i], f = t.effectStepList.items[i].order || i,
                        e = new n.EffectStep(u.id, r.elementColorKey, r.effectType || n.EffectType.FadeIn, parseInt(f), r.appearDelay, r.id);
                    u.addEffectStep(e)
                }
                return u
            }, t.prototype.getDuration = function (n, t) {
                var u = this.frames.length(), i, r, f;
                return n >= 0 && n <= u ? (i = this.frames.get(n), r = i.effectObj.effectStepList, t === -1 ? i.actualDuration : r ? (u = r.length(), t >= 0 && t < u ? (f = r.get(t), f.appearDelay ? f.appearDelay : 2) : 2) : i.actualDuration) : 4
            }, t.prototype.next = function () {
                var r, t = Player.PlayerCommon.getInstance(), n = t.playCanvasCore.frames, f = n.currentEffectNum, i, u;
                if (n.isLastNext || n.currentEffectNum == -1 || n.currentEffectNum--, i = n.frames.get(n.currentFrameNum), i) if (i.effectObj.effectStepList.length() > 0) {
                    if (f == -1 && !n.isLastNext && !this.isGoFrame) {
                        t.rehearse && t.rehearse.setStepTime(n.currentFrameNum, n.currentEffectNum, !0), n.gotoNextFrame(), n.isLastNext = !0, n.isGoFrame = !1;
                        return
                    }
                    n.currentEffectNum < i.effectObj.effectStepList.length() - 1 ? (t.rehearse && t.rehearse.setStepTime(n.currentFrameNum, n.currentEffectNum), n.currentEffectNum++, u = i.effectObj.effectStepList.get(n.currentEffectNum), n.setEffectElementIsDraw(u, !0, !1)) : (t.rehearse && t.rehearse.setStepTime(n.currentFrameNum, n.currentEffectNum, !0), r = n.gotoNextFrame())
                } else t.rehearse && t.rehearse.setStepTime(n.currentFrameNum, n.currentEffectNum, !0), r = n.gotoNextFrame(); else t.rehearse && t.rehearse.setStepTime(n.currentFrameNum, n.currentEffectNum, !0), r = n.gotoNextFrame();
                n.isLastNext = !0, n.isGoFrame = !1, r === !1 && t.rehearse && t.rehearse.stopRehearse()
            }, t.prototype.prev = function () {
                var r = this, n, t, i;
                if (this.isLastNext && this.currentEffectNum != -1 && this.currentEffectNum++, n = Player.PlayerCommon.getInstance(), t = this.frames.get(this.currentFrameNum), t) if (t.effectObj.effectStepList.length() > 0) {
                    if (this.currentEffectNum == -1) {
                        if (this.isLastNext || this.isGoFrame) {
                            this.gotoPrevFrame(), n.rehearse && n.rehearse.backStepTime(this.currentFrameNum, this.currentEffectNum), this.isLastNext = !1, this.isGoFrame = !1;
                            return
                        }
                        this.currentEffectNum = t.effectObj.effectStepList.length()
                    }
                    this.currentEffectNum > 0 ? (this.currentEffectNum--, n.rehearse && n.rehearse.backStepTime(this.currentFrameNum, this.currentEffectNum), i = t.effectObj.effectStepList.get(this.currentEffectNum), r.setEffectElementIsDraw(i, !1, !0), Player.PlayerCommon.getInstance().playCanvasCore.redraw()) : (this.gotoPrevFrame(), n.rehearse && n.rehearse.backStepTime(this.currentFrameNum, this.currentEffectNum))
                } else this.gotoPrevFrame(), n.rehearse && n.rehearse.backStepTime(this.currentFrameNum, this.currentEffectNum);
                this.isLastNext = !1, this.isGoFrame = !1
            }, t.prototype.gotoNextFrame = function () {
                if (this.frames && this.currentFrameNum < this.frames.length() - 1) {
                    this.currentEffectNum = -1, this.currentFrameNum++;
                    var n = this.frames.get(this.currentFrameNum);
                    return Player.PlayerCommon.getInstance().playCanvasCore.goto(n.element.colorKey), !0
                }
                return !1
            }, t.prototype.gotoPrevFrame = function () {
                if (this.frames && this.currentFrameNum > 0) {
                    this.currentEffectNum = -1, this.currentFrameNum--;
                    var n = this.frames.get(this.currentFrameNum);
                    Player.PlayerCommon.getInstance().playCanvasCore.goto(n.element.colorKey)
                }
            }, t.prototype.gotoFrame = function (n) {
                var c = this, u, r, e, o, f, s, t, i, h;
                if (this.frames && this.frames.length() == 0) return !1;
                for (u = this.frames.length() == 1 ? n == 0 ? 0 : 1 : n / (this.frames.length() - 1), u == 1 && (u = .99), r = Player.PlayerCommon.getInstance(), r.rehearse && r.rehearse.gotoStep(n), e = this.frames.length(), t = 0; t < n; t++) if (i = this.frames.get(t), i && i.effectObj.effectStepList.length() > 0) for (o = i.effectObj.effectStepList.length(), f = 0; f < o; f++) s = i.effectObj.effectStepList.get(f), c.setEffectElementIsDraw(s, !0, !0), r.playCanvasCore.redraw();
                for (t = e - 1; t >= n; t--) i = this.frames.get(t), i && i.resetAnimationDisplay();
                this.isGoFrame = !0, this.currentEffectNum = -1, this.currentFrameNum = n, h = this.frames.get(this.currentFrameNum), r.playCanvasCore.goto(h.element.colorKey)
            }, t.prototype.setEffectElementIsDraw = function (t, i, r) {
                var o;
                r === void 0 && (r = !1);
                var u = this, e = Player.PlayerCommon.getInstance().playCanvasCore,
                    f = e.commonElements.get(t.elementColorKey);
                f || (f = e.getCombinationElementByColorKey(t.elementColorKey)), f && (f.isDraw == !1 && t.effectType == n.EffectType.FadeOut && f.setIsDraw(!0, !0), t.effectType == n.EffectType.FadeIn ? f.setIsDraw(i ? !0 : !1, r) : f.setIsDraw(i ? !1 : !0, r), r || (o = 1, u.intervalId && (window.clearInterval(u.intervalId), u.intervalId = 0, u.intervalElement.isDraw = u.intervalEffectType == n.EffectType.FadeIn ? !0 : !1), u.intervalEffectType = t.effectType, u.intervalElement = f, u.intervalId = window.setInterval(function () {
                    !e.isRunVideoOrGif && e.redraw(), o++, o == 12 && (window.clearInterval(u.intervalId), u.intervalId = 0)
                }, 50)), i ? e.playVideo(f, !1, !1) : Player.PlayerCommon.getInstance().currentVideo && (Player.PlayerCommon.getInstance().currentVideo.hideControl(), Player.PlayerCommon.getInstance().currentVideo.pause(), Player.PlayerCommon.getInstance().currentVideo = null, e.frames.playMusic(!0, e.isMuted)))
            }, t.prototype.playMusic = function (n, t) {
                var u, i, f;
                Player.PlayerCommon.getInstance().playCanvasCore.isMuted = t;
                var r = Player.PlayerCommon.getInstance().canvasContainer.querySelectorAll("audio"), o = r.length,
                    e = this.frames.get(this.currentFrameNum);
                if (e) for (u = e.getMusic(), i = 0; i < o; i++) Player.PlayerCommon.getInstance().playCanvasCore.isMuted ? r[i].pause() : n ? r[i].id != "music_frame_0" ? u && parseInt(r[i].id.replace("music_frame_", "")) == u.frameNum ? (this.currentEffectNum == -1 && this.currentFrameNum + 1 == u.frameNum && (r[i].currentTime = 0), r[i].play(), f = document.getElementById("music_frame_0"), f && (f.volume = .03 * Player.PlayerCommon.getInstance().volumePercent)) : r[i].pause() : (r[i].play(), r[i].volume = Player.PlayerCommon.getInstance().volumePercent) : r[i].pause()
            }, t.prototype.startAutoPlay = function (t) {
                var i = this, u = this.frames, r = i.currentFrameNum, e = this.next, f = function () {
                    var h, o, a, c, l, u, s, v;
                    if (i.loopId == 0) return !1;
                    if (i.currentFrameNum == i.frames.length() - 1 && i.currentEffectNum == i.frames.get(i.currentFrameNum).effectObj.effectStepList.length() - 1) {
                        for (i.currentFrameNum = -1, h = 0; h < i.frames.length(); h++) if (o = i.frames.get(h), o && o.effectObj.effectStepList.length() > 0) for (a = o.effectObj.effectStepList.length(), c = a - 1; c >= 0; c--) l = o.effectObj.effectStepList.get(c), u = Player.PlayerCommon.getInstance().playCanvasCore.commonElements.get(l.elementColorKey), u || (u = Player.PlayerCommon.getInstance().playCanvasCore.getCombinationElementByColorKey(l.elementColorKey)), u && (l.effectType == n.EffectType.FadeIn ? u.setIsDraw(!1, !0) : u.setIsDraw(!0, !0));
                        Player.PlayerCommon.getInstance().playCanvasCore.redraw(), r = 0
                    }
                    s = i.frames.get(i.currentFrameNum), !s || s && s.effectObj.effectStepList.length() > 0 && i.currentEffectNum < s.effectObj.effectStepList.length() - 1 || r++, e(), t && t(), v = i.getDuration(i.currentFrameNum, i.currentEffectNum), i.loopId = window.setTimeout(f, v * 1e3)
                };
                u.length() >= 1 && (i.loopId = window.setTimeout(f, u.get(r).actualDuration * 1e3))
            }, t.prototype.stopAutoPlay = function () {
                this.loopId != 0 && (window.clearInterval(this.loopId), this.loopId = 0)
            }, t.prototype.computePosition = function (n, t) {
                for (var f = n / t, r = this.frames.length(), u = 0, i = 0; i < r; i++) if (i == 0) {
                    if (f <= 1 / ((r - 1) * 2)) return u = i
                } else if (i == r - 1) {
                    if (f > ((r - 1) * 2 - 1) / ((r - 1) * 2)) return u = i
                } else if (f > (i * 2 - 1) / ((r - 1) * 2) && f < (i * 2 + 1) / ((r - 1) * 2)) return u = i;
                return u
            }, t.prototype.isHasPreStep = function (n, t) {
                var o = this.frames.length(), f = this.currentFrameNum, r = this.currentEffectNum, u, e;
                return f > 0 ? !0 : (u = this.frames.get(f), !u) ? !1 : (e = u.effectObj.effectStepList.length(), e == 0 ? !1 : r > 0 ? !0 : r == 0 && t ? !0 : r == -1 && n ? !0 : !1)
            }, t.prototype.isHasNextStep = function (n, t, i) {
                var o = this.frames.length(), e = this.currentFrameNum, u = this.currentEffectNum, f, r;
                return e < o - 1 ? !0 : (f = this.frames.get(e), !f) ? !1 : (r = f.effectObj.effectStepList.length(), r == 0 ? !1 : u == -1 && i ? !0 : u < r - 1 ? !0 : u == r - 1 && n ? !0 : !1)
            }, t.prototype.getFrameNumByColorkey = function (n) {
                for (var r = this.frames.length(), i, t = 0; t < r; t++) if (i = this.frames.get(t), i && i.element.colorKey == n) return t;
                return null
            }, t
        }();
        t.DtoFrames = i
    })(t = n.Dto || (n.Dto = {}))
}(Core || (Core = {}));
var leftWidth = 0, topHeight = 0, topAnimaitonHeight = 0, lineWidthScale = 40, initScale = 1, preloadResourceCount = 0,
    isHasPreloadResource = !1;
(function (n) {
    var t = function () {
        function t(n, i, r, u, f, e, o, s) {
            o === void 0 && (o = !1), s === void 0 && (s = !1), this.startFrom = 0, this.slideRatio = "off", this.inkMarkInstance = null, this.rehearse = null, this.isLoadCompleted = !1, this.screenStatus = 0, this.volumePercent = 1, this.isNextClicked = !0, this.customEvent = {}, this.width = i, this.height = r, this.contextJson = u, this.fontJson = f, this.path = e, this.isInkMark = o, this.isRehearse = s, this.extendIntervalId = 0, this.isFireFox = Common.Util.isFireFox(), this.imageCachePool = new Core.ImageCachePool, this.canvasContainer = document.getElementById(n), t.singleInstance = this
        }

        return t.getInstance = function () {
            return this.singleInstance
        }, t.prototype.init = function (n) {
            this.initSuccess = this.initPlayerELemnets(this.width, this.height, this.contextJson, this.fontJson, this.path), this.initSuccess && n && n()
        }, t.prototype.initPlayerELemnets = function (t, i, r, u, f) {
            var e, s, o, h;
            if (this.addCanvas(t, i), this.addHitCanvas(), e = JSON.retrocycle(r), r == null || e == null) return this.trigger("error", SoftWare.file_load_fail), !1;
            if (u) {
                s = JSON.retrocycle(u);
                for (o in s) Common.Util.fontStyles[o] = {
                    str: "@font-face {font-family: '" + o + "';src: url('" + s[o] + "') format('truetype');}",
                    url: s[o]
                }
            }
            return this.startFrom = e.startFrom == undefined || e.startFrom == null || e.startFrom < 0 ? 0 : e.startFrom, h = {
                isForSave: !1,
                isForEditorPlay: e.isForEditorPlay,
                isExportPortable: e.isExportPortable,
                startFrom: this.startFrom,
                path: f
            }, this.playCanvasCore = new Core.Play.PlayCanvasCore(this.context2d, this.canvasWidth, this.canvasHeight, e, e.frames, e.musics, e.hitElementData, h), this.isInkMark && (this.inkMarkInstance = new n.InkMarkInstance(this.playCanvasCore.context2d, this.playCanvasCore.hitCanvasCore.context)), this.isRehearse && (this.rehearse = new n.Rehearse(this.playCanvasCore.isRehearseMode)), this.appendFontFamily(this.playCanvasCore.fontsUsed), this.slideRatio = e.slideRatio && e.slideRatio != "auto" ? e.slideRatio : "off", !0

        }, t.prototype.next = function () {
            return this.initSuccess ? (this.isNextClicked = !0, this.playCanvasCore.frames.stopAutoPlay(), this.playCanvasCore.frames.next(), !0) : !1
        }, t.prototype.prev = function () {
            if (this.initSuccess) return this.isNextClicked = !1, this.playCanvasCore.frames.stopAutoPlay(), this.playCanvasCore.frames.prev(), !0
        }, t.prototype.getFramesCount = function () {
            return this.initSuccess ? this.playCanvasCore.frames.frames.length() : 0
        }, t.prototype.overView = function () {
            return this.initSuccess ? (this.playCanvasCore.overview(), !0) : !1
        }, t.prototype.translateForDrag = function (n) {
            return this.initSuccess ? (n = this.computeMouseInfo(n, this.context2d), this.playCanvasCore.translate(n.mouseX - n.lastX, n.mouseY - n.lastY), this.translateExtend(n.mouseX - n.lastX, n.mouseY - n.lastY), !0) : !1
        }, t.prototype.zoom = function (n, t) {
            return this.initSuccess ? (this.playCanvasCore.isGoto = !1, t = this.computeMouseInfo(t, this.context2d), this.playCanvasCore.zoom(n, t.mouseX, t.mouseY), this.zoomExtend(n, t.mouseX, t.mouseY), !0) : !1
        }, t.prototype.startAutoPlay = function (n) {
            return this.initSuccess ? (this.playCanvasCore.frames.startAutoPlay(n), !0) : !1
        }, t.prototype.stopAutoPlay = function () {
            return this.initSuccess ? (this.playCanvasCore.frames.stopAutoPlay(), !0) : !1
        }, t.prototype.gotoFrame = function (n) {
            this.playCanvasCore.frames.gotoFrame(n)
        }, t.prototype.hasBgMusic = function () {
            var n = this.canvasContainer.querySelector("audio");
            return n ? !0 : !1
        }, t.prototype.clickCanvas = function (n) {
            var r, i, u, f, e, s;
            if (!this.initSuccess) return !1;
            //if (r = this.playCanvasCore.getActiveElement(n, this.playCanvasCore.hitCanvasCore.context), r) if (DBK.isNativePlay() && r.hyperlink) if (i = r.hyperlink.hyperlink_path, u = r.hyperlink.hyperlink_type, u == Core.HyperlinkType.url_addr) i.indexOf("http://") != -1 || i.indexOf("https://") != -1 ? shell.openExternal(i) : shell.openExternal("http://" + i); else if (u == Core.HyperlinkType.file_location) {
            if (r = this.playCanvasCore.getActiveElement(n, this.playCanvasCore.hitCanvasCore.context), r) if ( r.hyperlink) if (i = r.hyperlink.hyperlink_path, u = r.hyperlink.hyperlink_type, u == Core.HyperlinkType.url_addr) i.indexOf("http://") != -1 || i.indexOf("https://") != -1 ? shell.openExternal(i) : shell.openExternal("http://" + i); else if (u == Core.HyperlinkType.file_location) {
                if (f = DBK.fsExtra(), this.playCanvasCore.isExportPortable) var o = i.replace(/\\/g, "/").split("/"),
                    h = o[o.length - 1], c = f.realpathSync("./"),
                    e = c.replace(/\\/g, "/") + "/work/hyperlink/" + h; else e = i;
                if (s = f.existsSync(e), !s) {
                    this.trigger("error", SoftWare.hyperlink_exists_err);
                    return
                }
                shell.openItem(e)
            } else u == Core.HyperlinkType.document_step && this.playCanvasCore.frames.gotoFrame(parseInt(i) - 1); else t.getInstance().next(); else t.getInstance().next();
            return !0
        }, t.prototype.winResize = function (n, t) {
            if (!this.initSuccess) return !1;
            var i = this.canvasWidth, r = this.canvasHeight, u = n - i, f = t - r;
            this.playCanvasCore.translate(u / this.playCanvasCore.scale / 2, f / this.playCanvasCore.scale / 2), this.playCanvasCore.hitCanvasCore.changeWidthHeight(n, t), this.changeWidthHeight(n, t), (!isHasPreloadResource || preloadResourceCount <= 0) && (this.playCanvasCore.frames.currentFrameNum != -1 && this.playCanvasCore.frames.gotoFrame(this.playCanvasCore.frames.currentFrameNum), this.playCanvasCore.redraw())
        }, t.prototype.loadComplete = function () {
            if (this.isLoadCompleted || (this.isLoadCompleted = !0, !this.initSuccess)) return !1;
            this.playCanvasCore.initEffectStep(), this.playCanvasCore.initDraw(), this.trigger("loaded")
        }, t.prototype.addCanvas = function (n, t) {
            this.element = document.createElement("canvas"), this.element.id = "canvas", this.element.width = n, this.element.height = t, this.canvasHeight = t, this.canvasWidth = n, this.canvasContainer.appendChild(this.element), this.context2d = this.element.getContext("2d")
        }, t.prototype.addHitCanvas = function () {
            var n = document.createElement("canvas");
            n.id = "hitCanvas", n.width = this.canvasWidth, n.height = this.canvasHeight, n.style.position = "absolute", n.style.display = "none", n.style.top = "0px", n.style.left = "0px", this.canvasContainer.appendChild(n)
        }, t.prototype.changeWidthHeight = function (n, t) {
            var i = this.context2d.getTransform();
            this.canvasWidth = n, this.canvasHeight = t, this.element.width = n, this.element.height = t, this.playCanvasCore.canvasWidth = n, this.playCanvasCore.canvasHeight = t, this.context2d.setTransform(i.a, i.b, i.c, i.d, i.e, i.f), this.playCanvasCore.hitCanvasCore.context.setTransform(i.a, i.b, i.c, i.d, i.e, i.f)
        }, t.prototype.computeMouseInfo = function (n, t) {
            var i;
            return n.oldMouseInfo = {
                mouseX: n.mouseX,
                mouseY: n.mouseY
            }, n.mouseX != null && n.mouseX != undefined && n.mouseY != null && n.mouseY != undefined && (i = t.transformedPoint(n.mouseX, n.mouseY), n.mouseX = i.x, n.mouseY = i.y), n.lastX != null && n.lastX != undefined && n.lastY != null && n.lastY != undefined && (i = t.transformedPoint(n.lastX, n.lastY), n.lastX = i.x, n.lastY = i.y), n
        }, t.prototype.zoomExtend = function (n, i, r) {
            var u = this;
            u.extendIntervalId && (window.clearInterval(u.extendIntervalId), u.extendIntervalId = 0), u.extendIntervalId = window.setInterval(function () {
                var e = !1, f;
                n > 1 ? (n /= 1.005, n > 1.002 && (e = !0)) : n < 1 && (n *= 1.005, n < .998 && (e = !0)), e ? u.playCanvasCore.zoom(n, i, r) : (u.extendIntervalId && (window.clearInterval(u.extendIntervalId), u.extendIntervalId = 0), f = t.getInstance(), f.element.classList.contains("mouse-big") && f.element.classList.remove("mouse-big"), f.element.classList.contains("mouse-small") && f.element.classList.remove("mouse-small"))
            }, 40)
        }, t.prototype.translateExtend = function (n, t) {
            var i = this;
            i.extendIntervalId && (window.clearInterval(i.extendIntervalId), i.extendIntervalId = 0), i.extendIntervalId = window.setInterval(function () {
                var r = !1;
                n /= 1.2, t /= 1.2, r = Math.abs(n) < 1 / i.playCanvasCore.scale && Math.abs(t) < 1 / i.playCanvasCore.scale ? !1 : !0, r ? i.playCanvasCore.translate(n, t) : i.extendIntervalId && (window.clearInterval(i.extendIntervalId), i.extendIntervalId = 0)
            }, 40)
        }, t.prototype.bigger = function (n) {
            var r = {mouseX: t.getInstance().canvasWidth / 2 + 1, mouseY: t.getInstance().canvasHeight / 2 + 1}, i;
            i = n ? Core.Play.PlayCanvasCore.ScrollMultiples : 1 / Core.Play.PlayCanvasCore.ScrollMultiples, t.getInstance().zoom(i, r)
        }, t.prototype.rotate = function (n) {
            var r = t.getInstance().playCanvasCore.getCenterCoordinate().divToCanvasTransform, i;
            i = n ? -2 : 2, t.getInstance().playCanvasCore.rotateAll(i, r.x, r.y), t.getInstance().playCanvasCore.rotateDeg += i, t.getInstance().playCanvasCore.redraw()
        }, t.prototype.setScreenStatus = function (n) {
            this.screenStatus = n, this.inkMarkInstance && this.inkMarkInstance.clearBlackScreenTracks();
            var t = this.playCanvasCore;
            this.screenStatus == 1 ? (this.canvasContainer.style.backgroundImage = "none", this.canvasContainer.style.backgroundColor = "#000", t.context2d.clearRect(0, 0, t.canvasWidth, t.canvasHeight)) : this.screenStatus == 2 ? (this.canvasContainer.style.backgroundImage = "none", this.canvasContainer.style.backgroundColor = "#FFF", t.context2d.clearRect(0, 0, t.canvasWidth, t.canvasHeight)) : (this.canvasContainer.style.backgroundImage = this.playCanvasCore.background.bgImage != null && this.playCanvasCore.background.bgImage != undefined ? "url(" + this.playCanvasCore.path + this.playCanvasCore.background.bgImage + ")" : "none", this.canvasContainer.style.backgroundColor = this.playCanvasCore.background.bgColor, t.redraw())
        }, t.prototype.setAllVideoMute = function (n) {
            var i = t.getInstance().playCanvasCore.getCommonElements();
            i.foreach(function (t, i) {
                i.typeName == "DtoVideo" && (i.element.muted = n, i.element.currentTime = 0)
            })
        }, t.prototype.appendFontFamily = function (n) {
            var f = document.head, e = document.body, t = document.createElement("style"),
                i = document.createElement("div"), r = "", u = "";
            n.foreach(function (n, t) {
                Common.Util.fontStyles[t] && (r += Common.Util.fontStyles[t].str + "\r\n", u += "<i style='font-family:" + t + "'></i>")
            }), t.innerHTML = r, i.innerHTML = u, f.appendChild(t), e.appendChild(i)
        }, t.prototype.getWidthHeightWidthRatio = function () {
            var n = this.canvasContainer.clientWidth, t = this.canvasContainer.clientHeight,
                u = this.playCanvasCore.frames.playRatio, f = 0, e = 0, i = n, r = t;
            return u != "off" && (u == "4:3" && n * 3 != t * 4 ? n * 3 > t * 4 ? (i = Math.ceil(t * 4 / 3), f = (n - i) / 2) : (r = Math.ceil(n * 3 / 4), e = (t - r) / 2) : u == "16:9" && n * 9 != t * 16 && (n * 9 > t * 16 ? (i = Math.ceil(t * 16 / 9), f = (n - i) / 2) : (r = Math.ceil(n * 9 / 16), e = (t - r) / 2))), {
                width: i,
                height: r,
                maskW: f,
                maskH: e
            }
        }, t.prototype.on = function (n, t) {
            var i = this;
            return (n || "").split(/\s+/).forEach(function (n) {
                i.customEvent[n] = t
            }), this
        }, t.prototype.trigger = function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[+n] = arguments[n];
            this.customEvent[arguments[0]] && this.customEvent[arguments[0]].apply(this, arguments)
        }, t.singleInstance = null, t
    }();
    n.PlayerCommon = t
})(Player || (Player = {})), SoftWare = function () {
    function n() {
    }

    return n.loading = "加载中", n.exporting = "导出中", n.saving = "保存中", n.downing = "下载中", n.save_success = "保存成功", n.save_fail = "保存失败！", n.save_folder_err = "是已经存在的文件夹，请更换文件名或者目录再保存", n.save_file_err = "已经存在", n.upload_success = "上传成功", n.upload_fail = "上传失败", n.upload_publicRight = "所有人可见", n.upload_privateRight = "仅自己可见", n.upload_title_blank = "标题不能为空", n.upload_title_url = "标题不能包含网址信息", n.upload_keyword_count = "关键字不能少于三个，需使用空格分隔", n.upload_keyword_url = "关键字不能包含网址信息", n.upload_price = "金额请输入大于等于0的整数", n.upload_description_url = "描述不能包含网址信息", n.upload_too_big = "文件不能大于$M", n.offline = "网络未连接", n.format_error = "格式不正确", n.format_video_error = "不支持的视频格式！", n.format_audio_error = "不支持的音频格式！", n.file_insert_size = "添加文件不能超过", n.file_noexsit = "文件不存在", n.file_open_fail = "文件打开失败", n.file_open_success = "文件加载完毕", n.export_success = "导出成功", n.export_fail = "导出失败", n.file_permission_denied = "该文件夹权限不足，请更换保存位置", n.my_space_err = "请求我的云空间,", n.hint_no_frame = "请添加帧", n.nike_name = "昵称", n.zoom_edge = "已拖拽到最边缘", n.zoom_larger = "已放大至最高级别", n.zoom_small = "已缩小至最低级别", n.svg_select_count = "请选择至少一个svg", n.music_step_limit = "开始步序必须小于等于结束步序", n.music_step_limit2 = "步序音乐不能交叉重叠", n.music_step_limit3 = "背景音乐不能重复添加", n.music_backgroud = "背景", n.music_frame = "步序", n.music_delete = "删除", n.frame = "步序", n.blank = "空白", n.right_insert_background = "插入背景", n.right_delete_background = "删除背景", n.right_bring_front = "提前一级", n.right_sent_back = "下移一级", n.right_bring_top = "置顶", n.right_sent_bottom = "置底", n.right_copy = "复制", n.right_cut = "剪切", n.right_paste = "粘贴", n.right_delete = "删除", n.right_selectAll = "全选", n.right_frame_copy = "复制步序", n.right_image_save_as = "元素另存为", n.right_bg_image_save_as = "背景另存为", n.right_replace = "元素替换为", n.chart_series = "系列", n.chart_category = "分类", n.chart_title = "标题", n.chart_Y = "Y轴", n.exportVideo_title = "视频导出中", n.exportVideo_hint = "请耐心等待!", n.convertAudioErr = "音频转换出错！", n.convertVideoErr = "视频转换出错！", n.exportVideo_err = "导出失败，请尝试重新打开文件后再导出！", n.hyperlink_copy_err = "所选文件无法正确复制", n.hyperlink_err = "信息不完整", n.hyperlink_file_err = "文件名不能有特殊字符", n.file_load_fail = "文件加载失败", n.play_ratio = "播放比例", n.full_screen = "满屏", n.cancel_auto_play = "取消自动播放", n.auto_play_min = "最小间隔时间3秒", n.auto_play_hint = "按Enter键开始自动播放", n.auto_play_start = "开始自动播放", n.hyperlink_exists_err = "超链接文件不存在", n.update_hint = "正在更新，请稍等", n.update_fail = "软件更新失败,请稍后重试", n.update_later = " 请稍后更新", n.update_no = "当前版本已是最新", n.update_close = "关闭", n.update_has = "有可用的软件更新", n.download_latter = "稍后下载", n.download_fail = "下载失败", n.download_success = "下载成功", n.downloading = "正在下载...", n.restart_soft = ",请关闭软件后重试", n.user_name = "请输入用户名", n.user_password = "请输入密码", n.user_fail = "安装文件破损或缺失", n.please_select = "请选择", n.caiyun = "华文彩云", n.kaiti = "华文楷体", n.xingkai = "华文行楷", n.lishu = "隶书", n.zongyi = "综艺", n.heiti = "微软雅黑",n.youyuan = "幼圆",n.more_font = "自定义字体&nbsp;&nbsp;＋",n.fonts_loading = "系统字体加载中",n.relogin = "重新登录",n.systemError = "系统异常",n.noEmpty = "用户名或密码不能为空",n.userNameError = "用户名或密码不正确",n.notActive = "未激活，请与管理员联系",n.disabledUser = "已停用，请与管理员联系",n.networkError = "网络异常",n.fileDamaged = "日志/配置文件损坏",n.timeout = "请求服务器超时",n.interrupt = "服务器连接中断，请重新上传",n.refused = "连接被服务器拒绝",n.connectException = "服务器连接异常",n.enoent = "网络异常",n.unauthorized = "登录已过期",n.transcoding_title = "是否转码？",n.transcoding_content = "视频需要被转换成.webm格式才能被插入！转码过程可能比较耗时，您也可以选择其他转码工具进行转码后再插入。是否转码？",n.transcoding_submit = "转码",n.cancel_text = "取消",n.transcoding_going = "正在为您转码，请稍后",n.restore_file_title = "文件恢复",n.restore_file_content = "上次编辑的文件未正确保存，是否恢复？",n.restore_file_submit = "恢复保存",n.restore_file_cancel = "忽略删除",n.portable_exsit_title = "文件已存在",n.portable_exsit_content = "文件已存在，是否覆盖已有文件？",n.portable_exsit_replace = "覆盖",n.read_image_error = "读取图片出现异常!",n.version_hint_title = "版本提醒",n.version_hint_content = "您的软件版本过低，请升级软件到最新版本，如继续打开，有可能导致文件不能正常操作。",n.version_hint_submit = "立即更新",n.version_hint_cancel = "仍要继续",n.effectTypeName = ["", "淡入", "淡出"],n.please_select1 = "选择",n.login_url = "login.html",n
}()

shell = {
    openExternal:function (i) {
        window.open(i);
    },
    openItem:function (e) {
        console.log(e);
        return 0;
    }
}