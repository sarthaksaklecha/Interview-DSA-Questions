// https://leetcode.com/problems/maximum-subarray/

// Brute Force
// 2 for loops to check all subArrays possible
//  time = O(n^2)
const maximumSubarrayBruteForce = (arr) => {
    let MaxSum = -Infinity;
    let currSum = 0;
    for(let i=0;i<arr.length;i++){
        currSum = 0;
        for(let j=i;j<arr.length;j++){
            currSum+=arr[j];
            if(currSum>MaxSum){
                MaxSum = currSum;
            }
        }
    }
    return MaxSum;
}

// Best Solution
// Kadane's algorithm
// basic funda : continue adding to the subArray if
// the sum of elements is positive
// check if sum > currMaxSum, update currmMaxSum
// time = O(n)

const maximumSubarrayBest = (arr) => {
    // currMaxSum is -infinity initially for the case
    // of an array with all negative numbers, in that case
    // the best subArray will be of only 1 element 
    // a the least negative number in the array
    let currMaxSum=-Infinity;
    let sum = 0;
    for(let num of arr){
        sum+=num;
        if(sum>currMaxSum){
            currMaxSum = sum;
        }if(sum<0){
            sum = 0;
        }
    }
    return currMaxSum;
}

console.log(maximumSubarrayBruteForce([-2,1,-3,4,-1,2,1,-5,4]), maximumSubarrayBest([-2,1,-3,4,-1,2,1,-5,4]))