// VERY VERY IMPORTANT
// https://leetcode.com/problems/trapping-rain-water/;

class Solution {
    public int trapBruteForce(int[] height) {
        // brute force;
        // trapped water = Math.min(maxHeightLeft, maxHeightRight) - height of current
        // we calculate maxHeightLeft and maxHeightRight for the element and then
        // using above formula we calculate the trapped water
        int totalTrapped = 0;
        for(int i=0;i<height.length;i++){
            int maxHeightLeft = 0;
            int iterator = 0;
            while(iterator<i){
                if(height[iterator]>maxHeightLeft) maxHeightLeft = height[iterator];
                iterator++;
            }
            int maxHeightRight = 0;
            iterator = height.length-1;
            while(iterator>i){
                if(height[iterator] > maxHeightRight) maxHeightRight = height[iterator];
                iterator--;
            }
            int trapped = (Math.min(maxHeightLeft,maxHeightRight) - height[i]);
            // it is important to check if trapped is negative
            // as the min of left and right can be 0 and when we substract the height
            // of the current element it can result into a negative value;
            // we can eliminate this by including the current element in the maxHeightLeft and 
            // maxHeightRight so now if the max height in the left is smaller than the current
            // elements height then the max height becomes the height of the current element
            // see the equation and try to comprehend this,
            // understand that including the current element in the maxheight won't effect
            // us because if the maxHeight has to be grater than the current element's height 
            // to store any water, we get 0 if this happens therefore eliminating the negative 
            // values, as negative water cannot be stored anyway lol;
            totalTrapped += trapped >= 0 ? trapped : 0;
        }
        return totalTrapped;
    }
    
    public int trapBetter(int[] height){
        // we make 2 arrays and store the maxleft and maxright height for
        // each element at the respective index, now we don't have to calculate
        // maxLeftHeight and maxrightHeight for every iteration, we just have
        // to fetch the value from the array
        int[] maxLeft = new int[(height.length)];
        int[] maxRight = new int[(height.length)];
        int max = 0;
        int iterator = 0;
        // storing maxLeft;
        // taking the current element also when calculating maxHeight
        // to eliminate negative values;
        for(int data : height){
            if(data > max) max = data;
            maxLeft[iterator++] = max;
        }
        max = 0;
        iterator = height.length-1;
        // storing maxRight
        for(iterator=height.length-1;iterator>=0;iterator--){
            if(height[iterator] > max) max = height[iterator];
            maxRight[iterator] = max;
        }
        
        // calculating trapped water
        int trapped = 0;
        for(iterator=0;iterator<height.length;iterator++){
            trapped += Math.min(maxLeft[iterator],maxRight[iterator])-height[iterator];
        }
        return trapped;
    }
    
    public int trap(int[] height){
        // understanding this is really tough
        // the solution is beautiful tho
        // So Basically when we are calculating the trapped water
        // we need the "minimum" of the maximum heights in the left and right
        // In this intuition we will have two pointers, one in the left(starting from 0)
        // of the array and one in the right(starting from the last), also while moving these pointers we will 
        // keep track of the leftmax and rightmax for the respective pointers
        // i.e leftmax for the left pointer and rightmax for the right
        // We will see which of the pointer points to a lesser value
        // for example left one points to the lesser value, so by this we 
        // can conclude one thing that whatever will be the maximum height on the right
        // the minimum of the left max and right max will be the left one as the current element's height is lesser than
        // one of the elements in the right, we don't care whether that element is the max one or not, we just care about the
        // minimum of the maxLeft and maxRight
        // So basically we will calculate trapped water for the smaller pointer
        // so first we will see if the element is > maxLeft(or maxRight is we are calculating for the right pointer i.e right is smaller than left);
        // we will update maxLeft if the element is greater and we will moce the pointer (++ || -- depending on left or right), 
        // if the element was lesser than maxLeft/maxRight then there is water trapped, water trapped will be equal to maxLeft/maxRight-heightOfElement;
        // see video for better understanding
        int left = 0;
        int right = height.length-1;
        int leftMax = 0;
        int rightMax = 0;
        int trapped = 0;
        // Note that the condition is left<=right
        // because if left<right we will miss calculating for one element
        // after every iteration left and right are moved
        // and when left == right we still have to calculate trapped water 
        // for that element then we move the pointer and they cross each other
        // therefore ending the loop;
        while(left<=right){
            if(height[left] <= height[right]){
                if(height[left] > leftMax){
                    leftMax = height[left];
                }else{
                    trapped += leftMax-height[left];
                }
                left++;
            }else{
                if(height[right] > rightMax){
                    rightMax = height[right];
                }else{
                    trapped += rightMax-height[right];
                }
                right--;
            }
        }
        return trapped;
    }
}