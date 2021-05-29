class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i =0;
        while(i<m && m!=0 && n!=0){
            if(nums1[i] <= nums2[0]){
                i++;
                continue;
            }
            int temp = nums1[i];
            nums1[i] = nums2[0];
            nums2[0] = temp;
            int insertionIndex = nums2.length-1;
            int insertionElement = nums2[0];
            while(insertionIndex > 0 && nums2[insertionIndex] >= insertionElement){
                insertionIndex--;
            }
            int previous = nums2[insertionIndex];
            int j = insertionIndex-1;
            while(j>=0){
                temp = nums2[j];
                nums2[j] = previous;
                previous = temp;
                j--;
            }
            nums2[insertionIndex] = insertionElement;
            i++;
        }
        i = m;
        for(int num : nums2){
            nums1[m++] = num;
        }
    }
}