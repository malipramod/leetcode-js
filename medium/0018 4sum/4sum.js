/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            
            for (let k = j + 1, l = nums.length - 1; k < l;) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum == target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]]);
                    while (k < l && nums[k] === nums[++k]);
                    while (k < l && nums[l] === nums[--l]);
                    // l--;
                    // k++;
                }else if(sum>target){
                    l--;
                }else{
                    k++;
                }

            }
        }
    }
    return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);;
};

console.log(fourSum([-3,-2,-1,0,0,1,2,3]
    ,0));