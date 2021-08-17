const twofactor = require("node-2fa");
const newSecret = twofactor.generateSecret({ name: "My Awesome App", account: "johndoe" });
const newToken = twofactor.generateToken(newSecret['secret']);
console.log(newSecret['secret'])
console.log(newToken['token'])
const result = twofactor.verifyToken(newSecret['secret'], newToken['token']);
console.log(result);
const result1 = twofactor.verifyToken(newSecret['secret'], '012');
console.log(result1);
const result11 = twofactor.verifyToken('MVNTKLTZ4I3SZJKPNYBP6M3QNFME3YFS', '604648');
console.log(result11);