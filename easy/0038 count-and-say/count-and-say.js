/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n == 1) return "1";
    if (n == 2) return "11";

    let res = "11";
    for (let i = 3; i <= n; i++) {
        res += '$';
        let len = res.length;
        let counter = 1;
        let tempStr = "";
        let arr = res.split('');

        for (let j = 1; j < len; j++) {
            if (arr[j] !== arr[j - 1]) {
                tempStr += counter + 0;
                tempStr += arr[j - 1];
                counter = 1;

            } else
                counter++;
        }
        res = tempStr;
    }
    return res;
};

console.log(countAndSay(10))