var fs = require('fs');

fs.readFile('package.json',function (err,file) {
    console.log('读取文件完成');
});
console.log('读取文件开始');