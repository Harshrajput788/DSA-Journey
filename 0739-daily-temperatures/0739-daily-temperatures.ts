function dailyTemperatures(nums: number[]): number[] {
    const result = new Array(nums.length).fill(0)

    const stack: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        while (
            stack.length > 0 &&
            nums[i] > nums[stack[stack.length - 1]]
        ) {
            const index = stack.pop()!;
            result[index] = i-index;
        }

        stack.push(i);
    }

    return result;
};