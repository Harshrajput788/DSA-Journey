function trap(height: number[]): number {
    let lmax = [];
    let rmax = [];

    lmax[0] = height[0];
    rmax[height.length-1] = height[height.length-1];

    for(let i = 1;i<height.length;i++){
        lmax[i] = Math.max(lmax[i-1],height[i]);
    }

     for(let i = height.length-2;i>=0;i--){
        rmax[i] = Math.max(rmax[i+1],height[i]);
    }

    let ans = 0;

    for(let i = 0;i<height.length;i++){
        ans += Math.min(lmax[i],rmax[i]) - height[i];
    }

    return ans

};