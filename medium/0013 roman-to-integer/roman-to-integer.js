/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let s1 = getRomalValues(s[i]);
        if (i + 1 < s.length) {
            let s2 = getRomalValues(s[i + 1]);
            if (s1 >= s2) {
                result += s1;
            } else {
                result = result + s2 - s1;
                i++;
            }
        } else {
            result += s1;
            i++;
        }
    }
    return result;
};

var getRomalValues = function (char) {
    switch (char) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}

console.log(romanToInt('MCMXCIV'))