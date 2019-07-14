/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];
    nums.sort((a, b) => {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    })
    for (let i = 0; i < nums.length - 2; i++) {
        if(nums[i]>0)
            break;
        for (let j = i + 1, k = nums.length - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] == 0) {
                result.push([nums[i],nums[j],nums[k]]);
                //Works fine, but fails as 'Time Limit Exceeded' use case
                // k--;
                // j++;
                //Optimized So, can work with 'Time Limit Exceeded' use case
                while (j < k && nums[j] === nums[++j]);
                while (j < k && nums[k] === nums[--k]);
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))