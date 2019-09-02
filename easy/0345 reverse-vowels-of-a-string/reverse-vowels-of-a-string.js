/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i = 0, j = s.length - 1;
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let result=[];
    while (i <= j) {
        if (vowels.includes(s[i]) && vowels.includes(s[j])) {
            result[i] = s[j];
            result[j] = s[i];
            i++;
            j--;
        }else if(vowels.includes(s[i])){
            result[j] = s[j];
            j--;
        }else if(vowels.includes(s[j])){
            result[i] = s[i];
            i++;
        }else{
            result[j] = s[j];
            result[i] = s[i];
            i++,j--;
        }
    }
    return result.join('');
};

var reverseVowels1 = function(s) {
    let vowels = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/gi, () => vowels.pop());
};

console.log(reverseVowels("leetcode"));
