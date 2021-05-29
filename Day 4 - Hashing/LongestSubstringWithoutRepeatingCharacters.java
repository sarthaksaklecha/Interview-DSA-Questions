class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> hashMap = new HashMap<Character,Integer>();
        int longest = 0, count=0;
        int end =0,start=0;
        while(end < s.length()){
            if(hashMap.containsKey(s.charAt(end))){
                start = Math.max(start,hashMap.get(s.charAt(end))+1);
            }
            longest = Math.max(longest, end-start+1);
            hashMap.put(s.charAt(end),end);
            end++;
        }
        return longest;
    }
}