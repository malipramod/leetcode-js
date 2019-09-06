/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let cEnd =0, cFar =0, jumps=0;
    for (let i = 0; i < nums.length-1; i++) { 
        cFar = Math.max(nums[i] + i, cFar);
        if(i===cEnd){
            jumps++;
            cEnd = cFar;
        }

    }
    return jumps;
};

console.log(jump([2,3,1,1,4]));