// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// very important see leetcode solution best
// see java solution for most optimal approach

// Brute Force 
// 2 for loops and a hashmap 

const lengthOfLongestSubstringBruteForce = (s) =>{
    let memo = {};
    let max  = 0;
    let curr = 0
    for(let i=0;i<s.length;i++){
        memo = {}
        for(let j=i;j<s.length;j++){
            if(s[j] in memo){
                curr>max ? max=curr : null
                break;
            }else{
                curr++;
                memo[s[j]] = true;
            }
        }
        curr>max ? max=curr: null // if loop ends without updating max
        curr =0
    }
    return max
}

// Best 
// O(n)
// keep a memo to track the current largest substring
// when a repeating element comes we move the iterator
// to the place just ahead of the last position of the 
// repeating character (memo[s[i]]+1), also we
// check if the currMax has exceeded the max and henceforth update max
// we find the last position by looking in the memo
// we clear the memo after we find a repeating charater
// see code for better understanding


var lengthOfLongestSubstring = function(s) {
    let memo = {};
    let currMax = 0;
    let max = 0
    let i=0
    while(i<s.length){
        if(s[i] in memo){
            currMax > max ? max=currMax : null;
            currMax = 0;
            i = memo[s[i]]+1;
            memo = {};
        }else{
            currMax++;
            memo[s[i]] = i;
            i++;
        }
    }
    // if the loop finshes, we need to update max with currMax again for the edge case
    currMax>max ? max = currMax : null
    return max
};