var maxArea = function (height) {
    if (height.length < 2) return 0;
    let memo = [];
    for (i = 0; i < height.length; i++) {
        memo.push(new Array(height.length-1).fill([0,0,0,0]));
    }
    let maxArea = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let heightDiff = Math.min(height[j], height[i]);
            let indexDiff = j-i;
            memo[i][j] = [height[i], height[j], heightDiff, indexDiff];
            if((heightDiff*indexDiff)>maxArea){
                maxArea = heightDiff * indexDiff;
            }
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));