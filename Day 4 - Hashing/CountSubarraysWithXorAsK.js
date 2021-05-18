// IMPORTANT
// Q1 :  https://www.geeksforgeeks.org/count-number-subarrays-given-xor/
// Q2 : https://leetcode.com/problems/xor-queries-of-a-subarray/submissions/
// Q3 : https://leetcode.com/problems/subarray-sum-equals-k/submissions/

// Brute Force
// 2 for loops to go through each subarray
// not solving sue to repetition

// Best
// HIGHLY RECOMMENDED to see longestSubaaryWith0Sum before

// So in all the 3 problems there's a common logic
// we store the sum/xor uptil each element in a memo
// then we check for each elemet if the counterpart i.e
// in case of subarraySum we check for currSum-reqSum in the memo
// for xor one we check for reqXOR^currXOR in the memo
// becuase if the counterpart exists then we know that the req xor/sum
// will also exist
 
// Q3
// [2, 3, 1, 3, 4, 2, 2]
//  2  5  6  9  13 15 17
var subarraySum = function(nums, k) {
    let memo = {};
    let sum = 0;
    let count = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum === k){ 
            count++;
        }
        if(sum-k in memo){ 
            count+= memo[sum-k];
        }
        sum in memo ? memo[sum]++ : memo[sum]=1;
    }
    return count
};

// Q2
var xorQueries = function(arr, queries) {
    let memo = {};
    let xor = 0;
    for(let i=0;i<arr.length;i++){
        xor = xor^arr[i];
        memo[i] = xor; 
    };
    let result = [];
    for(let query of queries){
        result.push(memo[query[1]]^(memo[query[0]-1] ? memo[query[0]-1] : 0))
    }
    return result
};

// Q1
// IMPORTANT: always use brackets while using ^
// the answer chamges without brackets
// weird js
// a = b^k
// a^k = b
//  ----a-----
//  --b-|---k-

let CountSubarraysWithXorAsK = (arr,k) => {
    let memo = {};
    let xor = 0;
    let count = 0
    for(let i=0;i<arr.length;i++){
        xor = xor^arr[i];
        if(xor === k) count+=1
        if((k^xor) in memo){
            count += memo[(k^xor)]
        }
        xor in memo ? memo[xor]++ : memo[xor]=1;
    }
    return count
}
