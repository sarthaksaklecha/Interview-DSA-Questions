// https://leetcode.com/problems/two-sum/

// Brute Force
// 2 for loops

const twoSum = (arr,target) => {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]+arr[j]===target) return [i,j]
        }
    }
    return false
}

// Best
// hashing 
// self explanatory code

const twoSum = (arr,target) =>{
    let memo = {};
    for(let i=0;i<arr.length;i++){
        if(target-arr[i] in memo) return [i,memo[target-i]];
        memo[arr[i]] = i;
    }
    return false
}