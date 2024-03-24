const {createHmac} = require('crypto');



console.log(createHmac('sha256', "secret-key").update("hello").digest('hex'));

console.log(createHmac('sha256', "secret-keyq1").update("hello").digest('hex'));


