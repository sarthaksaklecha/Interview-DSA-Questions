class Solution {
    int g_count = 0;

    public boolean isIdealPermutation(int[] nums) {
        if(nums.length==1) return true;
        return localInversion(nums) == globalInversion(nums);
    }
    
    public int localInversion(int[] nums){
            int previous=Integer.MIN_VALUE, count = 0;
            for(int i : nums){
                if(i<previous){
                    count++;
                }
                previous = i;
            }
            return count;
    }
    public int globalInversion(int[] nums){
            mergeSort(nums,0,nums.length-1);
            return g_count;      
     };
    
    public void mergeSort(int nums[],int low,int high) {
                if(low==high) return;
                int mid = (int)Math.floor((low+high)/2);
                mergeSort(nums,low,mid);
                mergeSort(nums,mid+1,high);
                mergeSortedArrays(nums,low,mid,high);
                // for(int i=low;i<=high;i++){
                //     nums[i] = temp[i];
                // }
    }
    
    public int[] mergeSortedArrays(int[] nums,int low,int mid,int high){
        // counting inversions first;
        int i = low ,j = mid+1, length = mid-low+1;
        while(i<=mid && j<=high){
            if(nums[i] > nums[j]){
                g_count+=(length-(i-low));
                j++;
            }else{
                i++;
            }
        };
        // merging
        // merging in place
        // smallers values in first half and larger in second half
        // and using insertion sort and swapping
        // i = low;
        // while(i<=mid){
        //     if(nums[i]<nums[mid+1]){
        //         i++;
        //     }else{
        //         //swapping
        //         int temp = nums[i];
        //         nums[i] = nums[mid+1];
        //         nums[mid+1] = temp;
        //         // sort the latter part using insertion sort
        //         j = high;
        //         int insertingElement = nums[mid+1];
        //         while(j>mid+1 && nums[j]>=insertingElement){
        //             j--;
        //         };
        //         if(j==mid+1) continue;
        //         int prev = nums[j];
        //         for(int k = j-1;k>=mid+1;k--){
        //             temp = nums[k];
        //             nums[k] = prev;
        //             prev = temp;
        //         };
        //         nums[j]= insertingElement;
        //     }
        // }
        int[] temp = new int[high-low+1];
        int p1 = low;
        int p2 = mid+1;
        i = 0;
        while(p1<=mid && p2<=high){
            if(nums[p1]>nums[p2]){
                temp[i] = nums[p2];
                p2++;
                i++;
            }else{
                temp[i] = nums[p1];
                p1++;
                i++;
            }
        }
        while(p1<=mid){
            temp[i] = nums[p1];
            p1++;
            i++;
        }
        while(p2<=high){
            temp[i] = nums[p2];
            p2++;
            i++;
        };
        j=0;
        for(i=low;i<=high;i++){
            nums[i] = temp[j];
            j++;
        }
        return nums;
    };
}