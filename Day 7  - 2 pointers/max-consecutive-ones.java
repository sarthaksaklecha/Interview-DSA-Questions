// https://leetcode.com/problems/max-consecutive-ones/
// Easy AF

// keep a curr to track current consecutive
// update max if curr>max
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int curr = 0;
        int max = 0;
        for(int num : nums){
            if(num==1){
                curr++;
            }else{
                if(curr>max) max = curr;
                curr = 0;
            }
        }
        return Math.max(max,curr);
    }
}