/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let result = s.split('');
    for (let start = 0; start < s.length - 1; start += 2 * k){
        let i = start; 
        let j = Math.min(start + k - 1, s.length - 1);
        while(i<j){
            let temp = s[i];
            result[i++] = s[j];
            result[j--] = temp;
        }
    }
    return result.join('');
};
var reverseStr1 = function(s, k){
    return (s.substring(0, k).split('').reverse()).join('') + s.substring(k, 2 * k) + (s.substring(2 * k , 2 * k + k).split('').reverse()).join('') + s.substr(2 * k + k, s.length - 1)
}


console.log(reverseStr("krmyfshbspcgtesxnnljhfursyissjnsocgdhgfxubewllxzqhpasguvlrxtkgatzfybprfmmfithphckksnvjkcvnsqgsgosfxc",20))