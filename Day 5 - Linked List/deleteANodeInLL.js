// https://leetcode.com/problems/delete-node-in-a-linked-list

// node to be deleted is given and the head is not
// and we have to delete this node

// Solution
// as we can't cut the link of the previous
// node and the current node as we are not given the head of the ll
// so we shift the values ahead of the node in the left 
// and delete the link to h=the last node to complete the deletion.

var deleteNode = (node) => {
    while(node.next.next!==null){
        node.val = node.next.val;
        node = node.next;
    }
    node.val = node.next.val
    node.next = null;
};
