/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = new Map();
       
    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i];
        
        if (numsMap.get(complement) >= 0) {
            return [numsMap.get(complement),i];
        }else{
            numsMap.set(nums[i],i);
        }
    }
    return [];
};