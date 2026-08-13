/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let n = nums.length;
    k %= n;
    
    const reverse = (i:number,j:number)=>{
        while(i<=j){
            [nums[i],nums[j]]= [nums[j],nums[i]];
            j--;
            i++;
        }
    }

    reverse(0,n-1);
    reverse(0,k-1);
    reverse(k,n-1);

};