var path = require('path'),
fs = require('fs');

module.exports =  function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
    return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}
