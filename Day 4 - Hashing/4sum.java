class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        if(nums.length < 4) return result;
        Arrays.sort(nums);
        for(int i=0;i<nums.length-3;i++){
            if(i!=0 && nums[i] == nums[i-1]){ 
                continue;
            };
            for(int j=i+1;j<nums.length-2;j++){
                if(i+1!=j && nums[j] == nums[j-1]){
                    continue;
                };
                int sum = nums[i] + nums[j];
                int p1 = j+1;
                int p2 = nums.length-1;
                int residue = target - sum;
                while(p1<p2){
                    if((nums[p1] + nums[p2]) > residue){
                        do{
                            p2--;
                        }while(p1<p2 && nums[p2]==nums[p2+1]);
                    }else if((nums[p1] + nums[p2]) < residue){
                        do{
                            p1++;
                        }while(p1<p2 && nums[p1]==nums[p1-1]);
                    }else{
                        List<Integer> quad = new ArrayList<Integer>(List.of(nums[i],nums[j],nums[p1],nums[p2]));
                        result.add(quad);
                        do{
                            p1++;
                        }while(p1<p2 && nums[p1]==nums[p1-1]);
                        do{
                            p2--;
                        }while(p1<p2 && nums[p2]==nums[p2+1]);
                    }
                }
            }
        }
        return result;
    }
}