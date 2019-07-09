/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        numsMap.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numsMap.get(complement) && numsMap.get(complement) !== i) {
            return [i, numsMap.get(complement)];
        }
    }
    return [];
};