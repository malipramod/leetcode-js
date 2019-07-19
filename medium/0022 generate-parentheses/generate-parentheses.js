/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];
    backtrack(result, "", 0, 0, n);
    return result;
};

const backtrack = function (result, current, open, close, max) {
    if (current.length == max * 2 && isValid(current)) {
        result.push(current);
        return;
    }

    if (open < max)
        backtrack(result, current + "(", open + 1, close, max);
    if (close < max)
        backtrack(result, current + ")", open, close + 1, max);
}

const isValid = function(pattern){
    let valid =0;
    for(let i=0;i<pattern.length;i++){
        if(pattern[i]=='(')
            valid++;
        else
            valid--;
        
        if(valid<0)
            return false;
    }
    return valid==0;
}

console.log(generateParenthesis(3))