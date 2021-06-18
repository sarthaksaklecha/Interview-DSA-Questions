// https://leetcode.com/problems/palindrome-partitioning/

// Best
class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<List<String>>();
        List<String> currPartition = new ArrayList<String>();
        helper(s,0,currPartition,result);
        return result;
    }
    
    public void helper(String s,int partitionIndex,List<String> currPartition,List<List<String>> result){
        if(partitionIndex == s.length()){
            result.add(currPartition);
            return;
        }
        for(int i=partitionIndex;i<s.length();i++){
            if(isPalindrome(s.substring(partitionIndex,i+1))){
                List<String> updatedPartition = new ArrayList<String>(currPartition);
                updatedPartition.add(s.substring(partitionIndex,i+1));
                helper(s,i+1,updatedPartition,result);
            } 
        }
    }
    
    public Boolean isPalindrome(String s){
        int p1 = 0;
        int p2 = s.length()-1;
        while(p1<p2){
            if(s.charAt(p1)!=s.charAt(p2)) return false;
            p1++;p2--;
        }
        return true;
    }
}