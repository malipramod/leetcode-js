/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (number) {
    let result = '';
    while (number > 0) {
        if (number >= 1000) {
            result += 'M'.repeat(parseInt(number / 1000));
            number %= 1000;
        }
        else if (number >= 500) {
            if (number < 900) {
                result += 'D'.repeat(parseInt(number / 500));
                number %= 500;
            } else {
                result += 'CM';
                number %= 100;
            }
        }
        else if (number >= 100) {
            if (number < 400) {
                result += 'C'.repeat(parseInt(number / 100));
                number %= 500;
            } else {
                result += 'CD';
                number %= 100;
            }
        }
        else if (number >= 50) {
            if (number < 90) {
                result += 'L'.repeat(parseInt(number / 50));
                number %= 50;
            } else {
                result += 'XC';
                number %= 10;
            }
        }
        else if (number >= 10) {
            if (number < 40) {
                result += 'X'.repeat(parseInt(number / 10));
                number %= 10;
            } else {
                result += 'XL';
                number %= 10;
            }
        }
        else if (number >= 5) {
            if (number < 9) {
                result += 'V'.repeat(parseInt(number / 5));
                number %= 5;
            } else {
                result += 'IX';
                number = 0;
            }
        }
        else if (number >= 1) {
            if (number < 4) {
                result += 'I'.repeat(number);
                number = 0;
            } else {
                result += 'IV'
                number = 0;
            }
        }
    }
    return result;
};

intToRoman(3549);