class Solution {
    private int reverse(int a,int b){
        while(a != 0){
            int last = a%10;
            b = b*10+last;
            a = a/10;
        }
        return b;
    }

    public boolean isSameAfterReversals(int num) {
        int rev = num;
        int rev1 = 0;
        int rev2 = 0;

        rev1 = reverse(rev,rev1);
        rev2 = reverse(rev1,rev2);

        return rev2 == num;
    }
}