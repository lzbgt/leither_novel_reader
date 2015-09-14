var fs = require('fs'),
    html2js = require('html-to-js'),
    read = fs.readFileSync;

var html = read('app.html', 'utf8');
var js = html2js(html);
console.log(js);