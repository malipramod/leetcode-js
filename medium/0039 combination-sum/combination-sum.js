/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    var result = [];
    search(0, [], target);
    return result;

    function search(current, tempResult, leftoverTarget) {
        if (leftoverTarget === 0) result.push(tempResult.slice());
        if (current === candidates.length) return;
        if (leftoverTarget <= 0) return;

        tempResult.push(candidates[current]);
        search(current, tempResult, leftoverTarget - candidates[current]);
        tempResult.pop();
        search(current + 1, tempResult, leftoverTarget);
    }
};

console.log(combinationSum([2, 3, 6, 7], 7))
console.log(combinationSum([2,3,5], 8))