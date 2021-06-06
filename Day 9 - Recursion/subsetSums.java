// https://practice.geeksforgeeks.org/problems/subset-sums2234/1
// easy 

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