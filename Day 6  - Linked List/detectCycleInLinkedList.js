// https://leetcode.com/problems/linked-list-cycle;

// Brute Force
// use a set to hash the nodes

var hasCycle = (head) => {
    if(!head) return false;
    let set = new Set();
    while(head.next!==null){
        if(set.has(head)) return true;
        set.add(head);
        head = head.next;
    }
    return false
}

// Best 
// slow and fast pointer
// 2 ways, one just returns if cycle present
// other also returns the node at which cycle starts

// if there is a cycle then 
// fast will always catch slow
var hasCycle = head => {
    if(!head || !head.next) return false;
    let slow = head,fast=head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true
    }
    return false
}

var hasCycle = function(head){
    if(!head || head.next === null) return false
    let slow = head;
    let fast = head;
    // find first point of colliding
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow===fast) break;
    }
    // place fast back to head 
    // and move slow and fast at same pace
    // next collision is the starting node of the cycle
    fast = head;
    while(slow && fast){
        slow = slow.next;
        fast = fast.next;
        if(slow === fast) break
    };
    // slow/fast points at the starting node of cycle;
    return slow===fast ? true : false
};
