getGlobals()

// app
G.app.controller('nrCtrl', function($scope, $sce, $q) {
    if (G.client == null) {
        G.client = hprose.Client.create("ws://" + G.IPList[0] + "/ws/", ["login", "register",
            "getvar", "act", "setdata", "set", "get", "del", "hmclear", "hset", "hget", "hlen", "hkeys",
            "hgetall", "hmset", "hmget", "exit", "restart", "lpush", "lpop", "rpush", "rpop", "lrange", "zadd", "zrange",
            "sendmsg", "readmsg", "pullmsg", "invite", "accept", "test", "veni", "sethostip", "proxyget",
            "createinvcode", "getinvcodeinfo", "updateinvcode", "deleteinvcode",
            "setinvtemplate", "getinvtemplate", "getappdownloadkey"
        ])
    };

    // test
    var body = "测试";
    $scope.novelBody = $sce.trustAsHtml(body);
    $scope.title = "第一回";
    $scope.novelName = "异族";
    document.title = $scope.novelName + "  " + $scope.title;
    $scope.author = "耳根";
    $scope.updateTime = stringFromTimeStamp(1441795170);

    // get novel from leither node
    // login 
    userid = localStorage.userid;
    G.user.ppt = "";

    login(userid, G.user.ppt, $scope, $q).then(loadNovel, null);
});

// test
function tmp_log(e) {
    console.log(e);
}

function getGlobals() {
    // Globals
    setLog(true);
    G.app = angular.module('nrApp', []);
    G.client = null;
    G.IPList = ["121.43.154.122:1024"];
    G.user = {};

    return G;
}

function login(bid, ppt, $scope, $q) {
    var defered = $q.defer();
    if (userid == null) {
        console.log("register...");
        G.client.register(function(data) {
            localStorage.userid = data
            console.log("register userid=", data);
            G.user.bid = data;
            defered.resolve(_login($scope, $q))
        });
    } else {
        console.log("get userid=", userid);
        G.user.bid = userid
        defered.resolve(_login($scope, $q));
    }

    return defered.promise;
}

function _login($scope, $q) {
    var defered = $q.defer();
    G.client.login(G.user.bid, G.user.ppt, function(loginData) {
        G.user.sid = loginData.sid;
        console.log("login ok sid=" + G.user.sid)
        $scope.$apply();
        defered.resolve(G);
    }, function(name, err) {
        console.log(err);
        $scope.$apply();
        defered.reject(G);
    });
    return defered.promise;
}

function loadNovel(e) {
    console.log("loadNovel ", e);
}

function stringFromTimeStamp(ts) {
    var date = new Date(ts * 1000);
    var d = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return d + "  " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}