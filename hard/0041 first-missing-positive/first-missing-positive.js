/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    nums.sort((a, b) => a - b);

    if (nums.length == 0 || nums[nums.length - 1] <= 0) return 1;
    for (let i = 0,t=1; i < nums.length; i++) {
        if (nums[i] > t) return t;
        t = nums[i] < t ? t : t + 1;     
    }
    return nums[nums.length - 1] + 1;
};

var firstMissingPositive1 = function (nums) {
    let flag = 1;
    while (nums.includes(flag))
        flag++;
    return flag;
};

console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([7, 8, 9, 11, 12]))


