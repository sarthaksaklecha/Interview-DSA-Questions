// https://leetcode.com/problems/3sum/
// IMP

class Solution {
    // Brute
    // 3 for loops and a set to keep the unique values
    public List<List<Integer>> threeSumBrute(int[] nums){
        Set<List<Integer>> set = new HashSet<List<Integer>>();
        for(int i=0;i<nums.length-2;i++){
            for(int j=i+1;j<nums.length-1;j++){
                for(int k=j+1;k<nums.length;k++){
                    if(nums[i]+nums[j]+nums[k] == 0){
                        List<Integer> triplet = new ArrayList<Integer>(List.of(nums[i],nums[j],nums[k]));
                        Collections.sort(triplet);
                        set.add(triplet);
                    }
                }
            }
        }
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        for(List<Integer> iterator : set){
            result.add(iterator);
        }
        return result;
    }

    // Better
    // hash map to store all the elements along with 
    // their indices (repeated elements will be stored with the index of the last repeated element)
    // 2 for loops for the first 2 numbers then retrieve 3rdd numbeer from hashmap and use it 
    // only if the index of that element is ahead of both the elements.
    public List<List<Integer>> threeSumBetter(int[] nums){
        HashMap<Integer,Integer> hm = new HashMap<Integer,Integer>();
        Set<List<Integer>> set = new HashSet<List<Integer>>();
        int i;
        for(i=0;i<nums.length;i++){
            hm.put(nums[i],i);
        }
        for(i=0;i<nums.length-2;i++){
            for(int j=i+1;j<nums.length-1;j++){
                if(hm.containsKey(-(nums[i]+nums[j]))){
                    if(hm.get(-(nums[i]+nums[j]))>j){
                        List<Integer> triplet = new ArrayList<Integer>(List.of(nums[i],nums[j],-(nums[i]+nums[j])));
                        Collections.sort(triplet);
                        set.add(triplet);
                    }
                }
            }
        }
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        for(List<Integer> iterator : set){
            result.add(iterator);
        }
        return result;
    }

    // Best
    // Sort the array first 
    // for the first element use a for loop
    // for the next 2 elements use the 2 pointer approach
    // p1 will be start and p2 will be the end
    // IMP : to skip repeating triplets we move the iterators to the
    // next unique value at the end of every iteration
    public List<List<Integer>> threeSumBest(int[] nums) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        // to use 2 pointers we need to sort the array
        if(nums.length < 3) return result;
        Arrays.sort(nums);
        int sum = 0;
        for(int i=0;i<nums.length-2;i++){
            // moving i to the next unique value
            if(i!=0 && nums[i]==nums[i-1]) continue;
            sum=nums[i];
            int p1 = i+1;
            int p2 = nums.length-1;
            while(p1<p2){
                int remainder = nums[p1] + nums[p2];
                if(sum+remainder == 0){
                    List<Integer> triplet = new ArrayList<Integer>(List.of(nums[i], nums[p1], nums[p2]));
                    result.add(triplet);
                    p1++;p2--;
                    // moving p1 and p2 to the next unique values
                    while(p1<p2 && nums[p1]==nums[p1-1]) p1++;
                    while(p1<p2 && nums[p2+1]== nums[p2]) p2--;
                }else if(sum+remainder > 0){
                    p2--;
                    while(p1<p2 && nums[p2]==nums[p2+1]) p2--;
                }else{
                    p1++;
                    while(p1<p2 && nums[p1]==nums[p1-1]) p1++;
                }
            }
        }
        return result;
    }
}