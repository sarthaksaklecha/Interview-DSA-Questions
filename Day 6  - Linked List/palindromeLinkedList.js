// https://leetcode.com/problems/palindrome-linked-list

// Brute Force
// 2 for loops
// frontpointer start taking elements from the front
// and the backPointer goes to the respective element from the back
// we check if their values are same then the list will be 
// a palindromic list

const isPalindrome = head => {
    if(!head.next) return true
    let frontPointer = head;
    let backPointer = null;
    while(frontPointer !== backPointer){
        // ptr = frontpointer because the backpointer will be alway ahead of the 
        // the frontPointer
        let ptr = frontPointer;
        // we want ptr to stop just before the last backPointer
        while(ptr.next!==backPointer){
            ptr = ptr.next;
        }
        backPointer = ptr;
        if(frontPointer.val!==backPointer.val) return false
        // this is very important because we update backpointer after the initial check
        // so if frontPointer===backPointer we don't have to move front ahead insteaad
        // we waant to stop the loop
        if(frontPointer !== backPointer) frontPointer = frontPointer.next;
    }
    // if the loop runs without returning false in betweeeen we return true in the end
    return true
}

// Brute force 2
// use an array to store the list and check if the array is palindromic
// this will use extra space
// use 2 pointer approach in array to check for palindrome

// Best
// reverse the linked list after the middle element
// then use 2 pointers to compare the starting list and the reversed list
// the second half after reversing should be identical to the first if the list
// is palindromic

let isPalindrome = head => {
    // slow and fast to find the middle
    let slow = head, fast = head
    while(fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next;
    };
    // if the list has even nodes then the middle will be at the start of the other half
    // but in case of odd nodes the start of the other half will be the next element to middle
    let startOfOtherHalf = fast ? slow.next : slow;
    // reversing after the other half -
    let next,previous = null;
    let ptr = startOfOtherHalf;
    while(ptr!==null){
        next = ptr.next;
        ptr.next = previous;
        previous = ptr;
        ptr = next;
    }
    // previous will be the last node that was reversed, it 
    // will be the head of the other half list
    let headOfOtherHalf = previous;
    // comparing head with otherhead till otherhead reaches the end
    while(headOfOtherHalf!==null && head.val == headOfOtherHalf.val){
        head = head.next;
        headOfOtherHalf = headOfOtherHalf.next;
    }
    // if the while loop runs completely then the list is palindromic
    return headOfOtherHalf==null
}