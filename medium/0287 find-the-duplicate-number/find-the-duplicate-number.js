/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums.filter(num => num === nums[i]).length > 1) return nums[i];
    }
};

var findDuplicate1 = function(nums) {
    let mySet = new Set();
    for(let i=0;i<nums.length;i++){
        if(mySet.has(nums[i]))
            return nums[i]    
        mySet.add(nums[i])
        
    }
};

var findDuplicate3 = function(nums) {
    let myMap = {};
    for(let i=0;i<nums.length;i++){
        if(myMap[nums[i]] != undefined)
            return nums[i]    
        myMap[nums[i]] = i;        
    }
};

console.log(findDuplicate3([1,3,4,2,2]))