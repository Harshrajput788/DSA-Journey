class Solution {
    public int findGCD(int[] nums) {
        int max = nums[0];
        int min = nums[0];

        for(int i = 0;i<nums.length;i++){
            if(min > nums[i]) min = nums[i];
            if(nums[i] > max) max = nums[i];
        }

        return GCD(max,min);

    }

    private int GCD (int max,int min){
        int g = 1;
        int i = 2;

        while(i <= max){
            if(max%i == 0 && min%i == 0) g = i;
            i++;
        }
        return g;
    }
}