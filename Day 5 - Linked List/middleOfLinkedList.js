// https://leetcode.com/problems/middle-of-the-linked-list;

// Brute Force Solution
// calculate the length of LL and find the middle by dividing it by 2 
// start again and stop the ptr at the middle element 
// return that element
var middleNode = function(head) {
    if(!head) return head
    if(!head.next) return head
    let lengthOfLinkedList = 0;
    let ptr = head;
    while(ptr !== null){
        lengthOfLinkedList++;
        ptr=ptr.next;
    }
    let middle = Math.floor(lengthOfLinkedList/2)+1;
    let counter = 0
    ptr= head
    while(counter!==middle-1){
        ptr = ptr.next;
        counter++;
    }
    return ptr
};

// Best
// slow and fast pointer
// slow pointer moves 1 and past moves 2
// when fast finishes slow is at the middle;

const middleNode = (head) => {
    if(!head) return head
    if(!head.next) return head
    let slow = head;
    let fast = head;
    // if fast becomes null after it crosses the linked list
    // this will happen when when our linked list has even number of nodes
    // and for odd number of nodes we need to stop when fast reaches the last node
    while(fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next;
    };
    return slow;
}