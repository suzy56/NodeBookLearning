var http = require('http');
var  querystring = require('querystring');


//监听服务器的request事件
http.createServer(function (req,res) {
    var postData = '';
    req.setEncoding('utf-8');
    // 监听请求的data事件
    req.on('data',function (trunk) {
        console.log('数据。。。');
        postData += trunk;
    });
    // 监听事件的结束
    req.on('end',function () {
        console.log(postData);
        res.end(postData);
    });
}).listen(8080);
console.log('服务器启动完成')

