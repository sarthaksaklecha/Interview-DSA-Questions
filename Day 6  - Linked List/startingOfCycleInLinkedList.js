// https://leetcode.com/problems/linked-list-cycle-ii/

// Brute Force
// hashing

const detectCycle = head => {
    if(!head) return null
    let set = new Set();
    let ptr = head;
    while(ptr!==null){
        if(set.has(ptr)) return ptr;
        set.add(ptr);
        ptr = ptr.next;
    };
    return null;
}

// simple algorithm
// start slow and fast from the head;
// move slow one step and fast 2 steps
// they are bound to meet if there's a cycle
// whereever they meet keep the fast there and
// place slow at the head of the list
// start moving slow and fast both at same pace, i.e
// one element at a time, the next place they'll collide is the 
// starting of the cycle

const detectCycle = function(head) {
    if(!head || !head.next) return null
    if(head.next==head) return head
    let slow=head;
    let fast=head;
    do{
        slow = slow.next;
        fast = fast.next.next;
    }while(fast!==null && fast.next!==null && slow!==fast);
    if(slow!==fast) return null;
    slow = head;
    while(slow!==fast){
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
};