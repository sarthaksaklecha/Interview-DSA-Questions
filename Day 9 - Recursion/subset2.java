// https://leetcode.com/problems/subsets-ii/
// IMPORTANT

// see video once.
// recursion tree will make the solution clear.
class Solution {
    List<List<Integer>> result = new ArrayList<List<Integer>>();
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<Integer> sub = new ArrayList<Integer>();
        Arrays.sort(nums);
        subsets(nums,0,sub);
        return result;
    }
    public void subsets(int[] nums, int index,List<Integer> sub){
        result.add(sub);
        if(index==nums.length) return; 
        int prev = nums[index] -1;
        for(int i=index;i<nums.length;i++){
            if(nums[i]!=prev){
                List<Integer> next = new ArrayList<Integer>(sub);
                next.add(nums[i]);
                subsets(nums,i+1,next);  
                prev = nums[i];
            }
        }
    }
}