// Very Important,also beautiful solution
// https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1

// Brute Force
// 2 for loops that computes all the subarrays and check for the largest one with 0 sum

const maxLenBruteForce = (arr) => {
    let maxLen = 0;
    let sum;
    for(let i=0;i<arr.length;i++){
        sum = 0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum===0){
                if(j-i+1>maxLen){
                    maxLen = j-i+1;
                }
            }
        }
    }
    return maxLen
}

// Best
// this is like really tough to explain but I'll try
// In every iteration we calculate the sum up till that index
// and keep track of it in a memo,
// for example at index 4 the sum is 10
// so we store 10 in the memo with value as 4 i.e the index
// So now that we have the sum uptill every index
// In each iteration we also check if the sum uptill the current
// index already exists in the memo,
// if it does then we have a subarray with 0 sum in between 
// take a look-
// index =   0    1   2    3   4   5    6    7
// arr =    [15, -2,  2,  -8,  1,  7,  10,  23]
// sum =     15   13  15   7   8   15  25   48
//                     |            |
// the markings show the indices where the sum uptill that index already is in the array for another index
// so at index 0 and and at index 2 the sum is 15 this means
// all the elemets after index 0 till index 2 when summed will give 0 i.e -2,2
// same with index 0 and index 5;
// note that we don't store the sum in the memo if it already exists (like we didn't store for index 2)
// all the index after 0 till 5 will have 0 sum - -2,2,-8,1,7
// also if the current sum of the indices is already 0 we check it before doing anything else

const maxlen = (arr) => {
    let sum=0;
    let maxSubArrayLen = 0;
    let memo = {};
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum===0){
            if(i+1>maxSubArrayLen) maxSubArrayLen = i+1
        }else{
            if(sum in memo){
                if(i-memo[sum]>maxSubArrayLen){
                    maxSubArrayLen = i-memo[sum];
                }
            }else{
                memo[sum] = i;
            }
        }
    }
    return maxSubArrayLen
}