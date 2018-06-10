//console.log(module.paths);
var name = 'suzy'
function printName() {
    console.log(name);
}
function printFullName(firstName) {
    console.log(firstName + name);
}

module.exports = {
    printName : printName,
    printFullName : printFullName
}

var nameModule = require('./testCommonJs.js');
nameModule.printName();
nameModule.printFullName('56 ');