/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0, w = 0;
    for (let i = 0; i < chars.length; i++) { 
        if (i === chars.length - 1 || chars[i] !== chars[i + 1]) { 
            chars[w++] = chars[index];
            if (i > index) { 
                let charsArray = Array.from(String((i - index + 1)), Number);
                for(let j=0;j<charsArray.length;j++){
                    chars[w++] = charsArray[j].toString();
                }
            }
            index = i + 1;
        }
    }
    return w;
};

console.log(compress(["a","a","b","b","c","c","c"]))
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))
console.log(compress(["a"]))
console.log(compress([]))