const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = "hello world!";

const signer = createSign('rsa-sha256');

signer.update(message);

const signature = signer.sign(privateKey, 'hex');



const verifier = createVerify('rsa-sha256');
verifier.update(message);

console.log(verifier.verify(publicKey, signature, 'hex'));



