
console.log(__dirname);
console.log(__filename);

const path = require('path');

console.log(path);

console.log('Directory Name:', path.dirname('/foo/bar/baz/asdf/quux.html'));
console.log('File Extension:', path.extname('index.html'));
console.log('Base Name:', path.basename('/foo/bar/baz/asdf/quux.html'));
console.log('Normalized Path:', path.normalize('/foo/bar//baz/asdf/quux/..'));
console.log('Joined Path:', path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));


const ExtensionName = path.extname('index.html');
console.log("extension Name is:", ExtensionName);

const joinName = path.join(__dirname + "/views");
console.log("joined Name is:", joinName);