// Very Important
// https://leetcode.com/problems/4sum/

// Brute Force
// time = O(n^3) space =O(n);
// 3 for loops then chek if the 4th exists with hashing;
const fourSumBruteForce = (nums,target) => {
    let result = {};
    let memo = {}
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            memo = {}
            // 2sum on the rest of the array
            for(let k=j+1;k<nums.length;k++){
                if(target-nums[i]-nums[j]-nums[k] in memo) result[[nums[i],nums[j],nums[k],target-nums[i]-nums[j]-nums[k]].sort((a,b) => a-b)] = true;
                memo[nums[k]] = true;
            }
        }
    }
    return Object.keys(result).map(el => el.split(","))
};

// Best
// O(nlogn+n^3);
// first sort the array 
// then use 2 for loops then 2 pointers to find the other 2 numbers;
// The tough part in the question is to ignorer the duplicates
// so after every iteration we skip to the next non-duplicate number
// i.e not equal to the previous number;
// see code to understand

const fourSum = (nums,target) => {
    nums.sort((a,b) => a-b);
    let low,high;
    let result = [];
    let i=0;
    while(i<nums.length-3){
        let j = i+1
        while(j<nums.length-2){
            let currSum = nums[i]+nums[j];
            low = j+1;
            high = nums.length-1;
            while(low<high){
                if(currSum+nums[low]+nums[high] > target){
                    high--;
                }else if(currSum+nums[low]+nums[high] < target){
                    low++;
                }else{
                    result.push([nums[i],nums[j],nums[low],nums[high]]);
                    low++;
                    high--;
                    // skipping to the next unique low and high 
                    while(nums[low]===nums[low-1] && low<high) low++;
                    while(nums[high]===nums[high+1] && low<high) high--;
                }
            }
            // skkipping to the next unique value of j
            j++;
            while(nums[j]===nums[j-1]) j++
        }
        // skkipping to the next unique value of i
        i++;
        while(nums[i]===nums[i-1]) i++
    }
    return result
}

               
 

