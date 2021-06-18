// https://leetcode.com/problems/combination-sum-ii/

// Brute Force Solution
// pick or not pick approach
// we either pick or not pick the number to create a sum
// we maintain a ds which has the current combination
// if the sum == target we add the combination to a set to store unique 
// combinations only
class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Set<List<Integer>> result = new HashSet<List<Integer>>();
        List<Integer> combination = new ArrayList<Integer>();
        helper(candidates,0,target,combination,result);
        List<List<Integer>> uniqueCombinations = new ArrayList<List<Integer>>();
        for(List<Integer> combinations : result){
            uniqueCombinations.add(combinations);
        }
        return uniqueCombinations;
    }
    
    public void helper(int[] candidates, int index, int target, List<Integer> combination,Set<List<Integer>> result){
        if(target == 0){
            Collections.sort(combination);
            result.add(combination);
            return;
        }
        if(index>=candidates.length) return;
        if(candidates[index] <= target){ 
            List<Integer> updatedCombination = new ArrayList<Integer>(combination);
            updatedCombination.add(candidates[index]);
            helper(candidates,index+1,target-candidates[index],updatedCombination,result);  
        };
        helper(candidates,index+1,target,combination,result);
    }
}

// Best Solution
// we create all possible subsets
// [1,2,3,4,5]

//                                    []
//    [1]                        [2]                  [3]            [4]       [5]
// [1,2] [1,3] [1,4] [1,5]    [2,3] [2,4] [2,5] 

class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        List<Integer> combination = new ArrayList<Integer>();
        helper(candidates, 0, target, combination, result);
        return result;
    }
    
    public void helper(int[] candidates, int index, int target, List<Integer> combination, List<List<Integer>> result){
        if(target == 0){
            result.add(combination);
            return;
        };
        if(index >= candidates.length) return;
        if(candidates[index] > target) return;
        int prev = candidates[index]+1; // previous can be anything except candidates[index];
        for(int i=index;i<candidates.length;i++){
            if(candidates[i] == prev) continue;
            if(candidates[i]>target) return;
            prev = candidates[i];
            List<Integer> updatedCombination = new ArrayList<Integer>(combination);
            updatedCombination.add(candidates[i]);
            helper(candidates,i+1,target-candidates[i],updatedCombination,result);
        }
    }
}