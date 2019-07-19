var fs = require('fs');

var path = require('path');

var dir = path.join(__dirname, 'temp');
var source = __filename;
var target = path.join(dir, 'target');

fs.mkdir(dir, errorHandler(mkdirped));


function mkdirped() {
    fs.readFile(source, {encoding: 'utf8'}, errorHandler(haveFile));
}

function haveFile(content) {
    fs.writeFile(target, content, errorHandler(wroteFile));
}

function wroteFile() {
    console.log('All done!');
}

function errorHandler(cb) {
    return function(err, result) {
        if (err) {
            handleError(err);
        }
        else {
            cb(result);
        }
    }
}

function handleError(err) {
    console.error(err);
}