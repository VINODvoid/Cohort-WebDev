const crypto = require('crypto');

function customSha256(prefix){
    let input = 0;
    while (true) {
        let inputStr = input.toString();

        let hash = crypto.createHash("sha256").update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input : inputStr,hash:hash};
        }
        input++;
    }
}
const result = customSha256('00000')
console.log(result.input);
console.log(result.hash)