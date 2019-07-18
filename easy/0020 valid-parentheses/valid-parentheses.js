/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s) return true;
    let stack = [];
    let parMap = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    s=s.split('');
    for ( i = 0;i < s.length;i++) {
        if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
            stack.push(s[i]);
        } else if (s[i] == '}' || s[i] == ']' || s[i] == ')') {
            let stackTop = stack.pop();
            if (s[i] != parMap[stackTop])
                return false;
        }
    }
    return stack.length == 0;
};

console.log(isValid('{([)}()'))