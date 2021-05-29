// https://leetcode.com/problems/longest-consecutive-sequence/submissions/
// Very IMPORTANT

// Brute Force (IMPORTANT)
// O(nlogn+n)
// sort the array and count the longest sequence
// here we have to keep in mind that we skip duplicate values
// EDGE CASE: Also the last check before returning is also pretty important

const longestConsecutive = (nums) =>{
    if(!nums.length) return 0
    nums.sort((a,b)=>a-b);
    console.log(nums)
    let lcs = 0;
    let counter = 1;
    for(let i=1;i<nums.length;i++){
        // We need to skip the duplicates or the counter will become 1 after every duplicate
        if(nums[i]===nums[i-1]) continue
        if(nums[i] == nums[i-1]+1){
            counter++;
            console.log(counter)
        }else{
            if(counter>lcs) lcs = counter; 
            counter = 1;
        }
    }
    // if the loop finishes and lcs is not updated with a larger counter value``
    if(counter>lcs) lcs = counter;
    return lcs
}

// Best
// time = O(n^2);
// we use a hashmap smartly

var longestConsecutive = function(nums) {
    let lcs = 0;
    let memo = {};
    // first we store all the numbers in an array
    for(let num of nums){
        memo[num] = true;
    };
    
    // here we will first see if the element before(current element-1) the current element
    // exists in the hashmap, if it does we move on to the next element
    // when we come accross an element for which the element-1 does not exist
    // we check for the elements following it(element+1 then element+2 ....);
    // the intuition is that we will only check for the following numbers only if that
    // number is the starting number of the sequence i.e number-1 does not exist
    for(let i=0;i<nums.length;i++){
        if(memo[nums[i]-1]===true) continue
        let counter = 1;
        num = nums[i]+1;
        while(memo[num] === true){
            counter++;
            num+=1
        };
        if(counter>lcs){
            lcs = counter;
        }
    }
    return lcs
};