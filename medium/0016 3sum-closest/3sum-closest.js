/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let result = Infinity;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1, k = nums.length - 1; j < k;) {
            let sum = nums[i] + nums[j] + nums[k];

            if (Math.abs((sum - target)) <= Math.abs(result - target))
                result = sum;
            if (sum > target)
                k--
            else
                j++;
        }
    }
    return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], -1))