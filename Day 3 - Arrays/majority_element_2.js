// https://leetcode.com/problems/majority-element-ii/
// VERY IMPORTANT

// Brute Force 
// same as majority_element_1

// better
// same as majority_element_1

// Best
// thee intuition is same as moore's
// voting algorithm used in majority_element_1
// here we keep track of two numbers instead of 1 
// In the end we will re-check with another iteration

const majorityElement = (nums) => {
    let num1,num2,c1=0,c2=0;
    for(let num of nums){
        if(num===num1)  c1++;
        else if(num===num2)  c2++;
        else if(c1===0){
            num1 = num;
            c1++
        }else if(c2===0){
            num2 = num
            c2++;
        }else{
            c1--;
            c2--;
        }
    }
    c1=0,c2=0;
    for(num of nums){
        num===num1 ? (c1++) : (num===num2 ? c2++ : null);
    }
    let result = [];
    c1 > Math.floor(nums.length/3) ? result.push(num1) : null;
    c2 > Math.floor(nums.length/3) ? result.push(num2) : null;
    return result;
}