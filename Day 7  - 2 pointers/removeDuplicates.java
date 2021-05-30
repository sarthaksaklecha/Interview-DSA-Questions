// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Important

class Solution {
    // Brute Force 
    // using a Set to store unique elements;
    public int removeDuplicates(int[] nums){
        Set<Integer> set = new TreeSet<Integer>();
        for(int num : nums) set.add(num);
        int i = 0;
        for(int num : set) nums[i++] = num;
        return i;
    }
    
    // Better (no space still)
    // ""really good for practising basic operations""
    // Simplest possible intuition, we check for
    // repeating Elements, when we find one, we calculate the no of the 
    // repeating elements and we move to the next unique elements and we shift the array
    // no of repeating elements back i.e all we need to do is find the next unique element 
    // and start shifting the elements from there to the place where suplicates started
    public int removeDuplicatesBetter(int[] nums) {
        if(nums.length<=1) return nums.length;
        
        // as the length changes with every iteration
        int length = nums.length;
        int previous = nums[0];
        int i =1;
        while(i<length){
            if(nums[i] == previous){
                // calculate number of repeating elements
                int repeatingElements = 0;
                int iter = i;
                if(nums[iter] == nums[i]){
                    repeatingElements++;
                    iter++;
                }
                //startOfNonRepeating = iter;
                while(iter<length){
                    nums[iter-repeatingElements] = nums[iter];
                    iter++;
                }
                length = length-repeatingElements;
            }else{
                previous = nums[i];
                i++;
            }
        }
        return length;
    }
    
    //Best
    //two pointers
    // i will move only when j lands on a unique element;
    // and i marks the end of the unique array;
    // our aim is to make the unique array to the left of i;
    // dry run for better understanding
    public int removeDuplicatesBest(int[] nums){
        if(nums.length<=1) return nums.length;
        int i = 0;
        int j = 1;
        while(j<nums.length){
            if(nums[i]==nums[j]) j++;
            else{
                i++;
                nums[i] = nums[j];
            }
        }
        return i+1;
    }
}