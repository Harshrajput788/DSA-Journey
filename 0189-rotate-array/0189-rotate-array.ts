/**
 Do not return anything, modify nums in-place instead.
 */
function reverse(nums:number[],i:number,j:number):void{
    while(i<=j){
        [nums[i],nums[j]]= [nums[j],nums[i]];
        j--;
        i++;
    }
}

function rotate(nums: number[], k: number): void {
    let n = nums.length;
    k %= n;
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);

};