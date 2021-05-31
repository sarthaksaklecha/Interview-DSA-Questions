// https://leetcode.com/problems/reach-a-number/
// Imp

class Solution {
    public int reachNumber(int target) {
        // due to symmetry negative and positive will have the same steps
        target = Math.abs(target);
        int step = 0;
        int sum = 0;
        int n=1;
        // find the sum that is just equal or greater than target
        while(sum<target){
            sum+=n++;
            step++;
        };
        if(sum==target) return step;
        // now find the difference between this sum and target;
        int difference = sum - target;
        // see comment after solution that explains well
        // see the example and try to understand
        // if difference is even then we can change one postive sign 
        // to negative to obtain the target 
        // eg : 1+2+3+4+5+6 = 21
        // if we change any of the sign sum will reduce by double of that number
        // 1+2+3+4-5+6 // sum gets reduced by 10 i.e 5*2
        if(difference%2==0) return step;
        while(difference%2!=0){
            sum+=n;
            difference = sum-target;
            n++;
            step++;
        }
        return step;
    }
}
// Step 2.1: If the difference value is even, we can return the current step.
// Step 2.2: If the difference value is odd, we need to increase the step until the difference is even (at most 2 more steps needed).
// Eg:
// target = 5
// Step 0: target = 5.
// Step 1: sum = 1 + 2 + 3 = 6 > 5, step = 3.
// Step 2: Difference = 6 - 5 = 1. Since the difference is an odd value, we will not reach the target by switching any right move to the left. So we increase our step.
// Step 2.2: We need to increase step by 2 to get an even difference (i.e. 1 + 2 + 3 + 4 + 5 = 15, now step = 5, difference = 15 - 5 = 10). 
// Now that we have an even difference, we can simply switch any move to the left (i.e. change + to -) as long as the summation of the changed value equals to half of the difference. We can switch 1 and 4 or 2 and 3 or 5.