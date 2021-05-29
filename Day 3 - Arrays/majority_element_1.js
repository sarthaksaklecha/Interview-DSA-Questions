// https://leetcode.com/problems/majority-element/
//IMPORTANT

// Brute Force
// 2 for loops

var majorityElementBruteForce = (nums) => {
    let count;
    for(let num of nums){
        count = 0;
        for(let element of nums){
            if(num===element){
                count++;
                if(count>Math.floor(nums.length/2)) return num
            }
        }
    }
    return false
}

// Better solution
// hashing
// time = O(n);
// space = o(n);
var majorityElementBetter = (nums) => {
    let memo = {};
    for(let num of nums){
        if(num in memo){
            memo[num]++;
            if(memo[num]>Math.floor(nums.length/2)) return num;
        }else{
            memo[num] = 1
        }
    }
    return false
}

// Best Solution
// time = O(n) ; space = O(1);
// Moore's voting algorithm 
// change the element only when count becomes 0;
// LOGIC : the majority element cannot be cancelled out by the rest
// of the elements
var majorityElementBest = (nums) => {
    let num,count=0,currMax=nums[0],maxCount=0;
    for(num of nums){
        if(num===currMax){
            count++;
            // code block below is not needed unless we're told to calculate maxCount
            if(count>maxCount){
                currMax = num;
                maxCount = count;
            }
        }else{
            count--;
            if(count===0){
                currMax = num;
                count=1;
            }
        }
    }
    return currMax;
}
console.log(majorityElementBetter([1,3,1,1,4,1,1,5,1,1,6,2,2]))