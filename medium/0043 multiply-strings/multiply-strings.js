/**
 * Fails as number is out of range: Second example
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply1 = function (num1, num2) {
    return (num1 * num2 * 1).toString();
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let m = num1.length, n = num2.length;
    let res = Array(m + n).fill(0);
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let temp = +num1.charAt(i) * +num2.charAt(j);
            let low = i + j + 1;
            let high = i + j;
            temp += res[low];
            res[low] = temp % 10;
            res[high] += Math.trunc(temp / 10);
        }
    }
    while (res[0] === 0) {
        res.shift();
    }
    return res.length === 0 ? "0" : res.join('');
};

console.log(multiply("2","3"));
console.log(multiply("123456789", "987654321"));