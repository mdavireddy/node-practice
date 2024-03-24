const { createHash } = require('crypto');


function hash(input) {
    return createHash('sha256').update(input).digest('hex');
};


function hash_base64(input) {
    return createHash('sha256').update(input).digest('base64');
};



console.log(hash("Manohar"));
console.log(hash_base64("Manohar"));