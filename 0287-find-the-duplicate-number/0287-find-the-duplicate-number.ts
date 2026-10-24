function findDuplicate(nums: number[]): number {
    const map = new Map<number,number>();

    for(let i = 0;i<nums.length;i++){
        if(map.has(nums[i])) return nums[i];

        map.set(nums[i],i)
    }

    return -1;
};