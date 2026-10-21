function maxSubArray(nums: number[]): number {
    let curr = 0;
    let max = -Infinity;

    for(let i = 0;i<nums.length;i++){
        curr += nums[i];
        max = Math.max(curr,max);
        if(curr < 0){
            curr = 0;
        }
    }
    return max;
};