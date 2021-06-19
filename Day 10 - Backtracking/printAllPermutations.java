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


// Best
// we don't need another ds to store the combination as well the isTaken array will also not be needed
// we have a variable index which will keep track of the cuurent index, 
// we will swap all the values in the array with index and call the function recursively on it
// for e.g              *1* 23 
//          1 *2* 3         2 *1* 3             3 *2* 1  (swap 0,0 swap 0,1, swap 0,2)
// 1 2 *3*  1 3 *2*    2 1 *3*   2 3 *1*      3 2 *1*   3 1 *2*
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        int index = 0;
        helper(nums,index,result);
        return result;
    }
    public void helper(int[] nums,int index,List<List<Integer>> result){
        if(index==nums.length){
            List<Integer> combination = new ArrayList<Integer>();
            for(int i : nums) combination.add(i);
            result.add(combination);
            return;
        };
        for(int i=index;i<nums.length;i++){
            // swap elements at index and i
            swap(nums,index,i);
            helper(nums,index+1,result);
            swap(nums,index,i);
        }
    }
    public void swap(int[] nums,int ind1,int ind2){
        int temp = nums[ind1];
        nums[ind1] = nums[ind2];
        nums[ind2] = temp;
        return;
    }
}