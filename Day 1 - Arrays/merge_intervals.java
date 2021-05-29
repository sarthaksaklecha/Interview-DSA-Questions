class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a,b) -> Integer.compare(a[0], b[0]));
        int i=0;
        List<int[]> mergedIntervals = new ArrayList<>();
        mergedIntervals.add(intervals[0]);
        for(i=1;i<intervals.length;i++){
            int[] lastMergedSubarray = mergedIntervals.get(mergedIntervals.size()-1);
            if(intervals[i][0]<=lastMergedSubarray[1]){
                int start = lastMergedSubarray[0];
                int end = intervals[i][1]>lastMergedSubarray[1] ? intervals[i][1] : lastMergedSubarray[1];
                mergedIntervals.set(mergedIntervals.size()-1 , new int[]{start,end});
            }else{
                mergedIntervals.add(intervals[i]);
            }
        }
        return mergedIntervals.toArray(new int[0][]);
    }
}