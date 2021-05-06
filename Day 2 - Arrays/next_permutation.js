// https://leetcode.com/problems/next-permutation/
// TOO MANY EDGE CASES IN BEST SOLUTION

// BRUTE

// Best 
// look at the animation in the solution :
// https://leetcode.com/problems/next-permutation/solution/

// STEPS :
// 1: 
// starting from the back find the first decreasing element
// i.e the element that came previous should be greater than the 
// decreasing element
// [1,3,4,8,7,6,5,3,2]
// the first decreasing element form the back is 4;
// let that be index1
// 
// 2:
// traverse ahead from index1 and find the element
// just greater than it but *remember to traverse the array from the back*;
// let that be index2
// 
// 3: swap index1 and index 2;
//
// 4: reverse the array after index1;
// An array of many repeating numbers causes edge cases
const nextPermutation = (numbers) => {
    let i =numbers.length-2
    while(numbers[i]>=numbers[i+1] && i>=0){ // <= is important here to skip duplicate elements
        i--;
    }
    let index1 = i;
    let justGreater = Infinity;
    let index2 = i
    for(i=numbers.length-1;i>=index1+1;i--){
        if(numbers[i]>numbers[index1]){
            if(numbers[i]<justGreater){ 
                justGreater = numbers[i];
                index2 = i;
            }
        }
    }
    [numbers[index1],numbers[index2]] = [numbers[index2],numbers[index1]];
    let p1 = index1+1;
    let p2 = numbers.length-1;
    while(p1<p2){
        [numbers[p1],numbers[p2]] = [numbers[p2],numbers[p1]];
        p1++;
        p2--;
    }
    return numbers
}
