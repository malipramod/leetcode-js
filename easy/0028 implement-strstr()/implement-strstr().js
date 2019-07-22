/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length == 0 || needle == null) return 0;

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let j = 0;
        while (j < needle.length) {
            if (haystack[i + j] != needle[j])
                break;
            j++;
        }
        if (j >= needle.length)
            return i;
    }
    return -1;
};

// var strStr = function (haystack, needle) {
//     return haystack.indexOf(needle)
// };

console.log(strStr("hello", "ll"))