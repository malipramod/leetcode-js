/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let myMap = {};
    for (let i = 0; i < nums.length; i++) { 
        myMap[nums[i]] = myMap[nums[i]] == undefined ? 1 : ++myMap[nums[i]];
    }
    for(key in myMap){
        if(myMap[key] === 1) return Math.floor(key)
    }
};

console.log(singleNumber([4,1,2,1,2]))