// https://leetcode.com/problems/combination-sum/

// pick or not pick
// if picking reduce target and repeat;
// keep an array list to track the combinations
// do not increase index after picking as we can take any element
// any number of times
class Solution {
    List<List<Integer>> result = new ArrayList<List<Integer>>();
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<Integer> list = new ArrayList<Integer>();
        helper(candidates,target,0,list);
        return result;
    }
    public void helper(int[] arr, int target, int index, List<Integer> combination){
        if(target == 0){
            result.add(combination); 
            return;
        };
        if(index >= arr.length) return;
        if(arr[index] <= target){
            List<Integer> updatedCombination = new ArrayList<Integer>(combination);
            updatedCombination.add(arr[index]);
            helper(arr,target-arr[index],index,updatedCombination);
        }
        helper(arr,target,index+1,combination);
    }
}