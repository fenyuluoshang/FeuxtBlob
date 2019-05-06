const NodeRSA = require('node-rsa')
const fs = require('fs')
const path = require('path')
const key = new NodeRSA(fs.readFileSync(path.join(__dirname, '../key/admin.pub')))
const data = fs.readFileSync(path.join(__dirname, './test.md'));
// console.log(data.toString())
let out = key.encrypt(data.toString(),'base64');
console.log(out)

fs.writeFileSync(path.join(__dirname, './test.out'), out)