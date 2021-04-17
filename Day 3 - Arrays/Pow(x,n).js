// https://leetcode.com/problems/powx-n/

// Brute Force 
// simple for loop or recursion

const pow = (x,n) => {
    if(n===0) return 1
    if(n===1) return x
    return x*pow(x,n-1)
}
console.log(pow(2,4))

// Better
// memoization and 
//          2^7
//         /  \
//     2^3     2^4
//    /  \     /   \
// 2^2  2^1    2^2  2^2
// /\           /\   /\
// 2^12^1    2^1 2^1

const powBetter = (x,n,memo={}) => {
    if(n in memo) return memo[n]
    if(n===0) return 0
    if(n===1 || n===-1) return n===-1 ? 1/x : x
    return memo[n] = powBest(x,Math.ceil(n/2),memo)*powBest(x,Math.floor(n/2),memo)
}
console.log(powBest(2,4))

// Best solution
// 2^6 = (2^2)^2 = 4^3
// 3^5 = 3*3^4
// 4^8 = (4^2)^4 = 16^4
// for negative
// 4^-7 = (4^-1)*(4^-6) = (4^-1)*(4*4)^-5

const powBest = (x,n) => {
   if(n===1 || n===-1) return n===1 ? x : 1/x
   if(n===0) return 1
   return n%2===0 ? powBest(x*x,n/2) : powBest(x,n<0?-1:1)*powBest(x*x,(n+ (n<0?1:-1))/2) 
}
