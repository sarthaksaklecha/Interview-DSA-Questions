// https://leetcode.com/problems/add-two-numbers

// Brute Force 
// get the numbers out of the ll
// add them and spread them out in a new LL
// IMPORTANT : THIS WON'T WORK FOR REALLY LARGE NUMBERS
// AS THE SUM VARIABLE WON'T BE ABLE TO HOLD THAT NUMBER
const addTwoNumbersBruteForce = (l1,l2) => {
    let number1=0;
    let number2;
    let powerOfTens = 0
    while(l1.next!==0){
        number1 += l1.val*Math.pow(10,powerOfTens);
        l1 = l1.next;
        powerOfTens++;
    };
    powerOfTens = 0
    while(l2.next!==0){
        number2 += l1.val*Math.pow(10,powerOfTens);
        l2 = l2.next;
        powerOfTens++;
    };
    let sum = number1+number2;
    if(sum===0) return new ListNode(0,null)
    let resultHead = new ListNode();
    let resultPointer = resultHead;
    while(sum!==0){
        resultPointer.next = new ListNode(sum%10,null);
        resultPointer = resultPointer.next;
        let sum = Math.floor(sum/10);
    };
    return resultHead.next;
}

// Best
// 1 pointer at the start of both the linked lists
// keep a variable carry to handle carry-overs

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let sum,digit
    let resultHead = new ListNode();
    let resultPointer = resultHead
    let p1 = l1;
    let p2 = l2;
    while(p1!==null && p2!==null){
        sum = p1.val+p2.val+carry;
        digit = sum%10;
        carry = Math.floor(sum/10);
        resultPointer.next = new ListNode(digit,null);
        resultPointer = resultPointer.next;
        p1 = p1.next;
        p2 = p2.next;
    }
    // if one number is bigger than the other 
    // we need to handle the digits left in the bigger number
    // if p1 is the bigger list -
    while(p1!==null){
        sum = p1.val+carry;
        digit = sum%10;
        carry = Math.floor(sum/10);
        resultPointer.next = new ListNode(digit,null);
        resultPointer = resultPointer.next;
        p1 = p1.next
    }
    // if l2 is the bigger list
    while(p2!==null){
        sum = p2.val+carry;
        digit = sum%10;
        carry = Math.floor(sum/10);
        resultPointer.next = new ListNode(digit,null);
        resultPointer = resultPointer.next;
        p2 = p2.next;
    }
    // IMPORTANT
    // if after the loop there's a carry left
    // we need to add it to the result 
    if(carry!==0){
        resultPointer.next = new ListNode(carry,null);
    }
    return resultHead.next
};
