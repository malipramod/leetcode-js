/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let n = s.length;
    let res = '';
    let dp = [];
    while (dp.push(new Array(n).fill(-1)) < n);

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            dp[i][j] = s[i] === s[j] && ((j - i < 3) || dp[i + 1][j - 1]);
            if (dp[i][j] === undefined) {
                console.log(i, j, s[i], s[j], dp[i + 1][j - 1])
            }
            if (dp[i][j]) {
                let tmp = s.substring(i, j + 1);
                if (tmp.length > res.length) res = tmp;
            }

        }
    }
    return res;
};
