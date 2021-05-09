// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// Brute Force
// calculate length first
// subtract n to find the index of the node to deleted
// traverse to that index and delete it

// Best
// p2 will be n nodes ahead of p1 
// we will then move them forward until
// p2 reaches the last node
// p1 will then point to the node n nodes from the end i,e nth node from the end
// remove that node
// deleting the head is the edge case here

var removeNthFromEnd = function(head, n) {
    let p1 = head;
    let p2 = head
    // So p2 will be n nodes ahead of p1
    // so when p2 reaches the end, p1 is n nodes away
    // from the end
    let counter = 1;
    let nodeBeforeToBeRemovedNode = head;
    while(p2.next!==null){
        // first we'll set p2 at the right position
        if(counter!==n){
            p2 = p2.next;
            counter++;
        }else{
            // when p2 is set
            // we move p1 and p2 together 
            // and when p2 reaches the last node, p1 will be n nodes
            // away from the end, i.e it will be at the node to be removed
            // we also have to keep track of the node just before p1 
            // to remove it's link with p1
            nodeBeforeToBeRemovedNode = p1;
            p1 = p1.next;
            p2 = p2.next;
        }
    }
    // now p1 points to the node to be removed
    // first we will check of we have to remove the head or not
    if(p1 == head) return head.next;
    nodeBeforeToBeRemovedNode.next = p1.next;
    // clearing the next of removed node ( not important but good practice )
    p1.next = null;
    return head
};