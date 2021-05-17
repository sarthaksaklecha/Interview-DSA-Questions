// https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/

// Brute force
// traverse all the nodes and insert them in the right place in
// the starting node's bottom
// we willl be creating new node with the the value to be inserted
// in the end when we have inserted all the nodes in the right place
// in the bottom of the first node, our list is ready in the bottom of the first node
// we erase the list in the left of the first node now
// O(n) time
// O(n) space

class GfG
{
    Node flatten(Node root)
    {
	    if(root==null) return root;
	    if(root.next==null) return root;
    	Node horizontalListPointer = root.next;
    	Node verticalListPointer=null;
    	Node current=null;
    	Node nextBottom;
    	Node insert;
        while(horizontalListPointer!=null){
        verticalListPointer = horizontalListPointer;
        while(verticalListPointer!=null){
            Node previous = null;
            if(verticalListPointer.data<root.data){
                insert = new Node(verticalListPointer.data);
                insert.bottom = root;
                root = insert;
                verticalListPointer = verticalListPointer.bottom;
                continue;
            }
            current = root;
            while(current!=null && current.data<=verticalListPointer.data){
                previous = current;
                current = current.bottom;
            };
            nextBottom = previous.bottom;
            insert = new Node(verticalListPointer.data);
            previous.bottom = insert;
            insert.bottom = nextBottom;
            verticalListPointer = verticalListPointer.bottom;
        }
        horizontalListPointer = horizontalListPointer.next;
        }
        root.next = null;
    	return root;
    }
}

// best
// merging two sorted lists can be done in O(n) and no extra space
// we recursively start merging lists two at a time from the back
// we use a helper function merge to do so

class GfG
{
    Node merge(Node l1, Node l2){
        // a temporary node to for traversing the resultant list
        // note that we are not making new nodes we are manipulating the same lists
        // also note that how we needed extra space for this when merging two sorted arrays
        Node temp = new Node(0);
        Node result = temp;
        while(l1!=null && l2!=null){
            if(l1.data>l2.data){
                temp.bottom = l2;
                l2 = l2.bottom;
            }else{
                temp.bottom = l1;
                l1 = l1.bottom;
            }
            temp = temp.bottom;
        };
        while(l1!=null){
            temp.bottom = l1;
            l1 = l1.bottom;
            temp = temp.bottom;
        };
        while(l2!=null){
            temp.bottom = l2;
            l2 = l2.bottom;
            temp = temp.bottom;
        };
        return result.bottom;
    }
    
    Node flatten(Node root){
        // we stop when we reach the last list;
        if(root.next==null) return root;
        return merge(root,flatten(root.next));
    }
}