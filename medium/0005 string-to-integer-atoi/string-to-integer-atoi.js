/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    let number = '';

    str = str.trimStart();
    let sign = 1;
    let counter = 0;

    if (str.length >= 1 && isNaN(str[0])) {
        if (str[0] == '-') {
            counter = 1;
            sign = -1;
        } else if (str[0] == '+') {
            counter = 1;
        }
    }

    for (let i = counter; i < str.length; i++) {
        if (str[i] !== ' ' && !isNaN(str[i])) {
            number += str[i];
        } else if (isNaN(str[i]) && !number) {
            return 0;
        } else {
            break;
        }
    }

    if (number * sign > INT_MAX)
        return INT_MAX;
    else if (number * sign < INT_MIN)
        return INT_MIN;
    else
        return number * sign;
};

console.log(myAtoi('-42'))
console.log(myAtoi('+'))
console.log(myAtoi('91283472332'))
console.log(myAtoi('-91283472332'))
console.log(myAtoi('words and 987'))
console.log(myAtoi('4193 with words'))
console.log(myAtoi('42'))
console.log(myAtoi('1'))
console.log(myAtoi('2 ==2'))
console.log(myAtoi("3.14159"))


