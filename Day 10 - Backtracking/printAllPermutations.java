//

// Brute Force
// we make all possible permutation using recursion
// for example for 123, we choose all possible digits for the first place
// i.e 1_ _, 2_ _, 3_ _, before the next recursive call we mark the number we have taken
// also we add the nummber to a ds, to keep track of our current permutation
// we keep an array isTaken to keep track of the numbers we have taken
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        List<Integer> currPermutation = new ArrayList<Integer>();
        Boolean[] isTaken = new Boolean[nums.length];
        Arrays.fill(isTaken,false);
        helper(nums,isTaken,currPermutation,result);
        return result;
    }
    public void helper(int[] nums,Boolean[] isTaken,List<Integer> currPermutation,List<List<Integer>> result){
        if(currPermutation.size() == nums.length){
            result.add(new ArrayList<Integer>(currPermutation));
            return;
        }
        for(int i=0;i<nums.length;i++){
            if(!isTaken[i]){
                // List<Integer> updatedPermutation = new ArrayList<Integer>(currPermutation);
                // updatedPermutation.add(nums[i]);
                // Boolean[] isTakenUpdated = isTaken.clone();
                // isTakenUpdated[i] = true;
                // helper(nums,isTakenUpdated,updatedPermutation,result);
                currPermutation.add(nums[i]);
                isTaken[i] = true;
                helper(nums,isTaken,currPermutation,result);
                currPermutation.remove(currPermutation.size()-1);
                isTaken[i] = false;
            }
        }
        
    }
}