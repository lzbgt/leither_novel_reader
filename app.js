//app
var NOVEL_CHAPTER_FIELDS = ["chapName", "novelName", "author", "timestamp", "body"];
function main() {
    debug.log("reader main run", G.appBid);
    addcss = function(css) {
        var cs = document.createElement("style");
        cs.rel = "stylesheet";
        cs.type = "text/css";
        cs.textContent = css;
        document.getElementsByTagName("head")[0].appendChild(cs);
    }
    addcss(novelcss);
    G.app = angular.module("appModule", []);
    var div = document.getElementById("LeitherBody");
    div.innerHTML = mainhtml;

    startup();
    angular.bootstrap(document, ['appModule']);
}

function startup() {
    G.app.controller("appController", function($scope, $sce) {
        // load novel content
        bid = (G.I.nodeBid == null ? "b-wQj4w86l5XnlKBPVUtO09RxlsjsyiWETD4TnqoHzw" : G.I.nodeBid);

        key = (G.I.novelKey == null ? "1441869599669" : G.I.novelKey)

        loadNovelContent(bid, key, $scope, $sce);
    })
}

function loadNovelContent(bid, key, $scope, $sce) {
    G.hmget(bid, key, NOVEL_CHAPTER_FIELDS).then(
        function(data) {
            for (i = 0; i < data.length; i++) {
                if (i == 4) {
                    $scope[NOVEL_CHAPTER_FIELDS[i]] = $sce.trustAsHtml(data[i]);
                } else if (i == 3) {
                    $scope[NOVEL_CHAPTER_FIELDS[i]] = stringFromTimeStamp(data[i]);
                } else if (data[i] == null || "") {
                    $scope[NOVEL_CHAPTER_FIELDS[i]] = "<empty>";
                } else {
                    $scope[NOVEL_CHAPTER_FIELDS[i]] = data[i];
                }
            }
            document.title = $scope.novelName + "  " + $scope.chapName; 
            $scope.$apply();
        },
        function(e) {
            debugger;
            debug.log(e);
        });
}

G.hmget = function(bid, key, farray) {
    var prom = $.Deferred();
    _hmget(bid, key, farray,
        function(data) {
            if (data == null) {
                var err = "hmget data=null";
                debug.log(err, data);
                prom.reject(err);
                debugger;
            } else {
                prom.resolve(data)
            }
        },
        function(name, err) {
            debug.log(err);
            debugger;
            prom.reject(err);
        });

    return prom.promise();
}

// args: bid, key, fields_array, fn_accept, fn_reject
function _hmget() {
    if (arguments == null || arguments.length < 3) {
        debug.log("error: invalid arguments");
    } else {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        var x = [G.sid];
        x = x.concat(args.slice(0, 2));
        x = x.concat(args[2].slice(0));
        x = x.concat(args.slice(3));
        G.leClient.hmget.apply(null, x);
    }
}

function stringFromTimeStamp(ts) {
    var date = new Date(ts * 1000);
    var d = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return d + "  " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}


var mainhtml = '<div id="loadZone" ng-controller="appController" class="novel">\n  <div class="novel-nav">\n    <div class="novel-title">{{chapName}}</div>\n<div class="f14 c-999 mt4">小说：{{novelName}}&nbsp;&nbsp;&nbsp;作者：{{author}}&nbsp;&nbsp;&nbsp;更新时间：{{timestamp}}</div>\n  </div>\n      <div class="novel-info" ng-bind-html="body"></div>\n  </div>\n</div>';


var novelcss = "/*私语小说*/\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\nfiedldset,\ninput,\ntextarea,\nbotton,\nselect,\np,\nspan,\ni,\nem,\nb,\nblockquote,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nfieldset,\nimg {\n  border: 0;\n}\n\naddress,\ncaption,\ncite,\ncode,\ndfn,\nem,\nstrong,\nth,\nvar {\n  font-style: normal;\n  font-weight: normal;\n}\n\nol,\nul,\nli {\n  list-style: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nq:before,\ne:after {\n  content: '';\n}\n\nabbr,\nacronym {\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  outline: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  vertical-align: middle;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  resize: none;\n  outline: 0;\n}\n\nbody {\n  background: #efeeec;\n  color: #666;\n  font-family: tahoma, arial,\"΢���ź�\",\"Microsoft Yahei\";\n  font-size: 14px;\n  font-size-adjust: none;\n  font-stretch: normal;\n}\n\n.f14 {\n  font-size: 14px;\n}\n\n.c-999 {\n  color: #999;\n}\n\n.mt4 {\n  margin-top: 4px;\n}\n\n.novel {\n  width: 670px;\n  background: #f6f4ec;\n  box-shadow: 0 0 2px 2px rgba(0,0,0,0.10);\n  padding: 0 65px;\n  position: relative;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.novel-nav {\n  position: fixed;\n  z-index: 55;\n  border-bottom: 1px solid #dedcd6;\n  background: #f6f4ec;\n  width: 670px;\n  padding: 15px 0;\n}\n\n.novel-title {\n  font-size: 28px;\n  color: #8f2626;\n}\n\n.novel-info {\n  margin-top: 100px;\n  font-size: 16px;\n  color: #474747;\n  line-height: 30px;\n}\n\n.novel-info p {\n  text-indent: 2em;\n}\n\n/*私语小说 end*/";