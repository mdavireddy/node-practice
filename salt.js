const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');


var users = [];

function signup(userName, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');;

    users.push({ userName : userName, password: `${salt}:${hashedPassword}` })

}


function login(userName, password) {

    const user = users.find(v => v.userName === userName);
  
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
  
    const keyBuffer = Buffer.from(key, "hex");
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    return match;
}

signup('hello', 'hello123');

console.log("Valid login : ", login('hello', 'hello1'))
console.log("Valid login : ", login('hello', 'hello123'))



