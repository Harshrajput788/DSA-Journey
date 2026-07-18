class Solution {
    public int findGCD(int[] nums) {
        Arrays.sort(nums);

        int max = 1;

        for(int i = 2;i<nums[nums.length-1]+1;i++){
            if(nums[0] % i == 0 && nums[nums.length-1] % i == 0){
                max = i;
            }
        }

        return max; 
    }
}