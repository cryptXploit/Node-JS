const {totalmem, freemem} = require('os');

console.log('Total Memory:', totalmem());
console.log('Free Memory:', freemem());