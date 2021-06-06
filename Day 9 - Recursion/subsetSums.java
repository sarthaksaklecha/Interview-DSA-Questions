// https://practice.geeksforgeeks.org/problems/subset-sums2234/1
// easy 

// https://leetcode.com/problems/partition-equal-subset-sum/
// similar question but imp (dp)

// To find all possible subset sums we compute all the possible combinations
// for each element either we can pick it (add it to the sum) or not pick it
// so we devise a recursive function which will exactly do this
// we will add the sum to a resultant array list only when we have picked/not picked the last element
// for e.g ->
// {3, 1, 2}
// x   x  x  sum = 0
// p   x  x  sum = 3
// p   p  p  sum = 6
// x   x  p  sum = 2

class Solution{
    ArrayList<Integer> result = new ArrayList<Integer>();
    ArrayList<Integer> subsetSums(ArrayList<Integer> arr, int N){
        allSubsets(arr,0,0);
        // returning the result in ascending order;
        Collections.sort(result);
        return result;
    }
    
    // recursive function
    public void allSubsets(ArrayList<Integer> arr,int sum,int index){
        if(index >= arr.size()){
            result.add(sum);
            return;
        }
        // including the current element
        allSubsets(arr,sum+arr.get(index),index+1);
        // excludng the current elemet ->
        allSubsets(arr,sum,index+1);
    }
}

// if the sum of all the elements is not divisible by 0 
//  we can't split the array into 2 equal subsets
// here we calculate the subset sum and check if it is equal to total/2
// and we return true if we find, also we memoize it using a hasMap
// KNAPSACK 0/1 METHOD CAN ALSO BE USED. USING A DP[][];
class Solution {
    HashMap<Integer,Boolean> hm = new HashMap<Integer,Boolean>();
    public boolean canPartition(int[] nums) {
        int sum = 0;
        for(int num : nums){
            sum+=num;
        }
        if(sum%2!=0) return false;
        return subSets(nums,0,0,sum/2);
    }
    
    public Boolean subSets(int[] nums, int sum, int index, int target){
        if(hm.containsKey(sum)) return hm.get(sum);
        if(sum>target){
            hm.put(sum,false);
            return false;
        };
        if(index >= nums.length){
            if(sum == target){
                hm.put(sum,true);
                return true;
            }else{
                hm.put(sum,false);
                return false;
            }
        }
        // including the current element and not including the element->
        return subSets(nums,sum+nums[index],index+1,target) || subSets(nums,sum,index+1,target) ;
        
    }
}