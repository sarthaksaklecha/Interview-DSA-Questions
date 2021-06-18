// Very Very Important
// https://leetcode.com/problems/permutation-sequence/
// look at the video for explanation

// Best
class Solution {
    public String getPermutation(int n, int k) {
        // creating a ds to store all the numbers and 
        // calculating the factorial of n-1 (size of groups)
        int fact = 1;
        int i;
        List<Integer> numbers = new ArrayList<Integer>();
        for(i=1;i<n;i++){
            fact = fact*i;
            numbers.add(i);
        };
        numbers.add(i); // adding the last number (factorial was calculated for n-1)
        k = k-1; // indexing from 0 so k-1th permutation is the answer
        String ans = "";
        while(true){
            ans = ans + numbers.get(k/fact); // k/fact will give the index of the req digit in the numbers list
            numbers.remove(k/fact);
            if(numbers.size()==0) break;
            k = k%fact;
            fact = fact/numbers.size();
        }
        return ans;
    }
}