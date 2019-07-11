/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let memo = [];
    let m = s.length;
    let n = p.length;

    for (let i = 0; i <= m; i++) {
        memo.push(new Array(n + 1).fill(false));
    }
    memo[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                memo[i][j] = memo[i][j - 2] || (i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === '.') && memo[i - 1][j]);
            } else {
                memo[i][j] = i > 0 && memo[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
            }
        }
    }
    return memo[m][n];
};

console.log(isMatch("aaaa", "a*"))